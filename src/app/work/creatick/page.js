"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA/page";
import Label from "@/components/Label/page";
import Takeaways from "./sections/takeaways";
import UserPersona1 from "./sections/user-personas/user-persona-1";
import UserPersona2 from "./sections/user-personas/user-persona-2";

export default function Creatick() {
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
      <div className="flex items-center justify-center pt-10">
        <div className="flex justify-center lg:justify-between items-center max-w-7xl w-full mx-auto fixed z-[100] px-10 lg:px-0 pt-10">
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
            href="/work/cryptico"
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
      </div>

      {/* Hero */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8">
          <h1>Creatick: A Case Study in UX & Product Design</h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <p className="subtitle">
              A complete case study on Creatick, a social media management
              platform, showcasing my end-to-end design and development process,
              from research to execution. This project highlights UX/UI design,
              front-end development, and agile methodologies to create an
              intuitive and engaging user experience.
            </p>
            <div className="flex flex-row gap-6 shrink-0 h-fit">
              <div className="flex flex-col justify-between">
                <p className="subtitle text-primary">Date</p>
                <p className="subtitle text-primary">Client</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6>14 April 2019</h6>
                <h6>Creatick</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full p-6 md:p-[60px] lg:p-[90px] brand-default flex items-center justify-center rounded-xl">
          <Image
            src="/assets/portfolio-images/creatick/hero-image.svg"
            height={572}
            width={1100}
            alt="Creatick Website Redesign"
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/creatick/hero-image.svg"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Project Overview */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Project Overview</h2>
          <h3>About Creatick</h3>
          <p>
            Creatick is an all-in-one social media management platform designed
            to simplify Instagram content planning, scheduling, and analytics.
            It caters to both individual creators and businesses, providing a
            seamless solution to streamline social media strategies.
          </p>
        </div>
      </div>

      {/* My Role */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>My Role</h3>
          <p>
            As the lead UI/UX Designer and Frontend Developer, I was responsible
            for:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Conducting user research and competitive analysis" />
            <Label title="Designing the UX flow, sitemap, wireframes, and high-fidelity UI" />
            <Label title="Developing the front-end using Next.js and integrating it with Firebase" />
            <Label title="Managing project tasks through ClickUp and collaborating with stakeholders" />
          </div>
        </div>
      </div>

      {/* Understanding the Problem */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Understanding the Problem</h2>
          <h3>The Challenge</h3>
          <p>Creatick needed a website and mobile application that:</p>
          <div className="flex flex-col gap-4">
            <Label title="Effectively showcased their services and differentiated them in a crowded market" />
            <Label title="Provided an intuitive and seamless Instagram management experience" />
            <Label title="Balanced aesthetic appeal with functional efficiency" />
          </div>
        </div>
      </div>

      {/* User Pain Points & Research Findings */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>User Pain Points & Research Findings</h3>
          <p>Through extensive research, we identified:</p>
          <div className="flex flex-col gap-4">
            <Label title="Users struggled with time-consuming manual scheduling" />
            <Label title="They lacked insightful analytics to improve engagement" />
            <Label title="Managing multiple accounts was often complex and inefficient" />
          </div>
        </div>
        {/* User Personas */}
        <div className="w-full flex flex-col gap-8">
          <UserPersona1 />
          <UserPersona2 />
        </div>
      </div>

      {/* Research & Strategy */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Research & Strategy</h2>
          <h3>Sitemap & Information Architecture</h3>
          <p>
            To ensure a seamless user experience, I created a well-structured
            sitemap that simplified navigation and information hierarchy.
          </p>
          <h3>Moodboards & Wireframes</h3>
          <p>
            I designed moodboards to establish the visual direction and created
            low-fidelity wireframes to map out the user journey before
            finalizing high-fidelity UI.
          </p>
        </div>
        {/* Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Image 1 */}
          <div className="w-full flex items-center justify-center bg-blue-100 rounded-2xl p-6 md:p-8">
            <Image
              src={
                "/assets/portfolio-images/creatick/information-architecture.svg"
              }
              height={612}
              width={1200}
              alt="Information Architecture"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/creatick/information-architecture.svg"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image 2 */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/creatick/moodboard.png"}
              height={612}
              width={1200}
              alt="Moodboard"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/creatick/moodboard.png"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Design & Development Approach */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Design & Development Approach</h2>
          <h3>UI/UX Design Process</h3>
          <p>Using a user-first approach, I focused on:</p>
          <div className="flex flex-col gap-4">
            <Label title="Minimalistic UI for a clean and professional feel" />
            <Label title="Intuitive navigation with a dashboard-style layout" />
            <Label title="Seamless scheduling flow to enhance productivity" />
          </div>
        </div>
      </div>

      {/* Development Tech Stack */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Development Tech Stack</h3>
          <div className="flex flex-col gap-4">
            <Label title="Next.js for a fast, scalable front-end experience" />
            <Label title="Firebase for backend and real-time database management" />
            <Label title="GitHub for version control and collaboration" />
            <Label title="ClickUp for task management and progress tracking" />
          </div>
        </div>
      </div>

      {/* Implementation & Agile Process */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Implementation & Agile Process</h2>
          <h3>Creative Collaboration & Agile Solutions</h3>
          <p>To ensure efficient execution, I:</p>
          <div className="flex flex-col gap-4">
            <Label title="Worked in iterative design cycles, incorporating feedback at every stage" />
            <Label title="Collaborated closely with marketing and stakeholders for alignment" />
            <Label title="Used agile sprints to refine functionalities and enhance performance" />
          </div>
        </div>
        {/* Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Image 1 */}
          <div className="w-full flex items-center justify-center bg-white-200 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/creatick/roadmap.jpg"}
              height={612}
              width={1200}
              alt="Roadmap"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/creatick/roadmap.jpg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image 2 */}
          <div className="w-full flex items-center justify-center bg-blue-300 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/creatick/workspace.jpg"}
              height={612}
              width={1200}
              alt="Workspace"
              className="rounded-2xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/creatick/workspace.jpg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Final Solution & Impact */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Final Solution & Impact</h2>
          <p>The final product delivered:</p>
          <div className="flex flex-col gap-4">
            <Label title="A modern, responsive website showcasing Creatick's features" />
            <Label title="A fully-functional mobile app enabling efficient Instagram management" />
            <Label title="A seamless scheduling experience with advanced analytics for data-driven decisions" />
          </div>
        </div>
        {/* Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Image 1 */}
          <div className="w-full flex items-center justify-center brand-default rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/creatick/design-1.svg"}
              height={612}
              width={1200}
              alt="Homepage"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/creatick/design-1.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image 2 & 3 */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {/* Image 2 */}
            <div className="w-full flex items-center justify-center brand-light rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/creatick/design-2.svg"}
                height={612}
                width={1200}
                alt="Services"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/creatick/design-2.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            {/* Image 3 */}
            <div className="w-full flex items-center justify-center yellow-dark rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/creatick/design-3.svg"}
                height={612}
                width={1200}
                alt="Login Page"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/creatick/design-3.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
          {/* Image 4 */}
          <div className="w-full flex items-center justify-center brand-light rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/creatick/design-4.svg"}
              height={612}
              width={1200}
              alt="Services"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/creatick/design-4.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Client Feedback & Testimonials */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Client Feedback & Testimonials</h2>
          <p>Here&apos;s what Creatick had to say about the project:</p>
        </div>

        {/* Testimonial  */}
        <div className="w-full brand-light rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-48 overflow-hidden relative">
          <div className="lg:max-w-lg flex flex-col gap-2.5">
            <p className="subtitle italic text-white-100 dark:text-black-600">
              &quot;Working with Argzon was an incredible experience. From
              research to design to development, he truly understood our vision
              and transformed it into an intuitive, high-performing platform.
              The UI is sleek, the UX is seamless, and our users love the
              experience. We couldn&apos;t have asked for a better partner in
              bringing Creatick to life!&quot;
            </p>
            <h6 className="text-white-100 dark:text-black-600">
              - Renea Ora, Chief Technology Officer, Creatick
            </h6>
          </div>
          <Image
            src={"/assets/portfolio-images/creatick/icon.svg"}
            height={570}
            width={480}
            alt="Creatick Icon"
            className="absolute -bottom-6 right-0 hidden lg:block"
          />
        </div>
      </div>

      {/* Reflection & Learnings */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Reflection & Learnings</h2>
          <h3>Challenges Overcome</h3>
          <div className="flex flex-col gap-4">
            <Label title="Adapting to changing client requirements while maintaining project scope" />
            <Label title="Ensuring technical scalability while keeping the UI intuitive" />
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Key Takeaways</h3>
          <div className="flex flex-col gap-4">
            <Label
              title="User feedback is invaluable"
              description="Testing early saved development time"
            />
            <Label
              title="Agile processes enhance efficiency"
              description="Allowing flexibility in iterations"
            />
          </div>
        </div>

        {/* Takeaways  */}
        <Takeaways />
      </div>

      {/* Conclusion */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Conclusion</h2>
          <p>
            Creatick was a{" "}
            <span className="font-bold">challenging yet rewarding project</span>{" "}
            that pushed the boundaries of design and development. Through a
            research-driven approach, seamless UX, and agile execution, we built
            a platform that empowers users to manage their Instagram presence
            effortlessly.
          </p>
        </div>
      </div>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
