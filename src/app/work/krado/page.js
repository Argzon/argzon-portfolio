"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";

// Krado Specific Components
import KradoHero from "@/components/redesign/work/krado/KradoHero";
import ProjectIntro from "@/components/redesign/work/krado/ProjectIntro";
import TheChallenge from "@/components/redesign/work/krado/TheChallenge";
import RoleAndDiscovery from "@/components/redesign/work/krado/RoleAndDiscovery";
import DesignProcess from "@/components/redesign/work/krado/DesignProcess";
import ResultsAndImpact from "@/components/redesign/work/krado/ResultsAndImpact";
import NextProject from "@/components/redesign/work/NextProject";

export default function Krado() {
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
        <KradoHero />
        <ProjectIntro />
        <TheChallenge />
        <RoleAndDiscovery />
        <DesignProcess />
        <ResultsAndImpact />
        <NextProject />
      </div>

      <Footer />
    </main>
  );
}
