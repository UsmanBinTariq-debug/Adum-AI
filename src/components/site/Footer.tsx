import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INDUSTRY_PAGES,
  NAV_LINKS,
  SOCIAL_LINKS,
  TAGLINE,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logo.url}
              alt="Adum AI logo — robotic hand holding a glowing AI brain"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 object-contain"
            />
            <span className="text-base font-extrabold tracking-tight">
              ADUM <span className="text-gradient">AI</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{TAGLINE}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Serving clients across the United States — fully remote.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold">Pages</h2>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Get in touch</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              {CONTACT_PHONE ? (
                <a
                  href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
                  className="hover:text-primary"
                >
                  {CONTACT_PHONE}
                </a>
              ) : (
                <span>Phone — add your number</span>
              )}
            </li>
          </ul>

          <h2 className="mt-6 text-sm font-semibold">Follow us</h2>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                {social.url ? (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span>{social.label}</span>
                )}
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-sm font-semibold">Industries we serve</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {INDUSTRY_PAGES.map((page) => (
              <li key={page.slug}>
                <Link to={page.path} className="hover:text-primary">
                  {page.industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Adum AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
