"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    title: "Research & Discovery",
    desc: "Conducting UX research to identify user pain points and industry trends.",
  },
  {
    title: "Sitemap & IA",
    desc: "Redesigning the structure for intuitive navigation.",
  },
  {
    title: "Wireframing & Prototyping",
    desc: "Creating low and high-fidelity wireframes to establish a new design direction.",
  },
  {
    title: "UI/UX Design",
    desc: "Developing a modern, visually appealing interface with interactive elements.",
  },
  {
    title: "Collaboration with Developer",
    desc: "Partnering with a developer to ensure seamless implementation of the designs.",
  },
  {
    title: "SEO Optimization",
    desc: "Enhancing content structure for better search engine visibility.",
  },
  {
    title: "E-commerce Integration",
    desc: "Designing a checkout page for direct product sales.",
  },
];

const researchPoints = [
  {
    title: "Competitive Analysis",
    desc: "Studied leading plant-care websites to identify industry best practices.",
  },
  {
    title: "User Behavior Analysis",
    desc: "Identified common navigation issues and expectations for tech-driven plant care solutions.",
  },
  {
    title: "Moodboards & Visual Direction",
    desc: "Explored typography, color schemes, and UI elements that would enhance brand perception.",
  },
  {
    title: "Sitemap Optimization",
    desc: "Restructured pages to improve information accessibility.",
  },
];

export default function RoleAndDiscovery() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".role-list li", {
        scrollTrigger: {
          trigger: ".role-list",
          start: "top bottom-=100",
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      {/* Role Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            My <span className="font-sans not-italic">Role</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            To address these challenges, I led a{" "}
            <strong className="text-slate-900">comprehensive redesign</strong>{" "}
            of Krado&apos;s website with a focus on usability, aesthetics, and
            seamless user experience.
          </p>
          <ul className="role-list space-y-4">
            {roles.map((role, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {role.title}
                  </h4>
                  <p className="text-sm text-slate-600">{role.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* IA Image */}
      <div className="mb-32 p-8 md:p-12 bg-green-500 rounded-[2.5rem] flex items-center justify-center">
        <Image
          src="/assets/portfolio-images/krado/information-architecture.svg"
          width={1200}
          height={600}
          alt="Information Architecture"
          className="w-full h-auto"
        />
      </div>

      {/* Research Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Research & <br />
            <span className="font-sans not-italic">Discovery</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            To create a design that aligns with Krado&apos;s vision and user
            needs, I conducted:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPoints.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-slate-200 rounded-2xl"
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
    </section>
  );
}
