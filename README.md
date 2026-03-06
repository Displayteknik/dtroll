# DTRoll - Portabel Digital LED-Rollup

Detta projekt innehåller frontend-koden (HTML, CSS, JS) för landningssidan **DTRoll - Displayteknik**. Sidan är byggd för att vara snabb, responsiv och enkel att underhålla, med en modern mörk design och scroll-animeringar.

## 📂 Projektstruktur

Projektet följer en klassisk statisk webb-struktur:

*   **`index.html`**: Huvudfilen som innehåller sidans hela struktur. Här finns den fasta koden för Hero-sektionen, Funktioner, Teknisk specifikation, FAQ och Offertformuläret.
*   **`assets/css/style.css`**: Innehåller all design och styling. Designen använder CSS-variabler (`:root`) i början av filen för att enkelt kunna ändra färger och typsnitt.
*   **`assets/js/main.js`**: Hanterar interaktivitet. Detta inkluderar:
    *   *IntersectionObserver:* Används för att element ska tona in (`reveal`) när man scrollar ner på sidan.
    *   *FAQ-dragspel:* Logiken för att öppna och stänga frågor och svar.
    *   *Formulärhantering (AJAX):* Fångar submit-eventet från offertförfrågan och skickar det i bakgrunden så att sidan inte laddas om.
*   **`assets/video/`**: BÖR ligga här. Om filen `dtroll-hero.mp4` saknas, se till att lägga tillbaka den i mappen vid nya deploymenter (av utrymmesskäl kanske den inte alltid versionshanteras).
*   **`netlify.toml`**: Konfigurationsfil för deployment-plattformen Netlify. Ställer in säkerhets-headers (CSP, X-Frame-Options) och cache-regler för statiska filer för bättre prestanda.

## 🚀 Formulär & E-postaviseringar (Netlify Forms)

Sidan använder **Netlify Forms** för att hantera kontaktformuläret helt utan en egen backend-server (PHP/Node.js).

*   I `index.html` har `<form>` attributen `name="contact"`, `method="POST"`, `action="/"` och `data-netlify="true"`. Detta säger till Netlifys bygg-robot att lyssna efter formulär-data.
*   När någon besöker sidan och skickar formuläret triggar `main.js` en POST-request via `fetch()` i bakgrunden.
*   Du kan läsa inskickade meddelanden och ställa in e-postaviseringar genom att logga in på:
    [Netlify Dashboard -> dtroll-displayteknik -> Site settings -> Forms -> Form notifications](https://app.netlify.com/sites/dtroll-displayteknik/settings/forms).

## 🛠 Utveckling & Ändringar

### För att köra projektet lokalt:
Eftersom sidan gör under-the-hood API-anrop (som fetch i formuläret) är det bäst att inte bara dubbelklicka på `index.html`. Kör istället en enkel lokal webbserver.

Om du har Node.js installerat:
```bash
npx serve
```
Gå sedan till `http://localhost:3000` i din webbläsare.

### För att uppdatera innehåll:
Alla texter och sektioner ligger direkt i `index.html`. Behöver du byta logga eller videofiler, uppdatera länkarna i HTML-filen.

## ☁️ Deployment (Netlify)

Projektet är kopplat till Netlify för hosting (`https://dtroll-displayteknik.netlify.app/`).

Det enklaste sättet att publicera uppdateringar just nu är via Netlify CLI.
Från terminalen i denna mapp:
```bash
npx netlify-cli deploy --prod --dir . --site 8bc06da1-c34f-4ff6-9bf8-8668e95dbcc7
```

*Obs: Om vi längre fram väljer att publicera koden till en fjärr-repo på GitHub, kan deploymenten automatiseras så att sidan uppdateras varje gång man gör en "git push".*

---
Skapad: 2026-03-06
