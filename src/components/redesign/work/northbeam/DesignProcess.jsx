"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactPlayer from "react-player";

gsap.registerPlugin(ScrollTrigger);

const wireframePoints = [
  {
    title: "Low-Fidelity Wireframes",
    desc: "Created structure-focused wireframes to refine content placement and user flow.",
  },
  {
    title: "User Journey Mapping",
    desc: "Ensured smooth navigation from landing pages to conversion points.",
  },
  {
    title: "Usability Testing",
    desc: "Iterated on designs based on feedback, optimizing for engagement.",
  },
];

const uiPoints = [
  {
    title: "Visual Identity Refresh",
    desc: "Introduced a sleek, data-driven aesthetic with refined typography.",
  },
  {
    title: "Clear CTAs",
    desc: "Designed visually distinct CTAs to drive self-serve conversions.",
  },
  {
    title: "Interactive Highlights",
    desc: "Used dynamic elements to showcase Northbeam's capabilities engagingly.",
  },
];

export default function DesignProcess() {
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
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32"
    >
      {/* Wireframing Phase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-6xl font-bold text-slate-200 block mb-6">
            01
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            UX Design &{" "}
            <span className="font-sans not-italic">Wireframing</span>
          </h2>
          <div className="flex flex-col gap-4">
            {wireframePoints.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-slate-50 border border-slate-100 rounded-xl"
              >
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Mobile UI Video */}
          <div className="w-full bg-slate-100 rounded-[2.5rem] overflow-hidden p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-white opacity-50" />
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-900 bg-black">
              <ReactPlayer
                url="/assets/portfolio-images/northbeam/mobile-ui.mp4"
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
          <p className="text-center text-sm text-slate-500 italic">
            Optimized mobile experience for on-the-go tracking
          </p>
        </div>
      </div>

      {/* UI Design Phase */}
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
              <div
                key={i}
                className="p-4 bg-slate-50 border border-slate-100 rounded-xl"
              >
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 order-2 lg:order-1">
          {/* Desktop UI Video */}
          <div className="w-full bg-blue-500 rounded-[2.5rem] overflow-hidden shadow-2xl p-4 md:p-8">
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black">
              <ReactPlayer
                url="/assets/portfolio-images/northbeam/desktop-ui.mp4"
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

      {/* Brand Assets Gallery */}
      <div className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif italic">
            Design <span className="font-sans not-italic">System</span>
          </h2>
          <p className="text-slate-600">
            A scalable design system ensuring consistency across the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-center justify-center">
            <Image
              src="/assets/portfolio-images/northbeam/moodboard.jpg"
              width={800}
              height={600}
              alt="Northbeam Moodboard 1"
              className="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-center justify-center">
            <Image
              src="/assets/portfolio-images/northbeam/moodboard-2.jpg"
              width={800}
              height={600}
              alt="Northbeam Moodboard 2"
              className="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
            <Image
              src="/assets/portfolio-images/northbeam/ds-colors.svg"
              width={400}
              height={300}
              alt="Colors"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
            <Image
              src="/assets/portfolio-images/northbeam/ds-typography.svg"
              width={400}
              height={300}
              alt="Typography"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
            <Image
              src="/assets/portfolio-images/northbeam/ds-buttons.svg"
              width={400}
              height={300}
              alt="Buttons"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
