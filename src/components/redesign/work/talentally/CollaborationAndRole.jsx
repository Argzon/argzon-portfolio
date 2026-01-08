"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "Conducting research.",
  "Creating sitemaps, wireframes, and prototypes.",
  "Designing the full UI/UX experience.",
  "Collaborating with a team consisting of a developers lead, a backend developer, and a marketing manager.",
  "Attending and leading design-related discussions in weekly meetings.",
];

export default function CollaborationAndRole() {
  const container = useRef();

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".fade-in-section");
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
      {/* Role Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 fade-in-section">
        <div className="lg:col-span-4 fade-in-item">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            My Role &{" "}
            <span className="font-sans not-italic">Collaboration</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8 fade-in-item">
          <p className="text-lg text-slate-600 leading-relaxed">
            As the lead UI/UX designer, I was responsible for leading the design
            initiatives and collaborating closely with the development and
            marketing teams.
          </p>
          <ul className="space-y-4">
            {roles.map((role, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-slate-700 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Collaboration Image */}
      <div className="fade-in-section">
        <div className="fade-in-item w-full bg-[#f1f1f1] rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
          <Image
            src="/assets/portfolio-images/talentally/collaboration.png"
            width={1100}
            height={529}
            alt="TalentAlly Collaboration"
            className="w-full h-auto rounded-xl shadow-lg mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
