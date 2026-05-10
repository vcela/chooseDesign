export const designStyles = [
  {
    id: 'minimalist',
    label: 'Minimalismus',
    promptName: 'minimalist',
    traits: ['čisté linie', 'málo prvků', 'neutrální barvy', 'hodně prostoru'],
    examplePrompt: 'minimalist interior, clean lines, beige and white, no clutter',
    preview: {
      mood: 'Tichý editorial look s důrazem na prostor a čisté hrany.',
      material: 'Matný kámen, kartáčované dřevo, jemný textil',
      badge: 'Calm',
    },
  },
  {
    id: 'scandinavian',
    label: 'Skandinávský',
    promptName: 'scandinavian / scandi',
    traits: ['světlé tóny', 'světlé dřevo', 'vzdušnost', 'funkčnost'],
    examplePrompt: 'scandinavian living room, light wood, soft daylight, cozy neutral palette',
    preview: {
      mood: 'Světlá kompozice s přirozeným denním světlem a měkkými přechody.',
      material: 'Bílý dub, vlna, keramika',
      badge: 'Airy',
    },
  },
  {
    id: 'japandi',
    label: 'Japandi',
    promptName: 'japandi',
    traits: ['japonská jednoduchost', 'scandi útulnost', 'přírodní materiály', 'klid'],
    examplePrompt: 'japandi bedroom, warm wood, natural stone, calm balanced composition',
    preview: {
      mood: 'Zdržená harmonie s nízkou vizuální hlučností a hřejivými akcenty.',
      material: 'Cedr, len, přírodní kámen',
      badge: 'Balanced',
    },
  },
  {
    id: 'industrial',
    label: 'Industriální',
    promptName: 'industrial',
    traits: ['beton', 'kov', 'cihla', 'surovost', 'otevřený prostor'],
    examplePrompt: 'industrial loft, exposed brick, black metal, concrete textures',
    preview: {
      mood: 'Městský loft s tvrdými kontrasty a architektonickou geometrií.',
      material: 'Beton, černěný kov, cihla',
      badge: 'Raw',
    },
  },
  {
    id: 'boho',
    label: 'Boho',
    promptName: 'boho',
    traits: ['vrstvené textilie', 'přírodní materiály', 'rostliny', 'volnost', 'vzory'],
    examplePrompt: 'boho interior, layered textiles, earthy colors, plants, handmade decor',
    preview: {
      mood: 'Vrstevnatá scéna s organickými tvary a řemeslnými detaily.',
      material: 'Ratan, bavlna, hlína',
      badge: 'Freeform',
    },
  },
  {
    id: 'vintage',
    label: 'Vintage',
    promptName: 'vintage',
    traits: ['patina', 'starší kusy', 'nostalgie', 'začátek 20. století'],
    examplePrompt: 'vintage reading corner, aged wood, antique decor, warm nostalgic mood',
    preview: {
      mood: 'Měkká nostalgie s hloubkou materiálu a drobnou ornamentikou.',
      material: 'Patinované dřevo, mosaz, samet',
      badge: 'Nostalgic',
    },
  },
  {
    id: 'retro',
    label: 'Retro',
    promptName: 'retro',
    traits: ['50.-70. léta', 'výraznější barvy', 'geometrie', 'hravost'],
    examplePrompt: 'retro kitchen, 1960s mood, bold colors, geometric details',
    preview: {
      mood: 'Rytmická kompozice s odvahou pro barvu a tvar.',
      material: 'Lak, chrom, vinyl',
      badge: 'Playful',
    },
  },
  {
    id: 'contemporary',
    label: 'Moderní současný',
    promptName: 'contemporary modern',
    traits: ['čisté tvary', 'praktičnost', 'dřevo/kámen/sklo', 'městský vzhled'],
    examplePrompt: 'contemporary modern apartment, clean furniture, stone and glass, elegant lighting',
    preview: {
      mood: 'Suverénní prezentační vrstva s jasnou hierarchií a elegancí.',
      material: 'Travertin, kouřové sklo, kartáčovaný hliník',
      badge: 'Refined',
    },
  },
];

