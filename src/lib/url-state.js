const paramMap = {
  styleId: 'style',
  uiStyleId: 'ui',
  fontPairingId: 'fonts',
  identityId: 'identity',
  viewportMode: 'viewport',
  paletteMode: 'mode',
  paletteId: 'palette',
  baseColor: 'base',
  generatedPaletteId: 'variant',
};

function stableHash(input) {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return Math.abs(hash >>> 0).toString(36).slice(0, 8);
}

export function getDesignState(state) {
  return {
    styleId: state.styleId,
    uiStyleId: state.uiStyleId,
    fontPairingId: state.fontPairingId,
    identityId: state.identityId,
    viewportMode: state.viewportMode,
    paletteMode: state.paletteMode,
    paletteId: state.paletteId,
    baseColor: state.baseColor,
    generatedPaletteId: state.generatedPaletteId,
  };
}

export function parseStateFromUrl(defaultState, validators, search = window.location.search) {
  const params = new URLSearchParams(search);
  const nextState = { ...defaultState };

  Object.entries(paramMap).forEach(([stateKey, paramKey]) => {
    const value = params.get(paramKey);

    if (value) {
      nextState[stateKey] = value;
    }
  });

  return {
    ...nextState,
    styleId: validators.style(nextState.styleId),
    uiStyleId: validators.ui(nextState.uiStyleId),
    fontPairingId: validators.fonts(nextState.fontPairingId),
    identityId: validators.identity(nextState.identityId),
    viewportMode: validators.viewport(nextState.viewportMode),
    paletteMode: validators.mode(nextState.paletteMode),
    paletteId: validators.palette(nextState.paletteId),
    generatedPaletteId: validators.variant(nextState.generatedPaletteId),
    baseColor: validators.base(nextState.baseColor),
  };
}

export function writeStateToUrl(state) {
  const params = new URLSearchParams();

  Object.entries(getDesignState(state)).forEach(([stateKey, value]) => {
    params.set(paramMap[stateKey], value);
  });

  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', nextUrl);
}

export function buildShareUrl(state) {
  const params = new URLSearchParams();

  Object.entries(getDesignState(state)).forEach(([stateKey, value]) => {
    params.set(paramMap[stateKey], value);
  });

  return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

export function createConfigurationId(state) {
  return `cfg-${stableHash(JSON.stringify(getDesignState(state)))}`;
}