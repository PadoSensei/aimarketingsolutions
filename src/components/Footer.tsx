"use client";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  const { t } = useTranslation();

  const company = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.aiCoaching"), href: "/ai-coaching" },
  ];

  const support = [
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.privacy"), href: "/privacy" },
  ];

  return (
    <footer className="relative overflow-hidden border-t bg-background text-foreground border-border">
      {/* Top gradient accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      {/* Subtle background glow - adjusted for theme compatibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/5 dark:bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-screen-xl px-6 pt-16 pb-8 mx-auto">
        <div className="grid grid-cols-2 gap-10 mb-14 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-foreground">AI </span>
                <span className="gradient-text">Solutions</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-foreground/60 max-w-[220px]">
              {t("footer.brandDescription")}
            </p>
            <a
              href="https://www.linkedin.com/company/103651291"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200 text-foreground/60 hover:text-foreground group"
              aria-label={t("footer.linkedinAria")}
            >
              <span className="flex items-center justify-center w-8 h-8 transition-colors duration-200 border rounded-full border-border group-hover:border-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-foreground/60 group-hover:text-purple-400"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>

          {/* Links Components */}
          {[
            { title: t("footer.company"), links: company },
            { title: t("footer.support"), links: support },
          ].map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-foreground/50">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm transition-colors duration-200 text-foreground/60 hover:text-foreground hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <h4 className="text-xs font-bold tracking-widest uppercase text-foreground/50">
              {t("footer.readyToAutomate")}
            </h4>
            <p className="text-sm leading-relaxed text-foreground/60">
              {t("footer.bookCall")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-sm font-semibold text-foreground rounded-full border border-purple-700/60 hover:bg-purple-900/10 hover:border-purple-500 transition-all duration-200"
            >
              {t("footer.contactCta")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 border-t border-border sm:flex-row">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} {t("footer.allRightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <p className="text-xs text-foreground/40">
              {t("footer.madeWithLove")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
