"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "UI/UX Design",
    skills: [
      "User-Centered Design",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Initial Research",
      "Accessibility",
    ],
  },
  {
    title: "Product Design",
    skills: [
      "Product Strategy",
      "Design Systems",
      "Agile Methodology",
      "Design Thinking",
      "Roadmapping",
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      "Figma",
      "ProtoPie",
      "WebFlow",
      "React / Next.js",
      "Adobe Suite",
      "InVision",
    ],
  },
];

export default function SkillsSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-16 text-center text-white"
      >
        Core Competencies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-300">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, sIdx) => (
                <motion.li
                  key={sIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 + sIdx * 0.05 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 block"
                    style={{ backgroundColor: "#6366f1" }}
                  />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
