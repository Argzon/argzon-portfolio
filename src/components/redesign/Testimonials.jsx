"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials({ items }) {
  const container = useRef();
  const [expandedId, setExpandedId] = useState(null);

  useGSAP(
    () => {
      // Ensure elements are hidden initially to avoid flash before animation
      gsap.set(".testimonial-card", { y: 30, opacity: 0 });

      ScrollTrigger.batch(".testimonial-card", {
        start: "top bottom",
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });
    },
    { scope: container, dependencies: [items] }
  );

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          Client's <span className="font-sans not-italic">Testimonials</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {items.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className={`testimonial-card border border-slate-200 rounded-[2.5rem] p-10 bg-white hover:border-slate-300 transition-all duration-500 flex flex-col justify-between ${
                isExpanded ? "row-span-2" : ""
              }`}
            >
              <div className="mb-8">
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? "max-h-[1000px]" : "max-h-[160px]"
                  }`}
                >
                  <p className="text-xl leading-relaxed text-slate-600 font-serif italic whitespace-pre-line">
                    "{item.testimonial}"
                  </p>
                </div>
                {!isExpanded && item.testimonial.length > 150 && (
                  <div className="h-8 -mt-8 bg-gradient-to-t from-white to-transparent relative z-10" />
                )}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 border-opacity-0">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                    {item.profilePic && (
                      <Image
                        src={item.profilePic}
                        alt={item.author}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-500">{item.company}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleExpand(item.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  {isExpanded ? (
                    <ArrowUp className="w-3 h-3 text-slate-900" />
                  ) : (
                    <ArrowUpRight className="w-3 h-3 text-slate-900" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
      </div>
    </section>
  );
}
