import { chooseReadableText, normalizeHex, resolvePreviewColors, shiftHsl } from './color-utils.js';

function buildPalette(id, label, description, baseColor, transforms) {
  const primary = normalizeHex(baseColor);
  const bg = shiftHsl(primary, transforms.bg);
  const surface = shiftHsl(primary, transforms.surface);
  const secondary = shiftHsl(primary, transforms.secondary);
  const accent = shiftHsl(primary, transforms.accent);
  const muted = shiftHsl(primary, transforms.muted);
  const text = chooseReadableText(bg);

  return {
    id,
    label,
    description,
    sourceColor: primary,
    colors: resolvePreviewColors({
      bg,
      surface,
      text,
      muted,
      primary,
      secondary,
      accent,
    }),
  };
}

export function buildGeneratedPalettes(baseColor) {
  return [
    buildPalette('gen-1', 'Soft Editorial', 'Vzdušna svetla varianta s jemnym akcentem.', baseColor, {
      bg: { saturation: -20, lightness: 35 },
      surface: { saturation: -15, lightness: 42 },
      secondary: { hue: -14, saturation: -10, lightness: 18 },
      accent: { hue: 38, saturation: 8, lightness: -6 },
      muted: { saturation: -20, lightness: 4 },
    }),
    buildPalette('gen-2', 'Earth Contrast', 'Zemitější verze s tmavsim kontrastem a hloubkou.', baseColor, {
      bg: { hue: -6, saturation: -18, lightness: 24 },
      surface: { hue: -4, saturation: -10, lightness: 30 },
      secondary: { hue: 20, saturation: 6, lightness: 6 },
      accent: { hue: 150, saturation: -12, lightness: -10 },
      muted: { saturation: -22, lightness: -8 },
    }),
    buildPalette('gen-3', 'Cool Gallery', 'Chladnejsi galerie vzhled s cistsim napetim.', baseColor, {
      bg: { hue: 16, saturation: -28, lightness: 34 },
      surface: { hue: 12, saturation: -20, lightness: 40 },
      secondary: { hue: 28, saturation: -8, lightness: 16 },
      accent: { hue: 178, saturation: -6, lightness: -4 },
      muted: { hue: 12, saturation: -18, lightness: 2 },
    }),
    buildPalette('gen-4', 'Moody Luxe', 'Tmavsi premium rezim s kovovym akcentem.', baseColor, {
      bg: { saturation: -18, lightness: -32 },
      surface: { saturation: -12, lightness: -24 },
      secondary: { hue: -12, saturation: -16, lightness: -12 },
      accent: { hue: 48, saturation: 2, lightness: 6 },
      muted: { saturation: -24, lightness: 12 },
    }),
    buildPalette('gen-5', 'Energetic Pop', 'Vyraznejsi a hravejsi volba s vysim napetim.', baseColor, {
      bg: { saturation: -14, lightness: 30 },
      surface: { saturation: -8, lightness: 36 },
      secondary: { hue: 30, saturation: 12, lightness: 18 },
      accent: { hue: -140, saturation: 8, lightness: -4 },
      muted: { saturation: -12, lightness: -2 },
    }),
  ];
}