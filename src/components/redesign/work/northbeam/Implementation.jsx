"use client";
import React, { useRef } from "react";
import Image from "next/image";

const devPoints = [
  {
    title: "Component-Based Design System",
    desc: "Created reusable UI components for consistency.",
  },
  {
    title: "Performance Optimization",
    desc: "Focused on fast load times and smooth interactions.",
  },
  {
    title: "SEO & Accessibility",
    desc: "Ensured the site met web best practices for visibility and inclusivity.",
  },
];

export default function Implementation() {
  const container = useRef();

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-32">
          <span className="text-6xl font-bold text-slate-200 block mb-6">
            03
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Development &{" "}
            <span className="font-sans not-italic">Implementation</span>
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Collaborating closely with the development team, I ensured the
            designs were implemented flawlessly.
          </p>
          <div className="flex flex-col gap-4">
            {devPoints.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="w-full bg-blue-500 rounded-[2.5rem] p-8 md:p-12 flex items-center justify-center shadow-xl">
            <Image
              src="/assets/portfolio-images/northbeam/ds-components.svg"
              width={1200}
              height={600}
              alt="Northbeam Components"
              className="w-full h-auto rounded-xl bg-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
