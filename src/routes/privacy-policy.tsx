import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/Sections";
import { breadcrumbSchema, pageMeta } from "@/lib/site";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    ...pageMeta({
      title: "Privacy Policy | Adum AI",
      description:
        "How Adum AI collects, uses and protects your information, including cookies and Google Analytics data.",
      path: "/privacy-policy",
    }),
    scripts: [breadcrumbSchema(CRUMBS)],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    h: "Information we collect",
    p: "We collect the information you submit through our contact form or booking calendar — typically your name, business type, email address, phone number and message. We also collect limited technical data automatically, such as browser type, device type, referring page and pages viewed.",
  },
  {
    h: "How we use your information",
    p: "We use your information to respond to inquiries, schedule and conduct calls, deliver and support our services, and improve our website. We do not sell your personal information.",
  },
  {
    h: "Cookies",
    p: "Our website uses cookies and similar technologies to remember preferences and to measure how the site is used. You can disable cookies in your browser settings; some parts of the site may work less well if you do.",
  },
  {
    h: "Google Analytics",
    p: "We use Google Analytics 4 to understand aggregate website usage. Google Analytics sets cookies and collects information such as pages visited, time on page and approximate location derived from IP address. This data is processed by Google in accordance with their privacy policy. You can opt out using Google's browser add-on.",
  },
  {
    h: "Third-party services",
    p: "We use third-party providers for scheduling (calendar booking), email delivery, SMS delivery and hosting. These providers process data only as needed to deliver their service.",
  },
  {
    h: "Data retention",
    p: "We keep inquiry and client data for as long as needed to provide our services and to meet legal and accounting obligations, then delete it.",
  },
  {
    h: "Your rights",
    p: "You can request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us through our contact page.",
  },
  {
    h: "Changes to this policy",
    p: "We may update this policy from time to time. The latest version will always be published on this page.",
  },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        title="Privacy Policy"
        subtitle="This policy explains what information Adum AI collects, why we collect it, and what you can do about it."
      />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        {SECTIONS.map((section) => (
          <div key={section.h} className="border-t border-border py-6">
            <h2 className="text-lg font-bold">{section.h}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{section.p}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
