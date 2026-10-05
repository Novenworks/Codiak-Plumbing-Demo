# Changelog

## 2026-10-05
- Rebuilt the homepage: new type system (Archivo, self-hosted via next/font), brand black/red palette, decision-led layout (repairs vs. projects lanes, 3-step process, owner fact sheet, featured review, SVG service-area map, contact + estimate form)
- Removed the stock plumber cutout; hero now leads with the customer need, one primary Call action and a verified-facts panel
- Rewrote all copy in the business's voice; removed the "California corporation" line (conflicts with CSLB sole-ownership record)
- Added estimate form that opens a prefilled email (no backend exists; status copy says so); mobile contact bar; skip link; JSON-LD `Plumber`
- Logo now hides gracefully if the hotlink fails; added stand-in favicon
- Docs: facts/verification table in BRIEF.md; asset plan and QA updated; /outreach captures refreshed

## 2026-09-27
- Replaced the homepage "Work" section (internal critique copy about Lorem Ipsum) with a business-voice "Service area" section; nav link renamed to Service Area
- Rewrote narrator/meta lines on the homepage into the business's own voice (hero image alt, 24/7 line, owner line, reviews heading and Yelp attribution) — no facts changed
- Added an accessible mobile menu (client component, no new dependencies) so section links are reachable below `md`
- /outreach: added current before/after captures (live site desktop; demo desktop + mobile) under `public/outreach/`
- Added docs/QA.md

## 2026-09-08
- Repo created under Novenworks/Codiak-Plumbing-Demo
- Speculative Next.js demo deployed to Vercel
- First-party assets: logo + site-hosted plumber image only
