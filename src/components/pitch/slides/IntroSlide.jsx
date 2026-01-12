"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IntroSlide() {
  return (
    <div className="flex flex-col items-center text-center justify-center min-h-full gap-6 px-4 py-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="px-4 py-2 rounded-full border border-white/20 text-sm font-mono tracking-wider text-indigo-400">
          PORTFOLIO & PITCH DECK
        </span>
      </motion.div>

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-[8vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
      >
        Argzon Haziraj
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-xl md:text-3xl text-slate-400 font-light max-w-3xl"
      >
        Senior UX/UI Designer & Product Designer
      </motion.p>
    </div>
  );
}
