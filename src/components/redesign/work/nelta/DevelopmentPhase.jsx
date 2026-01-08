"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, RefreshCw, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const approachPoints = [
  {
    title: "Client Workshops",
    description:
      "Engaged in regular client workshops to ensure a clear project vision.",
    icon: Users,
  },
  {
    title: "Iterative Feedback",
    description: "Implemented an iterative feedback loop for rapid refinement.",
    icon: RefreshCw,
  },
  {
    title: "Close Communication",
    description:
      "Maintained close communication to meet all requirements effectively.",
    icon: MessageCircle,
  },
];

export default function DevelopmentPhase() {
  const container = useRef();

  useGSAP(
    () => {
      // Animations
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-24 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Agile <span className="font-sans not-italic">& Approach</span>
          </h2>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-10">
          <p className="text-lg text-slate-600 leading-relaxed">
            I adopted an agile methodology, prioritizing flexibility and client
            involvement. This ensured that the final product was not just a
            website, but a true reflection of Nelta&apos;s evolving brand
            identity.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {approachPoints.map((point, index) => (
              <div
                key={index}
                className="approach-card p-8 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-6"
              >
                <div className="p-4 bg-white rounded-2xl shrink-0 border border-slate-100">
                  <point.icon className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
