import heroDashboard from "@/assets/hero-dashboard.jpg";
import heroCinematic from "@/assets/hero-cinematic.jpg";
import bannerIndustries from "@/assets/banner-industries.jpg";

export const HERO_CINEMATIC = heroCinematic;
export const BANNER_INDUSTRIES = bannerIndustries;
import plumber from "@/assets/industry-plumber.jpg";
import dentist from "@/assets/industry-dentist.jpg";
import realEstate from "@/assets/industry-realestate.jpg";

export const HERO_IMAGE = heroDashboard;

type Img = { src: string; alt: string };

export const INDUSTRY_IMAGES: Record<string, Img> = {
  Plumbers: {
    src: plumber,
    alt: "Plumber fixing a sink in a modern home",
  },
  Dentists: {
    src: dentist,
    alt: "Modern dental treatment room with a patient chair",
  },
  "Real Estate Agents": {
    src: realEstate,
    alt: "Real estate agent checking their phone in front of a modern home at dusk",
  },
};

const FALLBACK: Img = { src: plumber, alt: "Service professional at work" };

export function industryImage(key: string): Img {
  return INDUSTRY_IMAGES[key] ?? FALLBACK;
}
