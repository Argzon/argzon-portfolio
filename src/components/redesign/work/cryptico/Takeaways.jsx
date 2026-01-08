"use client";
import React from "react";

export default function Takeaways() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 bg-[#FFD74B] rounded-[2.5rem] p-6 md:p-10">
      {/* Project Info Block */}
      <div className="flex flex-col gap-3 bg-white/90 backdrop-blur-sm rounded-3xl p-6">
        {[
          {
            label: "Client:",
            val: "Cryptico (A Next-Gen Cryptocurrency Trading Platform)",
          },
          { label: "Industry:", val: "Fintech / Cryptocurrency" },
          {
            label: "Scope:",
            val: "UI/UX Design, Research, Prototyping, Frontend Development",
          },
          {
            label: "Tech Stack:",
            val: "Next.js, Supabase, Tailwind CSS, Chart.js, GitHub",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row lg:items-center bg-white border border-slate-100 rounded-xl gap-2 px-4 py-3"
          >
            <h6 className="font-bold text-slate-900 text-sm whitespace-nowrap min-w-[100px]">
              {item.label}
            </h6>
            <p className="text-slate-700 text-sm">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Role */}
        <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-sm rounded-3xl p-6">
          <h5 className="font-bold text-slate-900">My Role:</h5>
          <div className="flex flex-col gap-2">
            {[
              "Led end-to-end UI/UX design from research to high-fidelity prototypes.",
              "Developed responsive front-end components for seamless web and mobile experiences.",
              "Conducted user research & usability testing to refine the trading workflow.",
            ].map((text, i) => (
              <p
                key={i}
                className="bg-white border border-slate-100 rounded-xl px-4 py-3 text-xs text-slate-700 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-sm rounded-3xl p-6">
          <h5 className="font-bold text-slate-900">Key Features:</h5>
          <div className="flex flex-col gap-2">
            {[
              "Real-time trading dashboard with live market data.",
              "Secure authentication with multi-factor authentication (MFA).",
              "Customizable portfolio tracking with profit/loss analytics.",
              "Dark-mode UI for a modern and professional trading experience.",
            ].map((text, i) => (
              <p
                key={i}
                className="bg-white border border-slate-100 rounded-xl px-4 py-3 text-xs text-slate-700 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-4 bg-slate-900 text-white rounded-3xl p-6">
        <h5 className="font-bold">Results:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Increased user engagement with an intuitive, mobile-friendly trading interface.",
            "Higher conversion rates due to a streamlined onboarding and KYC process.",
            "Enhanced platform security, leading to improved trust among traders.",
            "Reduced trade execution time through optimized UI interactions.",
          ].map((text, i) => (
            <p
              key={i}
              className="bg-white/10 rounded-xl px-4 py-3 text-xs leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
