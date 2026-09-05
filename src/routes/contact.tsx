import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL, breadcrumbSchema, pageMeta } from "@/lib/site";

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
    scripts: [breadcrumbSchema(CRUMBS)],
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

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Reveal className="surface-card hero-glow mx-auto max-w-xl px-8 py-12 text-center">
          <Mail className="mx-auto size-8 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold">Email us</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Include your name, business type (plumber, dentist, real estate agent or other) and
            a line or two about where leads are slipping.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground glow-ring hover:brightness-110"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            We'll get back to you within 24 hours.
          </p>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
