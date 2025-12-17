"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react or use your own SVG icons

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect (Transparent at top, Glassy when scrolled)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Blog", href: "/blog" },
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
              className="flex items-center space-x-3 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/images/Logo-White.png"
                className="w-auto h-8 transition-transform duration-300 group-hover:scale-105"
                alt="AI Solutions Logo"
              />
              <span className="self-center hidden text-xl font-bold tracking-tight text-white whitespace-nowrap sm:block">
                AI Solutions
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-1 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white group"
                >
                  {link.name}
                  {/* Animated Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Optional: 'Get Started' Button for Desktop */}
              {/* <Link
                href="/contact"
                className="px-4 py-2 text-sm font-bold text-black transition-all transform bg-white rounded-full hover:bg-gray-200 hover:scale-105"
              >
                Get Started
              </Link> */}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white focus:outline-none"
              aria-label="Main menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                // Use Lucide X icon or your SVG
                <X className="w-6 h-6" />
              ) : (
                // Use Lucide Menu icon or your SVG
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Full width drop down) */}
      {/* We use a transition-all for smooth height/opacity animation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 transition-colors rounded-md hover:text-white hover:bg-white/10"
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
