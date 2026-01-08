"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Rocket, Palette, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "User Engagement Boost",
    desc: "Achieved 20% increase in user engagement by transforming complex requirements into user-friendly designs.",
  },
  {
    icon: <Palette className="w-8 h-8 text-purple-600" />,
    title: "Design System Implementation",
    desc: "Increased design consistency by 30% using Figma to create a comprehensive design system.",
  },
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: "On-time Project Delivery",
    desc: "Delivered all projects on time and within budget, leading to 95% client satisfaction rate.",
  },
];

export default function KeyAchievements() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".achievement-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
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
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          Key <span className="font-sans not-italic">Achievements</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="achievement-card p-10 bg-slate-50 hover:bg-slate-100 transition-colors rounded-[2.5rem] flex flex-col items-center text-center gap-6 group"
          >
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
