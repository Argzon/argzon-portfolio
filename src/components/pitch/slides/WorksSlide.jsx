"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Krado",
    category: "Web Design & Animation",
    image: "/assets/portfolio-images/main-images/Krado-Mockup.png",
    link: "/work/krado",
  },
  {
    title: "Cryptico",
    category: "Product & UI/UX",
    image: "/assets/portfolio-images/main-images/Cryptico-Mockup.png",
    link: "/work/cryptico",
  },
  {
    title: "Coherent",
    category: "UI/UX & Animation",
    image: "/assets/portfolio-images/main-images/Coherent-Mockup.png",
    link: "/work/coherent",
  },
  {
    title: "Creatick",
    category: "Product Design",
    image: "/assets/portfolio-images/main-images/Creatick-Mockup.png",
    link: "/work/creatick",
  },
  {
    title: "Nelta",
    category: "Product Design & Strategy",
    image: "/assets/portfolio-images/main-images/Nelta-Mockup.png",
    link: "/work/nelta",
  },
];

export default function WorksSlide() {
  return (
    <div className="min-h-full flex flex-col justify-center px-4 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 text-center"
      >
        <span className="text-indigo-400 font-mono tracking-wider">
          SELECTED WORKS
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10"
          >
            <Link
              href={project.link}
              className="block w-full h-full relative cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs">{project.category}</p>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* 6th Item: View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + 5 * 0.1 }}
          className="relative group overflow-hidden rounded-2xl border border-white/10 bg-indigo-600/10 hover:bg-indigo-600/20 transition-colors cursor-pointer"
        >
          <Link
            href="/work"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              View All Works
            </h3>
            <p className="text-indigo-200 text-sm">
              Explore full case studies & usage
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