export const uiStyles = [
  {
    id: 'flat',
    label: 'Flat',
    promptName: 'flat design',
    traits: ['2D vzhled', 'bez textur', 'jednoduché ikony', 'kontrast'],
    examplePrompt: 'flat design landing page, bold colors, simple icons, clean layout',
    preview: {
      shell: 'flat',
      notes: 'Silné plochy, minimální stínování, čistá hierarchie.',
    },
  },
  {
    id: 'material',
    label: 'Material',
    promptName: 'material design',
    traits: ['vrstvy', 'jemné stíny', 'animace', 'jasná hierarchie'],
    examplePrompt: 'material design dashboard, cards, soft shadows, clear navigation',
    preview: {
      shell: 'material',
      notes: 'Karty, elevation a čitelná struktura obsahu.',
    },
  },
  {
    id: 'glass',
    label: 'Glassmorphism',
    promptName: 'glassmorphism',
    traits: ['průhledné panely', 'blur', 'světelné odlesky'],
    examplePrompt: 'glassmorphism fintech app UI, frosted panels, subtle glow, dark background',
    preview: {
      shell: 'glass',
      notes: 'Průsvitné panely a jemný světelný opar.',
    },
  },
  {
    id: 'dark',
    label: 'Dark UI',
    promptName: 'dark mode ui',
    traits: ['tmavé pozadí', 'světelné akcenty', 'moderní tech vzhled'],
    examplePrompt: 'dark mode admin panel, high contrast, neon blue accents',
    preview: {
      shell: 'dark',
      notes: 'Vyšší kontrast, hluboké plochy a světelné highlighty.',
    },
  },
];

export const viewportModes = [
  {
    id: 'desktop',
    label: 'Desktop',
    description: 'Výchozí široké zobrazení s plným layoutem.',
  },
  {
    id: 'tablet',
    label: 'Tablet',
    description: 'Střední šířka s překladem sekcí a komprimovanou navigací.',
  },
  {
    id: 'mobile',
    label: 'Mobil',
    description: 'Úzká obrazovka s vertikálním skládáním obsahu.',
  },
];

export const identityOptions = [
  {
    id: 'company',
    label: 'Společnost',
  },
  {
    id: 'project',
    label: 'Projekt',
  },
  {
    id: 'man',
    label: 'Muž',
  },
  {
    id: 'woman',
    label: 'Žena',
  },
];

export const fontPairings = [
  {
    id: 'editorial-warm',
    label: 'Editorial Warm',
    heading: 'Fraunces',
    body: 'Manrope',
    description: 'Měkký editorial nadpis s čistým moderním textem.',
  },
  {
    id: 'sculpted-tech',
    label: 'Sculpted Tech',
    heading: 'Space Grotesk',
    body: 'DM Sans',
    description: 'Techničtější proporce pro digitální a moderní dojem.',
  },
  {
    id: 'quiet-luxury',
    label: 'Quiet Luxury',
    heading: 'Cormorant Garamond',
    body: 'Sora',
    description: 'Vyšší kontrast mezi emočním display fontem a přesným UI textem.',
  },
  {
    id: 'gallery-soft',
    label: 'Gallery Soft',
    heading: 'Libre Baskerville',
    body: 'Outfit',
    description: 'Přístupná elegance vhodná pro lifestyle a premium prezentace.',
  },
  {
    id: 'urban-balanced',
    label: 'Urban Balanced',
    heading: 'Plus Jakarta Sans',
    body: 'Work Sans',
    description: 'Pragmatická dvojice pro současné městské projekty.',
  },
  {
    id: 'heritage-calm',
    label: 'Heritage Calm',
    heading: 'Marcellus',
    body: 'Merriweather',
    description: 'Klidná, dospělá typografie s lehce klasickým podtónem.',
  },
  {
    id: 'bold-system',
    label: 'Bold System',
    heading: 'Archivo',
    body: 'Manrope',
    description: 'Výrazná prezentace pro odolnější, produktový feeling.',
  },
  {
    id: 'soft-studio',
    label: 'Soft Studio',
    heading: 'Fraunces',
    body: 'Plus Jakarta Sans',
    description: 'Jemná kombinace pro lifestyle a hřejivé značky.',
  },
];

