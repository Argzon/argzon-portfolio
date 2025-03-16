"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <main className="container flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to My Website
          </h1>
          <p className="mx-auto max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-lg">
            I invite you to explore my portfolio on Behance, where I showcase my
            latest work and creative projects.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="group text-lg"
              onClick={() =>
                window.open("https://behance.net/haziraj", "_blank")
              }
            >
              View Portfolio on Behance
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
