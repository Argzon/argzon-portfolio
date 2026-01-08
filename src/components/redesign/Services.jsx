"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Circle, Square, Triangle } from "lucide-react"; // Placeholders for icons

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Product Design",
    description:
      "I bring the history of your brand to the forefront giving an emotional dimension to your visual identity.",
    tags: [
      "Product Strategy",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
    icon: <Square className="w-8 h-8 text-slate-900 mb-6" />, // Placeholder
  },
  {
    title: "UI/UX Design",
    description:
      "I design and develop digital products to help increase highest conversion rate for your business.",
    tags: [
      "Website & Mobile App Design",
      "Wireframing",
      "User Flows",
      "Interaction Design",
    ],
    icon: <Circle className="w-8 h-8 text-slate-900 mb-6" />, // Placeholder
  },
  {
    title: "Brand Strategy",
    description:
      "Help increase the traffic into your business via marketing online & offline. Improve the rank of your business on the world.",
    tags: ["Visual Identity", "Brand Guidelines", "Art Direction"],
    icon: <Triangle className="w-8 h-8 text-slate-900 mb-6" />, // Placeholder
  },
];

export default function Services() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".service-card", {
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
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto bg-slate-50 rounded-[3rem] my-20"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          My Main <span className="font-sans not-italic">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="service-card flex flex-col">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {service.title}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm h-16">
              {service.description}
            </p>
            <ul className="flex flex-col gap-2">
              {service.tags.map((tag, i) => (
                <li
                  key={i}
                  className="text-sm font-bold text-slate-900 hover:text-slate-600 cursor-default transition-colors"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
