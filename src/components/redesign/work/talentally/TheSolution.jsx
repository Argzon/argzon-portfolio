"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TheSolution() {
  const container = useRef();

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".solution-item");
      elements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 solution-item">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            The <span className="font-sans not-italic">Solution</span>
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The redesign involved a comprehensive approach to align user needs
            with business goals:
          </p>
          <ul className="space-y-3">
            {[
              "Conducted research to align the design with user needs.",
              "Designed a new sitemap for better navigation.",
              "Developed wireframes and prototypes for user testing.",
              "Created a modern UI with engaging visuals and interactive elements.",
              "Ensured a seamless design handoff to developers.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Design 1 */}
        <div className="solution-item w-full bg-[#3643E6] rounded-[2.5rem] p-6 md:p-12 flex justify-center">
          <Image
            src="/assets/portfolio-images/talentally/design-1.svg"
            width={1100}
            height={612}
            alt="Homepage Design"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Design 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="solution-item bg-[#6D77EC] rounded-[2.5rem] p-6 md:p-8 flex justify-center items-center">
            <Image
              src="/assets/portfolio-images/talentally/design-2.svg"
              width={600}
              height={400}
              alt="Employer Features"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          <div className="solution-item bg-[#FFD400] rounded-[2.5rem] p-6 md:p-8 flex justify-center items-center">
            <Image
              src="/assets/portfolio-images/talentally/design-3.svg"
              width={600}
              height={400}
              alt="Job Box"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Design 4 */}
        <div className="solution-item w-full bg-slate-100 rounded-[2.5rem] p-6 md:p-12 flex justify-center">
          <Image
            src="/assets/portfolio-images/talentally/design-4.svg"
            width={1100}
            height={612}
            alt="Design System"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Design 5 */}
        <div className="solution-item w-full bg-[#6D77EC] rounded-[2.5rem] p-6 md:p-12 flex justify-center">
          <Image
            src="/assets/portfolio-images/talentally/design-5.svg"
            width={1100}
            height={612}
            alt="Career Resources"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
