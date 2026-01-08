"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWorks({ items }) {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif italic">
          Featured <span className="font-sans not-italic">Works</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {items.map((project, index) => (
          <div
            key={project.id}
            className={`project-card group relative flex flex-col gap-4 ${
              index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <Link
              href={project.link}
              className="block overflow-hidden rounded-[2rem] bg-slate-100 relative aspect-[4/3] md:aspect-[16/9]"
            >
              <div className="absolute inset-0 bg-slate-200 animate-pulse" />{" "}
              {/* Placeholder */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
                <ArrowUpRight className="w-5 h-5 text-slate-900" />
              </div>
            </Link>

            <div className="flex justify-between items-start mt-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  {project.workDone.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Link
          href="/work"
          className="px-8 py-3 rounded-full border border-slate-300 text-slate-900 hover:bg-slate-50 transition-all uppercase text-xs font-bold tracking-wider flex items-center gap-2"
        >
          See more work <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
