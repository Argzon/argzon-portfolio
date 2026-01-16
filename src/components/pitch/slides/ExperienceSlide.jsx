"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const experiences = [
  {
    id: 1,
    period: "08/2023 - 02/2024",
    location: "Chicago, US",
    position: "Senior UI/UX Designer",
    company: "TalentAlly",
    achievements: [
      "Increased user engagement by 20% through intuitive, user-centered interface design.",
      "Built a scalable Figma design system, improving consistency by 30% and delivery speed by 20%.",
      "Streamlined design-to-dev workflows, significantly boosting cross-functional team efficiency.",
    ],
  },
  {
    id: 2,
    period: "05/2022 - 08/2023",
    location: "Toronto, CA",
    position: "Design Lead",
    company: "Veza Digital",
    achievements: [
      "Led 15+ design projects effectively with a 98% client satisfaction rate.",
      "Improved engagement metrics by 25% through client-aligned, data-driven design strategies.",
      "Managed end-to-end design processes from initial concept to high-fidelity prototypes.",
    ],
  },
  {
    id: 3,
    period: "02/2020 - 02/2024",
    location: "Hamburg, DE",
    position: "Senior UI/UX Designer",
    company: "Nelta",
    achievements: [
      "Directed 20+ projects, achieving 95% on-time delivery and 25% higher client satisfaction.",
      "Improved project efficiency by 30% by optimizing MVP-to-release workflows.",
      "Enhanced user engagement by 20% through strategic stakeholder partnerships.",
    ],
  },
  {
    id: 4,
    period: "11/2012 - 09/2020",
    location: "Peje, XK",
    position: "Product Designer",
    company: "FC Besa",
    achievements: [
      "Launched a dynamic brand website, increasing fan engagement by 35%.",
      "Aligned digital presence with club identity, significantly boosting community support.",
      "Implemented interactive features like player profiles and ticketing systems.",
    ],
  },
];

export default function ExperienceSlide() {
  return (
    <div className="min-h-full flex flex-col justify-center px-4 py-16 md:px-20 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-indigo-400 font-mono tracking-wider text-sm uppercase">
          Career History
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white">
          Work Experience
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-400 mt-1">
                    <Briefcase size={14} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-xs text-zinc-500 mb-1">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-xs text-zinc-500">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mt-2 mb-2 flex-grow">
                {exp.achievements.slice(0, 3).map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm text-zinc-400 leading-relaxed"
                  >
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
