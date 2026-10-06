# QA

## 2026-10-05 — Homepage rebuild (branch `claude/lucid-turing-59bcdj`)

Local production build (`npm run build && next start -p 3101`), Playwright + Chromium 1194, axe-core 4.x, Lighthouse 12 (default simulated throttling). Sandbox egress blocks redlands-plumbing.com, so the hotlinked logo did not load locally (wordmark fallback shown); that is the only console error.

| Check | Result |
| --- | --- |
| `next build`, `tsc --noEmit` | pass |
| Horizontal overflow at 375 / 430 / 768 / 1440 | none |
| Mobile menu | opens, focuses first link, closes on Esc (focus returns to button), outside click and link tap |
| Anchor offset | section headings land below the sticky header |
| Mobile contact bar | footer padded so nothing is covered (incl. iOS safe area) |
| Estimate form | empty submit shows 4 field errors and focuses the first; short phone rejected; valid submit requests `mailto:info@redlands-plumbing.com` with subject/body prefilled (captured via CDP, nothing sent) and shows honest "press Send in your email app" status + copy fallback |
| Links | all `tel:+19094357865`, all `mailto:info@redlands-plumbing.com`; no dead in-page anchors; external links `noopener noreferrer` |
| Keyboard | first Tab = Skip to content; visible red focus ring on dark and light |
| axe (wcag2a/aa, 21aa, best-practice) at 1440 and 375 | 0 violations |
| Lighthouse mobile | Perf 98, A11y 100, Best Practices 96 (console error = blocked logo), SEO 63 (intentional `noindex`); LCP 2.3 s, CLS 0.003, TBT 40 ms |
| Lighthouse desktop | Perf 100, A11y 100; LCP 0.5 s, CLS 0.001 |

Lab numbers on a local machine, not field data. `/outreach` re-captured (`after-desktop.jpg`, `after-mobile.jpg`).

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
