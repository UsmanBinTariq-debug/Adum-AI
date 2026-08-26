# Adum AI Launch

Build a complete multi-page professional website for an AI automation agency called "Adum AI" (domain: adumai.com).

---

BRAND

- Agency name: Adum AI

- Logo: [UPLOAD YOUR LOGO FILE HERE]

- Tagline: "We Help Plumbers, Dentists & Real Estate Agents Stop Losing Leads — 24/7, On Autopilot"

- Tone: Direct, confident, results-focused. No fluff. Speak to busy business owners, not tech people.

- Color palette: Dark background (near black), electric blue or cyan accent, white text. Modern, premium, trustworthy.

- Font: Clean sans-serif. Suggest Inter or Plus Jakarta Sans.

---

INDUSTRIES SERVED (call these out explicitly throughout the site)

1. Plumbers

2. Dentists

3. Real Estate Agents

---

SERVICES (5 core services — each gets its own section/card)

1. 24/7 Instant Lead Response — New leads get a personalized reply in under 3 minutes, any time of day.

2. AI Voice Receptionist — Answers missed calls, qualifies the lead, books into calendar, texts the owner.

3. Missed Call Recovery — When a call is missed, automatically texts the lead back and notifies the owner via SMS.

4. Appointment Reminder & No-Show Recovery — Automated reminders that reduce no-shows and recover cancelled slots.

5. Monthly Retainer & Maintenance — Ongoing monitoring, updates, and optimization of all automation systems.

---

PAGES TO BUILD

1. HOME PAGE

Structure (top to bottom):

- Sticky header with logo (left), nav links (center), "Book a Free Call" CTA button (right)

- Hero section: Bold headline targeting plumbers, dentists, real estate agents. Subheadline explaining what we do. Primary CTA button "Book a Free Call" linking to Calendly: [INSERT CALENDLY LINK]. Secondary link "See How It Works" scrolling to services section.

- USP bar (full width strip below hero): 3–4 short value statements. Examples: "Reply in Under 3 Minutes", "Zero Tech Knowledge Needed", "No Long-Term Contracts", "Setup in 7 Days"

- Social proof strip: logos or names of industries served

- Services section: 5 service cards with icon, name, 2-line description, "Learn More" link

- How It Works section: 3-step process. Step 1: Book a free call. Step 2: We build your system. Step 3: Leads get followed up automatically.

- Case Studies preview: 3 case study cards with result headline, industry tag, short summary, "Read Full Case Study" link

- FAQ section: 5 FAQs with expand/collapse accordion

  Q1: How long does setup take?

  Q2: Do I need any technical knowledge?

  Q3: What industries do you work with?

  Q4: How much does it cost?

  Q5: What happens after the system is built?

- Team photo section: Heading "Meet the Team", placeholder for photo, 2–3 line description

- Real reviews section: Minimum 3 review cards with star rating, quote, name, business type

- Response time promise banner: "We respond to every inquiry within 24 hours — guaranteed."

- Final CTA section: Bold headline, "Book a Free Call" button

- Footer: Logo, nav links, Privacy Policy link, copyright. Social links if applicable.

- Sticky mobile CTA: Fixed bottom bar on mobile only showing "Book a Free Call" button

2. SERVICES PAGE

- Page hero with headline and subheadline

- One detailed section per service (5 total): service name, full description, who it's for, what problem it solves, expected result

- CTA after each service section

- Breadcrumb: Home > Services

3. CASE STUDIES PAGE

- Page hero

- Grid of case study cards (placeholders for now, I will fill content)

- Each card: Industry tag, result headline, 2-line summary, "Read Full Case Study" button

- Breadcrumb: Home > Case Studies

4. INDIVIDUAL CASE STUDY PAGE (template)

- Breadcrumb: Home > Case Studies > [Case Study Name]

- Client industry, problem, solution, results (with numbers)

- CTA at bottom

5. BLOG PAGE

- Page hero

- Grid of blog post cards (placeholders)

- Each card: Title, category tag, date, 1-line summary, "Read More" link

- Breadcrumb: Home > Blog

6. INDIVIDUAL BLOG POST PAGE (template)

- Breadcrumb: Home > Blog > [Post Title]

- Full article layout with sidebar CTA

- Internal links within content

7. ABOUT PAGE

- Who we are

- Our mission

- Team photo section

- Why we built Adum AI

- CTA

- Breadcrumb: Home > About

8. CONTACT PAGE

