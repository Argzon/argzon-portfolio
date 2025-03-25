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
    <div className="flex flex-col gap-[150px] lg:gap-[200px]">
      {/* Header */}
      <div className="flex justify-center min-w-full fixed z-[100] px-10 lg:px-0 pt-10">
        <Navigation />
      </div>

      {/* Portfolio*/}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0 mt-[240px] lg:mt-[240px]">
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
              scroll={false}
              href={`/work/${project.slug}`}
              className="w-full flex flex-col gap-6 group lg:hover:bg-white-200 dark:lg:hover:bg-black-500 lg:hover:rounded-b-2xl transition-all duration-1000"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={687}
                  objectFit="cover"
                  className="rounded-2xl h-[300px] md:h-[450px] lg:h-[687px] object-cover w-full  transition-transform duration-300"
                  loading="eager"
                  priority
                  placeholder="blur"
                  blurDataURL={project.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {/* Desktop hover overlay */}
                <div className="absolute inset-0 bg-black-600 bg-opacity-70 rounded-2xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 items-center justify-center hidden lg:flex">
                  <div className="flex items-center gap-2 text-white-100">
                    <span className="subtitle text-white-100">
                      Check Full Case Study
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Mobile/Tablet permanent overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black-600 bg-opacity-70 rounded-b-2xl p-4 flex items-center justify-between lg:hidden">
                  <span className="subtitle text-white-100">
                    Check Full Case Study
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-32 lg:group-hover:px-4 lg:group-hover:gap-[112px] pb-4 transition-all duration-1000">
                <div className="flex flex-col gap-3 shrink-0">
                  <h4>{project.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <p
                        key={index}
                        className="label bg-white-200 dark:bg-black-500 lg:group-hover:bg-white-300 dark:lg:group-hover:bg-black-400 rounded-full px-4 py-2 shrink-0 transition-all duration-1000"
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
