"use client";
import React from "react";

export default function UserPersona2() {
  return (
    <div className="flex flex-col lg:flex-row rounded-[2rem] bg-slate-50 overflow-hidden border border-slate-100">
      <div className="order-2 lg:order-1 p-8 md:p-10 w-full flex flex-col gap-10 justify-center">
        {/* Goals */}
        <div className="flex flex-col gap-4">
          <h5 className="font-bold text-slate-900 text-lg">Goals:</h5>
          <div className="flex flex-col gap-3">
            {[
              "Quickly evaluate Northbeam's features without needing to contact sales",
              "Access granular attribution data to optimize cross-channel campaigns",
              "Understand how Northbeam's machine learning models improve performance",
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
              "Website lacks in-depth technical product information",
              "No self-serve trial options to test the platform independently",
              "Hard to understand how Northbeam compares to other attribution tools",
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

      <div
        className="order-1 lg:order-2 flex items-end bg-slate-200 p-4 md:p-[30px] h-[520px] w-full lg:w-[400px] shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/northbeam/user-persona-2.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-xl bg-slate-900/90 backdrop-blur-sm p-6 w-full text-white shadow-lg">
          <p className="text-white">
            <span className="font-bold">Name:</span> Ryan Thompson
          </p>
          <p className="text-white">
            <span className="font-bold">Role:</span> Performance Marketer
          </p>
          <p className="text-white text-sm leading-relaxed text-slate-300">
            <span className="font-bold text-white">Background:</span> Works at a
            performance marketing agency. Relies on data to optimize campaigns
            but struggles to find transparent attribution insights.
          </p>
        </div>
      </div>
    </div>
  );
}
