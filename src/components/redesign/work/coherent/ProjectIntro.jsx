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
            <strong className="text-slate-900">Coherent</strong> is a global
            SaaS enterprise revolutionizing how business and IT teams
            collaborate on software development. Their unique approach empowers
            both developers and non-developers to work seamlessly by converting
            complex spreadsheets into user-friendly APIs.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Coherent approached me with a vision to transform their existing
            website into a highly efficient and engaging marketing platform that
            tells their story effectively. As the{" "}
            <strong className="text-slate-900">UI/UX Designer</strong>, I was
            responsible for research, sitemapping, wireframing, and delivering
            high-fidelity designs.
          </p>
        </div>
      </div>

      <div className="mt-20 fade-in rounded-[2rem] overflow-hidden border border-slate-200">
        <Compare
          firstImage="/assets/portfolio-images/coherent/website-before.jpg"
          secondImage="/assets/portfolio-images/coherent/website-after.svg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[400px] md:h-[600px] w-full"
          slideMode="drag"
        />
      </div>
    </section>
  );
}
