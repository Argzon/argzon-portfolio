"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BeforeAndAfter from "./BeforeAndAfter";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".fade-in", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
        },
        y: 30,
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 fade-in">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            The <span className="font-sans not-italic">Introduction</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8 fade-in">
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900">TalentAlly</strong> is the
            operator of the Professional Diversity Network (PDN) and a holding
            company for the International Association of Women (IAW) and
            RemoteMore USA. Founded in 2008 and publicly traded since 2013
            (NASDAQ: IPDN), TalentAlly provides online professional networking
            communities with career resources tailored to diverse cultural
            groups.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            The goal of this project was to redesign the TalentAlly website,
            which was previously the Professional Diversity Network (PDN). The
            existing website was outdated, difficult to navigate, and lacked
            modern design elements such as animations and an intuitive user
            experience.
          </p>
        </div>
      </div>

      <div className="mt-20 fade-in flex flex-col gap-10">
        <h3 className="text-2xl font-bold text-slate-900">Before & After</h3>
        <BeforeAndAfter />
      </div>

      <div className="mt-20 fade-in rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-200 flex justify-center p-8 md:p-16">
        <Image
          src="/assets/portfolio-images/talentally/moodboard.jpg"
          width={1200}
          height={612}
          alt="TalentAlly Moodboard"
          className="w-full h-auto rounded-xl shadow-sm"
        />
      </div>
    </section>
  );
}
