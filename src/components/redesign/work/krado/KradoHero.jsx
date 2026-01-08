"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function KradoHero() {
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
            Krado Website Redesign
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            A complete redesign of Krado&apos;s website to enhance user
            experience, modernize visuals, and improve engagement. This project
            focused on intuitive navigation, interactive animations, and a
            seamless mobile experience.
          </p>

          <div className="flex gap-12 shrink-0">
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Date
              </span>
              <span className="text-sm font-semibold text-slate-900">
                22 November 2022
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Client
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Krado
              </span>
            </div>
          </div>
        </div>

        <div className="hero-image relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#E3F2E7] rounded-[2.5rem] overflow-hidden flex items-center justify-center p-6 md:p-12 mt-8">
          <Image
            src="/assets/portfolio-images/krado/hero-image.svg"
            alt="Krado Hero"
            width={1200}
            height={600}
            className="w-auto h-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
