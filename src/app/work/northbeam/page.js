"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA/page";
import ReactPlayer from "react-player";
import Label from "@/components/Label/page";
import BeforeAndAfter from "./sections/beforeandafter";
import UserPersona1 from "./sections/user-personas/user-persona-1";
import UserPersona2 from "./sections/user-personas/user-persona-2";

export default function Northbeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex flex-col gap-[150px] md:gap-[200px]">
      {/* Header */}
      <div className="flex justify-center lg:justify-between items-center max-w-7xl w-full mx-auto pt-10 px-4 md:px-0">
        <Link
          href="/"
          className="label text-black-100 border border-white-300 dark:border-black-300 px-4 py-3 rounded-full hidden lg:flex flex-row gap-1 shrink-0 hover:text-black-200 dark:hover:text-white-200 hover:border-white-400 dark:hover:border-black-400 hover:bg-white-200 dark:hover:bg-black-400 transition-all duration-300"
        >
          <Image
            src="/assets/icons/arrow-left-project.svg"
            height={16}
            width={16}
            alt="Go Home"
          />
          Go Home
        </Link>
        <Navigation />

        <Link
          href="/work"
          className="label text-black-100 border border-white-300 dark:border-black-300 px-4 py-3 rounded-full hidden lg:flex flex-row gap-1 shrink-0 hover:text-black-200 dark:hover:text-white-200 hover:border-white-400 dark:hover:border-black-400 hover:bg-white-200 dark:hover:bg-black-400 transition-all duration-300"
        >
          Next Project
          <Image
            src="/assets/icons/arrow-right-project.svg"
            height={16}
            width={16}
            alt="Next Project"
          />
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8">
          <h1>Northbeam Website Redesign</h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <p className="subtitle">
              A complete UX/UI transformation for Northbeam&apos;s website,
              enhancing its brand identity, user experience, and conversion
              rates through strategic research, design, and implementation.
            </p>
            <div className="flex flex-row gap-6 shrink-0 h-fit">
              <div className="flex flex-col justify-between">
                <p className="subtitle text-primary">Date</p>
                <p className="subtitle text-primary">Client</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6>04 August 2023</h6>
                <h6>Northbeam</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Video */}
        <ReactPlayer
          url="/assets/portfolio-images/northbeam/hero-video.mp4"
          width="100%"
          height="100%"
          controls={false}
          playing={true}
          muted={true}
          loop={true}
          style={{ borderRadius: "16px", overflow: "hidden" }}
        />
      </div>

      {/* Introduction */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Introduction</h2>
          <p>
            Northbeam is a tech company redefining attribution for modern
            brands, using advanced data models and machine learning to help
            businesses make informed marketing decisions. However, their website
            didn&apos;t reflect their innovative approach, lacking a
            product-driven structure and clear self-serve conversion options.
          </p>
          <p>
            The goal was to transform Northbeam&apos;s website into a
            high-converting, user-friendly platform that effectively
            communicates the brand&apos;s value and drives sign-ups from
            marketing professionals.
          </p>
        </div>
      </div>

      {/* The Challenge */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>The Challenge</h2>
          <p>
            Despite Northbeam&apos;s powerful technology, their website suffered
            from several key issues:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Outdated design:"
              description="The site didn't reflect the modern, data-driven nature of the brand."
            />
            <Label
              title="Lack of a product-focused approach:"
              description="Users couldn't easily understand Northbeam's capabilities."
            />
            <Label
              title="No self-serve conversion options:"
              description="The site required too many touchpoints before sign-up, limiting user engagement."
            />
            <Label
              title="Low engagement & conversion rates:"
              description="The existing structure didn't drive users toward meaningful actions."
            />
          </div>
          <p>
            The challenge was to overhaul the website, improve the user journey,
            and create a frictionless experience that encourages sign-ups.
          </p>
        </div>
        {/* Before & After */}
        <BeforeAndAfter />
      </div>

      {/* Research & Strategy */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Research & Strategy</h2>
          <p>
            To create a high-impact redesign, I conducted an in-depth research
            phase:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Competitor & Market Analysis:"
              description="Studied leading analytics and attribution platforms to identify best practices."
            />
            <Label
              title="User Research:"
              description="Defined key user personas and their pain points."
            />
            <Label
              title="Heuristic Evaluation:"
              description="Identified UX gaps and areas for improvement."
            />
            <Label
              title="Sitemap & Information Architecture:"
              description="Redesigned the structure to improve content hierarchy and navigation."
            />
          </div>
          <p>
            These insights laid the foundation for a streamlined, intuitive user
            experience that prioritizes conversions.
          </p>
        </div>
        {/* User Personas */}
        <div className="w-full flex flex-col gap-8">
          <UserPersona1 />
          <UserPersona2 />
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-blue-100 dark:bg-blue-600 rounded-2xl p-6 md:p-8">
            <Image
              src={
                "/assets/portfolio-images/northbeam/information-architecture.svg"
              }
              height={529}
              width={1200}
              alt="Northbeam Information Architecture"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/northbeam/information-architecture.svg"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Wireframing & UX Design */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Wireframing & UX Design</h2>
          <p>With a clear strategy in place, I moved into UX design:</p>
          <div className="flex flex-col gap-4">
            <Label
              title="Low-Fidelity Wireframes:"
              description="Created structure-focused wireframes to refine content placement and user flow."
            />
            <Label
              title="User Journey Mapping:"
              description="Ensured smooth navigation from landing pages to conversion points."
            />
            <Label
              title="Usability Testing:"
              description="Iterated on designs based on feedback, optimizing for engagement and ease of use."
            />
          </div>
          <p>
            The result was a UX framework that effectively guides users toward
            action while keeping the experience intuitive and enjoyable.
          </p>
        </div>
        {/* Videos */}
        <div className="flex flex-col gap-8">
          {/* Mobile UI Video  */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-300 rounded-2xl p-6 md:p-8">
            <ReactPlayer
              url="/assets/portfolio-images/northbeam/mobile-ui.mp4"
              width="100%"
              height="100%"
              controls={false}
              playing={true}
              muted={true}
              loop={true}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
              }}
            />
          </div>
          {/* Desktop UI VIdeo  */}
          <div className="w-full flex items-center justify-center bg-blue-300 rounded-2xl p-6 md:p-8">
            <ReactPlayer
              url="/assets/portfolio-images/northbeam/desktop-ui.mp4"
              width="100%"
              height="100%"
              controls={false}
              playing={true}
              muted={true}
              loop={true}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>

      {/* UI Design & Branding */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>UI Design & Branding</h2>
          <p>
            To align the website with Northbeam&apos;s innovative positioning, I
            crafted a clean, modern UI:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Visual Identity Refresh:"
              description="Introduced a sleek, data-driven aesthetic with refined typography and a bold color scheme."
            />
            <Label
              title="Clear Call-to-Actions (CTAs):"
              description="Designed visually distinct CTAs to drive self-serve conversions."
            />
            <Label
              title="Interactive Product Highlights:"
              description="Used dynamic elements to showcase Northbeam's capabilities engagingly."
            />
            <Label
              title="Mobile-First Approach:"
              description="Ensured a seamless experience across all devices."
            />
          </div>
          <p>
            The UI transformation resulted in a more professional,
            conversion-focused, and visually compelling website.
          </p>
        </div>
        {/* User Personas */}
        <div className="w-full flex flex-col gap-8">
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-400 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/northbeam/moodboard.jpg"}
              height={529}
              width={1200}
              alt="Northbeam Moodboard"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/northbeam/moodboard.jpg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-400 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/northbeam/moodboard-2.jpg"}
              height={529}
              width={1200}
              alt="Northbeam Moodboard"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/northbeam/moodboard-2.jpg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-blue-100 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/northbeam/ds-colors.svg"}
              height={529}
              width={1200}
              alt="Northbeam Design System - Colors"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/northbeam/ds-colors.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-blue-100 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/northbeam/ds-typography.svg"}
              height={529}
              width={1200}
              alt="Northbeam Design System - Typography"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/northbeam/ds-typography.svg"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-blue-100 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/northbeam/ds-buttons.svg"}
              height={529}
              width={1200}
              alt="Northbeam Design System - Buttons"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/northbeam/ds-buttons.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Development & Implementation */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Development & Implementation</h2>
          <p>
            Collaborating closely with the development team, I ensured the
            designs were implemented flawlessly:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Component-Based Design System:"
              description="Created reusable UI components for consistency."
            />
            <Label
              title="Performance Optimization:"
              description="Focused on fast load times and smooth interactions."
            />
            <Label
              title="SEO & Accessibility Enhancements:"
              description="Ensured the site met web best practices for visibility and inclusivity."
            />
          </div>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-blue-400 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/northbeam/ds-components.svg"}
            height={529}
            width={1200}
            alt="Northbeam Design System - Components"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/northbeam/ds-components.svg"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Results & Impact */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Results & Impact</h2>
          <p>
            While post-launch analytics are still being gathered, the redesign
            is expected to:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Increase user engagement"
              description="Through improved design and content hierarchy."
            />
            <Label
              title="Boost conversion rates"
              description="With optimized CTAs and a frictionless user journey."
            />
            <Label
              title="Strengthen Northbeam's brand presence"
              description="By aligning the website with their innovative identity."
            />
          </div>
        </div>
      </div>

      {/* Conclusion & Learnings */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Conclusion & Learnings</h2>
          <p>
            This project reinforced the importance of aligning UX/UI design with
            business goals. By prioritizing usability, clarity, and engagement,
            I helped Northbeam create a digital experience that not only looks
            great but also drives results.
          </p>
          <p>
            Moving forward, continued iteration based on user feedback and A/B
            testing will further refine the website&apos;s effectiveness.
          </p>
        </div>
      </div>

      {/* Client Feedback & Testimonials */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Client Feedback & Testimonials</h2>
          <p>Here&apos;s what Northbeam had to say about the project:</p>
        </div>

        {/* Testimonial  */}
        <div className="w-full bg-blue-200 rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-48 overflow-hidden relative">
          <div className="lg:max-w-lg flex flex-col gap-2.5">
            <p className="subtitle italic text-black-600 ">
              &quot;Argzon played a crucial role in transforming our website
              into a product-driven platform that truly represents
              Northbeam&apos;s innovative technology. From the initial research
              phase to the final UI design, he led the entire process, creating
              the sitemap, wireframes, and high-fidelity designs that
              streamlined the user journey and improved conversions. His ability
              to combine modern aesthetics with user-centered design helped us
              deliver a more engaging experience for marketing professionals,
              making self-serve conversions asier than ever.&quot;
            </p>
            <h6 className="text-black-600">
              - Bryan Bumgardner, Director of Growth Marketing, Northbeam
            </h6>
          </div>
          <Image
            src={"/assets/portfolio-images/northbeam/icon.png"}
            height={471}
            width={755}
            alt="North Icon"
            className="absolute -top-[20px] -right-96 hidden lg:block select-text animate-pulse"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/northbeam/icon.png"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
