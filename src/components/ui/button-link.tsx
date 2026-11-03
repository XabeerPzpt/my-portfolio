import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  /** `primary` is the filled accent button, `secondary` is an outlined button. */
  variant?: "primary" | "secondary";
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles = {
  primary: "bg-accent text-zinc-950 hover:bg-teal-300",
  secondary:
    "border border-line bg-surface text-foreground hover:border-white/25 hover:bg-white/[0.06]",
} as const;

/** A link that looks like a button. Used for the hero call-to-action links. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
