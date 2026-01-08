"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { label: "Frontend", desc: "Next.js" },
  { label: "Backend", desc: "Firebase" },
  { label: "VCS", desc: "GitHub" },
  { label: "PM", desc: "ClickUp" },
];

const keyFeatures = [
  "Smart Scheduler with drag-and-drop calendar",
  "Unified Inbox for multi-account DM management",
  "Interactive analytics dashboard",
  "Centralized asset library for media assets",
];

export default function DevelopmentPhase() {
  const container = useRef();

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Development &{" "}
            <span className="font-sans not-italic">Implementation</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Translating the design into a functional application required a
            focus on performance and live updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((item, i) => (
              <div key={i} className="p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="w-full bg-blue-100 rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
            {/* Placeholder for Code/Dev image */}
            <div className="w-full aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-300">
              Development Preview
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Key Features Implemented
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feat, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-sm font-medium leading-relaxed">{feat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
