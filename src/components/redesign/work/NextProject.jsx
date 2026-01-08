"use client";
import React from "react";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";

export default function NextProject() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto border-t border-slate-100 flex justify-end">
      <Link
        href="/work/nelta"
        className="group flex items-center gap-4 text-right"
      >
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
            Next Project
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            Nelta
          </h3>
        </div>
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <ArrowRight className="w-6 h-6 text-slate-900 group-hover:text-blue-600" />
        </div>
      </Link>
    </section>
  );
}
