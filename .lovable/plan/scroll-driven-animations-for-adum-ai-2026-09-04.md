# Scroll-Driven Animations for Adum AI

## Goal
Make the site feel alive while scrolling: sections reveal with motion, and the "How it works" steps (Step 1 → 2 → 3) animate in sequence tied to scroll position.

## What we'll build

### 1. Scroll-reveal animation system (site-wide)
- Add a small reusable `Reveal` component (uses IntersectionObserver — no new dependencies needed, works with SSR).
- Wrap key sections on the home page (USPs, industries, services cards, how-it-works, case studies, FAQ, reviews, blog) so they fade + slide up as they enter the viewport.
- Cards in grids get a staggered delay (card 1, then 2, then 3) for a cascading feel.
- Subtle: 0.4–0.6s ease, small 16px rise — premium, not gimmicky.

### 2. Scroll-linked "How it works" steps (the centerpiece)
Redesign the home page "How it works" section as a sticky scroll experience:
- The section pins visually while the user scrolls through it.
- A vertical progress line fills as you scroll.
- Step 1 activates first; as you keep scrolling, Step 1 dims and Step 2 lights up with the electric-blue accent, then Step 3.
- The active step's card scales/glows slightly; inactive steps sit muted.
- On mobile it falls back to the staggered reveal (no pinning) so it stays smooth and readable.

### 3. Apply the same reveal treatment to inner pages
Services, Case Studies, Blog, About, Contact — section headers and card grids reveal on scroll (lighter touch than home).

## Technical notes
- No animation library install required — IntersectionObserver + CSS transitions. If we want smoother scroll-linked progress for the sticky steps, we can add `motion` (Framer Motion) which supports `useScroll`; that's the one package we may add.
- Respect `prefers-reduced-motion`: animations disable for users who opt out.
- No layout/SEO content changes; purely presentational.

## Verification
- Build must be clean.
- Playwright scroll-through of the home page with screenshots at multiple scroll positions to confirm reveals and step progression fire correctly.
