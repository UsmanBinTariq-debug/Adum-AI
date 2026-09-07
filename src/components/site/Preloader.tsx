import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 0 : 900;
    const t1 = window.setTimeout(() => setDone(true), delay);
    const t2 = window.setTimeout(() => setHidden(true), delay + 500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`preloader pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="hero-glow absolute inset-0" />
      <img
        src={logo.url}
        alt=""
        width={72}
        height={72}
        className="relative size-16 animate-pulse object-contain"
      />
      <span className="relative mt-5 text-sm font-extrabold uppercase tracking-[0.35em]">
        ADUM <span className="text-gradient">AI</span>
      </span>
      <div className="relative mt-5 h-1 w-40 overflow-hidden rounded-full bg-secondary">
        <div className="preload-bar h-full w-1/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}
