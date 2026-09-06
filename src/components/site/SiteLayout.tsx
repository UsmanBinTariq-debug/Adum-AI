import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grain flex min-h-screen flex-col">
      <Preloader />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
