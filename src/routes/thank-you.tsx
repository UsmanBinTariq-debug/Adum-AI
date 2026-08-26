import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Adum AI" },
      {
        name: "description",
        content: "Thanks for reaching out to Adum AI — we'll be in touch within 24 hours.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Thank You | Adum AI" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/thank-you` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/thank-you` }],
  }),
  component: ThankYouPage,
});

const STEPS = [
  {
    title: "We review your details",
    body: "A real person reads your message and checks how businesses like yours are losing leads.",
  },
  {
    title: "We reply within 24 hours",
    body: "You'll get an email or text with our first thoughts and a time to talk.",
  },
  {
    title: "We map your system",
    body: "On a short call we outline exactly what we'd automate first and what it would cost.",
  },
];

function ThankYouPage() {
  return (
    <main className="hero-glow flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-extrabold md:text-4xl">
          Thanks! We'll be in touch within 24 hours.
        </h1>
        <p className="mt-3 text-muted-foreground">
          Your message is in. Here's exactly what happens next.
        </p>
        <ol className="mt-8 space-y-4 text-left">
          {STEPS.map((step, i) => (
            <li key={step.title} className="surface-card p-5">
              <span className="text-sm font-bold text-primary">Step {i + 1}</span>
              <h2 className="mt-1 text-base font-bold">{step.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-ring"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
