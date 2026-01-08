"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import experienceData from "@/app/about/data/experienceInformation.json";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".experience-row", {
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
          Work <span className="font-sans not-italic">Experience</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {experienceData.experiences.map((item) => (
          <div
            key={item.id}
            className="experience-row grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-b border-slate-100 pb-12 last:border-0"
          >
            <div className="lg:col-span-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                {item.period}
              </span>
              <p className="text-xs text-slate-400 mt-2">{item.location}</p>
            </div>
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {item.position}
              </h3>
              <p className="text-lg text-slate-700 font-serif italic">
                {item.company}
              </p>
            </div>
            <div className="lg:col-span-5">
              <ul className="list-disc list-outside pl-5 space-y-3 text-slate-600 text-sm leading-relaxed">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
