import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { BLOG_POSTS, breadcrumbSchema, pageMeta } from "@/lib/site";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageMeta({
      title: "Blog | Adum AI",
      description:
        "Practical automation and lead follow-up advice for plumbers, dentists and real estate agents. No jargon, just what moves booked jobs.",
      path: "/blog",
    }),
    scripts: [breadcrumbSchema(CRUMBS)],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        eyebrow="Blog"
        title="Lead follow-up, written for busy owners"
        subtitle="Short reads on answering faster, missing fewer calls and filling more of your calendar."
      />

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-5 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="surface-card flex flex-col p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-primary/40 px-3 py-1 font-semibold text-primary">
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2 className="mt-4 text-lg font-bold">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.summary}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