- Contact form: Name, Business Type (dropdown: Plumber / Dentist / Real Estate Agent / Other), Email, Phone, Message, Submit button

- Response time promise: "We'll get back to you within 24 hours."

- Calendly embed for direct booking

- Breadcrumb: Home > Contact

9. THANK YOU PAGE

- Shown after form submission

- Headline: "Thanks! We'll be in touch within 24 hours."

- What happens next (3 steps)

- Link back to homepage

- No header/footer nav (reduce exit points)

10. PRIVACY POLICY PAGE

- Standard privacy policy covering data collection, cookies, Google Analytics

- Auto-generated or template fine

- Breadcrumb: Home > Privacy Policy

11. CUSTOM 404 PAGE

- Friendly message

- Link back to homepage and contact page

- Same header/footer as rest of site

---

SEO REQUIREMENTS (apply to every page)

- Unique page title tag per page following format: [Page Topic] | Adum AI

- Unique meta description per page (under 160 characters, benefit-focused)

- Open Graph tags on every page: og:title, og:description, og:image, og:url

- Social share image: 1200x630px branded image used as default OG image

- Alt text on every image (descriptive, keyword-relevant)

- Canonical tags on every page

- Breadcrumb navigation with BreadcrumbList schema markup (JSON-LD)

- FAQ schema markup (JSON-LD) on homepage FAQ section

- LocalBusiness / ProfessionalService schema markup (JSON-LD) in site header or homepage:

  Name: Adum AI

  URL: https://adumai.com

  Description: AI automation agency helping plumbers, dentists, and real estate agents automate lead follow-up and appointment booking.

  Service area: United States

- robots.txt file:

  User-agent: *

  Allow: /

  Disallow: /thank-you

  Sitemap: https://adumai.com/sitemap.xml

- sitemap.xml covering all public pages

- llms.txt file at /llms.txt for AI model discoverability:

  # Adum AI

  > AI automation agency helping plumbers, dentists, and real estate agents automate lead response, missed call recovery, and appointment reminders.

  ## Services

  - 24/7 Instant Lead Response

  - AI Voice Receptionist

  - Missed Call Recovery

  - Appointment Reminder & No-Show Recovery

  - Monthly Retainer & Maintenance

  ## Contact

  - Website: https://adumai.com

  - Booking: [INSERT CALENDLY LINK]

---

ANALYTICS & TRACKING

- Google Analytics 4: Add GA4 script placeholder with comment: <!-- GA4: Replace G-XXXXXXXX with your Measurement ID -->

- Google Search Console: Add meta verification tag placeholder with comment: <!-- GSC: Replace content value with your verification code -->

- Bing Webmaster: Add meta verification tag placeholder with comment: <!-- Bing: Replace content value with your verification code -->

---

INTERNAL LINKING RULES

- Every service card on homepage links to Services page

- Every case study card links to its individual case study page

- Every blog card links to its individual blog post page

- Footer links to: Home, Services, Case Studies, Blog, About, Contact, Privacy Policy

- Thank You page links back to Home

- 404 page links to Home and Contact

- About page links to Services and Contact

- Services page links to Case Studies and Contact

---

PERFORMANCE REQUIREMENTS

- No heavy JS frameworks unless necessary

- Optimized image loading (lazy load below the fold)

- Minified CSS and JS

- Fast load time prioritized

---

MAPS + DIRECTIONS

- Since this is a remote US-targeting agency, add a section on the Contact page stating service area: "We serve clients across the United States — fully remote."

- Embed a simple US map graphic or placeholder (no specific address needed)

---

PLACEHOLDER CONTENT NOTES

- Team photo: placeholder image with label "Team Photo — Replace with real photo"

- Real reviews: I will provide actual review content — use 3 placeholder review cards for now

- Case studies: I will provide actual content — use 3 placeholder cards for now

- Blog posts: Use 3 placeholder cards for now

- Calendly link: [INSERT CALENDLY LINK] — replace all instances when I provide it

- Logo: [I WILL UPLOAD THIS]

---

MOBILE REQUIREMENTS

- Fully responsive across all screen sizes

- Sticky bottom CTA bar on mobile only: "📞 Book a Free Call" fixed to bottom of viewport, links to Calendly

- hamburger menu on mobile

---

DO NOT BUILD

- Client login dashboards

- Chatbot widget

- Bundled chatbot + booking + reviews as a single vague package

- Any content framed as "AI for small businesses" generically — always tie to specific industries

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/093ad7a7-de47-47a6-8839-9d554283f3e7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
