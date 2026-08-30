import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { LinkButton } from "@/components/site/CtaButton";

import { breadcrumbSchema, pageMeta } from "@/lib/site";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About | Adum AI",
      description:
        "Adum AI builds lead response and booking automation for plumbers, dentists and real estate agents across the United States. Here's why.",
      path: "/about",
    }),
    scripts: [breadcrumbSchema(CRUMBS)],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        eyebrow="About"
        title="We only fix one thing — and we fix it properly"
        subtitle="Adum AI installs the follow-up systems that plumbers, dentists and real estate agents don't have time to run themselves."
      />

      <section className="mx-auto max-w-3xl px-4 pb-4">
        <h2 className="text-2xl font-extrabold">Who we are</h2>
        <p className="mt-3 text-muted-foreground">
          A small team of automation builders working with a deliberately limited number of
          service businesses. We're not a general-purpose agency: we build lead response, call
          answering and appointment systems, and nothing else.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold">Our mission</h2>
        <p className="mt-3 text-muted-foreground">
          Make sure no plumber, dentist or agent loses another job because they were busy doing
          the job. Every inquiry answered, every call recovered, every appointment confirmed —
          without the owner touching anything.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold">Why we built Adum AI</h2>
        <p className="mt-3 text-muted-foreground">
          We kept seeing the same pattern: owners spending real money on marketing, then losing
          half those leads to voicemail and slow replies. The tools to fix it existed, but they
          were built for tech teams, not for someone under a sink at 8pm. So we packaged the
          whole thing — build, monitoring and optimization — into something that just works.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          See what we build on the{" "}
          <LinkButton to="/services" variant="ghost">
            services page
          </LinkButton>
          , or{" "}
          <LinkButton to="/contact" variant="ghost">
            get in touch
          </LinkButton>
          .
        </p>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
