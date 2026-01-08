"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";

// Cryptico Specific Components
import CrypticoHero from "@/components/redesign/work/cryptico/CrypticoHero";
import ProjectIntro from "@/components/redesign/work/cryptico/ProjectIntro";
import TheChallenge from "@/components/redesign/work/cryptico/TheChallenge";
import ResearchAndStrategy from "@/components/redesign/work/cryptico/ResearchAndStrategy";
import DesignPhase from "@/components/redesign/work/cryptico/DesignPhase";
import DevelopmentPhase from "@/components/redesign/work/cryptico/DevelopmentPhase";
import CollaborationAndResults from "@/components/redesign/work/cryptico/CollaborationAndResults";
import NextProject from "@/components/redesign/work/cryptico/NextProject";

export default function Cryptico() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white">
      <Header />

      <div className="flex flex-col">
        <CrypticoHero />
        <ProjectIntro />
        <TheChallenge />
        <ResearchAndStrategy />
        <DesignPhase />
        <DevelopmentPhase />
        <CollaborationAndResults />
        <NextProject />
      </div>

      <Footer />
    </main>
  );
}
