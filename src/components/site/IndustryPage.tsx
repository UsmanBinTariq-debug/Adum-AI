import { Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Sections";
import { LinkButton } from "@/components/site/CtaButton";
import { Reveal } from "@/components/site/Reveal";
import { StatsBand } from "@/components/site/StatsBand";
import {
  SERVICES,
  caseStudyBySlug,
  type IndustryPageData,
  type Stat,
} from "@/lib/site";
import { industryImage } from "@/lib/images";

export function IndustryPage({ page }: { page: IndustryPageData }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.industry, path: `/${page.slug}` },
  ];
  const img = industryImage(page.industry);
  const caseStudy = caseStudyBySlug(page.caseStudySlug);
  const stats: Stat[] = (caseStudy?.results ?? []).map((r) => {
    const match = r.value.match(/^(-?)\s*(\d+(?:\.\d+)?)\s*(.*)$/);
    const value = match ? Number.parseFloat(match[2] ?? "0") : 0;
    const sign = match?.[1] ?? "";
    const suffix = match?.[3] ?? "";
    const suffixPrefix = suffix.match(/^\s*(x|%)\s*(.*)$/);
    return {
      value,
      prefix: sign || (suffixPrefix ? "" : "") || undefined,
      suffix: suffix || undefined,
      label: r.label,
      source: page.industry,
    };
  });

  return (
    <SiteLayout>
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden">
        <img
          src={img.src}
          alt={img.alt}
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {page.industry}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] md:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {page.sub}
          </p>
          <div className="mt-8">
            <LinkButton to="/contact" variant="primary">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-extrabold md:text-4xl">Where you're losing leads</h2>
        </Reveal>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {page.pains.map((pain, i) => (
            <Reveal
              as="li"
              key={pain.title}
              delay={(i % 2) * 100}
              className="surface-card p-6"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">{pain.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pain.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h2 className="text-2xl font-extrabold md:text-4xl">What we install for you</h2>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {SERVICES.map((service, i) => (
              <Reveal
                as="li"
                key={service.slug}
                delay={Math.min(i, 2) * 80}
                className="glass-card flex items-start gap-3 rounded-xl p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">{service.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {page.serviceAngles[service.slug] ?? service.short}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <StatsBand stats={stats} title={`Results for ${page.industry.toLowerCase()}`} />

      {caseStudy ? (
        <section className="mx-auto max-w-6xl px-4 py-14">
          <Reveal className="surface-card flex flex-col overflow-hidden md:flex-row">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1200}
              height={800}
              className="h-48 w-full object-cover md:h-auto md:w-2/5"
            />
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <span className="w-fit rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
                {caseStudy.industry}
              </span>
              <h2 className="mt-4 text-xl font-extrabold md:text-2xl">{caseStudy.headline}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{caseStudy.summary}</p>
              <Link
                to="/case-studies/$slug"
                params={{ slug: caseStudy.slug }}
                className="mt-5 text-sm font-semibold text-primary hover:underline"
              >
                See the full story →
              </Link>
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Questions {page.industry.toLowerCase()} ask us
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {page.faq.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand
        title={`Stop losing ${page.industry === "Real Estate Agents" ? "leads" : "jobs"} to whoever answers first.`}
        body="Send us a message. We'll show you exactly where leads are leaking and what we'd automate first — live in about 7 days."
      />
    </SiteLayout>
  );
}
