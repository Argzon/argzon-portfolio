"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function NorthbeamHero() {
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
          ".hero-media",
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
            Northbeam Website Redesign
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            A complete UX/UI transformation for Northbeam&apos;s website,
            enhancing its brand identity, user experience, and conversion rates
            through strategic research, design, and implementation.
          </p>

          <div className="flex gap-12 shrink-0">
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Date
              </span>
              <span className="text-sm font-semibold text-slate-900">
                04 August 2023
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Client
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Northbeam
              </span>
            </div>
          </div>
        </div>
        <div className="hero-media relative w-full aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl mt-8">
          <ReactPlayer
            url="/assets/portfolio-images/northbeam/hero-video.mp4"
            width="100%"
            height="100%"
            controls={false}
            playing={true}
            muted={true}
            loop={true}
            style={{ objectFit: "cover" }}
            playsinline={true}
          />
        </div>
      </div>
    </section>
  );
}
