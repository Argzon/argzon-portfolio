"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    title: "Outdated Design",
    desc: "The site didn't reflect the modern, data-driven nature of the brand.",
  },
  {
    title: "Lack of Product Focus",
    desc: "Users couldn't easily understand Northbeam's capabilities due to poor structure.",
  },
  {
    title: "No Self-Serve Flow",
    desc: "The site required too many touchpoints before sign-up, limiting user engagement.",
  },
  {
    title: "Low Engagement",
    desc: "The existing structure didn't drive users toward meaningful actions or conversions.",
  },
];

export default function TheChallenge() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".challenge-item", {
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
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto bg-slate-50 rounded-[3rem] my-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            The <span className="font-sans not-italic">Challenge</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            Despite Northbeam&apos;s powerful technology, their website suffered
            from several key issues. The challenge was to overhaul the website,
            improve the user journey, and create a frictionless experience that
            encourages sign-ups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="challenge-item p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
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
    </section>
  );
}
