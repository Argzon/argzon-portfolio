"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "13+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
];

export default function AboutSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
          >
            Design. <br className="hidden md:block" />
            Development. <br className="hidden md:block" />
            Mastership.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            <p>
              I am an accomplished UI/UX designer with over 13 years of
              experience crafting intuitive websites, apps, and platforms across
              diverse industries.
            </p>
            <p>
              My expertise lies in translating complex business requirements
              into user-centered designs. I have a proven track record as a
              Design Lead, driving project efficiency through agile and
              waterfall methodologies.
            </p>
            <p>
              From Chicago to Hamburg, I've worked with global teams to build
              scalable design systems and deliver high-impact digital products.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-white-500 font-mono uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
