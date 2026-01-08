"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TalentallyHero() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
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
          ".hero-stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".hero-image",
          {
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="pt-32 pb-10 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="flex flex-col gap-10">
        <div className="overflow-hidden">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-[6vw] leading-[0.9] font-bold text-slate-900 tracking-tighter">
            TalentAlly Desgin
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            A complete UI/UX redesign of TalentAlly&apos;s (formerly: IPDN)
            website, transforming an outdated platform into a modern,
            user-friendly experience. This case study showcases my design
            process, collaboration, and final impactful results.
          </p>

          <div className="flex gap-12 shrink-0">
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Date
              </span>
              <span className="text-sm font-semibold text-slate-900">
                12 February 2024
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Client
              </span>
              <span className="text-sm font-semibold text-slate-900">
                TalentAlly
              </span>
            </div>
          </div>
        </div>

        <div className="hero-image relative w-full bg-[#FFD400] rounded-[2.5rem] overflow-hidden flex items-center justify-center p-6 md:p-12 mt-8">
          <Image
            src="/assets/portfolio-images/talentally/hero-image.svg"
            alt="TalentAlly Hero"
            width={1100}
            height={572}
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
