function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toLinearChannel(channel) {
  const normalized = channel / 255;
  return normalized <= 0.03928
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
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

export function getRelativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * toLinearChannel(r) + 0.7152 * toLinearChannel(g) + 0.0722 * toLinearChannel(b);
}

export function getContrastRatio(foreground, background) {
  const luminanceA = getRelativeLuminance(foreground);
  const luminanceB = getRelativeLuminance(background);
  const lighter = Math.max(luminanceA, luminanceB);
  const darker = Math.min(luminanceA, luminanceB);

  return (lighter + 0.05) / (darker + 0.05);
}

export function chooseReadableText(background, candidates = ['#17212b', '#f8f5f0']) {
  return candidates
    .map((candidate) => ({
      color: normalizeHex(candidate),
      contrast: getContrastRatio(candidate, background),
    }))
    .sort((left, right) => right.contrast - left.contrast)[0].color;
}

export function ensureTextContrast(foreground, backgrounds, minContrast = 4.5) {
  const backgroundList = (Array.isArray(backgrounds) ? backgrounds : [backgrounds]).map(normalizeHex);
  const normalizedForeground = normalizeHex(foreground);

  if (backgroundList.every((background) => getContrastRatio(normalizedForeground, background) >= minContrast)) {
    return normalizedForeground;
  }

  const baseHsl = rgbToHsl(hexToRgb(normalizedForeground));
  const averageLuminance = backgroundList.reduce((sum, background) => sum + getRelativeLuminance(background), 0) / backgroundList.length;
  const directions = averageLuminance > 0.5 ? [-1, 1] : [1, -1];

  for (const direction of directions) {
    for (let step = 1; step <= 40; step += 1) {
      const candidate = rgbToHex(
        hslToRgb({
          h: baseHsl.h,
          s: baseHsl.s,
          l: clamp(baseHsl.l + direction * step * 2, 2, 98),
        })
      );

      if (backgroundList.every((background) => getContrastRatio(candidate, background) >= minContrast)) {
        return candidate;
      }
    }
  }

  const fallback = chooseReadableText(backgroundList[0], [normalizedForeground, '#17212b', '#f8f5f0']);
  return backgroundList.every((background) => getContrastRatio(fallback, background) >= minContrast)
    ? fallback
    : chooseReadableText(backgroundList[0]);
}

export function resolvePreviewColors(colors) {
  const bg = normalizeHex(colors.bg);
  const surface = normalizeHex(colors.surface);
  const primary = normalizeHex(colors.primary);
  const secondary = normalizeHex(colors.secondary);
  const accent = normalizeHex(colors.accent);
  const backgrounds = [bg, surface];
  const text = ensureTextContrast(colors.text || chooseReadableText(bg), backgrounds, 4.5);
  const muted = ensureTextContrast(colors.muted || text, backgrounds, 4.5);
  const primaryText = ensureTextContrast(primary, backgrounds, 4.5);
  const onPrimary = ensureTextContrast(
    chooseReadableText(primary, [text, bg, '#17212b', '#f8f5f0']),
    primary,
    4.5
  );

  return {
    bg,
    surface,
    text,
    muted,
    primary,
    secondary,
    accent,
    primaryText,
    onPrimary,
  };
}