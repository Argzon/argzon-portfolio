"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const learnings = [
  "The importance of user research in driving design decisions.",
  "The value of seamless collaboration between designers, developers, and marketing teams.",
  "The impact of a well-structured design handoff for smooth implementation.",
];

export default function Takeaways() {
  const container = useRef();

  useGSAP(
    () => {
      // animations
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Key <span className="font-sans not-italic">Learnings</span>
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            This project reinforced my expertise in UI/UX design, collaboration,
            and project management. The biggest takeaways included:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learnings.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  0{i + 1}
                </h4>
                <p className="text-sm text-slate-600 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
