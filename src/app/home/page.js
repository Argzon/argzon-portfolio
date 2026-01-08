"use client";
import React, { useEffect, useState } from "react";

// Redesign Components
import Header from "@/components/redesign/Header";
import Hero from "@/components/redesign/Hero";
import FeaturedWorks from "@/components/redesign/FeaturedWorks";
import Services from "@/components/redesign/Services";
import Brands from "@/components/redesign/Brands";
import Testimonials from "@/components/redesign/Testimonials";
import Awards from "@/components/redesign/Awards";
import Footer from "@/components/redesign/Footer";

// Data
import portfolioData from "./data/portfolio.json";
import testimonialsData from "./data/testimonials.json";

export default function Home() {
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
        <Hero />
        <FeaturedWorks items={portfolioData.portfolio} />
        <Services />
        <Brands />
        <Testimonials items={testimonialsData.testimonials} />
        <Awards />
      </div>

      <Footer />
    </main>
  );
}
