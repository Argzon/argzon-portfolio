"use client";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "next-view-transitions";

// Slides
import IntroSlide from "./slides/IntroSlide";
import AboutSlide from "./slides/AboutSlide";
import SkillsSlide from "./slides/SkillsSlide";
import WorksSlide from "./slides/WorksSlide";
import ContactSlide from "./slides/ContactSlide";

const SLIDES = [IntroSlide, AboutSlide, SkillsSlide, WorksSlide, ContactSlide];

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950 text-white flex items-center justify-center">
      {/* Navigation Controls */}
      <div className="absolute top-8 right-8 z-50 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm text-sm"
        >
          <X size={16} /> Exit
        </Link>
      </div>

      <div className="absolute bottom-8 right-8 z-50 flex items-center gap-4">
        <span className="text-slate-400 font-mono text-xs">
          {currentSlide + 1} / {SLIDES.length}
        </span>
        <button
          onClick={goToPrev}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          disabled={currentSlide === SLIDES.length - 1}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Slide Container */}
      <div className="w-full max-w-[1400px] h-full p-4 md:p-12 relative flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar"
          >
            <CurrentSlideComponent isActive={true} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Ambience - Reusing Aurora if desired or keeping it clean */}
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
