//@ts-nocheck
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NavBar: React.FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleInactivity = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);
      timeoutRef.current = setTimeout(handleInactivity, 30000);
    } else {
      clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);
    }
  }, [isMenuOpen]);

  return (
    <nav className="text-white bg-black border-gray-200 shadow-md">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/Logo-White.png"
                className="h-8"
                alt="AI Marketing Solutions Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AI Marketing Solutions
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-white transition duration-300 rounded-md hover:underline hover:text-blue-600"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium transition duration-300 rounded-md text-white-800 hover:underline hover:text-blue-600"
              >
                About Us
              </Link>
              {/* <Link href="/blog" className="px-3 py-2 text-sm font-medium text-white transition duration-300 rounded-md hover:underline hover:text-blue-600">
                Blog
              </Link>
              <Link href="/services" className="px-3 py-2 text-sm font-medium text-white transition duration-300 rounded-md hover:underline hover:text-blue-600">
                Services
              </Link>
              <Link href="/courses" className="px-3 py-2 text-sm font-medium text-white transition duration-300 rounded-md hover:underline hover:text-blue-600">
                Courses
              </Link> */}
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-white transition duration-300 rounded-md hover:underline hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="relative md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-label="Main menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              ref={menuRef}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } z-50`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-300 shadow-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-300 shadow-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-300 shadow-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Blog
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-300 shadow-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-300 shadow-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
