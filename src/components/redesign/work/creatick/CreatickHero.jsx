"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CreatickHero() {
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
            Creatick Management Platform
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            A complete case study on Creatick, a social media management
            platform, showcasing my end-to-end design and development process.
            This project highlights UX/UI design, front-end development, and
            agile methodologies.
          </p>

          <div className="flex gap-12 shrink-0">
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Date
              </span>
              <span className="text-sm font-semibold text-slate-900">2019</span>
            </div>
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Client
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Creatick
              </span>
            </div>
          </div>
        </div>

        <div className="hero-image relative w-full aspect-[16/9] md:aspect-[21/9] bg-blue-600 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-6 md:p-12 mt-8">
          <Image
            src="/assets/portfolio-images/creatick/hero-image.svg"
            alt="Creatick Hero"
            width={1100}
            height={572}
            className="w-auto h-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
