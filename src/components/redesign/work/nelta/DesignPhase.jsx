"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const designPoints = [
  "Visual Hierarchy",
  "Intuitive Navigation",
  "Trust Signals",
  "Accessibility",
];

export default function DesignPhase() {
  const container = useRef();

  useGSAP(
    () => {
      // Shared animations
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto bg-slate-50 rounded-[3rem] my-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            UI / UX <span className="font-sans not-italic">Design</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            The design phase focused on translating Nelta's corporate identity
            into a modern, accessible digital interface. We prioritized clear
            typography, ample whitespace, and structured layouts to convey
            professionalism.
          </p>
          <div className="flex flex-wrap gap-3">
            {designPoints.map((point, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {/* Full Width Design 1 */}
        <div className="w-full bg-white rounded-[2.5rem] p-4 md:p-8 overflow-hidden shadow-sm border border-slate-100">
          <Image
            src="/assets/portfolio-images/nelta/design-1.svg"
            width={1200}
            height={800}
            alt="Homepage Design"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* 2 Column Design 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2.5rem] p-4 md:p-8 overflow-hidden shadow-sm border border-slate-100">
            <Image
              src="/assets/portfolio-images/nelta/design-2.svg"
              width={800}
              height={1000}
              alt="Vacancy Page Design"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="bg-white rounded-[2.5rem] p-4 md:p-8 overflow-hidden shadow-sm border border-slate-100">
            <Image
              src="/assets/portfolio-images/nelta/design-3.svg"
              width={800}
              height={1000}
              alt="Contact Page Design"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Full Width Design 4 */}
        <div className="w-full bg-white rounded-[2.5rem] p-4 md:p-8 overflow-hidden shadow-sm border border-slate-100">
          <Image
            src="/assets/portfolio-images/nelta/design-4.svg"
            width={1200}
            height={800}
            alt="Services Design"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
