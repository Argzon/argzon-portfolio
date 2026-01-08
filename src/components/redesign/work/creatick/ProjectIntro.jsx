"use client";
import React, { useRef } from "react";
import Image from "next/image";
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
            <strong className="text-slate-900">Creatick</strong> is a
            comprehensive social media management platform designed for
            Instagram users, businesses, and content creators. In an era where
            social media presence is vital, Creatick provides tools to
            streamline content scheduling, manage engagement, and analyze
            performance.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            The goal was to create a unified dashboard that solves the
            complication of using multiple tools for scheduling, reporting, and
            direct messaging. As the{" "}
            <strong className="text-slate-900">Product Designer</strong>, I led
            the entire lifecycle of the product from{" "}
            <strong className="text-slate-900">
              User Research to Interaction Design
            </strong>{" "}
            and Frontend Implementation.
          </p>
        </div>
      </div>

      <div className="mt-20 fade-in rounded-[2.5rem] overflow-hidden bg-slate-100 flex justify-center p-8 md:p-16">
        <Image
          src="/assets/portfolio-images/creatick/workspace.jpg"
          width={1100}
          height={572}
          alt="Creatick Workspace"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
