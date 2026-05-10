const { Resend } = require('resend');

function badRequest(message) {
  return {
    statusCode: 400,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: message }),
  };
}

function ok(body) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildSummary(selection) {
  return [
    ['Styl interiéru', selection.style.label],
    ['Prompt stylu', selection.style.promptName],
    ['UI styl', selection.uiStyle.label],
    ['Prompt UI', selection.uiStyle.promptName],
    ['Párování fontů', `${selection.fonts.heading} + ${selection.fonts.body}`],
    ['Typografický preset', selection.fonts.label],
    ['Paleta', selection.palette.label],
    ['Režim barev', selection.paletteMode === 'custom' ? 'Vlastní barva + generované varianty' : 'Připravená paleta'],
    ['Výchozí barva', selection.baseColor],
  ];
}

function buildHtmlEmail({ heading, intro, configurationId, shareUrl, clientName, clientEmail, selection }) {
  const summaryRows = buildSummary(selection)
    .map(([label, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #ece4dc;"><strong>${escapeHtml(label)}</strong></td><td style="padding:8px 12px;border-bottom:1px solid #ece4dc;">${escapeHtml(value)}</td></tr>`)
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;background:#f5efe8;padding:24px;color:#241d1a;">
      <div style="max-width:720px;margin:0 auto;background:#fffaf5;border-radius:20px;padding:24px;border:1px solid #eaded2;">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#9d664f;">ChooseDesign</p>
        <h1 style="margin:0 0 16px;font-size:28px;">${escapeHtml(heading)}</h1>
        <p style="margin:0 0 18px;line-height:1.6;">${escapeHtml(intro)}</p>
        <div style="display:grid;gap:8px;margin-bottom:18px;">
          <div><strong>ID konfigurace:</strong> ${escapeHtml(configurationId)}</div>
          <div><strong>Jméno klienta:</strong> ${escapeHtml(clientName)}</div>
          <div><strong>E-mail klienta:</strong> ${escapeHtml(clientEmail)}</div>
          <div><strong>Veřejný odkaz:</strong> <a href="${escapeHtml(shareUrl)}">${escapeHtml(shareUrl)}</a></div>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-bottom:18px;">${summaryRows}</table>
        <p style="margin:0;font-size:14px;color:#6f5c53;">Stejný odkaz lze použít pro další konzultaci nebo navazující brief.</p>
      </div>
    </div>
  `;
}

function buildTextEmail({ heading, intro, configurationId, shareUrl, clientName, clientEmail, selection }) {
  const summary = buildSummary(selection)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');

  return `${heading}\n\n${intro}\n\nID konfigurace: ${configurationId}\nJméno klienta: ${clientName}\nE-mail klienta: ${clientEmail}\nVeřejný odkaz: ${shareUrl}\n\n${summary}`;
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST' },
      body: 'Method Not Allowed',
    };
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.LEAD_NOTIFICATION_EMAIL) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Chybí konfigurace serveru pro Resend.' }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return badRequest('Neplatný JSON payload.');
  }

  const { configurationId, shareUrl, clientName, clientEmail, honeypot, selection } = payload;

  if (honeypot) {
    return ok({ success: true });
  }

  if (!configurationId || !shareUrl || !clientName || !clientEmail || !selection) {
    return badRequest('Chybí povinná data pro odeslání.');
  }

  if (!/^\S+@\S+\.\S+$/.test(clientEmail)) {
    return badRequest('Neplatný e-mail klienta.');
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const internalEmail = {
    from: process.env.RESEND_FROM_EMAIL,
    to: [process.env.LEAD_NOTIFICATION_EMAIL],
    reply_to: clientEmail,
    subject: `ChooseDesign lead ${configurationId} | ${clientName}`,
    html: buildHtmlEmail({
      heading: 'Nová vybraná kombinace od klienta',
      intro: 'Klient dokončil výběr stylu a poslal kombinaci ke konzultaci.',
      configurationId,
      shareUrl,
      clientName,
      clientEmail,
      selection,
    }),
    text: buildTextEmail({
      heading: 'Nová vybraná kombinace od klienta',
      intro: 'Klient dokončil výběr stylu a poslal kombinaci ke konzultaci.',
      configurationId,
      shareUrl,
      clientName,
      clientEmail,
      selection,
    }),
  };

  const clientEmailMessage = {
    from: process.env.RESEND_FROM_EMAIL,
    to: [clientEmail],
    subject: `Potvrzení vybrané konfigurace ${configurationId}`,
    html: buildHtmlEmail({
      heading: 'Potvrzení vašeho výběru',
      intro: 'Vybraná kombinace byla odeslána ke konzultaci. Tento e-mail si můžete uložit pro pozdější návrat.',
      configurationId,
      shareUrl,
      clientName,
      clientEmail,
      selection,
    }),
    text: buildTextEmail({
      heading: 'Potvrzení vašeho výběru',
      intro: 'Vybraná kombinace byla odeslána ke konzultaci. Tento e-mail si můžete uložit pro pozdější návrat.',
      configurationId,
      shareUrl,
      clientName,
      clientEmail,
      selection,
    }),
  };

  try {
    await resend.emails.send(internalEmail);
    await resend.emails.send(clientEmailMessage);
    return ok({ success: true });
  } catch (error) {
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Odeslání e-mailu selhalo.' }),
    };
  }
};