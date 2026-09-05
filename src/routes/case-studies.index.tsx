import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { CASE_STUDIES, breadcrumbSchema, pageMeta } from "@/lib/site";
import { industryImage } from "@/lib/images";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
];

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    ...pageMeta({
      title: "Case Studies | Adum AI",
      description:
        "Real results from AI automation built for plumbers, dentists and real estate agents — faster lead response, fewer missed calls, fewer no-shows.",
      path: "/case-studies",
    }),
    scripts: [breadcrumbSchema(CRUMBS)],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        eyebrow="Case Studies"
        title="What happens when nothing gets missed"
        subtitle="A look at the systems we've built and the numbers they moved. New studies added as clients complete their first 90 days."
      />

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-5 md:grid-cols-3">
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
                  <h2 className="mt-4 text-lg font-bold">{cs.headline}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{cs.summary}</p>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="mt-5 inline-flex w-fit items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
