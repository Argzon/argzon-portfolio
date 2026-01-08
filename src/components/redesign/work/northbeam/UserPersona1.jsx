"use client";
import React from "react";

export default function UserPersona1() {
  return (
    <div className="flex flex-col lg:flex-row rounded-[2rem] bg-slate-50 overflow-hidden border border-slate-100">
      <div
        className="flex items-end bg-slate-200 p-4 md:p-[30px] h-[520px] w-full lg:w-[400px] shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/northbeam/user-persona-1.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-xl bg-slate-900/90 backdrop-blur-sm p-6 w-full text-white shadow-lg">
          <p className="text-white">
            <span className="font-bold">Name:</span> Emily Parker
          </p>
          <p className="text-white">
            <span className="font-bold">Role:</span> Marketing Manager
          </p>
          <p className="text-white text-sm leading-relaxed text-slate-300">
            <span className="font-bold text-white">Background:</span> Works at a
            mid-sized eCommerce brand, managing paid media campaigns. Focused on
            improving ad performance but struggles with complex tools.
          </p>
        </div>
      </div>
      <div className="p-8 md:p-10 w-full flex flex-col gap-10 justify-center">
        {/* Goals */}
        <div className="flex flex-col gap-4">
          <h5 className="font-bold text-slate-900 text-lg">Goals:</h5>
          <div className="flex flex-col gap-3">
            {[
              "Easily understand how Northbeam's platform tracks and attributes conversions",
              "Sign up and explore the product without needing to schedule a demo",
              "Access actionable insights that help improve campaign performance",
            ].map((goal, i) => (
              <div
                key={i}
                className="text-slate-700 rounded-xl bg-white border border-slate-200 px-5 py-3 text-sm shadow-sm"
              >
                {goal}
              </div>
            ))}
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-4">
          <h5 className="font-bold text-slate-900 text-lg">Pain Points:</h5>
          <div className="flex flex-col gap-3">
            {[
              "Existing website lacks clear product explanations",
              "Frustrated by forced sales calls",
              "Cannot find pricing or implementation details easily",
            ].map((point, i) => (
              <div
                key={i}
                className="text-slate-700 rounded-xl bg-blue-50 border border-blue-100 px-5 py-3 text-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
