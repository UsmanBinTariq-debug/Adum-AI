# Homepage polish + contact & style upgrades

## What changes

### FAQ moves
- Remove the FAQ block from the homepage.
- Add it to the Contact page, below the email card, with the FAQ structured data moved there too (so search engines still pick it up).

### Reviews become a moving strip
- The three client reviews turn into a continuously scrolling horizontal marquee that glides right-to-left, pauses when you hover, and stops for visitors who prefer reduced motion.

### More ways to get in touch
- Contact page gains a clear list: email (live), phone and social links as clearly marked placeholders for you to fill in later.
- Footer gains the same contact block plus social icons (placeholder links).
- Every page ends with a clear ask: services/about/case studies/blog get a closing call-to-action band pointing to Contact, and article pages get a "share this" plus "read more" prompt.

### Visual upgrades
- Subtle grain texture layered over the dark background site-wide so it stops looking flat.
- Marquee strip of service names / industries running across the page.
- Glass-style cards (frosted, translucent) for the review and service cards.
- Bold neobrutalist buttons (hard edge, offset shadow, press-down on click) as a new button style used for main calls to action.
- Animated preloader on first load: the logo with a brief glow/progress animation, then it fades away.

## Technical notes

- `src/routes/index.tsx`: drop FAQ section + FAQ JSON-LD; replace reviews grid with new `<ReviewMarquee />`; insert `<Marquee />` service strip.
- `src/routes/contact.tsx`: add FAQ accordion + `FAQPage` JSON-LD, contact-method list.
- New components under `src/components/site/`: `Marquee.tsx` (CSS keyframe duplicate-track loop), `ReviewMarquee.tsx`, `Preloader.tsx` (mounted in `__root.tsx`, hides after hydration + timeout, skipped for reduced motion), `ContactMethods.tsx`.
- `src/styles.css`: `@utility grain` (SVG fractal-noise data URI overlay, low opacity, `pointer-events-none`), `@utility glass` (translucent bg + `backdrop-blur`), `@utility neo-btn` (offset shadow, active translate), marquee keyframes.
- `CtaButton.tsx`: add a `neo` variant; no color literals — all tokens from `styles.css`.
- Placeholder phone/social values live in `src/lib/site.ts` (`CONTACT_PHONE`, `SOCIAL_LINKS`) so you can swap them in one place.

## Note
Phone number and social profile URLs will be obvious placeholders (e.g. "Add your number") — send me the real ones and I'll drop them in.
