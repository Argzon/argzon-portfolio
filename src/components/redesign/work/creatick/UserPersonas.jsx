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
        name="Lana Mitchell"
        role="Freelance Social Media Consultant"
        background="Lana is a 32-year-old freelancer helping small businesses grow their Instagram presence. She manages multiple client accounts, creating content strategies and reporting performance metrics daily."
        tags={["Efficiency", "Reporting", "Multi-Account"]}
        goals={[
          "Streamline scheduling for multiple clients.",
          "Automate detailed performance reports.",
          "Manage direct messages from one unified inbox.",
        ]}
        painPoints={[
          "Juggling too many tools for scheduling and reporting.",
          "Time-consuming manual reporting processes.",
          "Missing client messages due to app switching.",
        ]}
        image="/assets/portfolio-images/creatick/user-persona-1.jpg"
        isReversed={false}
      />

      <PersonaCard
        name="Ethan Reynolds"
        role="Lifestyle Content Creator"
        background="Ethan is a 27-year-old influencer sharing fitness and wellness content. He collaborates with brands and needs to maintain consistent content quality and audience engagement while on the go."
        tags={["Mobile First", "Engagement", "Analytics"]}
        goals={[
          "Automate posting to maintain consistent flow.",
          "Respond quickly to DMs from followers and brands.",
          "Track engagement performance to improve strategy.",
        ]}
        painPoints={[
          "Managing multiple conversations without a central inbox.",
          "Losing engagement during busy travel periods.",
          "Unclear insights into which content formats perform best.",
        ]}
        image="/assets/portfolio-images/creatick/user-persona-2.jpg"
        isReversed={true}
      />
    </div>
  );
}
