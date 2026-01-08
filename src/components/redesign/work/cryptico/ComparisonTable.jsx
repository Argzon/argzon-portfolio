"use client";
import React from "react";
import Image from "next/image";

export default function ComparisonTable() {
  return (
    <div className="h-full flex flex-col gap-2 overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex flex-row gap-4 w-full py-3 min-w-[900px]">
        <p className="subtitle px-4 py-2 rounded-2xl bg-white/10 text-white w-[200px] shrink-0 text-sm font-bold backdrop-blur-sm">
          Feature / Platform
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-yellow-400 text-slate-900 w-[230px] shrink-0 text-sm font-bold shadow-lg">
          Cryptico 🚀
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-white/5 text-white/70 w-[220px] shrink-0 text-sm">
          Binance
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-white/5 text-white/70 w-[220px] shrink-0 text-sm">
          Coinbase
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-white/5 text-white/70 w-[230px] shrink-0 text-sm">
          Kraken
        </p>
      </div>
      <div className="flex flex-row gap-2 min-w-[900px]">
        {/* Features Column */}
        <div className="shrink-0 bg-white/5 rounded-2xl p-4 w-[200px] flex flex-col justify-between gap-6">
          {[
            "User Interface",
            "Beginner-Friendly UX",
            "Trading Experience",
            "Portfolio Management",
            "Security & Auth",
            "Cross-Platform",
            "Performance",
          ].map((feature, i) => (
            <p
              key={i}
              className="font-bold text-white text-xs h-[40px] flex items-center"
            >
              {feature}
            </p>
          ))}
        </div>

        {/* Cryptico */}
        <div className="shrink-0 bg-yellow-400/90 rounded-2xl p-4 w-[230px] flex flex-col gap-6">
          {[
            "Modern, sleek dark mode with customizable UI",
            "Guided onboarding, tooltips, and explainer videos",
            "Intuitive, one-click trading with real-time market updates",
            "Customizable tracking, smart insights, and alerts",
            "Multi-factor authentication (MFA) & encrypted transactions",
            "Seamless experience across web & mobile",
            "Optimized for fast load times and smooth interactions",
          ].map((text, i) => (
            <p
              key={i}
              className="text-slate-900 text-xs h-[40px] flex items-center leading-tight"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Competitors Wrapper */}
        <div className="flex flex-row gap-2">
          {/* Binance */}
          <div className="shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 w-[220px] flex flex-col gap-6">
            {[
              "Complex and crowded UI",
              "Steep learning curve",
              "Feature-packed but overwhelming",
              "Basic portfolio view",
              "Strong security but complex KYC process",
              "Mobile app differs from desktop UX",
              "Sometimes slow due to heavy UI",
            ].map((text, i) => (
              <p
                key={i}
                className="text-white/70 text-xs h-[40px] flex items-center leading-tight"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Coinbase */}
          <div className="shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 w-[220px] flex flex-col gap-6">
            {[
              "Simple but limited customization",
              "Very beginner-friendly",
              "Simplified trading for retail users",
              "Easy tracking but lacks customization",
              "Good security, but basic 2FA options",
              "Great mobile experience",
              "Fast and responsive",
            ].map((text, i) => (
              <p
                key={i}
                className="text-white/70 text-xs h-[40px] flex items-center leading-tight"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Kraken */}
          <div className="shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 w-[230px] flex flex-col gap-6">
            {[
              "Professional but slightly outdated",
              "Moderate learning curve",
              "Advanced tools, but can feel complex",
              "Advanced analytics for experienced traders",
              "Top-tier security standards",
              "Functional but less intuitive mobile app",
              "Stable and reliable performance",
            ].map((text, i) => (
              <p
                key={i}
                className="text-white/70 text-xs h-[40px] flex items-center leading-tight"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
