"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";

// Coherent Specific Components
import CoherentHero from "@/components/redesign/work/coherent/CoherentHero";
import ProjectIntro from "@/components/redesign/work/coherent/ProjectIntro";
import TheChallenge from "@/components/redesign/work/coherent/TheChallenge";
import ResearchAndStrategy from "@/components/redesign/work/coherent/ResearchAndStrategy";
import DesignProcess from "@/components/redesign/work/coherent/DesignProcess";
import Implementation from "@/components/redesign/work/coherent/Implementation";
import FinalOutcome from "@/components/redesign/work/coherent/FinalOutcome";
import NextProject from "@/components/redesign/work/coherent/NextProject";

export default function Coherent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <Header />

      <div className="flex flex-col">
        <CoherentHero />
        <ProjectIntro />
        <TheChallenge />
        <ResearchAndStrategy />
        <DesignProcess />
        <Implementation />
        <FinalOutcome />
        <NextProject />
      </div>

      <Footer />
    </main>
  );
}
