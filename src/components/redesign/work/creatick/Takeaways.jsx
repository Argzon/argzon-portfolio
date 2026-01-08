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
            val: "Creatick - Social Media Management Platform",
          },
          { label: "Industry:", val: "Social Media & Digital Marketing" },
          {
            label: "Scope:",
            val: "UX Research, UI Design, Wireframing, Web & Mobile Dev",
          },
          {
            label: "Tech Stack:",
            val: "Next.js, Firebase, GitHub, ClickUp",
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
              "Conducted user research and created personas to define user needs.",
              "Designed an intuitive and visually appealing UI/UX for both web and mobile.",
              "Developed the frontend using Next.js, ensuring high performance.",
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
          <h5 className="font-bold text-[#0F172A]">Key Features:</h5>
          <div className="flex flex-col gap-2">
            {[
              "Post Scheduling & Content Calendar.",
              "Instagram Direct Messaging Management.",
              "Advanced Analytics & Reporting.",
              "Customizable Caption & Hashtag Library.",
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
        <h5 className="font-bold text-[#FFFFFF]">Results:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Streamlined workflow for social media managers.",
            "Unified dashboard reducing tool fragmentation.",
            "Functional MVP ready for user onboarding.",
            "Positive feedback on the intuitive mobile interface.",
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