export const colorPalettes = [
  {
    id: 'sandstone',
    label: 'Sandstone Quiet',
    description: 'Teplé neutrály s elegantním kontrastem.',
    colors: {
      bg: '#f3ede4',
      surface: '#fffaf2',
      text: '#2f241f',
      muted: '#7d675c',
      primary: '#9d664f',
      secondary: '#dcc2a7',
      accent: '#4f6b62',
    },
  },
  {
    id: 'fjord',
    label: 'Fjord Morning',
    description: 'Scandi paleta s modrozelenou hloubkou.',
    colors: {
      bg: '#edf3f2',
      surface: '#ffffff',
      text: '#173439',
      muted: '#5f7b80',
      primary: '#2a6f77',
      secondary: '#b7d7d3',
      accent: '#c88358',
    },
  },
  {
    id: 'dune',
    label: 'Dune Clay',
    description: 'Zemitost a pouštní akcent pro klidné interiéry.',
    colors: {
      bg: '#f4e7d9',
      surface: '#fff7ef',
      text: '#39261d',
      muted: '#8c6856',
      primary: '#b65a3c',
      secondary: '#e6b98a',
      accent: '#7c8a53',
    },
  },
  {
    id: 'moss',
    label: 'Moss Atelier',
    description: 'Pracuje s olivou, krémem a měkkou hloubkou.',
    colors: {
      bg: '#f1f0e7',
      surface: '#fbfaf4',
      text: '#283022',
      muted: '#67705e',
      primary: '#667548',
      secondary: '#c7ccb1',
      accent: '#ba7d57',
    },
  },
  {
    id: 'nocturne',
    label: 'Nocturne Copper',
    description: 'Tmavší, premium sestava s kovovým akcentem.',
    colors: {
      bg: '#161618',
      surface: '#212126',
      text: '#f4eee8',
      muted: '#b2a69c',
      primary: '#c27854',
      secondary: '#383842',
      accent: '#7fa0b8',
    },
  },
  {
    id: 'citrus',
    label: 'Citrus Pop',
    description: 'Retrovější a hravější energetická paleta.',
    colors: {
      bg: '#fff6de',
      surface: '#fffdf5',
      text: '#2b2a23',
      muted: '#736848',
      primary: '#ef8f00',
      secondary: '#ffd36a',
      accent: '#1d8678',
    },
  },
  {
    id: 'rosewood',
    label: 'Rosewood Story',
    description: 'Vintage teplo s jemným růžovým dýmem.',
    colors: {
      bg: '#f6ece9',
      surface: '#fff8f6',
      text: '#3a282b',
      muted: '#8b676d',
      primary: '#a95964',
      secondary: '#e2c0c3',
      accent: '#6a7d6f',
    },
  },
  {
    id: 'graphite',
    label: 'Graphite Signal',
    description: 'Městský kontrast s technickým modrým signálem.',
    colors: {
      bg: '#eceff4',
      surface: '#ffffff',
      text: '#17212b',
      muted: '#5c6b7b',
      primary: '#2458e2',
      secondary: '#cfd8ea',
      accent: '#101923',
    },
  },
  {
    id: 'terracotta-night',
    label: 'Terracotta Night',
    description: 'Sytost pro tmavší contemporary prezentace.',
    colors: {
      bg: '#1e1715',
      surface: '#2c221f',
      text: '#f8ece5',
      muted: '#c4ab9b',
      primary: '#d46b4f',
      secondary: '#49352f',
      accent: '#8ea7a0',
    },
  },
  {
    id: 'seafoam',
    label: 'Seafoam Calm',
    description: 'Čerstvá, světlá a jemně průsvitná paleta.',
    colors: {
      bg: '#eef7f5',
      surface: '#ffffff',
      text: '#18363c',
      muted: '#6a8790',
      primary: '#4f9e93',
      secondary: '#cae7df',
      accent: '#e3a86f',
    },
  },
];

export const defaultState = {
  styleId: 'japandi',
  uiStyleId: 'material',
  fontPairingId: 'editorial-warm',
  identityId: 'company',
  viewportMode: 'desktop',
  paletteMode: 'preset',
  paletteId: 'sandstone',
  baseColor: '#b65a3c',
  generatedPaletteId: 'gen-1',
  clientName: '',
  clientEmail: '',
  honeypot: '',
};

export function getCatalog() {
  return {
    designStyles,
    uiStyles,
    identityOptions,
    fontPairings,
    viewportModes,
    colorPalettes,
  };
}

export function getOptionById(collection, id, fallbackId) {
  return collection.find((item) => item.id === id) || collection.find((item) => item.id === fallbackId) || collection[0];
}