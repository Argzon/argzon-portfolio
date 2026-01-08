"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";

// TalentAlly Specific Components
import TalentallyHero from "@/components/redesign/work/talentally/TalentallyHero";
import ProjectIntro from "@/components/redesign/work/talentally/ProjectIntro";
import TheChallenge from "@/components/redesign/work/talentally/TheChallenge";
import CollaborationAndRole from "@/components/redesign/work/talentally/CollaborationAndRole";
import TheSolution from "@/components/redesign/work/talentally/TheSolution";
import FinalOutcome from "@/components/redesign/work/talentally/FinalOutcome";
import Takeaways from "@/components/redesign/work/talentally/Takeaways";
import NextProject from "@/components/redesign/work/talentally/NextProject";

export default function Talentally() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-yellow-200 selection:text-yellow-900">
      <Header />

      <div className="flex flex-col">
        <TalentallyHero />
        <ProjectIntro />
        <TheChallenge />
        <CollaborationAndRole />
        <TheSolution />
        <FinalOutcome />
        <Takeaways />
        <NextProject />
      </div>

      <Footer />
    </main>
  );
}
