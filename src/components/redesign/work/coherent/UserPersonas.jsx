"use client";
import React from "react";
import Image from "next/image";

const PersonaCard = ({
  name,
  role,
  background,
  goals,
  painPoints,
  image,
  isReversed,
  theme,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div
          className={`p-4 rounded-2xl ${
            theme === "purple" ? "bg-purple-50" : "bg-green-50"
          }`}
        >
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
        <div className="p-4 bg-slate-50 rounded-2xl">
          <h5 className="font-bold text-slate-900 text-sm mb-3">Pain Points</h5>
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
      <Image src={image} alt={name} fill className="object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6"></div>
    </div>
  </div>
);

export default function UserPersonas() {
  return (
    <div className="flex flex-col gap-12">
      <PersonaCard
        name="Anna Thompson"
        role="Operations Manager"
        background="Works in a corporate environment, managing internal processes and collaborating with IT teams to automate workflows."
        theme="purple"
        goals={[
          "Simplify internal processes.",
          "Improve efficiency without heavy IT reliance.",
          "Find low-code solutions for spreadsheet tasks.",
        ]}
        painPoints={[
          "Lack of technical knowledge.",
          "Bottlenecks dependent on IT teams.",
          "Resistance to complex software adoption.",
        ]}
        image="/assets/portfolio-images/coherent/user-persona-1.jpg"
        isReversed={false}
      />

      <PersonaCard
        name="James Carter"
        role="Backend Developer"
        background="Works in a SaaS company, developing APIs and collaborating with business teams on automation projects."
        theme="green"
        goals={[
          "Understand API integration capabilities.",
          "Ensure security and scalability.",
          "Reduce manual work on repetitive tasks.",
        ]}
        painPoints={[
          "Time-consuming manual workflows.",
          "Miscommunication between IT and business.",
          "Over-simplified tools lacking customization.",
        ]}
        image="/assets/portfolio-images/coherent/user-persona-2.jpg"
        isReversed={true}
      />
    </div>
  );
}
