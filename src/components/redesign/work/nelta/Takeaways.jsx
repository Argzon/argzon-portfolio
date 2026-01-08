"use client";
import React from "react";

export default function Takeaways() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 bg-[#3B82F6] rounded-[2.5rem] p-6 md:p-10">
      {/* Project Info Block */}
      <div className="flex flex-col gap-3 bg-[#FFFFFF] rounded-3xl p-6 shadow-sm">
        {[
          {
            label: "Client:",
            val: "Nelta - IT Consulting & Software Development",
          },
          { label: "Industry:", val: "IT Consulting, Automotive, Finance" },
          {
            label: "Scope:",
            val: "UX Research, UI Design, Wireframing, Frontend Dev",
          },
          {
            label: "Tech Stack:",
            val: "Next.js, Tailwind CSS, GSAP, Figma",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row lg:items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl gap-2 px-4 py-3"
          >
            <h6 className="font-bold text-[#0F172A] text-sm whitespace-nowrap min-w-[100px]">
              {item.label}
            </h6>
            <p className="text-[#334155] text-sm">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Role */}
        <div className="flex flex-col gap-4 bg-[#FFFFFF] rounded-3xl p-6 shadow-sm">
          <h5 className="font-bold text-[#0F172A]">My Role:</h5>
          <div className="flex flex-col gap-2">
            {[
              "Led the end-to-end redesign process from discovery to deployment.",
              "Conducted stakeholder interviews to align business goals with design.",
              "Developed responsive frontend components using modern React patterns.",
            ].map((text, i) => (
              <p
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#334155] leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4 bg-[#FFFFFF] rounded-3xl p-6 shadow-sm">
          <h5 className="font-bold text-[#0F172A]">Key Deliverables:</h5>
          <div className="flex flex-col gap-2">
            {[
              "Modernized Corporate Identity & Brand Language.",
              "Streamlined Service Architecture.",
              "High-Performance Next.js Application.",
              "Interactive UI Elements & GSAP Animations.",
            ].map((text, i) => (
              <p
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#334155] leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-4 bg-[#0F172A] text-[#FFFFFF] rounded-3xl p-6 shadow-sm">
        <h5 className="font-bold text-[#FFFFFF]">Outcomes:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Established Nelta as a modern digital leader in IT consulting.",
            "Improved user engagement via clearer navigation paths.",
            "Achieved 100/100 Performance Score on Lighthouse.",
            "Seamless responsive experience across all devices.",
          ].map((text, i) => (
            <p
              key={i}
              className="bg-[#1E293B] rounded-xl px-4 py-3 text-xs leading-relaxed text-[#F8FAFC]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
