# QA

## 2026-09-27 — Wave 1 fix pass (branch `wave1/codiak-fix`)

Checked on a local production build (`npm run build && next start -p 3101`) with the Playwright QA helper at 1440×900, 1366×768, 390×844 and 375×667.

| Check | Result |
| --- | --- |
| `next build` | pass |
| `tsc --noEmit` | pass |
| Lint / tests | n/a (no scripts in package.json) |
| Horizontal overflow (all 4 viewports, `/` and `/outreach`) | none |
| Broken images / console errors / failed requests | none (logo + plumber image hotlinked from redlands-plumbing.com load) |
| H1 + both CTAs above the fold at 390 / 375 | pass |
| Desktop nav (Services, Service Area, About, Reviews, Contact) | pass |
| Mobile menu (390 / 375) | pass — "Open menu" button reveals all five section links; closes on link tap or Escape |
| CTAs | `tel:+19094357865` (header, hero, service area, contact), `mailto:info@Redlands-Plumbing.com` |
| Placeholder / agency terms on `/` | none |
| `/outreach` | 200, dedicated page, `noindex, nofollow`, not linked from `/`, prospect-specific, signed Vincent, 3 current before/after captures |

Facts re-checked against redlands-plumbing.com (home, /about-us, /contact-us) on 2026-09-27: phone (909) 435-7865, info@Redlands-Plumbing.com, Lic. 1065137, Coty Carr owner/operator, 24/7 emergency service, service area Redlands / Yucaipa / Calimesa and surrounding cities, Yelp reviews quoted on the homepage. `/portfolio/tankless-water-heater/` still shows Lorem Ipsum (operator-only pitch hinge on `/outreach`; the QA placeholder scan flags that line by design).

### Captures (`public/outreach/`)
- `before-desktop.jpg` — live redlands-plumbing.com, 1440×900
- `after-desktop.jpg` — demo homepage, 1440×900
- `after-mobile.jpg` — demo homepage, 390×844

Regenerate after any public-page visual change: capture the viewport (not full page) at device scale 1, JPEG quality ~82, same filenames.
