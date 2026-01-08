"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    title: "Modern Design",
    desc: "Creating a modern, engaging, and user-friendly design.",
  },
  {
    title: "Navigation & Accessibility",
    desc: "Improving site navigation and accessibility.",
  },
  {
    title: "Balance",
    desc: "Balancing technical details with a user-friendly experience.",
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
            The old website was visually outdated, lacked modern UX principles,
            and was difficult to navigate. The primary challenges included:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="bg-[#EAEAEA] p-8 rounded-[2rem] flex justify-center">
        <div className="relative w-full max-w-4xl aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/portfolio-images/talentally/old-website.jpg"
            fill
            className="object-cover"
            alt="Old TalentAlly Website"
          />
        </div>
      </div>
    </section>
  );
}
