"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WorkHero() {
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
      }).from(
        ".hero-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative pt-32 pb-10 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="flex flex-col gap-8">
        <div className="overflow-hidden">
          <h1 className="hero-title-line text-[12vw] md:text-[8vw] leading-[0.9] font-bold text-slate-900 tracking-tighter">
            Selected Work
          </h1>
        </div>
        <div className="max-w-2xl">
          <p className="hero-desc text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
            Crafting thoughtful & engaging digital experiences. I focus on
            usability, accessibility, and aesthetics to create seamless
            interfaces that solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
}
