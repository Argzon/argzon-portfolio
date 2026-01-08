"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
            <strong className="text-slate-900">Nelta</strong> is a TÜV-certified
            IT consulting company serving industries such as automotive, banking
            and finance, logistics, e-commerce, healthcare, and government. They
            specialize in software testing, CRM consulting, SAP consulting, and
            custom software development.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Their goal is to provide innovative IT solutions that help
            businesses succeed in the digital age. As the Lead Designer, I was
            tasked with redesigning their digital presence to better reflect
            their expertise and authority in the sector.
          </p>
        </div>
      </div>
    </section>
  );
}
