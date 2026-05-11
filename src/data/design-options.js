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
    id: 'pulse',
    label: 'Pulse',
    description: 'Elektrická kombinace modré, námořní hloubky a ostrých akcentů.',
    swatches: ['#2563EB', '#0F172A', '#F8FAFC', '#14B8A6', '#F59E0B'],
    colors: {
      bg: '#F8FAFC',
      surface: '#F8FAFC',
      text: '#0F172A',
      muted: '#2563EB',
      primary: '#14B8A6',
      secondary: '#2563EB',
      accent: '#F59E0B',
    },
  },
  {
    id: 'frost',
    label: 'Frost',
    description: 'Ledová světelnost s jasným cyan akcentem.',
    swatches: ['#E0F2FE', '#7DD3FC', '#0EA5E9', '#082F49', '#F8FAFC'],
    colors: {
      bg: '#F8FAFC',
      surface: '#E0F2FE',
      text: '#082F49',
      muted: '#7DD3FC',
      primary: '#0EA5E9',
      secondary: '#E0F2FE',
      accent: '#7DD3FC',
    },
  },
  {
    id: 'ember',
    label: 'Ember',
    description: 'Žhavé zemité tóny s tmavým kontrastem.',
    swatches: ['#7C2D12', '#EA580C', '#FDBA74', '#FFF7ED', '#1C1917'],
    colors: {
      bg: '#FFF7ED',
      surface: '#FDBA74',
      text: '#1C1917',
      muted: '#7C2D12',
      primary: '#EA580C',
      secondary: '#FDBA74',
      accent: '#7C2D12',
    },
  },
  {
    id: 'moss',
    label: 'Moss',
    description: 'Svěží zelená s přírodním, klidným základem.',
    swatches: ['#3F6212', '#84CC16', '#D9F99D', '#F7FEE7', '#14532D'],
    colors: {
      bg: '#F7FEE7',
      surface: '#D9F99D',
      text: '#14532D',
      muted: '#3F6212',
      primary: '#84CC16',
      secondary: '#D9F99D',
      accent: '#3F6212',
    },
  },
  {
    id: 'velvet',
    label: 'Velvet',
    description: 'Sametová fialová paleta s hlubokým kontrastem.',
    swatches: ['#581C87', '#A855F7', '#E9D5FF', '#FAF5FF', '#1F1135'],
    colors: {
      bg: '#FAF5FF',
      surface: '#E9D5FF',
      text: '#1F1135',
      muted: '#581C87',
      primary: '#A855F7',
      secondary: '#E9D5FF',
      accent: '#581C87',
    },
  },
  {
    id: 'coral',
    label: 'Coral',
    description: 'Měkká světlost s korálovým impulzem a teal protikladem.',
    swatches: ['#FF6B6B', '#FFD6D6', '#FFF5F5', '#4ECDC4', '#1A535C'],
    colors: {
      bg: '#FFF5F5',
      surface: '#FFD6D6',
      text: '#1A535C',
      muted: '#4ECDC4',
      primary: '#FF6B6B',
      secondary: '#FFD6D6',
      accent: '#4ECDC4',
    },
  },
  {
    id: 'graphite',
    label: 'Graphite',
    description: 'Střízlivý městský kontrast v čisté monochromatické škále.',
    swatches: ['#111827', '#374151', '#9CA3AF', '#F3F4F6', '#FFFFFF'],
    colors: {
      bg: '#FFFFFF',
      surface: '#F3F4F6',
      text: '#111827',
      muted: '#9CA3AF',
      primary: '#374151',
      secondary: '#F3F4F6',
      accent: '#9CA3AF',
    },
  },
  {
    id: 'sand',
    label: 'Sand',
    description: 'Přirozené neutrálno se zemitou pískovou dominantou.',
    swatches: ['#C2A878', '#EADBC8', '#FAF7F0', '#6B7280', '#2F2F2F'],
    colors: {
      bg: '#FAF7F0',
      surface: '#EADBC8',
      text: '#2F2F2F',
      muted: '#6B7280',
      primary: '#C2A878',
      secondary: '#EADBC8',
      accent: '#6B7280',
    },
  },
  {
    id: 'neon',
    label: 'Neon',
    description: 'Tmavá techno paleta s výraznými světelnými akcenty.',
    swatches: ['#0B0F1A', '#00E5FF', '#7C3AED', '#FF2D95', '#F5F5F5'],
    colors: {
      bg: '#0B0F1A',
      surface: '#0B0F1A',
      text: '#F5F5F5',
      muted: '#00E5FF',
      primary: '#FF2D95',
      secondary: '#7C3AED',
      accent: '#00E5FF',
    },
  },
  {
    id: 'sage',
    label: 'Sage',
    description: 'Tlumená, vyrovnaná paleta se zelenošedým tónem.',
    swatches: ['#5F7161', '#D0C9C0', '#EFEAD8', '#6D8B74', '#1F2937'],
    colors: {
      bg: '#EFEAD8',
      surface: '#D0C9C0',
      text: '#1F2937',
      muted: '#6D8B74',
      primary: '#5F7161',
      secondary: '#D0C9C0',
      accent: '#6D8B74',
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
  paletteId: 'moss',
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