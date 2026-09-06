import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = 40,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const track = [...items, ...items];
  return (
    <div
      className={cn(
        "marquee relative overflow-hidden border-y border-border bg-surface/40 py-4",
        className,
      )}
      aria-hidden="true"
    >
      <ul
        className="marquee-track flex w-max items-center gap-10 pr-10"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span>{item}</span>
            <span className="size-1.5 rounded-full bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
}
