## Plan: Web konfigurátor designových preferencí

Vytvořit statický prezentační web nasazený na Netlify, na kterém si klient interaktivně kombinuje styl interiérového designu, UI styl, font pairing a barevnou paletu, okamžitě vidí změnu preview a jedním kliknutím odešle finální konfiguraci. Doporučená architektura je Vite + vanilla JS/CSS pro frontend, Netlify Functions pro serverless logiku a Resend pro odeslání potvrzovacího e-mailu vám i klientovi. Stav konfigurace se bude serializovat do URL parametrů, aby šla stejná kombinace obnovit, uložit a konzultovat zpětně.

**Steps**
1. Fáze 1: Základ projektu
   Inicializovat nový frontend projekt pro Netlify deployment s minimem závislostí. Připravit strukturu pro statický frontend, assets, data konfigurace a serverless funkce. Součástí je nastavení build výstupu, lokálního vývoje a environment proměnných pro Resend a cílový e-mail.
2. Fáze 2: Datový model konfigurátoru
   Navrhnout jednotný zdroj dat pro všechny volby: design styly, UI styly, font pairingy, předpřipravené barevné palety a pravidla pro generování palet z jedné klientem zvolené barvy. Každá volba musí mít stabilní identifikátor do URL, lidský label, popis, prompt-friendly název a preview tokeny pro okamžitou aplikaci do UI.
3. Fáze 3: Interaktivní preview
   Postavit jednu hlavní stránku s rozdělením na ovládací panel a živé preview. Preview musí měnit layout, typografii, barevnost, povrchy, rounded/shadow styl a základní UI prvky podle vybrané kombinace. Změny mají být okamžité bez reloadu a musí fungovat na desktopu i mobilu.
4. Fáze 4: URL serializace a sdílení
   Implementovat synchronizaci stavu konfigurátoru do query parametrů, aby každá kombinace měla sdílitelný odkaz. Při načtení stránky se musí URL zpětně načíst do formuláře i preview. Do URL patří jen designové volby a identifikátor kombinace; jméno a e-mail klienta do URL nepatří kvůli soukromí.
5. Fáze 5: Volba barevnosti
   Přidat dva režimy barev: výběr z 10 předpřipravených palet a výběr jedné vlastní barvy klientem. Ve druhém režimu se z jedné vstupní barvy dynamicky vygenerují 3–5 harmonických palet, ze kterých si klient jednu zvolí. Generování má být deterministické, aby stejná vstupní barva a stejná pravidla vždy vedly ke stejným výsledkům.
6. Fáze 6: Identifikace klienta a odeslání
   Přidat krátký formulář s poli jméno a e-mail. Odeslání poběží přes Netlify Function, která ověří payload, složí finální veřejný odkaz s query parametry, vytvoří čitelný souhrn výběru a odešle e-mail přes Resend na dvě adresy: vám jako lead a klientovi jako potvrzení. Na frontendu zobrazit úspěšný stav s informací, že identifikátor a odkaz byly odeslány oběma stranám.
7. Fáze 7: Obsah e-mailu a obchodní použitelnost
   Navrhnout předmět a text e-mailu tak, aby byl okamžitě použitelný: jméno klienta, jeho e-mail, datum, identifikátor konfigurace, veřejný odkaz, vybraný styl interiéru, UI styl, font pairing, paleta nebo výchozí barva a stručné prompt názvy. Přidat jednoduchý copy-to-clipboard pro odkaz i ID konfigurace na webu.
8. Fáze 8: Kvalita, přístupnost a UX
   Doladit validace formuláře, loading/error stavy, fallbacky při chybě odeslání, základní přístupnost formulářů a kontrastů, ochranu před dvojím odesláním a jednoduché rate-limiting opatření na serverless vrstvě. Zajistit, že web působí výrazně a ne genericky, ale zároveň zůstává přehledný pro rychlé rozhodnutí klienta.
9. Fáze 9: Nasazení na Netlify
   Nakonfigurovat Netlify build, deploy a environment variables. Připravit produkční doménu/subdoménu, otestovat Netlify Function a ověřit doručitelnost e-mailů přes Resend včetně SPF/DKIM doporučení pro produkci.
