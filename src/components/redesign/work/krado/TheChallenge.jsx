"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    title: "Outdated Visuals & UI",
    desc: "The old design lacked modern aesthetics and failed to reflect Krado's innovation.",
  },
  {
    title: "Poor User Experience",
    desc: "A cluttered layout and confusing navigation made it difficult for visitors to find relevant information.",
  },
  {
    title: "Limited Conversion Focus",
    desc: "The website was not responsive, negatively impacting mobile users.",
  },
  {
    title: "No Interactive Features",
    desc: "The website did not leverage animations or interactive elements to engage users and showcase the flagship Leaflet app.",
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
      gsap.from(".challenge-grid img", {
        scrollTrigger: {
          trigger: ".challenge-grid",
          start: "top bottom-=100",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
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
            Krado&apos;s previous website lacked visual appeal,{" "}
            <strong className="text-slate-900">
              modern design elements, and user-friendly features
            </strong>
            . The outdated design failed to engage visitors and provide a
            positive user experience.
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

      <div className="challenge-grid grid grid-cols-2 md:grid-cols-5 gap-4 bg-[#E3F2E7] p-8 rounded-[2rem]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm bg-white"
          >
            <Image
              src={`/assets/portfolio-images/krado/old-website-${i + 1}.png`}
              alt={`Krado Old Website ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
