import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/site";

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function StatCounter({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(stat.value);
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          const duration = 1400;
          const start = performance.now() + delay;
          const tick = (now: number) => {
            const t = Math.min(1, Math.max(0, (now - start) / duration));
            setDisplay(Math.round(easeOut(t) * stat.value));
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [stat.value, delay]);

  return (
    <span ref={ref} className="text-gradient">
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
}

export function StatsBand({ stats, title }: { stats: Stat[]; title?: string }) {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {title ? (
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {title}
          </p>
        ) : null}
        <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label + stat.source}
              className="glass-card rounded-xl p-6 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-extrabold leading-none md:text-5xl">
                <StatCounter stat={stat} delay={i * 150} />
              </dd>
              <dd className="mt-3 text-sm font-medium">{stat.label}</dd>
              <dd className="mt-1 text-xs text-muted-foreground">{stat.source}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
