"use client";
import React, { useRef } from "react";
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";
import ProjectIntro from "@/components/redesign/work/creatick/ProjectIntro";
import CreatickHero from "@/components/redesign/work/creatick/CreatickHero";
import ResearchAndStrategy from "@/components/redesign/work/creatick/ResearchAndStrategy";
import DesignPhase from "@/components/redesign/work/creatick/DesignPhase";
import CollaborationAndResults from "@/components/redesign/work/creatick/CollaborationAndResults";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CreatickCaseStudy() {
  const container = useRef();

  useGSAP(
    () => {
      // Global scroll animations (bg color shifts, etc) similar to Cryptico
      const sections = gsap.utils.toArray(".snap-section");
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () =>
            gsap.to("body", {
              backgroundColor: section.dataset.bgcolor || "#ffffff",
              duration: 1,
            }),
          onEnterBack: () =>
            gsap.to("body", {
              backgroundColor: section.dataset.bgcolor || "#ffffff",
              duration: 1,
            }),
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-white min-h-screen selection:bg-blue-100"
    >
      <Header />

      <main className="flex flex-col gap-0 pb-20">
        <CreatickHero />

        <div className="snap-section" data-bgcolor="#ffffff">
          <ProjectIntro />
        </div>

        <div className="snap-section" data-bgcolor="#f8fafc">
          <ResearchAndStrategy />
        </div>

        <div className="snap-section" data-bgcolor="#ffffff">
          <DesignPhase />
        </div>

        <div className="snap-section" data-bgcolor="#f8fafc">
          <CollaborationAndResults />
        </div>
      </main>

      <Footer />
    </div>
  );
}
