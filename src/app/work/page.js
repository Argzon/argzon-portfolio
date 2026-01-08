"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";
import WorkHero from "@/components/redesign/work/WorkHero";
import WorkList from "@/components/redesign/work/WorkList";

export default function Work() {
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
        <WorkHero />
        <WorkList />
      </div>

      <Footer />
    </main>
  );
}
