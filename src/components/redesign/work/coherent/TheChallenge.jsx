"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    title: "Diverse Audience",
    desc: "Design for both technical developers and business professionals.",
  },
  {
    title: "Complex Narrative",
    desc: "Explain a complex SaaS product in a simple, engaging way.",
  },
  {
    title: "Differentiation",
    desc: "Stand out in a crowded market with a unique visual identity.",
  },
  {
    title: "Balance",
    desc: "Strike a balance between technical depth and user-friendly content.",
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
      gsap.from(".challenge-image", {
        scrollTrigger: {
          trigger: ".challenge-section-bottom",
          start: "top bottom-=100",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
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
            The primary challenge was designing and developing a website that
            catered to a diverse audience while showcasing Coherent&apos;s
            innovative approach. The website needed to be intuitive, engaging,
            and structured to drive conversions.
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

      {/* Challenge Image Grid (Adapted from Krado but for single/few images) */}
      <div className="challenge-section-bottom bg-[#EADDFF] p-8 rounded-[2rem]">
        <div className="challenge-image relative aspect-video w-full overflow-hidden rounded-xl shadow-sm bg-white">
          <Image
            src="/assets/portfolio-images/coherent/coherent-old-website.jpg"
            alt="Coherent Old Website"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
