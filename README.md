# ChooseDesign

Jednostrankovy konfigurator designovych preferenci pro klienty. Klient si na webu zkousi kombinace stylu interieru, UI stylu, font pairingy a barevnost. Finalni kombinaci odesle jednim kliknutim a system posle stejny odkaz vam i klientovi e-mailem.

## Stack

- Vite + vanilla JS/CSS
- Netlify Functions
- Resend pro e-mailing

## Lokalne spusteni

1. `npm install`
2. Zkopirujte `.env.example` do `.env` a doplnte Resend udaje.
3. Frontend: `npm run dev`
4. Pokud chcete lokalne testovat i Netlify Function, pouzijte Netlify CLI a `netlify dev`.

## Build

- `npm run build`

## Environment variables

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `LEAD_NOTIFICATION_EMAIL`

## Co je hotove v prvni iteraci

- datovy model pro styly, UI varianty, font pairingy a 10 palet
- rezim vlastni barvy s generovanim 5 palet
- synchronizace designovych voleb do URL
- zive preview s menicimi se tokeny
- formulář pro jmeno/e-mail a submit do Netlify Function
- odeslani potvrzeni vam i klientovi pres Resend

## Dalsi vhodne kroky

- pridat jemnejsi rate limiting a audit log
- doplnit analytics pro nejcastejsi kombinace
- oddelit produkcni a staging e-mail sablony