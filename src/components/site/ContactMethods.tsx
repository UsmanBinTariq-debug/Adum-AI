import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/site";

export function ContactMethods() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="glass-card p-6">
        <Mail className="size-6 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-base font-bold">Email</h3>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-2 block text-sm text-primary hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-2 text-xs text-muted-foreground">Reply within 24 hours.</p>
      </div>

      <div className="glass-card p-6">
        <Phone className="size-6 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-base font-bold">Phone</h3>
        {CONTACT_PHONE ? (
          <a
            href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
            className="mt-2 block text-sm text-primary hover:underline"
          >
            {CONTACT_PHONE}
          </a>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            Phone line coming soon — add your number here.
          </p>
        )}
        <p className="mt-2 text-xs text-muted-foreground">Mon–Fri, 9am–6pm.</p>
      </div>

      <div className="glass-card p-6">
        <MessageCircle className="size-6 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-base font-bold">Social</h3>
        <ul className="mt-2 space-y-1">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              {social.url ? (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-primary hover:underline"
                >
                  {social.label}
                </a>
              ) : (
                <span className="text-sm text-muted-foreground">{social.label} — add link</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
