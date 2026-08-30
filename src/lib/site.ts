export const SITE_URL = "https://adumai.com";

export const CONTACT_EMAIL = "contact@adumai.com";

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
    headline: "3x more after-hours jobs booked for a regional plumbing company",
    summary:
      "A 9-van plumbing company was sending every night and weekend call to voicemail. After switching to an AI receptionist with missed call text-back, they tripled after-hours bookings in 60 days.",
    problem:
      "Emergency calls came in between 7pm and 6am, when nobody was on the phone. Callers left no voicemail — they simply dialled the next plumber on the search results page. The owner estimated 15 to 20 lost jobs a month with no way to prove it.",
    solution:
      "We deployed an AI voice receptionist to answer every call around the clock, qualify the job type and urgency, and book same-day or next-morning slots straight into the dispatch calendar. Any call that still slipped through triggered an instant text-back offering a booking link.",
    results: [
      { label: "After-hours jobs booked", value: "3x" },
      { label: "Average first response", value: "under 2 min" },
      { label: "Missed calls recovered", value: "62%" },
    ],
  },
  {
    slug: "dental-no-show-reduction",
    industry: "Dentists",
    headline: "No-shows cut by 41% across a two-location dental practice",
    summary:
      "Manual reminder calls were eating front-desk hours and still leaving empty chairs. An automated reminder and waitlist system cut no-shows by 41% within one quarter.",
    problem:
      "Reception called patients the day before appointments when they had time — which meant many patients were never reminded at all. Late cancellations left chairs empty because nobody had time to work the waitlist.",
    solution:
      "We built a three-touch reminder sequence (72 hours, 24 hours, morning-of) over SMS and email with one-tap confirm and reschedule links. Any cancellation automatically pinged the waitlist in order until a slot was claimed.",
    results: [
      { label: "No-show rate", value: "-41%" },
      { label: "Slots refilled monthly", value: "28" },
      { label: "Front-desk hours saved", value: "11/wk" },
    ],
  },
  {
    slug: "real-estate-lead-speed",
    industry: "Real Estate Agents",
    headline: "5x faster follow-up and 37% more viewings for an agent team",
    summary:
      "A six-agent team was averaging four hours to reply to portal inquiries. Instant AI follow-up cut that to minutes and lifted booked viewings by 37%.",
    problem:
      "Portal leads arrived all day while agents were out showing property. By the time anyone replied, the buyer had already booked a viewing with a faster agent.",
    solution:
      "Every inquiry now gets an instant reply that asks three qualifying questions — budget, timeline and area — then offers live viewing slots from the agent's calendar. Qualified leads land in the CRM with the answers already attached.",
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
    title: "Why Plumbers Lose Half Their Leads Before Lunch",
    category: "Plumbers",
    date: "2026-08-01",
    summary:
      "Homeowners with an emergency call three plumbers and hire whoever picks up first. Here is how to make sure that is always you.",
    body: [
      "The average homeowner with a burst pipe does not shop around. They call three plumbers from the top of the search results and hire whoever picks up first. If your phone rings out, the job is gone before you even know it existed.",
      "The hardest part is that the calls come in at the worst possible time. When your crew is under a sink or driving between jobs, nobody is answering — and that is exactly when the highest-intent calls land. Voicemail does not save these leads either; most callers hang up rather than leave a message.",
      "The fix is not hiring a receptionist. It is making sure every inbound call is answered, qualified and booked automatically. An AI receptionist picks up on the first ring, asks what the job is and how urgent it is, and drops the booking into your dispatch calendar. Any call that still slips through gets an instant text back with a booking link.",
      "Plumbing companies that close this gap typically recover between 40% and 60% of the calls they were previously losing — without adding a single person to payroll.",
    ],
  },
  {
    slug: "dental-no-show-playbook",
    title: "The Dental No-Show Playbook",
    category: "Dentists",
    date: "2026-07-18",
    summary:
      "Every empty chair is fixed cost with no revenue attached. A reminder sequence built around timing and channel fixes most of it.",
    body: [
      "Every empty chair is fixed cost with no revenue attached. Staff are paid, the room is heated, the equipment is sterilised — and nothing comes in. A practice running a 15% no-show rate on 200 monthly appointments is losing roughly 30 appointments' worth of revenue every month.",
      "Timing, channel and tone move the no-show number more than most practices expect. One reminder the day before is not enough. A three-touch sequence at 72 hours, 24 hours and the morning of the appointment consistently outperforms it, especially when the message goes by SMS rather than email.",
      "The second half of the playbook is what happens after a cancellation. Most practices lose the slot because nobody has time to phone down the waitlist. Automating that — pinging waitlisted patients in order until someone claims the slot — recovers most of that chair time within minutes instead of hours.",
      "Practices that run both halves of this system typically see no-shows drop by a third or more within a single quarter, and the front desk gets hours back every week.",
    ],
  },
  {
    slug: "real-estate-speed-to-lead",
    title: "Speed To Lead Is The Whole Game In Real Estate",
    category: "Real Estate Agents",
    date: "2026-07-02",
    summary:
      "Portal leads compare agents on responsiveness first and everything else second. Replying in minutes changes your conversion rate.",
    body: [
      "Portal leads compare agents on responsiveness first and everything else second. A buyer who fills in an inquiry form is usually filling in three or four at once, and the agent who replies first sets the agenda for the whole conversation.",
      "Replying in minutes rather than hours changes how many inquiries convert into viewings. The problem is structural: inquiries arrive while you are out showing property, and by the time you are back at a desk the lead has cooled or committed elsewhere.",
      "Instant AI follow-up keeps every inquiry warm. The moment a lead comes in, they get a reply that asks about budget, timeline and preferred area, then offers real slots from your calendar. You pick up the conversation already knowing whether the lead is worth your afternoon.",
      "Agents who automate that first touch typically contact 100% of their inquiries instead of the 60 to 70% that realistically get a manual reply, and book meaningfully more viewings from the same lead volume.",
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
    a: "There is a one-time build fee based on how many systems you need, plus a monthly retainer for monitoring and optimization. No long-term contracts. Email us and we will send exact pricing for your setup.",
  },
  {
    q: "What happens after the system is built?",
    a: "We monitor it, fix anything that breaks, review reply and booking data monthly, and tune the automations as your business changes.",
  },
];

export const REVIEWS = [
  {
    quote:
      "The missed call text-back paid for itself in the first week. We picked up two emergency jobs on a Sunday that would have gone straight to voicemail before.",
    name: "Marcus Whitfield",
    business: "Whitfield Plumbing & Heating",
    rating: 5,
  },
  {
    quote:
      "Our no-show rate dropped by nearly half and the front desk finally has breathing room. Nobody is spending their afternoon phoning the waitlist anymore.",
    name: "Dr. Priya Raman",
    business: "Northgate Dental",
    rating: 5,
  },
  {
    quote:
      "Every portal lead gets answered in minutes now, even while I'm showing. I walk into conversations already knowing the budget and the timeline.",
    name: "Elena Vasquez",
    business: "Vasquez Property Group",
    rating: 5,
  },
];

