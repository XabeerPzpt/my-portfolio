/**
 * Central place for the content used across the site.
 *
 * Everything here is safe placeholder content, except for the name, role
 * and technologies which were provided by Sabir. Update this file first
 * when you want to change any text on the website.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  summary: string;
};

export const site = {
  name: "Sabir Prajapati",
  role: "Software Developer",

  /** TODO: replace with your real email address. */
  email: "sabir@example.com",

  /** TODO: replace these with your real GitHub and LinkedIn profiles. */
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",

  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  /** Short introduction used in the hero section. */
  heroSummary:
    "I build and maintain web applications with C#, ASP.NET Core, React.js, SQL Server and Azure. I enjoy turning business requirements into clean, reliable software.",
} as const;

/** Placeholder project cards. Replace them with real work as it is published. */
export const projects: Project[] = [
  {
    title: "Project One",
    summary: "A short description of this project will be added soon.",
  },
  {
    title: "Project Two",
    summary: "A short description of this project will be added soon.",
  },
  {
    title: "Project Three",
    summary: "A short description of this project will be added soon.",
  },
];
