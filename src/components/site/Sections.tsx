import type { ReactNode } from "react";
import { LinkButton } from "./CtaButton";
import { CONTACT_EMAIL } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-glow">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to stop losing leads?",
  body = "Send us a message. We'll map the leaks in your follow-up and show you exactly what we'd automate first.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="surface-card hero-glow px-6 py-10 text-center md:px-12 md:py-14">
        <h2 className="text-2xl font-extrabold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{body}</p>
        <div className="mt-7 flex justify-center">
          <LinkButton to="/contact" variant="primary">
            Contact us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export function ResponsePromise() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center">
        <p className="text-sm font-semibold md:text-base">
          We respond to every inquiry within 24 hours —{" "}
          <span className="text-gradient">guaranteed.</span>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
