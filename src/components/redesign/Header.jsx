"use client";
import React from "react";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-10 lg:px-12 transition-all duration-300 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Argzon.
          </span>
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
          >
            About me
          </Link>
          <Link
            href="/work"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Works
          </Link>

          <Link
            href="/contact"
            className="group relative bg-slate-900 text-white pl-0 pr-5 md:px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-95"
          >
            Start Project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
