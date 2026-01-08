"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    title: "Enhanced Engagement",
    desc: "User engagement improved through a visually compelling layout.",
  },
  {
    title: "Clear Messaging",
    desc: "Improved brand storytelling for diverse audiences.",
  },
  {
    title: "Seamless Navigation",
    desc: "Tailored experience for both technical & non-technical users.",
  },
  {
    title: "Unified Brand",
    desc: "Consistent visual system across all touchpoints.",
  },
];

export default function FinalOutcome() {
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
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif italic">
            Results & <span className="font-sans not-italic">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#6700F6] rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-center text-white">
          <Quote className="w-12 h-12 text-white/70 mb-6 absolute top-10 left-10" />
          <p
            className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic mb-8 pt-8 text-white"
            style={{ color: "#ffffff" }}
          >
            &quot;Working with Argzon was an exceptional experience. His ability
            to translate our vision into a user-friendly and visually compelling
            website exceeded our expectations.&quot;
          </p>
          <div>
            <h4
              className="font-bold text-white text-lg"
              style={{ color: "#ffffff" }}
            >
              Peter Roschke
            </h4>
            <p className="text-white text-sm" style={{ color: "#ffffff" }}>
              CTO, Coherent
            </p>
          </div>

          <Image
            src="/assets/portfolio-images/coherent/icon.svg"
            width={300}
            height={300}
            alt="Coherent Icon"
            className="absolute -bottom-10 -right-10 opacity-10 rotate-12"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Final Thoughts
        </h2>
        <p className="text-slate-600 leading-relaxed">
          The Coherent redesign successfully bridged the gap between technical
          complexity and user-friendly design. By focusing on a clear
          information architecture and a modern visual identity, we created a
          platform that effectively communicates Coherent&apos;s value to its
          diverse audience.
        </p>
      </div>
    </section>
  );
}
