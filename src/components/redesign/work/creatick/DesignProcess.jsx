"use client";
import React from "react";
import Image from "next/image";

export default function DesignProcess() {
  return (
    <section className="w-full py-[100px] bg-white-200 dark:bg-black-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-black-500 dark:text-white-100 mb-6">
              Design Process
            </h2>
            <p className="text-lg text-black-400 dark:text-white-400">
              Moving from research to design, I focused on creating a clean,
              distraction-free interface. The extensive feature set required a
              robust Information Architecture to keep navigation intuitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Step 1 */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white-100 dark:bg-black-500">
              <span className="text-6xl font-bold text-black-100/10 dark:text-white-100/10">
                01
              </span>
              <h3 className="text-2xl font-bold text-black-500 dark:text-white-100">
                Information Architecture
              </h3>
              <p className="text-black-400 dark:text-white-400">
                Organized features into logical groups: Content, Engagement, and
                Analytics. This flattened the navigation hierarchy, making key
                tasks accessible in fewer clicks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white-100 dark:bg-black-500">
              <span className="text-6xl font-bold text-black-100/10 dark:text-white-100/10">
                02
              </span>
              <h3 className="text-2xl font-bold text-black-500 dark:text-white-100">
                Wireframing
              </h3>
              <p className="text-black-400 dark:text-white-400">
                Created low-fidelity wireframes to test layout assumptions.
                Iterate on the dashboard widget arrangement to ensure the most
                critical data was visible "above the fold."
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white-100 dark:bg-black-500">
              <span className="text-6xl font-bold text-black-100/10 dark:text-white-100/10">
                03
              </span>
              <h3 className="text-2xl font-bold text-black-500 dark:text-white-100">
                Visual Design
              </h3>
              <p className="text-black-400 dark:text-white-400">
                Established a design system based on Creatick's brand blue. Used
                plenty of whitespace and subtle shadows to create depth and
                hierarchy suitable for a data-heavy dashboard.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white-100 dark:bg-black-500">
              <span className="text-6xl font-bold text-black-100/10 dark:text-white-100/10">
                04
              </span>
              <h3 className="text-2xl font-bold text-black-500 dark:text-white-100">
                Prototyping
              </h3>
              <p className="text-black-400 dark:text-white-400">
                Built high-fidelity prototypes to test user flows for
                "Scheduling a Post" and "Replying to a DM", refining
                interactions based on usability testing feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
