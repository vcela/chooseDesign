function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeHex(hex) {
  if (!hex) {
    return '#000000';
  }

  const raw = hex.trim().replace('#', '');
  const expanded = raw.length === 3
    ? raw.split('').map((char) => char + char).join('')
    : raw;

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    return '#000000';
  }

  return `#${expanded.toLowerCase()}`;
}

export function hexToRgb(hex) {
  const normalized = normalizeHex(hex).slice(1);
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  return `#${[r, g, b]
    .map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0'))
    .join('')}`;
}

export function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let h = 0;

  if (delta !== 0) {
    if (max === red) {
      h = ((green - blue) / delta) % 6;
    } else if (max === green) {
      h = (blue - red) / delta + 2;
    } else {
      h = (red - green) / delta + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h,
    s: Number((s * 100).toFixed(1)),
    l: Number((l * 100).toFixed(1)),
  };
}

export function hslToRgb({ h, s, l }) {
  const saturation = clamp(s, 0, 100) / 100;
  const lightness = clamp(l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const normalizedHue = ((h % 360) + 360) % 360;
  const x = chroma * (1 - Math.abs(((normalizedHue / 60) % 2) - 1));
  const match = lightness - chroma / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (normalizedHue < 60) {
    red = chroma;
    green = x;
  } else if (normalizedHue < 120) {
    red = x;
    green = chroma;
  } else if (normalizedHue < 180) {
    green = chroma;
    blue = x;
  } else if (normalizedHue < 240) {
    green = x;
    blue = chroma;
  } else if (normalizedHue < 300) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }

  return {
    r: (red + match) * 255,
    g: (green + match) * 255,
    b: (blue + match) * 255,
  };
}

export function shiftHsl(hex, { hue = 0, saturation = 0, lightness = 0 }) {
  const hsl = rgbToHsl(hexToRgb(hex));
  return rgbToHex(
    hslToRgb({
      h: hsl.h + hue,
      s: clamp(hsl.s + saturation, 5, 90),
      l: clamp(hsl.l + lightness, 8, 94),
    })
  );
}

export function chooseReadableText(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.62 ? '#17212b' : '#f8f5f0';
}