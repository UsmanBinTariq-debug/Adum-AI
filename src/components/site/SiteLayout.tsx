import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CALENDLY_URL } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="size-4" aria-hidden="true" />
        Book a Free Call
      </a>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>
      <Footer />
      <MobileCta />
    </div>
  );
}
