"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default function ContactSlide() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center px-4 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-indigo-400 font-mono mb-6"
      >
        WHAT'S NEXT?
      </motion.p>

      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="text-5xl md:text-[8vw] font-bold leading-none mb-12 tracking-tighter"
      >
        Let's work together.
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="mailto:argzon01@gmail.com"
            className="group flex items-center gap-3 text-2xl md:text-3xl font-light hover:text-indigo-400 transition-colors"
          >
            argzon01@gmail.com
            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="https://www.linkedin.com/in/haziraj/"
            target="_blank"
            className="group flex items-center gap-3 text-2xl md:text-3xl font-light hover:text-indigo-400 transition-colors"
          >
            LinkedIn
            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 flex gap-4"
      >
        <Link
          href="/"
          className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors"
        >
          Back to Website
        </Link>
      </motion.div>
    </div>
  );
}
