import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/Sections";
import usMap from "@/assets/us-map.jpg";
import { CALENDLY_URL, breadcrumbSchema, pageMeta } from "@/lib/site";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact | Adum AI",
      description:
        "Tell us where leads are slipping. Adum AI replies within 24 hours and serves plumbers, dentists and real estate agents across the US.",
      path: "/contact",
    }),
    scripts: [breadcrumbSchema(CRUMBS)],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  businessType: z.enum(["Plumber", "Dentist", "Real Estate Agent", "Other"], {
    message: "Please select your business type",
  }),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  message: z.string().trim().min(1, "Please add a short message").max(1000),
});

const fieldClass =
  "mt-1 w-full rounded-lg border border-input bg-surface/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

function ContactPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    navigate({ to: "/thank-you" });
  }

  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <PageHero
        eyebrow="Contact"
        title="Tell us where the leads are leaking"
        subtitle="Send a message or book straight into the calendar. We'll get back to you within 24 hours."
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-bold">Send a message</h2>
          <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" maxLength={100} className={fieldClass} />
              {errors.name ? (
                <p className="mt-1 text-xs text-destructive">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="businessType" className="text-sm font-medium">
                Business type
              </label>
              <select id="businessType" name="businessType" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select one
                </option>
                <option>Plumber</option>
                <option>Dentist</option>
                <option>Real Estate Agent</option>
                <option>Other</option>
              </select>
              {errors.businessType ? (
                <p className="mt-1 text-xs text-destructive">{errors.businessType}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input id="email" name="email" type="email" maxLength={255} className={fieldClass} />
              {errors.email ? (
                <p className="mt-1 text-xs text-destructive">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" maxLength={30} className={fieldClass} />
              {errors.phone ? (
                <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                className={fieldClass}
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="glow-ring w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Send message
            </button>
            <p className="text-xs text-muted-foreground">
              We'll get back to you within 24 hours.
            </p>
          </form>
        </section>

        <section>
          <h2 className="text-xl font-bold">Or book a call directly</h2>
          <div className="surface-card mt-5 overflow-hidden">
            <iframe
              title="Book a free call with Adum AI"
              src={CALENDLY_URL}
              loading="lazy"
              className="h-[640px] w-full border-0"
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Calendly embed — replace the booking link when yours is ready.
          </p>
        </section>
      </div>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold">Service area</h2>
            <p className="mt-3 text-muted-foreground">
              We serve clients across the United States — fully remote. No office visits, no
              travel fees, no time zone problems.
            </p>
          </div>
          <img
            src={usMap}
            alt="Map of the United States showing Adum AI's nationwide remote service area"
            width={1200}
            height={700}
            loading="lazy"
            className="w-full rounded-xl border border-border object-cover"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
