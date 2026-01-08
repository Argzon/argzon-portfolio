"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Compare } from "@/components/ui/compare";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".fade-in", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 fade-in">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            The <span className="font-sans not-italic">Introduction</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8 fade-in">
          <p className="text-lg text-slate-600 leading-relaxed">
            Northbeam is a tech company redefining attribution for modern
            brands, using advanced data models and machine learning to help
            businesses make informed marketing decisions. However, their website
            didn&apos;t reflect their innovative approach, lacking a
            product-driven structure and clear self-serve conversion options.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            The goal was to transform Northbeam&apos;s website into a
            high-converting, user-friendly platform that effectively
            communicates the brand&apos;s value and drives sign-ups from
            marketing professionals.
          </p>
        </div>
      </div>

      <div className="mt-20 fade-in rounded-[2rem] overflow-hidden border border-slate-200">
        <Compare
          firstImage="/assets/portfolio-images/northbeam/website-before.jpg"
          secondImage="/assets/portfolio-images/northbeam/website-after.svg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[400px] md:h-[600px] w-full"
          slideMode="drag"
        />
        <div className="p-4 bg-slate-50 text-center text-sm text-slate-500 italic">
          Drag to compare: Old Website vs. New Redesign
        </div>
      </div>
    </section>
  );
}
