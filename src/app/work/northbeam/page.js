"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";
import NorthbeamHero from "@/components/redesign/work/northbeam/NorthbeamHero";
import ProjectIntro from "@/components/redesign/work/northbeam/ProjectIntro";
import TheChallenge from "@/components/redesign/work/northbeam/TheChallenge";
import RoleAndDiscovery from "@/components/redesign/work/northbeam/RoleAndDiscovery";
import UserPersonas from "@/components/redesign/work/northbeam/UserPersonas";
import DesignProcess from "@/components/redesign/work/northbeam/DesignProcess";
import Implementation from "@/components/redesign/work/northbeam/Implementation";
import ResultsAndImpact from "@/components/redesign/work/northbeam/ResultsAndImpact";
import NextProject from "@/components/redesign/work/northbeam/NextProject";

gsap.registerPlugin(ScrollTrigger);

export default function NorthbeamPage() {
  const container = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main
      ref={container}
      className="bg-white min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white"
    >
      <Header />

      <div className="flex flex-col">
        <NorthbeamHero />
        <ProjectIntro />
        <TheChallenge />
        <RoleAndDiscovery />
        <UserPersonas />
        <DesignProcess />
        <Implementation />
        <ResultsAndImpact />
        <NextProject />
      </div>

      <Footer />
    </main>
  );
}
