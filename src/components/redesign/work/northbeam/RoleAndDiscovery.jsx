"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const researchPoints = [
  {
    title: "Competitor & Market Analysis",
    desc: "Studied leading analytics and attribution platforms to identify best practices.",
  },
  {
    title: "User Research",
    desc: "Defined key user personas and their pain points to guide the UX strategy.",
  },
  {
    title: "Heuristic Evaluation",
    desc: "Identified UX gaps and areas for improvement in the existing site.",
  },
  {
    title: "Sitemap & Information Architecture",
    desc: "Redesigned the structure to improve content hierarchy and navigation.",
  },
];

export default function RoleAndDiscovery() {
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
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      {/* Research Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Research & <span className="font-sans not-italic">Strategy</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed fade-in-item">
            To create a high-impact redesign, I conducted an in-depth research
            phase. These insights laid the foundation for a streamlined,
            intuitive user experience that prioritizes conversions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {researchPoints.map((item, index) => (
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Information{" "}
            <span className="font-sans not-italic">Architecture</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A revised sitemap was crucial to organizing Northbeam&apos;s complex
            data capabilities into a digestible product tour.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="fade-in-item w-full bg-slate-100 rounded-[2.5rem] flex items-center justify-center p-8 border border-slate-200">
            <Image
              src="/assets/portfolio-images/northbeam/information-architecture.svg"
              width={1200}
              height={600}
              alt="Northbeam Information Architecture"
              className="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
