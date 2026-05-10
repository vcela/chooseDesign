function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

function getIdentityScene(identityId) {
  const heroImages = {
    company: "url('/hero-images/company.webp')",
    project: "url('/hero-images/project.webp')",
    man: "url('/hero-images/man.webp')",
    woman: "url('/hero-images/woman.webp')",
  };

  const scenes = {
    company: {
      kicker: 'Interiérové studio pro firmy a značky',
      heading: 'Web, který prodává směr značky.',
      lead: 'Přehledná prezentace studia, jasně definované služby a reference, které působí důvěryhodně na firemní klientelu.',
      primaryCta: 'Domluvit konzultaci',
      secondaryCta: 'Projít reference',
      aboutTitle: 'O společnosti',
      aboutLead: 'Studio funguje jako partner pro firmy, developery a značky, které potřebují silný vizuální a prostorový směr.',
      aboutBody: 'Na webu je důležité rychle vysvětlit kompetence, proces spolupráce a typ realizací. Obsah proto zůstává věcný a konzistentní napříč grafickými styly.',
      focusAreas: ['Spolupráce', 'Reference', 'Proces'],
      stats: [{ value: '12+', label: 'let na trhu' }, { value: '80', label: 'dokončených realizací' }, { value: 'B2B', label: 'hlavní segment' }],
      services: ['Brandový interiér', 'Showroom a kanceláře', 'Dlouhodobý dohled'],
      references: [
        { name: 'Headquarters Arbo', meta: 'Praha • firemní interiér', summary: 'Projekt zaměřený na reprezentaci značky, provoz a jasnou identitu prostoru.' },
        { name: 'Studio District', meta: 'Brno • kreativní hub', summary: 'Web i interiér pracují s důvěrou, strukturou a velmi čistou hierarchií informací.' },
      ],
      quote: 'Přesně ten typ prezentace, který působí profesionálně už v prvním dojmu.',
      footerNote: 'Pro firmy, developery a značky, které potřebují čitelný designový směr.',
      heroImage: heroImages.company,
    },
    project: {
      kicker: 'Prezentace jednoho projektu',
      heading: 'Jeden projekt. Jasný příběh.',
      lead: 'Ideální pro novostavbu, rekonstrukci nebo investiční projekt, kde návštěvník potřebuje rychle pochopit koncept, rozsah a výsledek.',
      primaryCta: 'Získat návrh struktury',
      secondaryCta: 'Zobrazit projekt',
      aboutTitle: 'O projektu',
      aboutLead: 'Obsah je soustředěný na jednu realizaci a její příběh: zadání, koncept, materiály a výsledek.',
      aboutBody: 'Místo obecného představení studia se klade důraz na promyšlenou sekvenci sekcí, kvalitní hero a reference konkrétní realizace.',
      focusAreas: ['Koncept', 'Materiály', 'Výsledek'],
      stats: [{ value: '1 projekt', label: 'hlavní fokus' }, { value: '3 sekce', label: 'klíčový příběh' }, { value: '100 %', label: 'na realizaci' }],
      services: ['Koncept projektu', 'Vizuální prezentace', 'Dokumentace realizace'],
      references: [
        { name: 'House Sora', meta: 'Liberec • 110 m2', summary: 'Projekt vystavěný kolem materiálů, světla a klidného prostorového rytmu.' },
        { name: 'Apartment Line', meta: 'Praha • 92 m2', summary: 'Jeden silný příběh projektu rozpracovaný do čitelných a vzdušných sekcí.' },
      ],
      quote: 'Tady je okamžitě jasné, co je předmětem webu a proč má hodnotu.',
      footerNote: 'Prezentace konkrétního projektu, stavby nebo realizace.',
      heroImage: heroImages.project,
    },
    man: {
      kicker: 'Osobní prezentace experta',
      heading: 'Osobní web s klidem a autoritou.',
      lead: 'Obsah je stavěný kolem jednoho člověka, jeho expertizy, služeb a referencí klientů. Vhodné pro konzultanta, designéra nebo architekta.',
      primaryCta: 'Nezávazná konzultace',
      secondaryCta: 'Moje reference',
      aboutTitle: 'Kdo jsem',
      aboutLead: 'Web ukazuje člověka, jeho přístup, zkušenost a konkrétní nabídku služeb.',
      aboutBody: 'Texty zůstávají konzistentní bez ohledu na grafický styl. Styl mění jen atmosféru a vizuální jazyk, ne obsahové role sekcí.',
      focusAreas: ['Expertiza', 'Spolupráce', 'Reference'],
      stats: [{ value: '1:1', label: 'spolupráce' }, { value: '27', label: 'spokojených klientů' }, { value: '8 let', label: 'praxe' }],
      services: ['Konzultace', 'Designový směr', 'Autorský dohled'],
      references: [
        { name: 'Private Loft', meta: 'Praha • individuální klient', summary: 'Osobní přístup, čitelná komunikace a vysoký důraz na důvěru mezi klientem a designérem.' },
        { name: 'Villa North', meta: 'Liberec • rezidenční projekt', summary: 'Web i realizace pracují s profesionálním dojmem a jasným vedením klienta.' },
      ],
      quote: 'Působí to osobně, ale pořád dostatečně reprezentativně.',
      footerNote: 'Osobní web pro experta, poradce nebo individuální značku.',
      heroImage: heroImages.man,
    },
    woman: {
      kicker: 'Osobní prezentace specialistky',
      heading: 'Osobní značka s lidskostí a profesionalitou.',
      lead: 'Vhodné pro kreativní obory i poradenské služby, kde návštěvník chce rychle pochopit osobnost, expertizu a styl spolupráce.',
      primaryCta: 'Rezervovat hovor',
      secondaryCta: 'Projít ukázky',
      aboutTitle: 'O mne',
      aboutLead: 'Hlavní roli hraje důvěra, čitelná struktura a příjemný, ale disciplinovaný obsah.',
      aboutBody: 'Web má jasnou hlavičku, hero, představení, služby, reference i patičku. Grafický styl mění vizuální tón, ne samotný obsah.',
      focusAreas: ['Příběh', 'Služby', 'Reference'],
      stats: [{ value: '16', label: 'vedených projektů' }, { value: '94 %', label: 'doporučení' }, { value: '5 kroků', label: 'ke spolupráci' }],
      services: ['Strategická konzultace', 'Návrh směru', 'Mentoring a dohled'],
      references: [
        { name: 'Residence Alma', meta: 'Brno • soukromý klient', summary: 'Klidná a čitelná komunikace osobní značky podpořená jasnou strukturou obsahu.' },
        { name: 'Studio Belle', meta: 'Praha • kreativní ateliér', summary: 'Web vytváří vyvážený poměr mezi lidskostí, estetickou kvalitou a profesionálním dojmem.' },
      ],
      quote: 'Je to čitelné, vzdušné a velmi důvěryhodné už po prvním scrollu.',
      footerNote: 'Osobní prezentace pro specialistku, konzultantku nebo kreativní značku.',
      heroImage: heroImages.woman,
    },
  };

  return scenes[identityId] || scenes.company;
}

