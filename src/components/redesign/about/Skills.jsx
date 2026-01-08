"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import skillsData from "@/app/about/data/skills.json";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          Technical <span className="font-sans not-italic">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.skills.map((skillGroup, index) => (
          <div
            key={index}
            className="skill-category border border-slate-200 rounded-3xl p-8 hover:border-slate-300 transition-colors"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full overflow-hidden text-ellipsis whitespace-nowrap max-w-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
