"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";
import ContactHero from "@/components/redesign/contact/ContactHero";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen selection:bg-slate-900 selection:text-white">
      <Header />
      <ContactHero />
      <Footer />
    </main>
  );
}
