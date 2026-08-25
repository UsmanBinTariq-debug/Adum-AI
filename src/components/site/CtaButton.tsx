import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CALENDLY_URL } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-primary text-primary-foreground px-6 py-3 hover:brightness-110 glow-ring",
  outline:
    "border border-border bg-surface/60 text-foreground px-6 py-3 hover:border-primary hover:text-primary",
  ghost: "text-primary px-2 py-1 hover:underline underline-offset-4",
};

export function BookCallButton({
  className,
  variant = "primary",
  children = "Book a Free Call",
}: {
  className?: string;
  variant?: keyof typeof variants;
  children?: ReactNode;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}

export function LinkButton({
  to,
  className,
  variant = "outline",
  children,
}: {
  to: string;
  className?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
