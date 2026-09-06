import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/site";

export function ReviewMarquee() {
  const track = [...REVIEWS, ...REVIEWS];

  return (
    <div className="marquee relative overflow-hidden">
      <ul className="marquee-track flex w-max gap-5 pr-5" style={{ animationDuration: "48s" }}>
        {track.map((review, i) => (
          <li key={i} className="glass-card w-[19rem] shrink-0 p-6 md:w-[24rem]">
            <blockquote>
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">“{review.quote}”</p>
              <footer className="mt-4 text-sm font-semibold">
                {review.name}
                <span className="block text-xs font-normal text-muted-foreground">
                  {review.business}
                </span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
