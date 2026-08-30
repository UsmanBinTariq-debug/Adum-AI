import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { LinkButton } from "@/components/site/CtaButton";
import { BLOG_POSTS, breadcrumbSchema, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post unavailable | Adum AI" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    return {
      ...pageMeta({
        title: `${post.title} | Adum AI`,
        description: post.summary.slice(0, 155),
        path,
        type: "article",
      }),
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]),
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteLayout>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_320px]">
        <article>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-primary/40 px-3 py-1 font-semibold text-primary">
              {post.category}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">{post.title}</h1>
          <div className="mt-6 space-y-5 text-muted-foreground">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Related:{" "}
            <LinkButton to="/services" variant="ghost">
              our services
            </LinkButton>{" "}
            ·{" "}
            <LinkButton to="/case-studies" variant="ghost">
              case studies
            </LinkButton>{" "}
            ·{" "}
            <LinkButton to="/contact" variant="ghost">
              contact
            </LinkButton>
          </p>
        </article>

        <aside className="h-fit lg:sticky lg:top-24">
          <div className="surface-card p-6">
            <h2 className="text-lg font-bold">Losing leads while you work?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll show you exactly where inquiries are slipping and what to automate first.
            </p>
            <LinkButton to="/contact" variant="primary" className="mt-5 w-full">
              Contact us
            </LinkButton>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
