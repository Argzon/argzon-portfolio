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
  "Regular feedback loops with stakeholders.",
  "Usability testing at different stages.",
  "Rapid prototyping to refine user experience.",
];

const outcomePoints = [
  "Increased user engagement with a seamless trading experience.",
  "Improved conversion rates with an intuitive onboarding process.",
  "Enhanced security measures, building trust with traders.",
  "Strengthened brand identity with a modern UI and mobile-first approach.",
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
            I adopted an agile development process, working in iterative
            sprints. This ensured that we stayed adaptable, addressed challenges
            efficiently, and delivered a robust final product.
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
          <div className="w-full bg-slate-50 rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center border border-slate-100">
            <Image
              src="/assets/portfolio-images/cryptico/roadmap.png"
              width={1200}
              height={529}
              alt="Roadmap"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Final Outcome */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Final <span className="font-sans not-italic">Outcome</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The redesigned Cryptico platform successfully:
          </p>
          <ul className="space-y-4">
            {outcomePoints.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-700 font-medium p-3 bg-slate-50 rounded-xl"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div className="w-full bg-[#FFB300] rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
            <Image
              src="/assets/portfolio-images/cryptico/homepage-laptop.png"
              width={1200}
              height={768}
              alt="Homepage"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-center text-white">
        <Quote className="w-16 h-16 text-white/10 mb-8 absolute top-10 left-10" />
        <p className="text-xl md:text-2xl font-light leading-relaxed relative z-10 italic mb-10 max-w-3xl">
          &quot;The transformation of our platform exceeded our expectations.
          The user experience is now seamless, and the design truly sets us
          apart in the industry. Working with Argzon was a fantastic experience,
          and we highly recommend their expertise.&quot;
        </p>
        <div>
          <h4 className="font-bold text-white text-lg">Jaxson Stanton</h4>
          <p className="text-white/60 text-sm">
            Chief Operating Officer, Cryptico
          </p>
        </div>

        <Image
          src="/assets/portfolio-images/cryptico/testimonial-logo.svg"
          width={200}
          height={200}
          alt="Icon"
          className="absolute -top-10 -right-10 opacity-10 rotate-12 scale-150"
        />
      </div>

      {/* Key Takeaways */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Key <span className="font-sans not-italic">Takeaways</span>
          </h2>
          <p className="text-slate-600 mb-4">
            Balancing aesthetics and functionality is crucial in fintech UX
            design.
          </p>
          <p className="text-slate-600 mb-4">
            Security & transparency should be at the core of any crypto
            platform.
          </p>
          <p className="text-slate-600 mb-4">
            Iterative design & development lead to a more refined user
            experience.
          </p>
          <p className="text-slate-600 mb-4">
            Cross-platform consistency enhances usability and user satisfaction.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Conclusion
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cryptico was a challenging yet rewarding project that pushed my
              expertise in UI/UX design, research, and frontend development. By
              leveraging design thinking, agile methodologies, and modern tech
              stacks, I was able to create a secure, intuitive, and
              high-performance crypto trading platform.
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
