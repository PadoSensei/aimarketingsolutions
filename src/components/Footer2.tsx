import Link from "next/link";
// Assuming you have icons, or just use text.
// import { Linkedin, Twitter } from "lucide-react";

const Footer2 = () => {
  return (
    <footer className="pt-16 pb-8 text-white bg-black border-t border-white/10">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND COLUMN */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              AI Solutions™
            </h3>
            <p className="max-w-xs mb-6 text-sm leading-relaxed text-zinc-500">
              Empowering small businesses with the automation tools they need to
              grow without the grind.
            </p>
            <p className="text-xs text-zinc-600">All Rights Reserved 2025 ©</p>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="mb-4 font-semibold text-zinc-100">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors text-zinc-500 hover:text-purple-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm transition-colors text-zinc-500 hover:text-purple-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm transition-colors text-zinc-500 hover:text-purple-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL / SUPPORT */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="mb-4 font-semibold text-zinc-100">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors text-zinc-500 hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm transition-colors text-zinc-500 hover:text-purple-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm transition-colors text-zinc-500 hover:text-purple-400"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER (Optional, adds pro feel) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="mb-4 font-semibold text-zinc-100">Stay Updated</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Get the latest AI tips straight to your inbox.
            </p>
            <div className="flex flex-col w-full max-w-sm gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border border-zinc-800 text-sm rounded-lg p-2.5 text-white focus:ring-purple-500 focus:border-purple-500 w-full"
              />
              <button className="bg-white text-black font-bold py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-zinc-900 md:flex-row">
          {/* Socials placeholder */}
          <div className="flex mb-4 space-x-6 md:mb-0">
            <a
              href="#"
              className="transition-colors text-zinc-600 hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>
          <p className="text-xs text-zinc-700">Made with ❤️ in Ireland</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
