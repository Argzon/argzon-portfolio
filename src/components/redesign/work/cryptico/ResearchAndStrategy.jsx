"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ComparisonTable from "./ComparisonTable";
import UserPersonas from "./UserPersonas";

gsap.registerPlugin(ScrollTrigger);

const researchPoints = [
  {
    title: "Target Audience",
    desc: "Crypto enthusiasts, retail investors, and professional traders.",
  },
  {
    title: "Pain Points",
    desc: "Complex UI in existing platforms, lack of transparency, and security concerns.",
  },
  {
    title: "User Goals",
    desc: "Easy access to real-time data, quick transactions, and secure asset management.",
  },
];

const analysisPoints = [
  {
    title: "Market Study",
    desc: "Studied major platforms like Binance, Coinbase, and Kraken.",
  },
  {
    title: "Gap Analysis",
    desc: "Identified UX gaps and opportunities to differentiate Cryptico.",
  },
];

const iaPoints = [
  {
    title: "Sitemap",
    desc: "Developed a sitemap to ensure intuitive navigation.",
  },
  {
    title: "User Journeys",
    desc: "Created user journey maps to optimize the trading process.",
  },
];

export default function ResearchAndStrategy() {
  const container = useRef();

  useGSAP(
    () => {
      // Shared animations
      const sections = gsap.utils.toArray(".research-section");
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".fade-in-item"), {
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32"
    >
      {/* Research Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Research & <span className="font-sans not-italic">Strategy</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed fade-in-item">
            To create a user-centered solution, I conducted user research to
            define personas and understand the market landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPoints.map((item, index) => (
              <div
                key={index}
                className="fade-in-item p-6 border border-slate-200 rounded-2xl"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Personas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            User <span className="font-sans not-italic">Personas</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Based on the research, I identified two key user groups: the
            ambitious beginner and the seasoned pro.
          </p>
        </div>
        <div className="lg:col-span-8 fade-in-item">
          <UserPersonas />
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Competitive <span className="font-sans not-italic">Analysis</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {analysisPoints.map((item, index) => (
              <div
                key={index}
                className="fade-in-item p-6 bg-slate-50 border border-slate-100 rounded-2xl"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-in-item w-full overflow-hidden bg-slate-900 rounded-[2rem] p-4 md:p-8">
            <ComparisonTable />
          </div>
        </div>
      </div>

      {/* Information Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Information{" "}
            <span className="font-sans not-italic">Architecture</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {iaPoints.map((item, index) => (
              <div
                key={index}
                className="fade-in-item p-6 border border-slate-200 rounded-2xl"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-in-item w-full bg-slate-100 rounded-[2.5rem] flex items-center justify-center p-8">
            <Image
              src="/assets/portfolio-images/cryptico/information-architecture.svg"
              width={1200}
              height={467}
              alt="Information Architecture"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
