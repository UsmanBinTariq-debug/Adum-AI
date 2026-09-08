import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/site/IndustryPage";
import { breadcrumbSchema, industryPage, pageMeta } from "@/lib/site";

const PAGE = industryPage("plumbers")!;
const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Plumbers", path: "/plumbers" },
];

export const Route = createFileRoute("/plumbers")({
  head: () => ({
    ...pageMeta({
      title: PAGE.metaTitle,
      description: PAGE.metaDescription,
      path: "/plumbers",
    }),
    scripts: [
      breadcrumbSchema(CRUMBS),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PAGE.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <IndustryPage page={PAGE} />,
});
