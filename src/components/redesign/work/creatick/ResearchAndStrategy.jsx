"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import UserPersonas from "./UserPersonas";

gsap.registerPlugin(ScrollTrigger);

const researchPoints = [
  {
    title: "Efficiency First",
    desc: "Users prioritize speed and automation over complex feature sets.",
  },
  {
    title: "Mobile Dependency",
    desc: "For influencers, mobile-first capability is non-negotiable.",
  },
  {
    title: "Data Visualization",
    desc: "Raw data is overwhelming; users need actionable insights.",
  },
];

const analysisPoints = [
  {
    title: "Direct Competitors",
    desc: "Analyzed Buffer, Hootsuite, and Later to understand common patterns.",
  },
  {
    title: "Opportunity",
    desc: "Found a gap in seamless DM management integrated with scheduling.",
  },
];

const iaPoints = [
  {
    title: "Simplified Hierarchy",
    desc: "Flattened the navigation to make key tasks accessible in fewer clicks.",
  },
  {
    title: "Task-Based Flow",
    desc: "Organized features by workflow: Create, Schedule, Engage, Analyze.",
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
            To build a solution that truly resonated with users, I conducted
            qualitative interviews with social media managers and influencers.
            The goal was to uncover hidden pain points in their daily workflows.
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
            Based on the research, I focused on two distinct user types: the
            professional consultant managing multiple clients, and the content
            creator focusing on personal brand growth.
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
              src="/assets/portfolio-images/creatick/information-architecture.svg"
              width={800}
              height={450}
              alt="Creatick Information Architecture"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
