"use client";
import React from "react";
import Image from "next/image";

export default function FinalOutcome() {
  return (
    <section className="w-full py-[100px] bg-white-200 dark:bg-black-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black-500 dark:text-white-100">
            Final Outcome
          </h2>
          <p className="text-lg text-black-400 dark:text-white-400 max-w-2xl">
            The final platform provides a unified, powerful experience that
            solves the core problem of fragmentation. It successfully balances a
            dense feature set with a clean, approachable interface.
          </p>
        </div>

        {/* Large Final Mockup */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-black-100/10 dark:border-white-100/10 bg-white-100 dark:bg-black-500">
          {/* Placeholder for Final Mockup - using hero image or similar if specific final image not available */}
          <Image
            src="/assets/portfolio-images/creatick/hero-image.svg"
            alt="Final Creatick Interface"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
