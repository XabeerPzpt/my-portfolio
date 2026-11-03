import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

const linkStyles =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-zinc-400 transition-colors hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** GitHub and LinkedIn links. Both point to placeholder URLs in `src/lib/site.ts`. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      <li>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (placeholder link)"
          className={linkStyles}
        >
          <GitHubIcon className="h-[18px] w-[18px]" />
        </a>
      </li>
      <li>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile (placeholder link)"
          className={linkStyles}
        >
          <LinkedInIcon className="h-[18px] w-[18px]" />
        </a>
      </li>
    </ul>
  );
}
