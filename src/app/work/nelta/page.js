"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";

// Nelta Components
import NeltaHero from "@/components/redesign/work/nelta/NeltaHero";
import ProjectIntro from "@/components/redesign/work/nelta/ProjectIntro";
import TheChallenge from "@/components/redesign/work/nelta/TheChallenge";
import ResearchAndStrategy from "@/components/redesign/work/nelta/ResearchAndStrategy";
import DesignPhase from "@/components/redesign/work/nelta/DesignPhase";
import DevelopmentPhase from "@/components/redesign/work/nelta/DevelopmentPhase";
import ResultsAndImpact from "@/components/redesign/work/nelta/ResultsAndImpact";
import NextProject from "@/components/redesign/work/nelta/NextProject";

export default function NeltaPage() {
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
        <NeltaHero />
        <ProjectIntro />
        <TheChallenge />
        <ResearchAndStrategy />
        <DesignPhase />
        <DevelopmentPhase />
        <ResultsAndImpact />
        <NextProject />
      </div>

      <Footer />
    </main>
  );
}
