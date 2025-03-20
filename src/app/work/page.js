"use client";
import Footer from "@/components/Footer/page";
import Navigation from "@/components/Navigation/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import portfolioData from "./data/portfolio.json";

export default function Work() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex flex-col gap-[200px]">
      {/* Header */}
      <div className="px-10 lg:px-0 h-full pb-10">
        <div className="pt-10 flex flex-col justify-between h-full">
          <div className="flex justify-center min-w-full">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Portfolio*/}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-4 max-w-[857px]">
          <div className="flex flex-col gap-2">
            <p>Portfolio</p>
            <h3>Crafting Thoughtful & Engaging Digital Experiences</h3>
          </div>
          <p className="subtitle">
            I design intuitive, visually compelling, and user-friendly digital
            experiences. From wireframes to high-fidelity prototypes, I focus on
            usability, accessibility, and aesthetics to create seamless
            interfaces.
            <br></br>
            <br></br>
            This showcase highlights my ability to transform ideas into polished
            digital products. Each project reflects my commitment to design
            excellence, problem-solving, and user-centered solutions.
          </p>
        </div>
        {/* List of work */}
        <div className="flex flex-col lg:flex-col gap-[100px]">
          {portfolioData.projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="w-full flex flex-col gap-6"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={687}
                objectFit="cover"
                className="rounded-2xl h-[300px] md:h-[687px] object-cover w-full hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-32">
                <div className="flex flex-col gap-3 shrink-0">
                  <h4>{project.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <p
                        key={index}
                        className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="subtitle">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
