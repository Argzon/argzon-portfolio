"use client";
import React, { useRef } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Big CTA */}
        {pathname !== "/contact" && (
          <div className="mb-24 text-center">
            <Link
              href="/contact"
              className="relative inline-block group overflow-hidden"
            >
              <h2 className="text-[10vw] font-bold text-slate-300 leading-none tracking-tighter transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                Let's work together
              </h2>
              <h2 className="absolute top-0 left-0 w-full text-[10vw] font-bold text-slate-900 leading-none tracking-tighter transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                Let's work together
              </h2>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Argzon.
              </span>
            </div>
            <div className="text-sm text-slate-500 space-y-2">
              <p className="font-bold text-slate-900">argzon01@gmail.com</p>
              <p>Peja, Kosovo</p>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                Links
              </h4>
              <Link
                href="/about"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                About me
              </Link>
              <Link
                href="/work"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Works
              </Link>
              <Link
                href="/contact"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                Resources
              </h4>
              <Link
                href="/pitch"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Pitch Deck / Presentation
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                Social
              </h4>
              <Link
                href="https://www.linkedin.com/in/haziraj/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Argzon"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                target="_blank"
              >
                Github
              </Link>
              <Link
                href="https://www.behance.net/haziraj"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                target="_blank"
              >
                Behance
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-20 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            © 2026 By Argzon Haziraj. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
