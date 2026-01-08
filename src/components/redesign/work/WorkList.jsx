"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/app/work/data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

export default function WorkList() {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-10 pb-32 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card group flex flex-col gap-6`}
          >
            <Link
              href={`/work/${project.slug}`}
              className="block overflow-hidden rounded-[2.5rem] bg-slate-100 relative aspect-[4/3] w-full"
            >
              <div className="absolute inset-0 bg-slate-200" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg z-10 text-slate-900">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-slate-200 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
