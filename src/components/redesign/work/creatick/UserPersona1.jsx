"use client";
import React from "react";
import Image from "next/image";

export default function UserPersona1() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 rounded-3xl bg-white-100 dark:bg-black-600 overflow-hidden border border-black-100/10 dark:border-white-100/10">
      {/* Image Section */}
      <div className="relative w-full xl:w-[400px] h-[300px] xl:h-auto shrink-0 bg-blue-100 dark:bg-blue-900/20">
        <Image
          src="/assets/portfolio-images/creatick/user-persona-1.jpg"
          alt="Lana Mitchell"
          fill
          className="object-cover"
        />
        {/* Overlay Info Card - positioned at bottom */}
        <div className="absolute bottom-4 left-4 right-4 bg-white-100/90 dark:bg-black-500/90 backdrop-blur-md p-4 rounded-xl border border-white-100/20 shadow-lg">
          <h3 className="text-xl font-bold text-black-500 dark:text-white-100">
            Lana Mitchell
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            Freelance Social Media Consultant
          </p>
          <div className="mt-2 text-xs text-black-400 dark:text-white-400">
            <span className="font-bold">Age:</span> 32 |{" "}
            <span className="font-bold">Status:</span> Freelancer
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col gap-8">
        <div>
          <h4 className="text-lg font-bold mb-3 text-black-500 dark:text-white-100 border-l-4 border-blue-500 pl-3">
            Background
          </h4>
          <p className="text-black-400 dark:text-white-400 leading-relaxed">
            Lana is a 32-year-old freelancer helping small businesses grow their
            Instagram presence. She manages multiple client accounts, creating
            content strategies and reporting performance metrics daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Goals */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-black-500 dark:text-white-100 border-l-4 border-green-500 pl-3">
              Goals
            </h4>
            <ul className="space-y-2">
              {[
                "Streamline scheduling for multiple clients",
                "Automated, detailed performance reports",
                "Unified DM inbox for all accounts",
              ].map((goal, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-black-400 dark:text-white-400"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Pain Points */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-black-500 dark:text-white-100 border-l-4 border-red-500 pl-3">
              Frustrations
            </h4>
            <ul className="space-y-2">
              {[
                "Juggling too many tools daily",
                "Manual reporting consumes hours",
                "Missed DMs due to app switching",
              ].map((pain, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-black-400 dark:text-white-400"
                >
                  <span className="text-red-500 mt-1">✕</span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
