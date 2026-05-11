## Plan: Web konfigurátor designových preferencí

Vytvořit statický prezentační web na Netlify, na kterém si klient kombinuje styl interiéru, UI styl, font pairing a barevnou paletu, okamžitě vidí změnu preview a jedním kliknutím odešle finální konfiguraci. Doporučený stack je Vite + vanilla JS/CSS pro frontend, Netlify Functions pro serverless logiku a Resend pro potvrzovací e-mail vám i klientovi. Stav konfigurace se ukládá do URL parametrů, aby šla stejná kombinace obnovit a sdílet.

Postup řeš po fázích. V každé iteraci dokonči jednu fázi end-to-end včetně základního ověření, pak pokračuj další.

**Steps**
1. Fáze 1: Základ aplikace a data
   Připravit projekt pro Netlify deployment, základní strukturu frontend/serverless souborů a jednotný datový model pro design styly, UI styly, font pairingy a barevné palety. Každá volba musí mít stabilní identifikátor do URL, čitelný label a tokeny pro preview.
2. Fáze 2: Interaktivní konfigurátor a preview
   Postavit jednu hlavní stránku s ovládacím panelem a živým preview. Preview musí bez reloadu měnit typografii, barvy, povrchy a základní UI prvky podle zvolené kombinace a fungovat na desktopu i mobilu.
3. Fáze 3: URL stav a barevné režimy
   Implementovat synchronizaci stavu do query parametrů a zpětné načtení z URL. Přidat dva režimy barevnosti: předpřipravené palety a výběr jedné vlastní barvy, ze které se deterministicky vygenerují 3–5 harmonických palet.
4. Fáze 4: Formulář a odeslání
   Přidat formulář se jménem a e-mailem. Odeslání poběží přes Netlify Function, která ověří payload, složí veřejný odkaz s query parametry, vytvoří čitelný souhrn výběru a odešle e-mail přes Resend vám i klientovi.
5. Fáze 5: Kvalita, nasazení a dokumentace
   Doladit validace, loading/error stavy, přístupnost, ochranu proti dvojímu odeslání a základní rate limiting. Poté dokončit Netlify konfiguraci, env proměnné, test doručitelnosti e-mailů a stručnou provozní dokumentaci.

**Relevant files**
- c:\wamp64\www\chooseDesign\package.json — skripty a závislosti pro build/deploy
- c:\wamp64\www\chooseDesign\vite.config.mjs — build konfigurace pro Vite a Netlify
- c:\wamp64\www\chooseDesign\index.html — shell aplikace
- c:\wamp64\www\chooseDesign\src\main.js — bootstrap aplikace a řízení stavu
- c:\wamp64\www\chooseDesign\src\data\design-options.js — zdroj dat pro volby konfigurátoru
- c:\wamp64\www\chooseDesign\src\lib\url-state.js — serializace a načítání query parametrů
- c:\wamp64\www\chooseDesign\src\lib\palette-generator.js — generování variant palet z jedné barvy
- c:\wamp64\www\chooseDesign\src\ui\preview.js — živé preview webu
- c:\wamp64\www\chooseDesign\src\ui\form.js — formulář, přepínače a submit flow
- c:\wamp64\www\chooseDesign\src\styles\app.css — vizuální systém a variantní styly
- c:\wamp64\www\chooseDesign\netlify\functions\send-selection.js — serverless odeslání konfigurace
- c:\wamp64\www\chooseDesign\netlify.toml — build a functions konfigurace
- c:\wamp64\www\chooseDesign\README.md — technická dokumentace
- c:\wamp64\www\chooseDesign\PROJECT_BRIEF.md — stručné zadání a scope

**Verification**
1. Ověřit, že každá změna konfigurace okamžitě mění preview a reload stránky obnoví stav z URL.
2. Ověřit, že sdílený odkaz v čistém okně obnoví stejnou kombinaci stylu, UI, fontů i palety.
3. Otestovat předpřipravené palety i generování 3–5 palet z jedné barvy včetně determinismu výsledku.
4. Otestovat validace jména a e-mailu a chování při chybě serverless funkce.
5. Ověřit, že testovací odeslání dorazí vám i klientovi se stejným odkazem a čitelným souhrnem.
6. Ověřit Netlify deploy, env proměnné a základní mobilní/desktop responsive scénáře.

**Decisions**
- Doporučený stack: Vite + vanilla JS/CSS, protože jde o jeden konfigurační flow bez potřeby těžkého frameworku a je vhodný pro rychlé Netlify nasazení.
- E-mailing: Resend přes Netlify Function, protože potřebujete poslat personalizovaný výstup dvěma příjemcům a mít plnou kontrolu nad obsahem zprávy.
- Privacy: URL bude obsahovat pouze volby designu a identifikátor konfigurace; osobní údaje klienta zůstanou jen v payloadu odeslání.
- Scope první verze zahrnuje i generování palet z jedné vstupní barvy, ne jen předpřipravené palety.
- Není potřeba databáze pro MVP; zdrojem pravdy pro obnovu výběru je URL a jednorázové e-mailové potvrzení.

**Further Considerations**
1. Doporučení: v MVP ponechat jednu hlavní preview stránku místo více templates.
2. Doporučení: generovat interní identifikátor konfigurace z výběru a timestampu, aby šel snadno dohledat v e-mailu bez databáze.
3. Doporučení: prompt-friendly názvy uchovávat přímo v datech jednotlivých voleb.