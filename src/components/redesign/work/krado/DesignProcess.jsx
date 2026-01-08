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
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          Design Process{" "}
          <span className="font-sans not-italic">& Solutions</span>
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              01
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Visual & UX Overhaul
            </h3>
            <p className="text-slate-600 mb-4">
              A modern and minimalistic design was implemented to reflect
              Krado&apos;s innovation. Key elements included:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Clean and engaging UI elements</li>
              <li>Consistent brand colors and typography</li>
              <li>High-quality imagery and subtle animations</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-[#E3F2E7] p-4 md:p-8">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <ReactPlayer
                  url="/assets/portfolio-images/krado/desktop-ui.mp4"
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

        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 order-1 lg:order-2">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              02
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Intuitive Navigation & User Flow
            </h3>
            <p className="text-slate-600 mb-4">
              I restructured the website&apos;s information architecture to
              provide seamless browsing and clear CTAs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Improved menu navigation for easy access to resources</li>
              <li>Optimized page hierarchy to highlight key offerings</li>
              <li>Strategic placement of CTAs for lead conversion</li>
            </ul>
          </div>
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="w-full rounded-3xl overflow-hidden bg-slate-200 p-4 md:p-8">
              <Image
                src="/assets/portfolio-images/krado/user-flow.png"
                width={1200}
                height={600}
                alt="User Flow"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              03
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Interactive Animations
            </h3>
            <p className="text-slate-600 mb-4">
              To match Krado&apos;s tech-driven nature, I designed animations
              that were implemented in Webflow:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Scroll-based interactions to engage users dynamically</li>
              <li>Micro-interactions for buttons, icons, and hover effects</li>
              <li>
                Animated showcase of the Leaflet app to highlight its features
                visually
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-200 p-4 md:p-8">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <ReactPlayer
                  url="/assets/portfolio-images/krado/homepage-desktop.mp4"
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

        {/* Step 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 order-1 lg:order-2">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              04
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Mobile Responsiveness
            </h3>
            <p className="text-slate-600 mb-4">
              With a growing number of mobile users, ensuring responsiveness was
              a top priority:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Fully responsive design for a seamless mobile experience</li>
              <li>Optimized loading times by reducing heavy assets</li>
              <li>Touch-friendly interactions for an improved mobile UX</li>
            </ul>
          </div>
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-[#E3F2E7] p-4 md:p-8">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <ReactPlayer
                  url="/assets/portfolio-images/krado/mobile-ui.mp4"
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

        {/* Step 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-6xl font-bold text-slate-200 block mb-6">
              05
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              E-commerce Integration
            </h3>
            <p className="text-slate-600 mb-4">
              A checkout system was designed to allow Krado to sell its
              plant-care products directly from the website:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Minimalist and easy-to-use checkout page</li>
              <li>Secure payment integration</li>
              <li>Product page optimization for better conversions</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="w-full rounded-3xl overflow-hidden bg-slate-200 p-4 md:p-8">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/portfolio-images/krado/checkout-process.png"
                  width={1200}
                  height={600}
                  alt="Checkout Process"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
