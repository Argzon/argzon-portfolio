"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";
import Takeaways from "./Takeaways";

gsap.registerPlugin(ScrollTrigger);

const collaborationPoints = [
  "Agile development with iterative feedback.",
  "Close alignment with business goals.",
  "Emphasis on scalable and maintainable code.",
];

const outcomePoints = [
  "Solved the fragmentation problem with a unified dashboard.",
  "Successfully balanced a dense feature set with a clean interface.",
  "Delivered a fully responsive web application.",
];

export default function CollaborationAndResults() {
  const container = useRef();

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32"
    >
      {/* Collaboration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Creative <span className="font-sans not-italic">Collaboration</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Managed the project in an agile environment, ensuring iterative
            improvements based on stakeholder feedback.
          </p>
          <ul className="space-y-3">
            {collaborationPoints.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-slate-700 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-8">
          <div className="w-full bg-slate-50 rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
            <Image
              src="/assets/portfolio-images/creatick/roadmap.jpg"
              width={1000}
              height={600}
              alt="Creatick Product Roadmap"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Final Outcome */}
      <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Final <span className="font-sans not-italic">Outcome</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            The final platform provides a unified, powerful experience that
            solves the core problem of social media management fragmentation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center text-left">
            {outcomePoints.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm text-slate-700 font-medium p-4 bg-slate-50 border border-slate-100 rounded-xl"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-center text-white">
        <Quote className="w-16 h-16 text-white/10 mb-8 absolute top-10 left-10" />
        <p className="text-xl md:text-2xl font-light leading-relaxed relative z-10 italic mb-10 max-w-3xl">
          &quot;Working with Argzon was an incredible experience. From research
          to design to development, he truly understood our vision and
          transformed it into an intuitive, high-performing platform. The UI is
          sleek, the UX is seamless, and our users love the experience.&quot;
        </p>
        <div>
          <h4 className="font-bold text-white text-lg">Renea Ora</h4>
          <p className="text-white/60 text-sm">CTO, Creatick</p>
        </div>
        {/* Abstract shape */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* Key Takeaways */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Key <span className="font-sans not-italic">Takeaways</span>
          </h2>
          <p className="text-slate-600 mb-4">
            Managing information density is key for dashboard design.
          </p>
          <p className="text-slate-600 mb-4">
            Component-based development significantly speeds up the build
            process.
          </p>
          <p className="text-slate-600 mb-4">
            User testing early often reveals incorrect assumptions about feature
            utility.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Conclusion
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Creatick was a comprehensive exercise in end-to-end product
              design. It reinforced the importance of balancing feature-richness
              with simplicity, ensuring that the tool empowers users rather than
              overwhelming them.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Takeaways />
        </div>
      </div>
    </section>
  );
}
