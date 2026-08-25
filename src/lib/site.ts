export const SITE_URL = "https://adumai.com";

/** TODO: replace with the real Calendly link when provided. */
export const CALENDLY_URL = "https://calendly.com/INSERT-CALENDLY-LINK";

export const SITE_NAME = "Adum AI";
export const TAGLINE =
  "We Help Plumbers, Dentists & Real Estate Agents Stop Losing Leads — 24/7, On Autopilot";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: string;
};

export function pageMeta({ title, description, path, type = "website" }: MetaInput) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    }),
  };
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const INDUSTRIES = ["Plumbers", "Dentists", "Real Estate Agents"] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  full: string;
  who: string;
  problem: string;
  result: string;
  icon: "clock" | "phone" | "message" | "calendar" | "wrench";
};

export const SERVICES: Service[] = [
  {
    slug: "instant-lead-response",
    name: "24/7 Instant Lead Response",
    short: "New leads get a personalized reply in under 3 minutes, any time of day.",
    full: "Every form fill, web chat, Facebook lead and marketplace inquiry gets an instant, personalized reply — day, night, weekend or holiday. The system keeps following up until the lead responds or books.",
    who: "Plumbers taking emergency calls after hours, dentists collecting new-patient forms, and real estate agents fielding listing inquiries.",
    problem: "Leads go cold in minutes. Whoever replies first usually wins the job — and that is rarely the business owner on a job site or in a chair.",
    result: "Sub-3-minute first response, around the clock, with no extra staff.",
    icon: "clock",
  },
  {
    slug: "ai-voice-receptionist",
    name: "AI Voice Receptionist",
    short: "Answers missed calls, qualifies the lead, books into your calendar, texts you.",
    full: "A natural-sounding AI receptionist picks up when you can't. It asks your qualifying questions, captures the details, books straight into your calendar and sends you a text summary of the call.",
    who: "Single-truck plumbers, dental practices with a busy front desk, and agents who are constantly showing property.",
    problem: "Ringing out to voicemail sends callers straight to the next name on the list.",
    result: "Every call answered, qualified and booked — without hiring a receptionist.",
    icon: "phone",
  },
  {
    slug: "missed-call-recovery",
    name: "Missed Call Recovery",
    short: "Missed calls get an automatic text back, and you get an SMS alert instantly.",
    full: "The second a call goes unanswered, the caller receives a friendly text offering to help or book, and you receive an SMS alert with the number and context so nothing slips.",
    who: "Any plumbing, dental or real estate business missing calls during service hours.",
    problem: "Missed calls are silent lost revenue — most callers never call back.",
    result: "A large share of missed calls turn into booked conversations the same day.",
    icon: "message",
  },
  {
    slug: "appointment-reminders",
    name: "Appointment Reminder & No-Show Recovery",
    short: "Automated reminders that cut no-shows and refill cancelled slots.",
    full: "Timed SMS and email reminders go out before each appointment, with easy confirm or reschedule. When someone cancels, the slot is offered automatically to your waitlist.",
    who: "Dental practices with tight chair time, plumbers with scheduled service windows, agents running viewings.",
    problem: "Empty slots cost the same as booked ones, and rescheduling by hand eats your day.",
    result: "Fewer no-shows, fuller calendars, and cancelled slots that refill themselves.",
    icon: "calendar",
  },
  {
    slug: "retainer-maintenance",
    name: "Monthly Retainer & Maintenance",
    short: "Ongoing monitoring, updates, and optimization of every automation you run.",
    full: "We monitor every workflow, fix breakages before you notice them, tune the messaging based on real reply data, and add new automations as your business changes.",
    who: "Owners who want the system to keep working without ever thinking about it.",
    problem: "Automation that nobody maintains quietly stops working — and you only find out when leads dry up.",
    result: "A system that stays live, improves monthly, and has an owner other than you.",
    icon: "wrench",
  },
];

