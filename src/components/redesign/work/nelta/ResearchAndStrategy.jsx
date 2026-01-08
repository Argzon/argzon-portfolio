"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const keyPoints = [
  {
    title: "Understanding Users",
    desc: "Conducted stakeholder interviews and competitor analysis to identify key user needs.",
  },
  {
    title: "Streamlining Navigation",
    desc: "Restructured the information architecture to make complex services easy to find.",
  },
  {
    title: "Visual Hierarchy",
    desc: "Established a clear visual hierarchy to guide users through the conversion funnel.",
  },
];

export default function ResearchAndStrategy() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".strategy-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Research & <span className="font-sans not-italic">Strategy</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            Our strategy focused on clarity and credibility. We mapped out user
            flows to ensure that potential clients could quickly verify
            Nelta&apos;s certifications and understand their service portfolio
            without friction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPoints.map((item, index) => (
              <div
                key={index}
                className="strategy-item p-6 bg-slate-50 rounded-2xl border border-slate-100"
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

      <div className="space-y-24">
        {/* User Flow */}
        <div className="strategy-item">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">User Flow</h3>
          <div className="w-full bg-slate-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
            <Image
              src="/assets/portfolio-images/nelta/user-flow.png"
              width={1200}
              height={800}
              alt="Nelta User Flow"
              className="w-full h-auto rounded-xl shadow-lg mix-blend-multiply"
            />
          </div>
        </div>

        {/* IA */}
        <div className="strategy-item">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Information Architecture
          </h3>
          <div className="w-full bg-slate-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
            <Image
              src="/assets/portfolio-images/nelta/information-architecture.svg"
              width={1200}
              height={800}
              alt="Nelta Information Architecture"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
