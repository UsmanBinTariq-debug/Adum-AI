import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Sections";
import { LinkButton } from "@/components/site/CtaButton";
import { CASE_STUDIES, breadcrumbSchema, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study unavailable | Adum AI" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    const path = `/case-studies/${params.slug}`;
    return {
      ...pageMeta({
        title: `${study.headline} | Adum AI`,
        description: study.summary.slice(0, 155),
        path,
        type: "article",
      }),
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.headline, path },
        ]),
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();

  return (
    <SiteLayout>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.headline, path: `/case-studies/${study.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
          {study.industry}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">{study.headline}</h1>
        <p className="mt-4 text-muted-foreground">{study.summary}</p>

        <img
          src={industryImage(study.industry).src}
          alt={industryImage(study.industry).alt}
          width={1200}
          height={800}
          className="mt-8 h-64 w-full rounded-xl border border-border object-cover"
        />


        <h2 className="mt-10 text-xl font-bold">The problem</h2>
        <p className="mt-2 text-muted-foreground">{study.problem}</p>

        <h2 className="mt-8 text-xl font-bold">What we built</h2>
        <p className="mt-2 text-muted-foreground">{study.solution}</p>

        <h2 className="mt-8 text-xl font-bold">The results</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-3">
          {study.results.map((r) => (
            <div key={r.label} className="surface-card p-5 text-center">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {r.label}
              </dt>
              <dd className="mt-2 text-2xl font-extrabold text-gradient">{r.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-sm text-muted-foreground">
          See the{" "}
          <LinkButton to="/services" variant="ghost">
            services behind this build
          </LinkButton>
          .
        </p>
      </article>

      <CtaBand title="Want numbers like these in your business?" />
    </SiteLayout>
  );
}
