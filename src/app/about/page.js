"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";
import AboutHero from "@/components/redesign/about/AboutHero";
import KeyAchievements from "@/components/redesign/about/KeyAchievements";
import Experience from "@/components/redesign/about/Experience";
import Education from "@/components/redesign/about/Education";
import Skills from "@/components/redesign/about/Skills";

export default function About() {
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

      <div className="flex flex-col gap-10 lg:gap-20">
        <AboutHero />
        <KeyAchievements />
        <Experience />
        <Skills />
        <Education />
      </div>

      <Footer />
    </main>
  );
}
