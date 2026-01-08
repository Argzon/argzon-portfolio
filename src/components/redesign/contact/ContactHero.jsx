"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import ContactWizard from "./ContactWizard";

export default function ContactHero() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".contact-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".contact-info",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".contact-form",
          {
            x: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="pt-32 pb-20 px-6 md:px-12 lg:px-10 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column: Heading & Info */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div className="overflow-hidden">
            <h1 className="contact-title text-5xl md:text-7xl font-bold text-slate-900 font-serif italic mb-6">
              Let&apos;s work{" "}
              <span className="font-sans not-italic block">Together</span>
            </h1>
            <p className="contact-info text-lg text-slate-600 leading-relaxed max-w-md">
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I&apos;ll get back to you in the next 48
              hours.
            </p>
          </div>

          <div className="contact-info flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Email Details
              </span>
              <a
                href="mailto:argzon01@gmail.com"
                className="text-xl font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                argzon01@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Socials
              </span>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/haziraj/"
                  target="_blank"
                  className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors text-slate-900 border border-slate-100"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.behance.net/haziraj"
                  target="_blank"
                  className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors text-slate-900 border border-slate-100"
                >
                  <span className="font-bold text-lg w-5 h-5 flex items-center justify-center leading-none">
                    Be
                  </span>
                </Link>
                <Link
                  href="https://github.com/Argzon"
                  target="_blank"
                  className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors text-slate-900 border border-slate-100"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 contact-form">
          <ContactWizard />
        </div>
      </div>
    </section>
  );
}
