# PROJECT BRIEF

## Cil

Vytvorit web, ktery budete posilat potencialnim klientum. Na webu si samostatne zkombinuji pozadovany styl, UI smer, font pairing a barevnost. Okamzite uvidi, jak volby pusobi dohromady, a vybranou kombinaci vam poslou jednim kliknutim.

## MVP scope

- jedna hlavni stranka s konfiguracnim panelem a zivotym preview
- 8 design stylu interieru
- 4 UI styly
- 8 Google Fonts pairing variant
- 10 pripravenych palet
- rezim jedne vlastni barvy s automatickym navrhem 5 palet
- URL query parametry pro sdileni a zpetne otevreni kombinace
- formular se jmenem a e-mailem klienta
- odeslani stejneho odkazu vam i klientovi pres Resend

## Produktove principy

- web musi byt srozumitelny i pro ne-technicke klienty
- zmena musi byt okamzita, bez reloadu
- design ma pusobit sebevedome a ne genericky
- osobni udaje nesmi byt soucasti URL
- kazda kombinace musi mit citelny identifikator pro e-mail a konzultaci

## Technicke rozhodnuti

- hosting: Netlify
- frontend: Vite + vanilla JS/CSS
- serverless: Netlify Functions
- e-mailing: Resend
- databaze neni nutna pro MVP