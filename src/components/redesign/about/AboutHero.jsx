"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function AboutHero() {
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
          ".hero-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-image",
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative pt-32 pb-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-end">
        <div className="lg:w-7/12">
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-[10vw] md:text-[6vw] leading-[0.9] font-bold text-slate-900 tracking-tighter mb-4">
              Who am I?
            </h1>
          </div>
          <p className="hero-desc text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            Accomplished UI/UX designer with 13+ years of experience crafting
            intuitive websites, apps, and platforms across diverse industries.
            Proven success as a Design Lead, driving project efficiency through
            agile and waterfall methodologies. Expert in Figma, creating
            interactive prototypes that enhance collaboration and streamline
            workflows.
          </p>
        </div>
        <div className="lg:w-5/12 w-full">
          <div className="hero-image relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <Image
              src="/assets/ArgiProfilePic.png" // Using the same profile pic from footer as standard
              alt="Argzon Haziraj"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
