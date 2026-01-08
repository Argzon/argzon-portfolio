"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import stacksData from "@/app/home/data/stacks.json";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".brand-logo", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=50",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-sans">
          Clients &{" "}
          <span className="font-serif italic text-slate-400">Partners</span>
        </h2>
        <p className="text-slate-500 mt-2">
          Trusted by the world's best companies
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          { name: "TalentAlly", icon: "/assets/logos/TalentAlly.svg" },
          { name: "Northbeam", icon: "/assets/logos/Northbeam.svg" },
          { name: "Creatick", icon: "/assets/logos/Creatick.svg" },
          { name: "Coherent", icon: "/assets/logos/Coherent.svg" },
          { name: "Krado", icon: "/assets/logos/Krado.svg" },
          { name: "Nelta", icon: "/assets/logos/Nelta.svg" },
          { name: "Cryptico", icon: "/assets/logos/Cryptico.svg" },
        ].map((brand, index) => (
          <div
            key={index}
            className="brand-logo aspect-video flex items-center justify-center border border-slate-100 rounded-3xl p-8 hover:border-slate-200 transition-colors bg-white hover:shadow-sm"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={brand.icon}
                alt={brand.name}
                width={150}
                height={50}
                className="object-contain w-auto h-auto max-h-[60px] max-w-[140px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-16">
        <div>
          <span className="block text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            13+
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Years of
            <br />
            Experience
          </span>
        </div>
        <div>
          <span className="block text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            50+
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Projects
            <br />
            Completed
          </span>
        </div>
        <div>
          <span className="block text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            100%
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Client
            <br />
            Satisfaction
          </span>
        </div>
      </div>
    </section>
  );
}
