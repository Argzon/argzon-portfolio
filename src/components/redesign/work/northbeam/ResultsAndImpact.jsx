"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const results = [
  "Increased user engagement through improved design and content hierarchy.",
  "Boosted conversion rates with optimized CTAs and a frictionless user journey.",
  "Strengthened Northbeam's brand presence by aligning the website with their innovative identity.",
];

export default function ResultsAndImpact() {
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
      {/* Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Results & <span className="font-sans not-italic">Impact</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            While post-launch analytics are typically gathered over time, the
            immediate impact of the redesign was clear:
          </p>
          <ul className="space-y-4">
            {results.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-700 font-medium p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col justify-center text-white h-full">
            <Quote className="w-12 h-12 text-white/20 mb-8" />
            <p className="text-xl font-light leading-relaxed relative z-10 italic mb-10 text-slate-200">
              &quot;Argzon played a crucial role in transforming our website
              into a product-driven platform that truly represents
              Northbeam&apos;s innovative technology. His ability to combine
              modern aesthetics with user-centered design helped us deliver a
              more engaging experience for marketing professionals.&quot;
            </p>
            <div className="relative z-10">
              <h4 className="font-bold text-white text-lg">Bryan Bumgardner</h4>
              <p className="text-white/60 text-sm">
                Director of Growth Marketing, Northbeam
              </p>
            </div>
            {/* Abstract shape */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20" />

            <Image
              src="/assets/portfolio-images/northbeam/icon.png"
              height={300}
              width={300}
              alt="Northbeam Icon"
              className="absolute -bottom-20 -right-20 opacity-10 rotate-12"
            />
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
        <p className="text-slate-600 leading-relaxed">
          This project reinforced the importance of aligning UX/UI design with
          business goals. By prioritizing usability, clarity, and engagement, I
          helped Northbeam create a digital experience that not only looks great
          but also drives results.
        </p>
      </div>
    </section>
  );
}
