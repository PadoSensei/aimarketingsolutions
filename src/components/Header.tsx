"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "AI Coaching", href: "/ai-coaching" },
  { label: "Blog", href: "/posts" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between h-16 max-w-screen-xl px-5 mx-auto md:px-8 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight gradient-text shrink-0"
            onClick={() => setIsOpen(false)}
          >
            AI Solutions™
          </Link>

          {/* Desktop Links */}
          <ul className="items-center hidden gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full text-zinc-400 hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-full border border-purple-700/60 hover:bg-purple-900/30 hover:border-purple-500 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex flex-col items-center justify-center w-10 h-10 transition-colors duration-200 border rounded-full md:hidden border-white/10 hover:border-purple-600/50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"
              }`}
            />
          </button>
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
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 bg-zinc-950 border-b border-white/5 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Top accent line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

          <nav className="px-5 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium transition-all duration-200 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-white transition-all duration-200 border rounded-xl border-purple-700/60 hover:bg-purple-900/30"
              >
                Contact Us →
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer so content clears the fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Header;
