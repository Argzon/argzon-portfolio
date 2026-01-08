"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Compare } from "@/components/ui/compare";

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
            Krado is an integrative plant care system designed to help plants
            thrive by utilizing real-time data and AI-powered insights. Their
            ecosystem includes{" "}
            <strong className="text-slate-900">Leaflet</strong>, a mobile app
            that provides detailed plant care instructions,{" "}
            <strong className="text-slate-900">a growing plant database</strong>
            , and a{" "}
            <strong className="text-slate-900">
              subscription-based nourishment product line
            </strong>{" "}
            tailored to individual users and their plants&apos; needs.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Despite Krado&apos;s innovative approach, their website was
            outdated, lacked user engagement, and did not reflect the
            company&apos;s technology-driven vision. My role was to{" "}
            <strong className="text-slate-900">redesign the website</strong> to
            improve user experience, integrate engaging animations, optimize
            navigation, and enhance mobile responsiveness while maintaining the
            brand&apos;s essence. I collaborated with a Webflow developer to
            bring my designs to life.
          </p>
        </div>
      </div>

      <div className="mt-20 fade-in rounded-[2rem] overflow-hidden border border-slate-200">
        <Compare
          firstImage="/assets/portfolio-images/krado/website-before.png"
          secondImage="/assets/portfolio-images/krado/website-after.svg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[400px] md:h-[600px] w-full"
          slideMode="drag"
        />
      </div>
    </section>
  );
}
