"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-pill",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6"
        );

      gsap.to(".rotating-circle", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="relative z-10">
        <div className="overflow-hidden">
          <h1 className="hero-title-line text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-bold text-slate-900 tracking-tighter">
            Design.
          </h1>
        </div>
        <div className="overflow-hidden flex items-baseline gap-4 md:gap-8 flex-wrap">
          <h1 className="hero-title-line text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-bold text-slate-900 tracking-tighter">
            Development.
          </h1>
        </div>
        <div className="overflow-hidden flex items-center justify-between w-full">
          <h1 className="hero-title-line text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-bold text-slate-900 tracking-tighter italic">
            Mastership.
          </h1>
          <div className="hidden md:block absolute right-0 top-10">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg
                className="rotating-circle w-full h-full absolute top-0 left-0"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="text-[10px] uppercase font-bold tracking-widest fill-slate-900">
                  <textPath href="#circlePath" startOffset="0%">
                    Read more about me • Read more about me •
                  </textPath>
                </text>
              </svg>
              <ArrowUpRight className="w-8 h-8 text-slate-900" />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex gap-4">
            {["Product Design", "UI/UX", "Prototyping"].map((tag, i) => (
              <div
                key={i}
                className="hero-pill px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors uppercase text-xs font-bold tracking-wider"
              >
                {tag}
              </div>
            ))}
          </div>

          <p className="hero-subtitle md:max-w-md text-lg text-slate-600 leading-relaxed font-normal">
            I design and develop exceptional digital products and services,
            eCommerce, and brand communication solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
