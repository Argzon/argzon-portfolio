"use client";
import React from "react";
import Image from "next/image";

const PersonaCard = ({
  name,
  role,
  tags,
  background,
  goals,
  painPoints,
  image,
  isReversed,
}) => (
  <div className="flex flex-col lg:flex-row gap-8 bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 overflow-hidden">
    <div
      className={`flex flex-col gap-6 lg:w-1/2 ${
        isReversed ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {role}
        </span>
        <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm">{background}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="p-4 bg-green-50 rounded-2xl">
          <h5 className="font-bold text-slate-900 text-sm mb-3">Goals</h5>
          <ul className="space-y-2">
            {goals.map((g, i) => (
              <li
                key={i}
                className="text-xs text-slate-700 leading-relaxed list-disc list-inside"
              >
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-red-50 rounded-2xl">
          <h5 className="font-bold text-slate-900 text-sm mb-3">
            Frustrations
          </h5>
          <ul className="space-y-2">
            {painPoints.map((p, i) => (
              <li
                key={i}
                className="text-xs text-slate-700 leading-relaxed list-disc list-inside"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div
      className={`lg:w-1/2 relative min-h-[400px] rounded-3xl overflow-hidden ${
        isReversed ? "lg:order-1" : "lg:order-2"
      }`}
    >
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
        {/* Optional overlay content */}
      </div>
    </div>
  </div>
);

export default function UserPersonas() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            User <span className="font-sans not-italic">Personas</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            To understand Northbeam&apos;s target audience, I developed two
            detailed user personas representing key user groups.
          </p>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-12">
          <PersonaCard
            name="Sarah Mitchell"
            role="Marketing Director"
            background="Sarah is a 35-year-old marketing director at a fast-growing e-commerce brand. She manages multiple campaigns across different channels and struggles to get a unified view of her marketing attribution data."
            tags={["Data-Driven", "Time-Constrained", "ROI Focused"]}
            goals={[
              "Access accurate multi-touch attribution data in one place.",
              "Make quick decisions based on real-time insights.",
              "Prove marketing ROI to stakeholders with confidence.",
            ]}
            painPoints={[
              "Fragmented data across multiple analytics platforms.",
              "Difficulty attributing conversions to the right channels.",
              "Time-consuming manual reporting processes.",
            ]}
            image="/assets/portfolio-images/northbeam/user-persona-1.jpg"
            isReversed={false}
          />

          <PersonaCard
            name="David Chen"
            role="Performance Marketing Manager"
            background="David is a 28-year-old performance marketing manager who optimizes ad spend across Facebook, Google, and TikTok. He needs granular data to understand which campaigns are truly driving results."
            tags={["Detail-Oriented", "Ad Optimization", "Tech-Savvy"]}
            goals={[
              "Identify top-performing ad creatives and audiences.",
              "Optimize campaigns based on accurate attribution.",
              "Scale winning strategies while cutting underperformers.",
            ]}
            painPoints={[
              "Unreliable attribution from native platform analytics.",
              "Lack of cross-channel visibility and comparison.",
              "Difficulty tracking customer journeys across touchpoints.",
            ]}
            image="/assets/portfolio-images/northbeam/user-persona-2.jpg"
            isReversed={true}
          />
        </div>
      </div>
    </section>
  );
}
