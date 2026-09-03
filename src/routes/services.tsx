import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { LinkButton } from "@/components/site/CtaButton";
import { SERVICES, breadcrumbSchema, pageMeta } from "@/lib/site";
import { INDUSTRY_IMAGES } from "@/lib/images";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageMeta({
      title: "Services | Adum AI",
      description:
        "Lead response, AI voice reception, missed call recovery, appointment reminders and ongoing maintenance for plumbers, dentists and real estate agents.",
      path: "/services",
    }),
    scripts: [breadcrumbSchema(CRUMBS)],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        eyebrow="Services"
        title="Five systems that make sure nothing gets missed"
        subtitle="Each one is built for the way plumbers, dentists and real estate agents actually work — on a job, in a chair, or out showing a house."
      >
        <LinkButton to="/contact" variant="primary">
          Contact Us
        </LinkButton>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {Object.entries(INDUSTRY_IMAGES).map(([name, img]) => (
            <figure key={name} className="surface-card overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="h-40 w-full object-cover"
              />
              <figcaption className="px-5 py-3 text-sm font-semibold">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-6 pt-4">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-t border-border py-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Service {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">{service.name}</h2>
            <p className="mt-4 text-muted-foreground">{service.full}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="surface-card p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Who it's for
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{service.who}</dd>
              </div>
              <div className="surface-card p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Problem it solves
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{service.problem}</dd>
              </div>
              <div className="surface-card p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Expected result
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{service.result}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton to="/contact" variant="primary">
                Ask a question
              </LinkButton>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-4">
        <p className="text-sm text-muted-foreground">
          Want proof? See the{" "}
          <LinkButton to="/case-studies" variant="ghost">
            case studies
          </LinkButton>{" "}
          or{" "}
          <LinkButton to="/contact" variant="ghost">
            contact us
          </LinkButton>
          .
        </p>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
