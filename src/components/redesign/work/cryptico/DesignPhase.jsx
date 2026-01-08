"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const uiPoints = [
  {
    title: "Dark Mode Aesthetic",
    desc: "Developed a dark-mode-inspired UI for a sleek and modern aesthetic.",
  },
  {
    title: "Visual Hierarchy",
    desc: "Created a visual hierarchy with a focus on clarity and efficiency.",
  },
  {
    title: "Interactive Usability",
    desc: "Designed interactive elements for enhanced usability.",
  },
];

export default function DesignPhase() {
  const container = useRef();

  useGSAP(
    () => {
      // Shared animations
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32 bg-slate-50 rounded-[3rem]"
    >
      {/* Process & Wireframes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-6xl font-bold text-slate-200 block mb-6">
            01
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Process & <span className="font-sans not-italic">Wireframes</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I designed low-fidelity wireframes to establish structure and
            navigation, then developed high-fidelity prototypes for user
            testing.
          </p>
        </div>
        <div className="lg:col-span-8">
          {/* This could be a wireframe image if available, but for now specific image wasn't in source besides deliverables */}
        </div>
      </div>

      {/* UI Design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 order-1 lg:order-2">
          <span className="text-6xl font-bold text-slate-200 block mb-6">
            02
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            UI Design & <span className="font-sans not-italic">Branding</span>
          </h2>
          <div className="flex flex-col gap-4">
            {uiPoints.map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div className="w-full bg-[#FFF9C4] rounded-[2.5rem] flex items-center justify-center p-8">
            <Image
              src="/assets/portfolio-images/cryptico/moodboard.png"
              width={1200}
              height={612}
              alt="Moodboard"
              className="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Deliverables Gallery */}
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif italic">
            Design <span className="font-sans not-italic">Deliverables</span>
          </h2>
          <p className="text-slate-600">
            High-fidelity UI designs, interactive prototypes, and branding
            assets.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="w-full bg-slate-200 rounded-[2.5rem] p-4 md:p-8">
            <Image
              src="/assets/portfolio-images/cryptico/design-1.svg"
              width={1200}
              height={612}
              alt="Homepage Design"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full bg-slate-200 rounded-[2.5rem] p-4 md:p-8">
              <Image
                src="/assets/portfolio-images/cryptico/design-2.svg"
                width={1200}
                height={612}
                alt="Withdraw Page"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-full bg-slate-200 rounded-[2.5rem] p-4 md:p-8">
              <Image
                src="/assets/portfolio-images/cryptico/design-3.svg"
                width={1200}
                height={612}
                alt="MFA Setup"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="w-full bg-[#FFF9C4] rounded-[2.5rem] p-4 md:p-8">
            <Image
              src="/assets/portfolio-images/cryptico/design-4.svg"
              width={1200}
              height={612}
              alt="Create Account"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
