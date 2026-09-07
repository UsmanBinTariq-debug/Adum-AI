# Industry pages + animated results counters

## 1. Three dedicated industry pages

New pages at `/plumbers`, `/dentists`, `/real-estate`, each written only for that trade:

- Hero with an industry headline, the industry photo already on the site, and a Contact call to action.
- "Where you're losing leads" — 3-4 pain points specific to that industry (after-hours emergency calls for plumbers, no-shows and front-desk load for dentists, slow portal replies for agents).
- "What we install for you" — the same five services, but each described in that industry's words.
- The matching case study, pulled in with its real numbers and a link to the full story.
- Industry FAQ (3-4 questions) with FAQ structured data so it can show in search results.
- Closing call-to-action band to Contact.

Each page gets its own search title, description and social preview text, plus breadcrumbs. The three pages are added to the sitemap, to `llms.txt`, and linked from: the homepage "Built specifically for" cards, the Services page, and the footer.

## 2. Animated numbers on the homepage

A results band placed right after the top of the homepage (below the strip of services), showing four big figures that count up as they scroll into view:

- 3x after-hours jobs booked
- 41% fewer no-shows
- 5x faster lead follow-up
- Under 3 min average first response

Each number has a short caption naming the industry it came from, so the claim is traceable to a real case study. Counting is skipped for visitors who prefer reduced motion — they see the final numbers immediately. The same band is reused on each industry page with that industry's own numbers, and the band ends with a "See the full story →" link to that industry's full case study — the numbers grab attention, the story closes it.

## Technical notes

- New routes: `src/routes/plumbers.tsx`, `src/routes/dentists.tsx`, `src/routes/real-estate.tsx`, all built from one shared `IndustryPage` component in `src/components/site/IndustryPage.tsx` driven by data.
- New data in `src/lib/site.ts`: `INDUSTRY_PAGES` (slug, industry key, hero copy, pain points, per-service angle, FAQ, stats, case-study slug) and a `STATS` array for the homepage band. No copy hardcoded in components.
- New `src/components/site/StatCounter.tsx` + `StatsBand.tsx`: IntersectionObserver trigger, `requestAnimationFrame` count-up, parses value/suffix from the data string, respects `prefers-reduced-motion`.
- Reuse existing `SiteLayout`, `PageHero`, `CtaBand`, `Reveal`, `Breadcrumbs`, `industryImage()`, `pageMeta`, `breadcrumbSchema`; FAQ JSON-LD mirrors the Contact page pattern.
- Update `src/routes/sitemap[.]xml.ts`, `public/llms.txt`, `Footer.tsx`, homepage industry cards, and `services.tsx` links.
- Styling stays on existing tokens — no new colors.
