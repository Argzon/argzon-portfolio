"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
            <strong className="text-slate-900">Cryptico</strong> is a
            cutting-edge cryptocurrency trading platform designed to offer
            seamless transactions, high security, and an intuitive user
            experience. The goal of the project was to create a website and
            mobile application that not only showcased Cryptico&apos;s services
            but also engaged a diverse audience of crypto traders, from
            beginners to seasoned professionals.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            As the{" "}
            <strong className="text-slate-900">
              UI/UX Designer & Frontend Developer
            </strong>
            , I was responsible for the{" "}
            <strong className="text-slate-900">
              research, UX strategy, wireframing, UI design, and frontend
              development
            </strong>
            . My task was to craft a high-performance trading platform that
            provided a smooth and secure trading experience while standing out
            in a competitive market.
          </p>
        </div>
      </div>

      <div className="mt-20 fade-in rounded-[2.5rem] overflow-hidden bg-slate-900 flex justify-center p-8 md:p-16">
        <Image
          src="/assets/portfolio-images/cryptico/introduction.png"
          width={1100}
          height={572}
          alt="Cryptico Introduction"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
}
