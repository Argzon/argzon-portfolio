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
    <div className="flex flex-col gap-12">
      <PersonaCard
        name="Oliver Bennett"
        role="Retail Crypto Investor"
        background="Oliver is a 32-year-old marketing specialist who started investing in crypto as a side hobby. With moderate experience in traditional stock trading, he's eager to explore crypto but often feels overwhelmed by the complexity of most platforms."
        tags={["Beginner Friendly", "Mobile First", "Security Focused"]}
        goals={[
          "Easily track portfolio and market trends in real-time.",
          "Execute quick buy/sell orders without complex steps.",
          "Use a secure platform that protects investments.",
        ]}
        painPoints={[
          "Confusing interface on existing platforms.",
          "Lack of transparency in fees and security policies.",
          "Too many unnecessary features designed for pros.",
        ]}
        image="/assets/portfolio-images/cryptico/user-persona-1.jpg"
        isReversed={false}
      />

      <PersonaCard
        name="Marcus Rivera"
        role="Experienced Crypto Trader"
        background="Marcus is a 40-year-old freelance software developer who has been trading cryptocurrencies for over five years. He relies on crypto trading as a significant income stream and prefers platforms that offer advanced features without sacrificing usability."
        tags={["Performance", "Advanced Tools", "Cross-Platform"]}
        goals={[
          "Access real-time market data without delays.",
          "Customize alerts and portfolio tracking tools.",
          "Use advanced charting tools for in-depth analysis.",
        ]}
        painPoints={[
          "Poorly optimized mobile apps that lag.",
          "Complicated navigation for setting up custom alerts.",
          "Lack of multi-factor authentication on some platforms.",
        ]}
        image="/assets/portfolio-images/cryptico/user-persona-2.jpg"
        isReversed={true}
      />
    </div>
  );
}