function renderStatRow(stats) {
  return stats
    .map(
      (item) => `
        <div class="website-stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join('');
}

function renderServiceCards(scene, style) {
  return scene.services
    .map(
      (service, index) => `
        <article class="website-service-card">
          <span class="website-card-index">0${index + 1}</span>
          <h4>${service}</h4>
          <p>${style.traits[index] || style.traits[0]}. Web tuto službu prodává jasným obsahem, rytmem a důvěrou.</p>
        </article>
      `
    )
    .join('');
}

function renderReferenceCards(references) {
  return references
    .map(
      (reference) => `
        <article class="preview-card preview-card--reference">
          <p class="preview-card__eyebrow">Reference</p>
          <h4>${reference.name}</h4>
          <p class="preview-caption">${reference.meta}</p>
          <p>${reference.summary}</p>
        </article>
      `
    )
    .join('');
}

function renderFocusTabs(focusAreas) {
  return focusAreas
    .map(
      (area, index) => `
        <button class="website-tab ${index === 0 ? 'is-active' : ''}" type="button">${area}</button>
      `
    )
    .join('');
}

function renderNavLinks(viewportMode, styleId) {
  const baseLinks = {
    minimalist: ['Studio', 'Služby', 'Projekty', 'Kontakt'],
    scandinavian: ['Domov', 'Proces', 'Reference', 'Kontakt'],
    japandi: ['Filozofie', 'Služby', 'Interiéry', 'Kontakt'],
    industrial: ['Studio', 'Build', 'Portfolio', 'Poptávka'],
    boho: ['Příběh', 'Balíčky', 'Galerie', 'Kontakt'],
    vintage: ['Atelier', 'Proces', 'Reference', 'Kontakt'],
    retro: ['Start', 'Balíčky', 'Ukázky', 'Kontakt'],
    contemporary: ['Služby', 'Realizace', 'Tým', 'Kontakt'],
  };
  const links = baseLinks[styleId] || baseLinks.contemporary;

  if (viewportMode === 'mobile') {
    return '<button class="website-burger" type="button" aria-label="Otevřít menu"><span></span><span></span><span></span></button>';
  }

  return `<nav class="website-nav">${links.map((link) => `<a href="#">${link}</a>`).join('')}</nav>`;
}

function getStyleScene(style) {
  const scenes = {
    minimalist: {
      brand: 'Atelier Forma',
      kicker: 'Minimalistický interiérový web',
      heading: 'Čisté rozhodnutí pro interiér bez vizuálního šumu.',
      lead: 'Precizně vedený web pro studio, které staví na klidu, proporci a prostoru. Vše má místo a žádný prvek není navíc.',
      primaryCta: 'Domluvit konzultaci',
      secondaryCta: 'Zobrazit realizace',
      services: ['Návrh interiéru', 'Autorský dozor', 'Materiálové specifikace'],
      projectName: 'Rezidence Bela',
      projectMeta: 'Praha 6 • 140 m2 • Kompletní redesign',
      quote: 'Působí to klidně, dospěle a velmi důvěryhodně.',
      founder: 'Eliska Vavra',
      role: 'Zakladatelka a interior designer',
      about: 'Studio vede klienta klidně a přesně od prvního konceptu po finální realizaci. Prezentace působí dospěle, čistě a bez vizuálního šumu.',
      focusAreas: ['Rezidence', 'Dozor', 'Styling'],
      stats: [{ value: '12+', label: 'let praxe' }, { value: '48', label: 'hotových realizací' }, { value: '4 týdny', label: 'na koncept' }],
      references: [
        { name: 'Rezidence Bela', meta: 'Praha 6 • 140 m2', summary: 'Klidný městský interiér s dubem, kamenem a přesnou kompozicí bez přebytku.' },
        { name: 'Villa Mora', meta: 'Beroun • 210 m2', summary: 'Dům navržený s důrazem na proporce, světlo a dlouhodobou udržitelnost materiálů.' },
      ],
      footerNote: 'Praha • osobní konzultace i online spolupráce',
    },
    scandinavian: {
      brand: 'Nord Habitat',
      kicker: 'Světlý a vzdušný studio web',
      heading: 'Příjemný web pro interiérové studio, které chce působit lidsky a lehce.',
      lead: 'Měkčí kompozice, dostatek světla a přístupný tón. Ideální pro klienty, kteří hledají klid, praktičnost a domácí pohodu.',
      primaryCta: 'Rezervovat úvodní hovor',
      secondaryCta: 'Projít reference',
      services: ['Návrhy bytů', 'Dispoziční úpravy', 'Styling interiéru'],
      projectName: 'Byt Aurora',
      projectMeta: 'Brno • 82 m2 • Rodinný interiér',
      quote: 'Je to jemné, světlé a okamžitě příjemné na pohled.',
      founder: 'Tereza Lund',
      role: 'Interior designer a konzultantka domova',
      about: 'Značka staví na světle, měkkosti a lidském tónu. Web působí otevřeně, příjemně a snadno čitelně i pro klienta, který si design teprve osahává.',
      focusAreas: ['Byty', 'Rodinné domy', 'Styling'],
      stats: [{ value: '9 let', label: 'praxe' }, { value: '67', label: 'rodinných interiérů' }, { value: '92 %', label: 'doporučení' }],
      references: [
        { name: 'Byt Aurora', meta: 'Brno • 82 m2', summary: 'Světlý domov pro mladou rodinu se silnou orientací na praktický provoz.' },
        { name: 'House Norr', meta: 'Jihlava • 160 m2', summary: 'Měkké materiály, vzduch a práce se světlem jako hlavní osa celého návrhu.' },
      ],
      footerNote: 'Brno • návrhy pro rezidenční interiéry',
    },
    japandi: {
      brand: 'Kaori Space',
      kicker: 'Japandi studio prezentace',
      heading: 'Klidný web s rozvahou, rytmem a velmi citlivou materialitou.',
      lead: 'Spojuje japonskou zdrženlivost a skandinávskou měkkost. Výsledek je harmonický, teplý a soustředěný.',
      primaryCta: 'Získat návrh směru',
      secondaryCta: 'Objevit projekty',
      services: ['Rezidenční návrhy', 'Materiál boardy', 'Dlouhodobý dohled'],
      projectName: 'House Sora',
      projectMeta: 'Liberec • 110 m2 • Klidová zóna domova',
      quote: 'Je v tom ticho a jistota. Působí to velmi vyváženě.',
      founder: 'Karolina Mori',
      role: 'Creative director a material consultant',
      about: 'Studio propojuje japonskou zdrženlivost a severskou měkkost. Web proto potřebuje prostor, klid, dobré řádkování a čistou hierarchii informací.',
      focusAreas: ['Rezidence', 'Materiály', 'Dohled'],
      stats: [{ value: '14', label: 'kurátorovaných dodavatelů' }, { value: '31', label: 'klidových interiérů' }, { value: '3 kroky', label: 'k zadání konceptu' }],
      references: [
        { name: 'House Sora', meta: 'Liberec • 110 m2', summary: 'Domov navržený pro pomalejší rytmus, přírodní textury a vyváženou světelnost.' },
        { name: 'Apartment Nami', meta: 'Praha • 96 m2', summary: 'Městský byt s utlumenou paletou, dřevem a decentními kontrasty.' },
      ],
      footerNote: 'Liberec • Praha • materiálové konzultace a autorský dohled',
    },
    industrial: {
      brand: 'Foundry Interior',
      kicker: 'Surovější urban studio web',
      heading: 'Prezentace se silným charakterem, konstrukcí a městskou energií.',
      lead: 'Větší kontrasty, přesné hrany a techničtější rytmus. Vhodné pro studio, které chce působit rozhodně a architektonicky.',
      primaryCta: 'Poslat zadání',
      secondaryCta: 'Reference z loftu',
      services: ['Lofty a komerce', 'Autorský dohled', 'Technické řešení detailů'],
      projectName: 'Loft Sigma',
      projectMeta: 'Praha 7 • 190 m2 • Industriální rekonstrukce',
      quote: 'Má to tah, strukturu a okamžitou městskou identitu.',
      founder: 'David Kolar',
      role: 'Architekt a technical lead',
      about: 'Prezentace staví na konstrukci, městském rytmu a přesných detailech. Obsah musí působit sebejistě a věcně, ne dekorativně.',
      focusAreas: ['Lofty', 'Komerce', 'Detailing'],
      stats: [{ value: '22', label: 'realizací v Praze' }, { value: '1800 m2', label: 'navržených ploch' }, { value: '24/7', label: 'dozor stavby' }],
      references: [
        { name: 'Loft Sigma', meta: 'Praha 7 • 190 m2', summary: 'Silný městský interiér s odhalenou konstrukcí a robustním materiálovým jazykem.' },
        { name: 'Studio Forge', meta: 'Praha 8 • 320 m2', summary: 'Komerční prostor, kde web i interiér prodávají přesnost a technickou jistotu.' },
      ],
      footerNote: 'Praha • interiéry pro lofty, showroomy a komerční prostory',
    },
    boho: {
      brand: 'Terra Atelier',
      kicker: 'Boho lifestyle studio web',
      heading: 'Uvolněný web s vrstvením, přírodním tónem a řemeslným feelingem.',
      lead: 'Působí osobněji, měkčeji a víc lifestyle. Dobře funguje pro značku, která chce blízkost a atmosféru.',
      primaryCta: 'Pojďme ladit styl',
      secondaryCta: 'Nahlédnout galerii',
      services: ['Styling prostoru', 'Color concept', 'Dekor a materiály'],
      projectName: 'Casa Sol',
      projectMeta: 'Olomouc • 95 m2 • Lifestyle interiér',
      quote: 'Je to svobodnější, lidské a zároveň pořád přehledné.',
      founder: 'Sofie Melicharova',
      role: 'Stylistka a concept curator',
      about: 'Značka komunikuje atmosféru, vrstvení a osobitost. Web musí být vzdušný, ale pořád dostatečně strukturovaný, aby nepůsobil chaoticky.',
      focusAreas: ['Lifestyle', 'Color styling', 'Dekor'],
      stats: [{ value: '56', label: 'moodboardů ročně' }, { value: '18', label: 'partnerských značek' }, { value: '5 dní', label: 'na styling koncept' }],
      references: [
        { name: 'Casa Sol', meta: 'Olomouc • 95 m2', summary: 'Interiér stavěný na přírodním tónu, texturách a uvolněném stylu bydlení.' },
        { name: 'Villa Tulum', meta: 'Zlín • 130 m2', summary: 'Vrstvený rezidenční projekt s důrazem na dekor, textilie a řemeslný detail.' },
      ],
      footerNote: 'Olomouc • styling, dekor a barevné koncepty',
    },
    vintage: {
      brand: 'Maison Archive',
      kicker: 'Vintage atelier website',
      heading: 'Web s patinou, jemným detailem a citlivou nostalgií.',
      lead: 'Více charakteru, jemný odkaz na historii a dospělý editorial feeling. Funguje pro značku s kurátorským přístupem.',
      primaryCta: 'Domluvit schůzku',
      secondaryCta: 'Zobrazit portfolio',
      services: ['Kurátorský návrh', 'Renovace prostoru', 'Select antique sourcing'],
      projectName: 'Salon Alma',
      projectMeta: 'Praha 2 • 128 m2 • Rekonstrukce se zachováním detailů',
      quote: 'Působí to hodnotně a velmi osobitě.',
      founder: 'Adela Krizova',
      role: 'Kurátorka interieru a sourcing specialist',
      about: 'Studio pracuje s patinou, historií a hodnotou detailu. Web potřebuje editorial feeling, klidné rozvržení a velmi dobrou čitelnost delšího textu.',
      focusAreas: ['Renovace', 'Sourcing', 'Kurátorství'],
      stats: [{ value: '120+', label: 'vyhledaných kusů' }, { value: '17', label: 'historických realizací' }, { value: '1:1', label: 'kurátorský přístup' }],
      references: [
        { name: 'Salon Alma', meta: 'Praha 2 • 128 m2', summary: 'Rekonstrukce s citem pro původní proporce, materiály a historické vrstvy prostoru.' },
        { name: 'Maison Rue', meta: 'Kutná Hora • 146 m2', summary: 'Dům, kde web i interiér pracují s dojmem kultivované nostalgie.' },
      ],
      footerNote: 'Praha • renovace a sourcing autentických prvků',
    },
    retro: {
      brand: 'Orbit Living',
      kicker: 'Hravý retro studio web',
      heading: 'Výrazný web pro značku, která chce energii, barvu a trochu nadsázky.',
      lead: 'Silnější tvary, viditelné akcenty a hravější rozložení. Vhodné pro odlišení a zapamatovatelnost.',
      primaryCta: 'Chci návrh stylu',
      secondaryCta: 'Mrknout na projekty',
      services: ['Koncept interiéru', 'Moodboardy', 'Výběr statement prvků'],
      projectName: 'Studio Nova',
      projectMeta: 'Plzeň • 76 m2 • Retro kitchen concept',
      quote: 'Je to odvážné, zábavné a nepřehlédnutelné.',
      founder: 'Marek Radan',
      role: 'Creative lead a concept designer',
      about: 'Značka potřebuje energii, rytmus a zapamatovatelnost. Web tedy může být hravý, ale hierarchie i kontrast musí zůstat velmi disciplinované.',
      focusAreas: ['Koncept', 'Moodboards', 'Statement prvky'],
      stats: [{ value: '33', label: 'konceptů ročně' }, { value: '7 dní', label: 'na vizuální směr' }, { value: '100 %', label: 'odlišitelnost značky' }],
      references: [
        { name: 'Studio Nova', meta: 'Plzeň • 76 m2', summary: 'Výrazná kuchyň s barvou, nadsázkou a jasně čitelným charakterem.' },
        { name: 'House Orbit', meta: 'Praha • 124 m2', summary: 'Rezidenční projekt, který kombinuje vintage odkazy s moderní použitelností.' },
      ],
      footerNote: 'Plzeň • Praha • koncepty pro odlišené interiéry',
    },
    contemporary: {
      brand: 'Metric Studio',
      kicker: 'Současný premium studio web',
      heading: 'Sebejistý web pro studio, které prodává preciznost a výsledný standard.',
      lead: 'Čistý městský přístup, jasná hierarchie, elegantní rytmus a reprezentativní dojem pro premium klientelu.',
      primaryCta: 'Nezávazná poptávka',
      secondaryCta: 'Vybrané realizace',
      services: ['Kompletní interiér', 'Luxusní rezidence', 'Design management'],
      projectName: 'Residence Axis',
      projectMeta: 'Praha • 220 m2 • Premium apartment',
      quote: 'Je to přesně ten typ prezentace, který prodává kvalitu.',
      founder: 'Nikola Urban',
      role: 'Managing designer a project director',
      about: 'Současný premium web musí být reprezentativní, sebejistý a velmi čistý. Důležitá je čitelná typografie, vzduch a disciplinované kontrasty.',
      focusAreas: ['Rezidence', 'Premium', 'Management'],
      stats: [{ value: '2200 m2', label: 'premium ploch' }, { value: '26', label: 'luxusních realizací' }, { value: '6 fází', label: 'vedení projektu' }],
      references: [
        { name: 'Residence Axis', meta: 'Praha • 220 m2', summary: 'Kompletní byt pro náročného klienta s důrazem na standard, servis a detail.' },
        { name: 'Penthouse Grid', meta: 'Bratislava • 260 m2', summary: 'Městský projekt, který staví na jasné hierarchii, materiálech a klientské zkušenosti.' },
      ],
      footerNote: 'Praha • premium interiéry a design management',
    },
  };

  return scenes[style.id] || scenes.contemporary;
}

function renderMosaic(styleId) {
  const variantMap = {
    minimalist: ['large', 'line', 'line', 'quiet'],
    scandinavian: ['large', 'soft', 'soft', 'glow'],
    japandi: ['large', 'stone', 'stone', 'sun'],
    industrial: ['large', 'grid', 'grid', 'metal'],
    boho: ['large', 'organic', 'organic', 'woven'],
    vintage: ['large', 'paper', 'paper', 'frame'],
    retro: ['large', 'pop', 'pop', 'orbit'],
    contemporary: ['large', 'glass', 'glass', 'angle'],
  };
  const variants = variantMap[styleId] || variantMap.contemporary;

  return `
    <div class="website-mosaic website-mosaic--${styleId}">
      ${variants.map((variant) => `<span class="website-mosaic__block website-mosaic__block--${variant}"></span>`).join('')}
    </div>
  `;
}

export function renderPreview({ style, uiStyle, fonts, identity, palette, viewportMode }) {
  const scene = {
    ...getStyleScene(style),
    ...getIdentityScene(identity.id),
  };
  const previewVars = [
    `--preview-bg:${palette.colors.bg}`,
    `--preview-surface:${palette.colors.surface}`,
    `--preview-text:${palette.colors.text}`,
    `--preview-muted:${palette.colors.muted}`,
    `--preview-primary:${palette.colors.primary}`,
    `--preview-secondary:${palette.colors.secondary}`,
    `--preview-accent:${palette.colors.accent}`,
    `--font-heading:'${fonts.heading}', serif`,
    `--font-body:'${fonts.body}', sans-serif`,
    `--hero-image:${scene.heroImage}`,
  ].join(';');

  return `
    <section class="website-preview preview-shell--${uiStyle.preview.shell} preview-shell--${style.id} website-canvas website-canvas--${viewportMode} website-canvas--${style.id}" style="${previewVars}">
      <header class="website-header">
        <a href="#" class="website-brand">${scene.brand}</a>
        ${renderNavLinks(viewportMode, style.id)}
        <a href="#" class="website-header-cta">${scene.primaryCta}</a>
      </header>

      <section class="website-hero website-hero--${style.id}">
        <div class="website-hero__copy">
          <p class="website-overline">${scene.kicker}</p>
          <h3>${scene.heading}</h3>
          <p>${scene.lead} UI vrstva pracuje s principem: ${uiStyle.preview.notes}</p>
          <div class="website-actions">
            <button class="preview-button" type="button">${scene.primaryCta}</button>
            <button class="preview-button preview-button--ghost" type="button">${scene.secondaryCta}</button>
          </div>
        </div>
      </section>

      <section class="website-section website-section--about">
        <div class="website-section-heading">
          <p class="website-overline">Představení</p>
          <h4>${scene.aboutTitle}</h4>
          <p>${scene.aboutLead}</p>
        </div>

        <div class="website-about-layout">
          <article class="website-profile-card">
            <p class="preview-card__eyebrow">Fokus webu</p>
            <h4>${scene.focusAreas[0]}</h4>
            <p class="website-profile-role">${identity.label}</p>
            <p>${scene.aboutBody}</p>
          </article>

          <article class="website-story-card">
            <p class="preview-card__eyebrow">Jak obsah funguje</p>
            <h4>Jasná struktura a dobrý kontrast</h4>
            <p>${scene.aboutBody}</p>
            <div class="website-stat-row">
              ${renderStatRow(scene.stats)}
            </div>
          </article>
        </div>
      </section>

      <section class="website-section website-section--services">
        <div class="website-section-heading">
          <p class="website-overline">Služby</p>
          <h4>Co klient na webu rychle pochopí</h4>
          <p>Nabídka je rozdělená do jasných, čitelných bloků s dostatkem prostoru a dobrým kontrastem.</p>
        </div>

        <div class="website-service-grid">
          ${renderServiceCards(scene, style)}
        </div>
      </section>

      <section class="website-section website-section--references">
        <div class="website-section-heading">
          <p class="website-overline">Reference</p>
          <h4>Realizace a fokus oblasti</h4>
          <p>Pro různé typy klientů je připravený jednoduchý filtr formou tabů a pod ním čitelné reference.</p>
        </div>

        <div class="website-tabs">
          ${renderFocusTabs(scene.focusAreas)}
        </div>

        <article class="website-tab-panel">
          <strong>${scene.focusAreas[0]}</strong>
          <p>${scene.lead}</p>
        </article>

        <div class="website-reference-grid">
          ${renderReferenceCards(scene.references)}
          <article class="preview-card preview-card--quote">
            <p class="preview-card__eyebrow">Reakce klienta</p>
            <blockquote>"${scene.quote}"</blockquote>
            <p class="preview-caption">Prompty: ${style.promptName}, ${uiStyle.promptName}</p>
          </article>
        </div>
      </section>

      <footer class="website-footer">
        <div class="website-footer__brand">
          <a href="#" class="website-brand">${scene.brand}</a>
          <p>${scene.footerNote}</p>
        </div>
        <div class="website-footer__nav">
          ${scene.services.map((service) => `<a href="#">${service}</a>`).join('')}
        </div>
        <div class="website-footer__cta">
          <strong>${scene.primaryCta}</strong>
          <span>${palette.label} • ${fonts.heading} / ${fonts.body}</span>
        </div>
      </footer>
    </section>
  `;
}
