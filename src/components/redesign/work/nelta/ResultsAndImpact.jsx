"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import Takeaways from "./Takeaways";

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    metric: "100%",
    label: "Visual Transformation",
    desc: "Complete overhaul aligning with modern standards",
  },
  {
    metric: "High",
    label: "Credibility",
    desc: "Successfully positioned as an industry leader",
  },
  {
    metric: "Up",
    label: "User Engagement",
    desc: "Intuitive structure leading to longer visits",
  },
];

const conclusionPoints = [
  "Successfully balanced corporate professionalism with modern design aesthetics.",
  "Enhanced the digital storytelling of Nelta's complex service offerings.",
  "Delivered a scalable, high-performance platform ready for future growth.",
];

export default function ResultsAndImpact() {
  const container = useRef();

  useGSAP(
    () => {
      // Animations
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-24 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32"
    >
      {/* Results Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Results & <span className="font-sans not-italic">Impact</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The redesign transformed Nelta’s digital presence, providing a
            platform that matches their technical expertise with a modern,
            professional look.
          </p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {item.metric}
              </div>
              <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Before & After - Full Width */}
      <div className="flex flex-col gap-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Visual <span className="font-sans not-italic">Transformation</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            See the dramatic difference between the original site and the new
            design.
          </p>
        </div>

        <div className="w-full h-[600px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">
          <Compare
            firstImage="/assets/portfolio-images/nelta/website-before.jpg"
            secondImage="/assets/portfolio-images/nelta/website-after.svg"
            firstImageClassName="object-cover object-top"
            secondImageClassname="object-cover object-top"
            className="w-full h-full"
            slideMode="hover"
          />
        </div>
      </div>

      {/* Testimonial - Creatick Style (Dark) */}
      <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-center text-white">
        <Quote className="w-16 h-16 text-white/10 mb-8 absolute top-10 left-10" />
        <p className="text-xl md:text-2xl font-light leading-relaxed relative z-10 italic mb-10 max-w-3xl">
          &quot;The new website perfectly aligns with our brand and communicates
          our services more effectively. The UX improvements have enhanced our
          customer engagement significantly!&quot;
        </p>
        <div>
          <h4 className="font-bold text-white text-lg">Youssuf Zarhan</h4>
          <p className="text-white/60 text-sm">
            Chief Executive Officer, Nelta
          </p>
        </div>
        {/* Abstract shape */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* Key Takeaways & Conclusion - Creatick Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Key <span className="font-sans not-italic">Takeaways</span>
          </h2>
          <div className="mb-4 space-y-4">
            {conclusionPoints.map((point, i) => (
              <p key={i} className="text-slate-600">
                {point}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Conclusion
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nelta&apos;s redesign reinforces the importance of aligning visual
              identity with technical capability. By creating a modern,
              accessible, and high-performance digital presence, we&apos;ve set
              a new standard for how IT consulting firms can present themselves
              in a competitive market.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Takeaways />
        </div>
      </div>
    </section>
  );
}
