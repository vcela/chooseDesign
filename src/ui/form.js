function renderChoiceCard(name, option, selectedId, extraMarkup = '', className = '') {
  return `
    <label class="choice-card ${className}">
      <input type="radio" name="${name}" value="${option.id}" ${selectedId === option.id ? 'checked' : ''} />
      <span class="choice-card__body">
        <span class="choice-card__label">${option.label}</span>
        ${extraMarkup}
      </span>
    </label>
  `;
}

function renderFontMeta(pairing) {
  return `
    <span class="choice-card__meta-grid choice-card__meta-grid--fonts">
      <span>${pairing.heading}</span>
      <span>${pairing.body}</span>
    </span>
  `;
}

function renderPaletteCard(name, palette, selectedId) {
  return `
    <label class="choice-card choice-card--palette">
      <input type="radio" name="${name}" value="${palette.id}" ${selectedId === palette.id ? 'checked' : ''} />
      <span class="choice-card__body">
        <span class="palette-strip">
          ${Object.values(palette.colors).slice(0, 5).map((color) => `<span style="background:${color}"></span>`).join('')}
        </span>
        <span class="choice-card__label">${palette.label}</span>
      </span>
    </label>
  `;
}

function renderViewportCard(option, selectedId) {
  return renderChoiceCard('viewportMode', option, selectedId, '', 'choice-card--viewport');
}

function renderViewportIcon(optionId) {
  const icons = {
    desktop: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.5" y="5" width="17" height="11" rx="2"></rect>
        <path d="M9 19h6"></path>
        <path d="M12 16v3"></path>
      </svg>
    `,
    tablet: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="6.5" y="3.5" width="11" height="17" rx="2"></rect>
        <circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none"></circle>
      </svg>
    `,
    mobile: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="8" y="3.5" width="8" height="17" rx="2"></rect>
        <circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none"></circle>
      </svg>
    `,
  };

  return icons[optionId] || icons.desktop;
}

export function renderViewportSwitcher(viewportModes, selectedId) {
  return `
    <div class="viewport-switcher" aria-label="Přepnout zařízení náhledu" role="radiogroup">
      ${viewportModes
        .map(
          (option) => `
            <label class="viewport-switcher__item" title="${option.label}">
              <input type="radio" name="viewportMode" value="${option.id}" ${selectedId === option.id ? 'checked' : ''} aria-label="${option.label}" />
              <span class="viewport-switcher__button">
                ${renderViewportIcon(option.id)}
                <span class="sr-only">${option.label}</span>
              </span>
            </label>
          `
        )
        .join('')}
    </div>
  `;
}

function renderSection(title, content, className = '') {
  return `
    <section class="panel panel--compact ${className}">
      <div class="section-heading">
        <h2>${title}</h2>
      </div>
      ${content}
    </section>
  `;
}

export function renderConfigurator({ state, catalog, generatedPalettes, activePalette, configurationId, shareUrl }) {
  const paletteChoices = state.paletteMode === 'preset' ? catalog.colorPalettes : generatedPalettes;
  const paletteName = state.paletteMode === 'preset' ? 'paletteId' : 'generatedPaletteId';
  const selectedPaletteId = state.paletteMode === 'preset' ? state.paletteId : state.generatedPaletteId;

  return `
    <form class="configurator-form" id="configurator-form">
      <div class="panel-stack">
        ${renderSection(
          'Kdo jsem',
          `<div class="choice-grid choice-grid--compact">${catalog.identityOptions.map((identity) => renderChoiceCard('identityId', identity, state.identityId)).join('')}</div>`
        )}

        ${renderSection(
          'Grafický styl',
          `<div class="choice-grid">${catalog.designStyles.map((style) => renderChoiceCard('styleId', style, state.styleId)).join('')}</div>`
        )}

        ${renderSection(
          'UI styl',
          `<div class="choice-grid choice-grid--compact">${catalog.uiStyles.map((uiStyle) => renderChoiceCard('uiStyleId', uiStyle, state.uiStyleId)).join('')}</div>`
        )}

        ${renderSection(
          'Typografie',
          `<div class="choice-grid choice-grid--compact">${catalog.fontPairings.map((pairing) => renderChoiceCard('fontPairingId', pairing, state.fontPairingId, renderFontMeta(pairing))).join('')}</div>`
        )}

        ${renderSection(
          'Barevnost',
          `
            <div class="mode-toggle">
              <label>
                <input type="radio" name="paletteMode" value="preset" ${state.paletteMode === 'preset' ? 'checked' : ''} />
                <span>Palety</span>
              </label>
              <label>
                <input type="radio" name="paletteMode" value="custom" ${state.paletteMode === 'custom' ? 'checked' : ''} />
                <span>Moje barva</span>
              </label>
            </div>
            <div class="custom-color-row ${state.paletteMode === 'custom' ? 'is-visible' : ''}">
              <label class="color-input">
                <input type="color" name="baseColor" value="${state.baseColor}" />
              </label>
              <div class="color-note">
                <strong>${state.baseColor}</strong>
              </div>
            </div>
            <div class="choice-grid choice-grid--palette">
              ${paletteChoices.map((palette) => renderPaletteCard(paletteName, palette, selectedPaletteId)).join('')}
            </div>
          `
        )}

        ${renderSection(
          'Sdílet a odeslat',
          `
            <div class="share-block share-block--compact">
              <input id="share-url" type="text" readonly value="${shareUrl}" />
              <button class="button button--secondary" type="button" data-action="copy-link">Kopírovat</button>
            </div>
            <div class="contact-grid contact-grid--stacked">
              <label>
                <span>Jméno</span>
                <input name="clientName" type="text" autocomplete="name" value="${state.clientName}" placeholder="Jan Novák" required />
              </label>
              <label>
                <span>E-mail</span>
                <input name="clientEmail" type="email" autocomplete="email" value="${state.clientEmail}" placeholder="jan@firma.cz" required />
              </label>
              <label class="honeypot" aria-hidden="true">
                <span>Website</span>
                <input name="honeypot" type="text" tabindex="-1" autocomplete="off" value="${state.honeypot}" />
              </label>
            </div>
            <div class="submit-row submit-row--stacked">
              <button class="button" type="submit">Odeslat vybranou kombinaci</button>
              <p id="form-status" class="form-status" aria-live="polite"></p>
            </div>
          `,
          'panel--utility'
        )}
      </div>
    </form>
  `;
}
