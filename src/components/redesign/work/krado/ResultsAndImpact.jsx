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
    title: "Higher Engagement",
    desc: "Higher user engagement due to improved UI/UX.",
  },
  {
    title: "Better Mobile CX",
    desc: "Better mobile experience, reducing bounce rates on smaller screens.",
  },
  {
    title: "Increased Sales",
    desc: "Seamless shopping experience, increasing product sales via the checkout page.",
  },
  {
    title: "SEO Growth",
    desc: "Enhanced discoverability, thanks to SEO-optimized content.",
  },
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

        <div className="bg-[#E3F2E7] rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-center">
          <Quote className="w-12 h-12 text-slate-900/10 mb-6 absolute top-10 left-10" />
          <p className="text-lg md:text-xl font-medium text-slate-800 relative z-10 italic mb-8 pt-8">
            &quot;The website redesign exceeded our expectations. The improved
            user experience and seamless navigation have significantly increased
            engagement. The animations beautifully showcase our product, and we
            couldn&apos;t be happier with the results!&quot;
          </p>
          <div>
            <h4 className="font-bold text-slate-900">Max Ono</h4>
            <p className="text-slate-600 text-sm">CTO / Co-Founder, Krado</p>
          </div>

          <Image
            src="/assets/portfolio-images/krado/krado-sensor.png"
            width={300}
            height={300}
            alt="Sensor"
            className="absolute -bottom-10 -right-10 opacity-50 rotate-12"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Final Thoughts
        </h2>
        <p className="text-slate-600 leading-relaxed">
          This project reinforced the importance of balancing aesthetics with
          functionality. Through research-driven design, interactive UI
          elements, and seamless UX, I was able to transform Krado&apos;s
          website into a dynamic, user-centric platform that aligns with its
          innovative mission.
        </p>
      </div>
    </section>
  );
}
