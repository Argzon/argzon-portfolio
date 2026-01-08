"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BeforeAndAfter from "./BeforeAndAfter";

gsap.registerPlugin(ScrollTrigger);

export default function FinalOutcome() {
  const container = useRef();

  useGSAP(
    () => {
      // animations
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-32"
    >
      {/* Outcome Text & Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">
            Final <span className="font-sans not-italic">Outcome</span>
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-slate-600 leading-relaxed">
              The redesigned TalentAlly website successfully improved user
              engagement, navigation, and overall aesthetics. It now provides a
              modern and seamless experience that aligns with TalentAlly&apos;s
              mission.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="w-full bg-[#FFD400] rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center">
            <Image
              src="/assets/portfolio-images/talentally/presentation.png"
              width={1200}
              height={612}
              alt="Final Presentation"
              className="w-full h-auto rounded-xl shadow-lg "
            />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#3643E6] rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-center text-white bg-[url('/assets/portfolio-images/talentally/testimonial-bg.svg')] bg-no-repeat bg-top">
        <Quote className="w-16 h-16 text-white/50 mb-8 absolute top-10 left-10" />
        <div className="relative z-10 italic mb-10 max-w-3xl flex flex-col gap-6 pt-5">
          <p
            className="text-lg md:text-xl font-medium leading-relaxed text-white"
            style={{ color: "#ffffff" }}
          >
            &quot;During the project, Argi demonstrated exceptional
            communication skills. Throughout the collaboration, they
            consistently maintained open lines of communication, ensuring that
            all team members were well-informed and on the same page.
          </p>
          <p
            className="text-lg md:text-xl font-medium leading-relaxed text-white"
            style={{ color: "#ffffff" }}
          >
            In addition to his excellent communication, Argi demonstrated
            remarkable organizational skills and efficiency. He approached tasks
            methodically, consistently meeting deadlines and contributing to the
            project&apos;s overall success.
          </p>
          <p
            className="text-lg md:text-xl font-medium leading-relaxed text-white"
            style={{ color: "#ffffff" }}
          >
            Finally, one of the most enjoyable aspects of working with Argi was
            his positive attitude and collaborative spirit. I am confident that
            Argi would be a valuable asset to any project.&quot;
          </p>
        </div>

        <div>
          <h4
            className="font-bold text-white text-lg lg:text-xl"
            style={{ color: "#ffffff" }}
          >
            Megan Bozzuto
          </h4>
          <p className="text-white/90 text-sm" style={{ color: "#ffffff" }}>
            Chief Marketing Officer, TalentAlly
          </p>
        </div>
        <Image
          src="/assets/portfolio-images/talentally/icon.svg"
          height={300}
          width={500}
          alt="TalentAlly Icon"
          className="absolute -bottom-10 -right-20 hidden lg:block"
        />
      </div>
    </section>
  );
}
