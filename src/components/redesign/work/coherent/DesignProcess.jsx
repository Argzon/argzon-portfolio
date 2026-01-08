"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function DesignProcess() {
  const container = useRef();

  useGSAP(
    () => {
      // Animations can be added here
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto bg-slate-50 rounded-[3rem] my-10"
    >
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          Design Process{" "}
          <span className="font-sans not-italic">& Solutions</span>
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {/* Step 1: IA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              01
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Information Architecture
            </h3>
            <p className="text-slate-600 mb-4">
              I developed a streamlined sitemap that prioritized intuitive
              navigation and content hierarchy, ensuring users could easily find
              irrelevant information.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Streamlined sitemap</li>
              <li>Intuitive navigation flow</li>
              <li>Clear content hierarchy</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="w-full bg-[#1A1A1A] rounded-[2.5rem] p-4 md:p-8">
              <Image
                src="/assets/portfolio-images/coherent/information-architecture.jpg"
                width={1200}
                height={612}
                alt="Information Architecture"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Visual Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 order-1 lg:order-2">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              02
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Visual Identity
            </h3>
            <p className="text-slate-600 mb-4">
              Created moodboards to align the visual identity with
              Coherent&apos;s brand, defined by a clean, modern aesthetic with
              purple accents.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Modern & clean aesthetic</li>
              <li>Brand alignment</li>
              <li>Consistent design system</li>
            </ul>
          </div>
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="w-full bg-white rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center border border-slate-100">
              <Image
                src="/assets/portfolio-images/coherent/moodboard.png"
                width={1200}
                height={612}
                alt="Moodboard"
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Wireframes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              03
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              UX Flow & Wireframes
            </h3>
            <p className="text-slate-600 mb-4">
              Developed low-fidelity wireframes to establish layout and
              functionality before moving to high-fidelity visual design.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Low-fidelity prototypes</li>
              <li>Layout validation</li>
              <li>UX flow testing</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="w-full bg-[#3D2561] rounded-[2.5rem] p-4 md:p-8">
              <div className="rounded-xl overflow-hidden aspect-video relative">
                <ReactPlayer
                  url="/assets/portfolio-images/coherent/wireframe.mp4"
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={true}
                  muted={true}
                  loop={true}
                  playsinline={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: UI Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 order-1 lg:order-2">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              04
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              UI Design Transformation
            </h3>
            <p className="text-slate-600 mb-4">
              Designed high-fidelity UI screens with an emphasis on clarity,
              accessibility, and modern aesthetics.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>High-fidelity mockups</li>
              <li>Accessibility focused</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="w-full bg-[#EADDFF] rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
              <Image
                src="/assets/portfolio-images/coherent/website-after.svg"
                width={1200}
                height={612}
                alt="Final UI Design"
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
