"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Placeholder data since we don't have awards.json
const awards = [
  {
    id: 1,
    hosted: "Awwwards",
    award: "Nominee - Best Portfolio",
    project: "Argzon Portfolio",
    year: "2024",
  },
  {
    id: 2,
    hosted: "Behance",
    award: "Featured in UI/UX",
    project: "Krado Redesign",
    year: "2023",
  },
  {
    id: 3,
    hosted: "CSS Design Awards",
    award: "Honorable Mention",
    project: "Cryptico App",
    year: "2023",
  },
  {
    id: 4,
    hosted: "Dribbble",
    award: "Trending in Product Design",
    project: "Various Works",
    year: "2023",
  },
];

export default function Awards() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".award-row", {
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
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto mb-20"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          My <span className="font-sans not-italic">Honors</span>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <th className="py-4 font-normal">Hosted</th>
              <th className="py-4 font-normal">Award</th>
              <th className="py-4 font-normal">Project</th>
              <th className="py-4 font-normal text-right">Year</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((item) => (
              <tr
                key={item.id}
                className="award-row border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              >
                <td className="py-6 text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                  {item.hosted}
                </td>
                <td className="py-6 text-lg font-bold text-slate-900">
                  {item.award}
                </td>
                <td className="py-6 text-sm text-slate-500">{item.project}</td>
                <td className="py-6 text-sm text-slate-500 text-right">
                  {item.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-12">
        <button className="px-6 py-3 rounded-full border border-slate-200 text-xs font-bold text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-2">
          Show More <span className="text-[10px]">▼</span>
        </button>
      </div>
    </section>
  );
}
