import { site } from "@/lib/site";
import { Section } from "./section";
import { ButtonLink } from "./ui/button-link";
import { MailIcon } from "./ui/icons";
import { SocialLinks } from "./ui/social-links";

/** Simple contact section with an email link. No form or backend yet. */
export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's get in touch"
      description="Have a question or something you would like to discuss? Email is the easiest way to reach me."
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-background text-accent"
            >
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold">Email</h3>
              <p className="mt-1 text-sm leading-6 text-zinc-400">
                This address is a placeholder and still needs to be replaced
                with your real email.
              </p>
              <ButtonLink
                href={`mailto:${site.email}`}
                variant="secondary"
                className="mt-4"
              >
                {site.email}
              </ButtonLink>
            </div>
          </div>

          <p className="mt-7 border-t border-white/5 pt-5 text-sm text-zinc-400">
            A contact form will be added in a future update. No backend or
            third-party service is used in this version.
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div>
            <h3 className="text-base font-semibold">Elsewhere</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-400">
              Follow my work on GitHub and LinkedIn. These links are
              placeholders for now and will point to my real profiles soon.
            </p>
          </div>

          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </Section>
  );
}
