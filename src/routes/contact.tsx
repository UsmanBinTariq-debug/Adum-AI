import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ContactMethods } from "@/components/site/ContactMethods";
import { CONTACT_EMAIL, FAQS, breadcrumbSchema, pageMeta } from "@/lib/site";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact | Adum AI",
      description:
        "Tell us where leads are slipping. Email Adum AI and we'll reply within 24 hours — serving plumbers, dentists and real estate agents.",
      path: "/contact",
    }),
    scripts: [
      breadcrumbSchema(CRUMBS),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        eyebrow="Contact"
        title="Tell us where the leads are leaking"
        subtitle="The fastest way to reach us is email. We respond to every inquiry within 24 hours — guaranteed."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <Reveal className="surface-card hero-glow mx-auto max-w-xl px-8 py-12 text-center">
          <Mail className="mx-auto size-8 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold">Email us</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Include your name, business type (plumber, dentist, real estate agent or other) and
            a line or two about where leads are slipping.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="neo-btn mt-6 inline-flex items-center justify-center bg-primary px-8 py-3 text-base font-extrabold uppercase tracking-wide text-primary-foreground"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            We'll get back to you within 24 hours.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Reveal>
          <h2 className="text-2xl font-extrabold md:text-3xl">Other ways to reach us</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Pick whichever suits you — every message lands with the same team.
          </p>
        </Reveal>
        <div className="mt-8">
          <ContactMethods />
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl font-extrabold md:text-4xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            {FAQS.map((faq) => (
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
    </SiteLayout>
  );
}
