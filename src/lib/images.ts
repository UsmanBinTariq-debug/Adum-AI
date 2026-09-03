import heroDashboard from "@/assets/hero-dashboard.jpg";
import plumber from "@/assets/industry-plumber.jpg";
import dentist from "@/assets/industry-dentist.jpg";
import realEstate from "@/assets/industry-realestate.jpg";

export const HERO_IMAGE = heroDashboard;

export const INDUSTRY_IMAGES: Record<string, { src: string; alt: string }> = {
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

export function industryImage(key: string) {
  return INDUSTRY_IMAGES[key] ?? INDUSTRY_IMAGES["Plumbers"];
}
