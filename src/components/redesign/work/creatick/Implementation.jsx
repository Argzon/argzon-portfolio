"use client";
import React from "react";

export default function Implementation() {
  return (
    <section className="w-full py-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 max-w-4xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-black-500 dark:text-white-100">
              Implementation & Development
            </h2>
            <p className="text-lg text-black-400 dark:text-white-400">
              Translating the design into a functional application required a
              focus on performance and real-time updates. Using Next.js and
              Firebase allowed for a seamless, app-like experience on the web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Key Features List */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black-500 dark:text-white-100">
                Key Features Delivered
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Smart Scheduler",
                    desc: "Drag-and-drop calendar for planning posts, stories, and reels.",
                  },
                  {
                    title: "Unified Inbox",
                    desc: "Real-time DM management across multiple connected accounts.",
                  },
                  {
                    title: "Analytics Dashboard",
                    desc: "Interactive charts for engagement metrics and audience growth.",
                  },
                  {
                    title: "Asset Library",
                    desc: "Centralized storage for media, captions, and hashtag sets.",
                  },
                ].map((feat, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 border-b border-black-100/10 dark:border-white-100/10 last:border-0"
                  >
                    <div className="h-2 w-2 mt-2.5 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-black-500 dark:text-white-100">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-black-400 dark:text-white-400">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="bg-black-600 dark:bg-white-100/5 rounded-3xl p-8 text-white-100">
              <h3 className="text-2xl font-bold mb-6">Technical Challenges</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">
                    Real-time Data Sync
                  </h4>
                  <p className="text-white-100/80 text-sm">
                    Implementing live updates for the Unified Inbox was
                    critical. I utilized Firebase Firestore's real-time
                    listeners to ensure messages appeared instantly without page
                    reloads.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">
                    Complex State Management
                  </h4>
                  <p className="text-white-100/80 text-sm">
                    The Scheduler required managing complex state for
                    drag-and-drop operations and multi-timezone handling. React
                    Context and custom hooks were essential to keep the state
                    logic maintainable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
