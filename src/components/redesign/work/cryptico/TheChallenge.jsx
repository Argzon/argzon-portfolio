"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    title: "Value Proposition",
    desc: "Effectively communicate its unique value proposition in the crowded crypto market.",
  },
  {
    title: "Trading Experience",
    desc: "Offer a secure, scalable, and efficient trading experience.",
  },
  {
    title: "Audience Accessibility",
    desc: "Be both beginner-friendly and feature-rich for advanced traders.",
  },
  {
    title: "Cross-Platform Integration",
    desc: "Ensure seamless integration between web and mobile platforms.",
  },
  {
    title: "User Retention",
    desc: "Improve user retention and engagement through a streamlined UX.",
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            The <span className="font-sans not-italic">Challenge</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            Cryptico needed a platform that could balance security, usability,
            and performance while maintaining a sleek, modern interface that
            inspired trust and engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className={`challenge-item p-6 bg-white rounded-2xl shadow-sm border border-slate-100 ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
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
