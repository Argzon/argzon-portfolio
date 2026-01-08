"use client";
import React, { useRef } from "react";

export default function Implementation() {
  const collaborationPoints = [
    "Weekly sprints for design validation and adjustments.",
    "Close alignment with content strategists to maintain clarity.",
    "Iterative testing to refine user experience.",
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Implementation &{" "}
            <span className="font-sans not-italic">Collab</span>
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            I worked closely with developers using an agile workflow, ensuring
            iterative improvements based on feedback.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collaborationPoints.map((item, i) => (
              <div
                key={i}
                className="p-6 border border-slate-200 rounded-2xl bg-slate-50"
              >
                <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
