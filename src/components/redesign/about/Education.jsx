"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import educationData from "@/app/about/data/educationInformation.json";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".education-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto bg-slate-50 rounded-[3rem] my-20"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          My <span className="font-sans not-italic">Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.education.map((item) => (
          <div
            key={item.id}
            className="education-card p-10 bg-white rounded-[2.5rem] flex flex-col gap-4 shadow-sm"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {item.period || "Completed"}
            </span>
            <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
            <p className="text-slate-600">{item.school}</p>
            {item.more && item.more.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                {item.more.map((info, i) => (
                  <p key={i} className="text-xs font-bold text-slate-500">
                    {info}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
