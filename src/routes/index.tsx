import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  PhoneCall,
  MessageSquare,
  CalendarCheck,
  Wrench,
  ShieldCheck,
  Zap,
  FileCheck,
  Rocket,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LinkButton } from "@/components/site/CtaButton";
import { CtaBand, ResponsePromise } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ScrollSteps } from "@/components/site/ScrollSteps";
import { Marquee } from "@/components/site/Marquee";
import { ReviewMarquee } from "@/components/site/ReviewMarquee";
import { StatsBand } from "@/components/site/StatsBand";
import {
  BLOG_POSTS,
  CASE_STUDIES,
  HOMEPAGE_STATS,
  INDUSTRY_PAGES,
  SERVICES,
  SITE_URL,
  TAGLINE,
  pageMeta,
} from "@/lib/site";
import {
  BANNER_INDUSTRIES,
  HERO_CINEMATIC,
  HERO_IMAGE,
  industryImage,
} from "@/lib/images";

const icons = {
  clock: Clock,
  phone: PhoneCall,
  message: MessageSquare,
  calendar: CalendarCheck,
  wrench: Wrench,
};

export const Route = createFileRoute("/")({
  head: () => {
    const base = pageMeta({
      title: "AI Automation for Plumbers, Dentists & Real Estate Agents | Adum AI",
      description:
        "Adum AI automates lead response, missed call recovery and appointment booking for plumbers, dentists and real estate agents. Live in 7 days.",
      path: "/",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Adum AI",
            url: SITE_URL,
            image: `${SITE_URL}/og-image.jpg`,
            description:
              "AI automation agency helping plumbers, dentists, and real estate agents automate lead follow-up and appointment booking.",
            areaServed: { "@type": "Country", name: "United States" },
            serviceType: SERVICES.map((s) => s.name),
          }),
        },
      ],
    };
  },
  component: Home,
});

const USPS = [
  { icon: Zap, label: "Reply in Under 3 Minutes" },
  { icon: ShieldCheck, label: "Zero Tech Knowledge Needed" },
  { icon: FileCheck, label: "No Long-Term Contracts" },
  { icon: Rocket, label: "Setup in 7 Days" },
];

const STEPS = [
  {
    title: "Get in touch",
    body: "Send us a message. We find where leads are leaking out of your business today.",
  },
  {
    title: "We build your system",
    body: "Instant response, call answering, reminders — built, tested and live in about 7 days.",
  },
  {
    title: "Leads get followed up automatically",
    body: "Every inquiry answered, qualified and booked, day or night, while you do the work.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={HERO_CINEMATIC}
          alt="Metallic robotic hand holding a glowing blue circuit-patterned AI brain"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Plumbers · Dentists · Real Estate Agents
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] md:text-6xl">
            {TAGLINE}
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            We install AI systems that answer every call, reply to every lead in under three
            minutes, and book jobs straight into your calendar — so you stop paying for leads
            that go to whoever answered first.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton to="/contact" variant="primary">
              Contact Us
            </LinkButton>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur hover:border-primary hover:text-primary"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="surface-card mx-auto max-w-5xl overflow-hidden p-2">
            <img
              src={HERO_IMAGE}
              alt="Adum AI dashboard showing incoming calls and lead replies handled automatically"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {USPS.map((usp, i) => (
            <Reveal
              as="li"
              key={usp.label}
              delay={i * 90}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <usp.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {usp.label}
            </Reveal>
          ))}
        </ul>
      </section>

      <Marquee
        items={[...SERVICES.map((s) => s.name), ...INDUSTRY_PAGES.map((p) => p.industry)]}
        className="bg-surface/60"
      />

      <StatsBand stats={HOMEPAGE_STATS} title="Results from real installs" />

      <section className="relative overflow-hidden">
        <img
          src={BANNER_INDUSTRIES}
          alt="A plumber's van, a dental treatment room and a real estate agent's desk, each with an AI-answered call on the phone"
          loading="lazy"
          width={1920}
          height={800}
          className="h-72 w-full object-cover md:h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <p className="max-w-2xl px-4 text-center text-2xl font-extrabold leading-tight md:text-4xl">
            One AI system. Every call answered, every lead followed up.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Built specifically for
        </p>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {INDUSTRY_PAGES.map((page, i) => {
            const img = industryImage(page.industry);
            return (
              <Reveal
                as="li"
                key={page.slug}
                delay={i * 120}
                className="surface-card overflow-hidden"
              >
                <Link to={page.path} className="group block">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="flex items-center justify-between px-5 py-4 text-sm font-semibold">
                    {page.industry}
                    <span className="text-primary group-hover:underline">Explore →</span>
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14">
        <h2 className="text-2xl font-extrabold md:text-4xl">What we build for you</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Five systems that between them make sure no lead, call or appointment ever falls
          through the cracks.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                as="article"
                key={service.slug}
                delay={(i % 3) * 100}
                className="surface-card flex flex-col p-6"
              >
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.short}</p>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  Learn More →
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 pt-14 md:pb-14">
          <Reveal>
            <h2 className="text-2xl font-extrabold md:text-4xl">How it works</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Three steps between you and never losing another lead. Keep scrolling — we'll
              walk you through it.
            </p>
          </Reveal>
          <ScrollSteps steps={STEPS} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-extrabold md:text-4xl">Case studies</h2>
          <LinkButton to="/case-studies" variant="ghost">
            View all case studies →
          </LinkButton>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => {
            const img = industryImage(cs.industry);
            return (
              <Reveal
                as="article"
                key={cs.slug}
                delay={i * 120}
                className="surface-card flex flex-col overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-40 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
                    {cs.industry}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{cs.headline}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{cs.summary}</p>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-extrabold md:text-4xl">What clients say</h2>
        </div>
        <div className="mt-8">
          <ReviewMarquee />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-extrabold md:text-4xl">From the blog</h2>
          <LinkButton to="/blog" variant="ghost">
            Read the blog →
          </LinkButton>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => {
            const img = industryImage(post.category);
            return (
              <Reveal
                as="article"
                key={post.slug}
                delay={i * 120}
                className="surface-card flex flex-col overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-40 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold text-primary">{post.category}</span>
                  <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.summary}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ResponsePromise />
      <CtaBand title="Every hour you wait, another lead calls someone else." />
    </SiteLayout>
  );
}
