"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import UserPersonas from "./UserPersonas";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "Conducting user research and competitor analysis",
  "Creating the sitemap, wireframes, and user flows",
  "Developing moodboards and design concepts",
  "Designing a visually appealing UI",
  "Ensuring seamless UX for technical & non-technical users",
  "Collaborating with developers to implement the design",
];

const researchPoints = [
  {
    title: "User Interviews",
    desc: "Identified key pain points of developers vs business professionals.",
  },
  {
    title: "Competitor Analysis",
    desc: "Analyzed industry leaders to identify market gaps.",
  },
  {
    title: "Content Strategy",
    desc: "Organized IA to ensure clarity in storytelling.",
  },
];

export default function ResearchAndStrategy() {
  const container = useRef();

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".research-section");
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".fade-in-item"), {
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32"
    >
      {/* My Role Section (Matching Krado pattern) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            My <span className="font-sans not-italic">Role</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8 fade-in-item">
          <p className="text-lg text-slate-600 leading-relaxed">
            As the sole UI/UX Designer, I led the end-to-end design process,
            from discovery to developer handoff.
          </p>
          <ul className="space-y-4">
            {roles.map((role, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-slate-700 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Research Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Research & <span className="font-sans not-italic">Discovery</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed fade-in-item">
            To create a user-centered design, I conducted extensive research to
            understand the diverse needs of both technical and non-technical
            stakeholders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPoints.map((item, index) => (
              <div
                key={index}
                className="fade-in-item p-6 border border-slate-200 rounded-2xl"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Personas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 research-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            User <span className="font-sans not-italic">Personas</span>
          </h2>
        </div>
        <div className="lg:col-span-8 fade-in-item">
          <UserPersonas />
        </div>
      </div>

      {/* Presentation Image */}
      <div className="research-section">
        <div className="fade-in-item w-full bg-[#EADDFF] rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
          <Image
            src="/assets/portfolio-images/coherent/new-website-presentation.jpg"
            width={1200}
            height={600}
            alt="New Website Presentation"
            className="w-full h-auto rounded-xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
