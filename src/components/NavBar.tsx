"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageToggle from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const NavBar = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.aiCoaching"), href: "/ai-coaching" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between h-16 max-w-screen-xl px-5 mx-auto md:px-8 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <Logo variant="navbar" />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-foreground">AI </span>
              <span className="gradient-text">Solutions</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="items-center hidden gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full text-foreground/70 hover:text-foreground group"
                >
                  {link.label}
                  <span className="absolute left-4 right-4 bottom-1 h-0.5 bg-gradient-to-r from-gradient-purple to-purple-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="items-center hidden gap-4 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-foreground rounded-full border border-purple-700/60 hover:bg-purple-900/10 hover:border-purple-500 transition-all duration-200"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex flex-col items-center justify-center w-10 h-10 transition-colors duration-200 border rounded-full border-border hover:border-purple-600/50"
              aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              <span
                className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
          <nav className="px-5 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium transition-all duration-200 text-foreground/70 hover:text-foreground hover:bg-card rounded-xl"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-base font-semibold transition-all duration-200 border text-foreground rounded-xl border-purple-700/60 hover:bg-purple-900/10"
              >
                {t("nav.contact")} →
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="h-16 md:h-20" />
    </>
  );
};

export default NavBar;