10. Fáze 10: Dokumentace a handoff
   Sepsat stručné zadání a provozní dokumentaci: jak přidávat nové styly/palety/fonty, kde se nastavuje cílový e-mail, jak funguje URL schéma, jaké env proměnné jsou potřeba a jak lokálně testovat odeslání.

**Relevant files**
- c:\wamp64\www\ChooseDesign\package.json — definice projektu, skriptů a závislostí pro build/deploy
- c:\wamp64\www\ChooseDesign\vite.config.js nebo vite.config.ts — build konfigurace pro Netlify
- c:\wamp64\www\ChooseDesign\index.html — shell aplikace a root layout
- c:\wamp64\www\ChooseDesign\src\main.js — bootstrap aplikace a inicializace stavu z URL
- c:\wamp64\www\ChooseDesign\src\data\design-options.js — zdroj dat pro styly interiéru, UI, font pairingy a palety
- c:\wamp64\www\ChooseDesign\src\lib\url-state.js — serializace/deserializace query parametrů
- c:\wamp64\www\ChooseDesign\src\lib\palette-generator.js — generování 3–5 palet z jedné vstupní barvy
- c:\wamp64\www\ChooseDesign\src\ui\preview.js — aplikace tokenů do živého preview
- c:\wamp64\www\ChooseDesign\src\ui\form.js — ovládání přepínačů, validací a submit flow
- c:\wamp64\www\ChooseDesign\src\styles\app.css — vizuální systém, CSS proměnné a variantní styly preview
- c:\wamp64\www\ChooseDesign\netlify\functions\send-selection.js — serverless endpoint pro validaci a odeslání e-mailů přes Resend
- c:\wamp64\www\ChooseDesign\netlify.toml — mapování functions/build nastavení pro Netlify
- c:\wamp64\www\ChooseDesign\.env.example — dokumentace nutných proměnných pro lokální běh a deploy
- c:\wamp64\www\ChooseDesign\README.md — technická dokumentace projektu
- c:\wamp64\www\ChooseDesign\PROJECT_BRIEF.md — stručné zadání produktu a scope

**Verification**
1. Ověřit, že každá změna konfigurace okamžitě mění preview a že reload stránky zachová výběr načtením z query parametrů.
2. Ověřit, že sdílený odkaz otevřený v čistém okně obnoví stejnou kombinaci stylu, UI, fontů i palety.
3. Otestovat oba režimy barevnosti: výběr z 10 palet a generování 3–5 palet z jedné barvy, včetně determinismu výsledku.
4. Otestovat formulářové validace pro prázdné/špatné jméno a e-mail a chování při chybě serverless funkce.
5. Odeslat testovací konfiguraci a ověřit, že e-mail přes Resend dorazí vám i klientovi se stejným odkazem a čitelným souhrnem.
6. Ověřit produkční deploy na Netlify včetně nastavení env proměnných a funkčnosti serverless endpointu.
7. Projít základní mobilní a desktop responsive scénáře a zkontrolovat přístupnost formulářových prvků a kontrast textu.

**Decisions**
- Doporučený stack: Vite + vanilla JS/CSS, protože jde o jeden konfigurační flow bez potřeby těžkého frameworku a je vhodný pro rychlé Netlify nasazení.
- E-mailing: Resend přes Netlify Function, protože potřebujete poslat personalizovaný výstup dvěma příjemcům a mít plnou kontrolu nad obsahem zprávy.
- Privacy: URL bude obsahovat pouze volby designu a identifikátor konfigurace; osobní údaje klienta zůstanou jen v payloadu odeslání.
- Scope první verze zahrnuje i generování palet z jedné vstupní barvy, ne jen předpřipravené palety.
- Není potřeba databáze pro MVP; zdrojem pravdy pro obnovu výběru je URL a jednorázové e-mailové potvrzení.

**Further Considerations**
1. Doporučení: v MVP ponechat jednu hlavní preview stránku místo více templates. Zrychlí to dodání a stále to pokryje rozhodování klienta.
2. Doporučení: generovat interní identifikátor konfigurace hashováním výběru + timestampu, aby šel snadno dohledat v e-mailu bez databáze.
3. Doporučení: prompt-friendly názvy uchovávat přímo v datech jednotlivých voleb, aby byly později použitelné i pro AI workflow nebo export briefu.