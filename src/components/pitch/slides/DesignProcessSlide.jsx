"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Lightbulb,
  MonitorCheck,
  RefreshCcw,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understanding user needs, business goals, and competitive landscape through deep research.",
  },
  {
    icon: PenTool,
    title: "Define",
    description:
      "Synthesizing insights to define the core problem and establishing a clear product strategy.",
  },
  {
    icon: Lightbulb,
    title: "Ideate",
    description:
      "Exploring possibilities through brainstorming, sketching, and low-fidelity wireframing.",
  },
  {
    icon: MonitorCheck,
    title: "Design",
    description:
      "Crafting high-fidelity UI, interactive prototypes, and comprehensive design systems.",
  },
  {
    icon: RefreshCcw,
    title: "Test & Iterate",
    description:
      "Validating solutions with users and refining designs based on feedback and data.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description:
      "Collaborating with developers for pixel-perfect implementation and launch.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function DesignProcessSlide() {
  return (
    <div className="min-h-full flex flex-col justify-center px-4 py-16 md:px-20 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-indigo-400 font-mono tracking-wider text-sm uppercase">
          Methodology
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white">
          My Design Process
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-4xl font-bold">
              0{index + 1}
            </div>

            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <step.icon size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
              {step.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
