# CLAUDE.md – DTRoll Landing Page

## Projektstatus
Aktiv. Live på https://dtroll-displayteknik.netlify.app
GitHub: https://github.com/Displayteknik/dtroll
Netlify site ID: `8bc06da1-c34f-4ff6-9bf8-8668e95dbcc7`

## Teknikstack
- Ren HTML5 + CSS + Vanilla JS — ingen build-pipeline, inga beroenden
- Google Fonts: **Outfit** (rubriker) + **Inter** (brödtext)
- Netlify Forms för kontaktformuläret
- Netlify Hosting med auto-deploy från GitHub (`main`-branchen)

## Filstruktur
```
dtroll/
├── index.html              # All HTML — enda sidan
├── netlify.toml            # Headers, cache, CSP
├── CLAUDE.md               # Den här filen
├── README.md               # Kort projektdokumentation
├── assets/
│   ├── css/style.css       # All styling (~1 200 rader)
│   ├── js/main.js          # Scroll-reveal, FAQ-accordion, formulärskick (~87 rader)
│   ├── img/                # Uppladdade foton — används EJ på sidan (se designregler)
│   └── video/
│       └── dtroll-hero.mp4 # Hero-video (16 MB)
```

## Designsystem
| Token | Värde |
|---|---|
| `--bg` / `--bg-dark` | `#05070A` / `#080B10` |
| `--accent` | `#14E2C4` (teal) |
| `--white` | `#E8EDF4` |
| `--gray-300` | `#9BA3B2` |
| Font rubriker | Outfit 700–900 |
| Font text | Inter 400–600 |
| `--radius-lg` | `16px` |

## Kritiska designregler
1. **Inga riktiga foton** — sidan använder SVG-illustrationer och CSS-mockups. Foton i `assets/img/` är uppladdade av kunden men passar inte sidans premium-stil.
2. **Ingen navbar** — sidan bäddas in som iframe i GHL/MySales. Navigationsbar får INTE läggas till.
3. **CSP `frame-ancestors *`** — måste finnas i `netlify.toml` annars blockeras iframe-inbäddning.
4. **All text på svenska** — knappar, labels, felmeddelanden, allt.
5. **Mörkt premium-tema** — inga ljusa bakgrunder, inga vita sektioner.

## Avsnitt i index.html
| ID | Innehåll |
|---|---|
| `#hero` | Videoloop-hero, H1, CTA-knapp |
| `#benefits` | 4 benefit-cards med SVG-ikoner |
| `.stat-strip` | 4 nyckeltal (nits, pitch, 360°, 5 sek) |
| `#hardvara` | SVG-produktdiagram med callouts + feature-lista |
| `#funktioner` | Scen-illustration (mässmiljö) + feature-lista |
| `#anvandningsomraden` | 3 use case-kort (mässa, butik, reception) |
| `#specifikationer` | Spec-tabell |
| `#faq` | Accordion-FAQ |
| `#kontakt` | Netlify-formulär + kontaktinfo |

## Deploy-workflow
```bash
# Auto-deploy via GitHub (rekommenderat):
git add .
git commit -m "beskriv ändringen"
git push

# Manuell deploy via Netlify CLI:
netlify deploy --dir "C:/Users/hakan/OneDrive/Dokument/Antigravity/dtroll" --site 8bc06da1-c34f-4ff6-9bf8-8668e95dbcc7 --prod
```

## Kontaktinfo (Displayteknik i Sverige AB)
- Telefon: +46 72 541 01 02
- E-post: hakan@displayteknik.se
- Webb: displayteknik.se
- GitHub-konto: Displayteknik

## JS-funktioner (main.js)
- `IntersectionObserver` scroll-reveal: klasser `.reveal` + `.reveal-delay-[1-4]` → `.visible`
- FAQ accordion: `.faq-question` knappar med `aria-expanded` och `maxHeight`-animation
- Netlify AJAX-formulär: POST till `/`, visuell feedback på knappen

## Netlify Forms
Formuläret i `#kontakt` använder `data-netlify="true"` och `form-name="contact"`.
Submissions visas i Netlify-dashboarden under Forms.