export type CaseStudy = {
  slug: string;
  industry: string;
  headline: string;
  summary: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "plumbing-after-hours-leads",
    industry: "Plumbers",
    headline: "Placeholder: 3x more after-hours jobs booked",
    summary:
      "Placeholder summary — a regional plumbing company stopped losing emergency calls at night. Replace with real content.",
    problem:
      "Placeholder problem statement. After-hours calls went to voicemail and callers moved on to the next plumber within minutes.",
    solution:
      "Placeholder solution. AI voice receptionist plus missed call text-back and instant lead response across all inbound channels.",
    results: [
      { label: "After-hours jobs booked", value: "3x" },
      { label: "Average first response", value: "under 2 min" },
      { label: "Missed calls recovered", value: "62%" },
    ],
  },
  {
    slug: "dental-no-show-reduction",
    industry: "Dentists",
    headline: "Placeholder: No-shows cut by 41%",
    summary:
      "Placeholder summary — a two-location dental practice filled more chair time with automated reminders. Replace with real content.",
    problem:
      "Placeholder problem statement. Manual reminder calls were inconsistent and cancelled slots stayed empty.",
    solution:
      "Placeholder solution. Automated reminder sequence with confirm/reschedule links and a waitlist backfill workflow.",
    results: [
      { label: "No-show rate", value: "-41%" },
      { label: "Slots refilled monthly", value: "28" },
      { label: "Front-desk hours saved", value: "11/wk" },
    ],
  },
  {
    slug: "real-estate-lead-speed",
    industry: "Real Estate Agents",
    headline: "Placeholder: 5x faster lead follow-up",
    summary:
      "Placeholder summary — an agent team responded to portal inquiries instantly and booked more viewings. Replace with real content.",
    problem:
      "Placeholder problem statement. Portal leads sat unanswered while agents were out showing property.",
    solution:
      "Placeholder solution. Instant lead response with qualification questions and calendar booking for viewings.",
    results: [
      { label: "Speed to lead", value: "5x faster" },
      { label: "Viewings booked", value: "+37%" },
      { label: "Leads contacted", value: "100%" },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-plumbers-lose-leads",
    title: "Placeholder: Why Plumbers Lose Half Their Leads Before Lunch",
    category: "Plumbers",
    date: "2026-08-01",
    summary: "Placeholder summary about speed-to-lead in the plumbing trade.",
    body: [
      "Placeholder article content. Replace this with your real post. The average homeowner with a burst pipe calls three plumbers and hires whoever picks up first.",
      "Placeholder section. When your crew is under a sink, nobody is answering the phone — and that is exactly when the highest-intent calls come in.",
      "Placeholder conclusion. Automated call answering and missed call recovery close that gap without adding headcount.",
    ],
  },
  {
    slug: "dental-no-show-playbook",
    title: "Placeholder: The Dental No-Show Playbook",
    category: "Dentists",
    date: "2026-07-18",
    summary: "Placeholder summary about reducing no-shows with reminder automation.",
    body: [
      "Placeholder article content. Replace this with your real post. Every empty chair is fixed cost with no revenue attached.",
      "Placeholder section. Reminder timing, channel and tone all move the no-show number more than most practices expect.",
      "Placeholder conclusion. Automating reminders and waitlist backfill recovers most of that lost chair time.",
    ],
  },
  {
    slug: "real-estate-speed-to-lead",
    title: "Placeholder: Speed To Lead Is The Whole Game In Real Estate",
    category: "Real Estate Agents",
    date: "2026-07-02",
    summary: "Placeholder summary about instant follow-up on portal inquiries.",
    body: [
      "Placeholder article content. Replace this with your real post. Portal leads compare agents on responsiveness first and everything else second.",
      "Placeholder section. Replying in minutes rather than hours changes how many inquiries convert to viewings.",
      "Placeholder conclusion. Instant AI follow-up keeps every inquiry warm while you are out showing property.",
    ],
  },
];

export const FAQS = [
  {
    q: "How long does setup take?",
    a: "Most systems are live in 7 days. We handle the build, the integrations and the testing — you approve the messaging and hand over access.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. If you can answer a phone and read a text message, you can run this. We set everything up, monitor it, and make changes for you.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialise in three: plumbers, dentists and real estate agents. That focus is why our messaging, qualifying questions and booking flows work out of the box.",
  },
  {
    q: "How much does it cost?",
    a: "There is a one-time build fee based on how many systems you need, plus a monthly retainer for monitoring and optimization. No long-term contracts. Exact pricing is quoted on your free call.",
  },
  {
    q: "What happens after the system is built?",
    a: "We monitor it, fix anything that breaks, review reply and booking data monthly, and tune the automations as your business changes.",
  },
];

export const REVIEWS = [
  {
    quote:
      "Placeholder review — replace with real content. The missed call text-back paid for itself in the first week.",
    name: "Placeholder Name",
    business: "Plumbing Company",
    rating: 5,
  },
  {
    quote:
      "Placeholder review — replace with real content. Our no-show rate dropped and the front desk finally has breathing room.",
    name: "Placeholder Name",
    business: "Dental Practice",
    rating: 5,
  },
  {
    quote:
      "Placeholder review — replace with real content. Every portal lead gets answered in minutes now, even while I'm showing.",
    name: "Placeholder Name",
    business: "Real Estate Agency",
    rating: 5,
  },
];
