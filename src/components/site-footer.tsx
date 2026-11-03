import { site } from "@/lib/site";
import { SocialLinks } from "./ui/social-links";

/** Closes the page with the name, copyright and social links. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-400">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.16em] text-zinc-400">
            Find me online
          </span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
