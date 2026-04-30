"use client";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  const company = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.aiCoaching"), href: "/ai-coaching" },
    { label: t("nav.blog"), href: "/posts" },
  ];

  const support = [
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.privacy"), href: "/privacy" },
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-black">
      {/* Top gradient accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-screen-xl px-6 pt-16 pb-8 mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 mb-14 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">AI </span>
                <span className="gradient-text">Solutions™</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-[220px]">
              {t("footer.brandDescription")}
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/103651291"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200 text-zinc-500 hover:text-white group"
              aria-label={t("footer.linkedinAria")}
            >
              <span className="flex items-center justify-center w-8 h-8 transition-colors duration-200 border rounded-full border-zinc-800 group-hover:border-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 transition-colors duration-200 text-zinc-500 group-hover:text-purple-400"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-zinc-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400">
              {t("footer.support")}
            </h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-zinc-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400">
              {t("footer.readyToAutomate")}
            </h4>
            <p className="text-sm leading-relaxed text-zinc-500">
              {t("footer.bookCall")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-sm font-semibold text-white rounded-full border border-purple-700/60 hover:bg-purple-900/30 hover:border-purple-500 transition-all duration-200"
            >
              {t("footer.contactCta")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 border-t border-white/5 sm:flex-row">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} {t("footer.allRightsReserved")}
          </p>
          <p className="text-xs text-zinc-700">{t("footer.madeWithLove")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
