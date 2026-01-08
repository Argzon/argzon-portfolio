"use client";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CoherentHero() {
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
            Coherent Website Redesign
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            Transforming Coherent&apos;s website into an intuitive, engaging
            platform that bridges the gap between developers and business teams.
            Through strategic UX/UI design and clear information architecture,
            the new site effectively tells Coherent&apos;s story.
          </p>

          <div className="flex gap-12 shrink-0">
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Date
              </span>
              <span className="text-sm font-semibold text-slate-900">
                07 July 2023
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Client
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Coherent
              </span>
            </div>
          </div>
        </div>

        <div className="hero-media relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-slate-100 mt-8">
          <ReactPlayer
            url="/assets/portfolio-images/coherent/hero-video.mp4"
            width="100%"
            height="100%"
            controls={false}
            playing={true}
            muted={true}
            loop={true}
            playsinline={true}
            className="!absolute top-0 left-0"
          />
        </div>
      </div>
    </section>
  );
}
