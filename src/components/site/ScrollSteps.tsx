import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export type ScrollStep = {
  title: string;
  body: string;
};

/**
 * Scroll-linked steps: on desktop the section pins while a vertical progress
 * line fills and each step lights up in sequence as the user scrolls.
 * On mobile (and for reduced-motion users) it renders as a simple staggered list.
 */
export function ScrollSteps({ steps }: { steps: ScrollStep[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = track.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const passed = Math.min(Math.max(-rect.top, 0), total);
        setProgress(passed / total);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length * 1.0001),
  );

  return (
    <>
      {/* Mobile: simple staggered cards */}
      <ol className="mt-8 grid gap-5 md:hidden">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 120} className="surface-card p-6">
            <span className="text-sm font-bold text-primary">Step {i + 1}</span>
            <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
          </Reveal>
        ))}
      </ol>

      {/* Desktop: pinned scroll-driven sequence */}
      <div ref={trackRef} className="relative mt-8 hidden md:block" style={{ height: "260vh" }}>
        <div className="sticky top-24 flex h-[calc(100vh-8rem)] flex-col justify-center">
          {/* Progress rail */}
            {/* Progress rail */}
            <div className="relative flex flex-col items-center">
              <div className="relative h-full w-px overflow-hidden rounded bg-border">
                <div
                  className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary to-accent transition-[height] duration-150 ease-out"
                  style={{ height: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>

            <ol className="flex flex-col justify-center gap-8">
              {steps.map((step, i) => {
                const active = i === activeIndex;
                const done = i < activeIndex;
                return (
                  <li
                    key={step.title}
                    className={cn(
                      "surface-card p-8 transition-all duration-500",
                      active && "border-primary/60 glow-ring scale-[1.02]",
                      !active && !done && "opacity-40",
                      done && "opacity-70",
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm font-bold transition-colors duration-500",
                        active ? "text-gradient" : "text-primary",
                      )}
                    >
                      Step {i + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-bold md:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-muted-foreground">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
