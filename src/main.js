import './styles/app.css';

import { buildGeneratedPalettes } from './lib/palette-generator.js';
import { normalizeHex } from './lib/color-utils.js';
import { buildShareUrl, createConfigurationId, parseStateFromUrl, writeStateToUrl } from './lib/url-state.js';
import { defaultState, getCatalog, getOptionById } from './data/design-options.js';
import { renderConfigurator, renderViewportSwitcher } from './ui/form.js';
import { renderPreview } from './ui/preview.js';

const catalog = getCatalog();

const validators = {
  style: (value) => getOptionById(catalog.designStyles, value, defaultState.styleId).id,
  ui: (value) => getOptionById(catalog.uiStyles, value, defaultState.uiStyleId).id,
  fonts: (value) => getOptionById(catalog.fontPairings, value, defaultState.fontPairingId).id,
  identity: (value) => getOptionById(catalog.identityOptions, value, defaultState.identityId).id,
  viewport: (value) => getOptionById(catalog.viewportModes, value, defaultState.viewportMode).id,
  palette: (value) => getOptionById(catalog.colorPalettes, value, defaultState.paletteId).id,
  mode: (value) => (value === 'custom' ? 'custom' : 'preset'),
  base: (value) => normalizeHex(value || defaultState.baseColor),
  variant: (value) => (['gen-1', 'gen-2', 'gen-3', 'gen-4', 'gen-5'].includes(value) ? value : defaultState.generatedPaletteId),
};

const state = parseStateFromUrl(defaultState, validators);
const app = document.querySelector('#app');

function getDerivedState() {
  const generatedPalettes = buildGeneratedPalettes(state.baseColor);
  const activeStyle = getOptionById(catalog.designStyles, state.styleId, defaultState.styleId);
  const activeUiStyle = getOptionById(catalog.uiStyles, state.uiStyleId, defaultState.uiStyleId);
  const activeFonts = getOptionById(catalog.fontPairings, state.fontPairingId, defaultState.fontPairingId);
  const activeIdentity = getOptionById(catalog.identityOptions, state.identityId, defaultState.identityId);
  const activePalette = state.paletteMode === 'custom'
    ? generatedPalettes.find((palette) => palette.id === state.generatedPaletteId) || generatedPalettes[0]
    : getOptionById(catalog.colorPalettes, state.paletteId, defaultState.paletteId);
  const configurationId = createConfigurationId(state);
  const shareUrl = buildShareUrl(state);

  return {
    generatedPalettes,
    activeStyle,
    activeUiStyle,
    activeFonts,
    activeIdentity,
    activePalette,
    configurationId,
    shareUrl,
  };
}

function renderApp(message = '') {
  const previousConfigColumn = document.querySelector('.config-column');
  const previousPreviewScrollShell = document.querySelector('.preview-scroll-shell');
  const configScrollTop = previousConfigColumn instanceof HTMLElement ? previousConfigColumn.scrollTop : 0;
  const previewScrollTop = previousPreviewScrollShell instanceof HTMLElement ? previousPreviewScrollShell.scrollTop : 0;
  const derived = getDerivedState();

  app.innerHTML = `
    <div class="app-shell">
      <main class="app-grid">
        <section class="config-rail">
          <header class="app-header">
            <h1>Zvolte si styl svého webu</h1>
          </header>

          <div class="config-column">${renderConfigurator({
            state,
            catalog,
            generatedPalettes: derived.generatedPalettes,
            activePalette: derived.activePalette,
            configurationId: derived.configurationId,
            shareUrl: derived.shareUrl,
          })}</div>
        </section>
        <aside class="preview-column">
          <div class="preview-column__controls">
            ${renderViewportSwitcher(catalog.viewportModes, state.viewportMode)}
          </div>
          <div class="preview-scroll-shell">
            ${renderPreview({
              style: derived.activeStyle,
              uiStyle: derived.activeUiStyle,
              fonts: derived.activeFonts,
              identity: derived.activeIdentity,
              palette: derived.activePalette,
              viewportMode: state.viewportMode,
            })}
          </div>
        </aside>
      </main>
    </div>
  `;

  const statusNode = document.querySelector('#form-status');
  if (statusNode) {
    statusNode.textContent = message;
  }

  const nextConfigColumn = document.querySelector('.config-column');
  if (nextConfigColumn instanceof HTMLElement) {
    nextConfigColumn.scrollTop = configScrollTop;
  }

  const nextPreviewScrollShell = document.querySelector('.preview-scroll-shell');
  if (nextPreviewScrollShell instanceof HTMLElement) {
    nextPreviewScrollShell.scrollTop = previewScrollTop;
  }
}

function updateState(fieldName, value) {
  state[fieldName] = value;

  if (fieldName === 'paletteMode' && value === 'preset') {
    state.generatedPaletteId = defaultState.generatedPaletteId;
  }

  if (fieldName === 'baseColor') {
    state.baseColor = normalizeHex(value);
    state.generatedPaletteId = 'gen-1';
  }

  if (fieldName === 'paletteMode' && value === 'custom') {
    state.generatedPaletteId = state.generatedPaletteId || 'gen-1';
  }

  writeStateToUrl(state);
  renderApp();
}

async function copyLink() {
  const shareUrlInput = document.querySelector('#share-url');

  if (!shareUrlInput) {
    return;
  }

  try {
    await navigator.clipboard.writeText(shareUrlInput.value);
    renderApp('Sdílený odkaz byl zkopírován do schránky.');
  } catch {
    renderApp('Odkaz nešel zkopírovat automaticky. Zkopírujte ho ručně.');
  }
}

async function submitSelection() {
  const derived = getDerivedState();

  if (!state.clientName.trim()) {
    renderApp('Doplňte jméno klienta.');
    return;
  }

  if (!state.clientEmail.trim()) {
    renderApp('Doplňte e-mail klienta.');
    return;
  }

  renderApp('Odesílám vybranou kombinaci...');

  const payload = {
    configurationId: derived.configurationId,
    shareUrl: derived.shareUrl,
    clientName: state.clientName.trim(),
    clientEmail: state.clientEmail.trim(),
    honeypot: state.honeypot,
    selection: {
      style: derived.activeStyle,
      uiStyle: derived.activeUiStyle,
      fonts: derived.activeFonts,
      palette: derived.activePalette,
      paletteMode: state.paletteMode,
      baseColor: state.baseColor,
    },
  };

  try {
    const response = await fetch('/.netlify/functions/send-selection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.error || 'Odeslání selhalo.');
    }

    renderApp('Identifikátor a odkaz byly odeslány vám i klientovi na e-mail.');
  } catch (error) {
    renderApp(error.message || 'Odeslání selhalo. Zkuste to znovu.');
  }
}

app.addEventListener('change', (event) => {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const fieldName = target.name;

  if (['styleId', 'uiStyleId', 'fontPairingId', 'identityId', 'viewportMode', 'paletteMode', 'paletteId', 'generatedPaletteId', 'baseColor'].includes(fieldName)) {
    updateState(fieldName, target.value);
    return;
  }

  if (['clientName', 'clientEmail', 'honeypot'].includes(fieldName)) {
    state[fieldName] = target.value;
  }
});

app.addEventListener('click', async (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.dataset.action === 'copy-link') {
    await copyLink();
  }
});

app.addEventListener('submit', async (event) => {
  event.preventDefault();
  await submitSelection();
});

renderApp();