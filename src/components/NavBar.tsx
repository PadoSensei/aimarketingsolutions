"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* LOGO AREA */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 p-1 pr-4 transition-all duration-300 border border-transparent rounded-full group hover:bg-white/5 hover:border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* THE BADGE (Mini Hero Style) */}
              <div className="relative group">
                {/* Outer Glow Ring */}
                <div className="absolute transition duration-500 rounded-full opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur group-hover:opacity-75" />

                {/* The White Circle Container */}
                <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-white border-2 rounded-full shadow-lg border-slate-900">
                  <img
                    // Using the colored logo on white bg to match Hero
                    src="/images/Logo-White.png"
                    className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                    alt="AI Solutions Logo"
                  />
                </div>
              </div>

              {/* Text with Gradient */}
              <span className="self-center hidden text-lg font-bold tracking-tight text-white whitespace-nowrap sm:block">
                AI <span className="gradient-text">Solutions</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-full text-zinc-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Main menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium transition-colors text-zinc-300 rounded-xl hover:text-white hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
