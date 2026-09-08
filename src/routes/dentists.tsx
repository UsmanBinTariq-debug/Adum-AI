import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/site/IndustryPage";
import { breadcrumbSchema, industryPage, pageMeta } from "@/lib/site";

const PAGE = industryPage("dentists")!;
const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Dentists", path: "/dentists" },
];

export const Route = createFileRoute("/dentists")({
  head: () => ({
    ...pageMeta({
      title: PAGE.metaTitle,
      description: PAGE.metaDescription,
      path: "/dentists",
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
