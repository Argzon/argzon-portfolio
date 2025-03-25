"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA/page";
import ReactPlayer from "react-player";
import Label from "@/components/Label/page";
import UserPersona1 from "./sections/user-personas/user-persona-1";
import UserPersona2 from "./sections/user-personas/user-persona-2";
import BeforeAndAfter from "./sections/beforeandafter";
import FinalOutcome from "./sections/finaloutcome";

export default function Coherent() {
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
      </div>

      {/* Hero */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8">
          <h1>Coherent Website Redesign</h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <p className="subtitle">
              Transforming Coherent&apos;s website into an intuitive, engaging
              platform that bridges the gap between developers and business
              teams. Through strategic UX/UI design, clear information
              architecture, and a user-centric approach, the new site
              effectively tells Coherent&apos;s story while enhancing usability
              and engagement.
            </p>
            <div className="flex flex-row gap-6 shrink-0 h-fit">
              <div className="flex flex-col justify-between">
                <p className="subtitle text-primary">Date</p>
                <p className="subtitle text-primary">Client</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6>07 July 2023</h6>
                <h6>Coherent</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Video */}
        <ReactPlayer
          url="/assets/portfolio-images/coherent/hero-video.mp4"
          width="100%"
          height="100%"
          controls={false}
          playing={true}
          muted={true}
          loop={true}
          style={{ borderRadius: "16px", overflow: "hidden" }}
          playsinline={true}
        />
      </div>

      {/* Introduction */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Introduction</h2>
          <p>
            Coherent is a global SaaS enterprise revolutionizing how business
            and IT teams collaborate on software development. Their unique
            approach empowers both developers and non-developers to work
            seamlessly by converting complex spreadsheets into user-friendly
            APIs. Coherent approached me with a vision to transform their
            existing website into a highly efficient and engaging marketing
            platform that tells their story effectively.
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Problem Statement</h2>
          <p>
            The primary challenge was designing and developing a website that
            catered to a diverse audience while showcasing Coherent&apos;s
            innovative approach. The website needed to strike a balance between
            technical depth and user-friendly content, ensuring an intuitive
            browsing experience. Additionally, it had to differentiate Coherent
            from competitors in a crowded market with a well-structured and
            engaging narrative.
          </p>
        </div>
      </div>

      {/* My Role & Responsibilities */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>My Role & Responsibilities</h2>
          <p>As the UI/UX Designer, I was responsible for:</p>
          <div className="flex flex-col gap-4">
            <Label title="Conducting user research and competitor analysis" />
            <Label title="Creating the sitemap, wireframes, and user flows" />
            <Label title="Developing moodboards and design concepts" />
            <Label title="Designing a visually appealing UI" />
            <Label title="Ensuring seamless UX for both technical and non-technical users" />
            <Label title="Collaborating with developers and stakeholders to implement the design" />
          </div>
        </div>
      </div>

      {/* Research & Discovery */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Research & Discovery</h2>
          <p>
            To create a user-centered design, I conducted extensive research,
            including:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="User Interviews & Personas:"
              description="Identified key pain points and expectations of different users (developers, business professionals, and executives)."
            />
            <Label
              title="Competitor Analysis:"
              description="Analyzed industry-leading websites to identify strengths and gaps in market positioning."
            />
            <Label
              title="Content Strategy Planning:"
              description="Organized information architecture to ensure clarity in storytelling."
            />
          </div>
        </div>
        {/* User Personas */}
        <div className="w-full flex flex-col gap-8">
          <UserPersona1 />
          <UserPersona2 />
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/coherent/coherent-old-website.jpg"}
              height={529}
              width={1200}
              alt="Coherent Old Website"
              className="rounded-lg md:rounded-2xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/coherent/coherent-old-website.jpg"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-purple-100 rounded-2xl p-6 md:p-8">
            <Image
              src={
                "/assets/portfolio-images/coherent/new-website-presentation.jpg"
              }
              height={529}
              width={1200}
              alt="Coherent New Website Presentation"
              className="rounded-lg md:rounded-2xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/coherent/new-website-presentation.jpg"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Strategy & Approach */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Strategy & Approach</h2>
          <p>The strategy revolved around three key pillars:</p>
          <div className="flex flex-col gap-4">
            <Label
              title="Clarity & Engagement:"
              description="Ensuring easy-to-digest content that highlights Coherent's unique value."
            />
            <Label
              title="Seamless Navigation:"
              description="A well-structured sitemap for effortless information flow."
            />
            <Label
              title="Conversion-Oriented Design:"
              description="UI elements optimized to drive user actions."
            />
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Design Process</h2>
          <h3>1. Sitemap & Information Architecture</h3>
          <p>
            I developed a streamlined sitemap that prioritized intuitive
            navigation and content hierarchy.
          </p>
        </div>
        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-black-100 dark:bg-black-300 rounded-2xl p-6 md:p-8">
          <Image
            src={
              "/assets/portfolio-images/coherent/information-architecture.jpg"
            }
            height={529}
            width={1200}
            alt="Information Architecture"
            className="rounded-lg md:rounded-2xl"
            loading="lazy"
            placeholder="blur"
            blurDataURL={
              "/assets/portfolio-images/coherent/information-architecture.jpg"
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* 2. Moodboards & Design Inspiration */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>2. Moodboards & Design Inspiration</h3>
          <p>
            Created moodboards to align the visual identity with Coherent&apos;s
            brand.
          </p>
        </div>
        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-400 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/coherent/moodboard.png"}
            height={529}
            width={1200}
            alt="Moodboard"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/coherent/moodboard.png"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* 3. Wireframes & UX Flow */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>3. Wireframes & UX Flow</h3>
          <p>
            Developed low-fidelity wireframes to establish layout and
            functionality.
          </p>
        </div>
        {/* Video  */}
        <div className="w-full flex items-center justify-center purple-dark rounded-2xl p-6 md:p-8">
          <ReactPlayer
            url="/assets/portfolio-images/coherent/wireframe.mp4"
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
            playsinline={true}
          />{" "}
        </div>
      </div>

      {/* 4. UI Design */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>4. UI Design</h3>
          <p>
            Designed high-fidelity UI screens with an emphasis on clean, modern
            aesthetics.
          </p>
        </div>
        <BeforeAndAfter />
      </div>

      {/* Implementation & Collaboration */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Implementation & Collaboration</h2>
          <p>
            I worked closely with developers using an agile workflow, ensuring
            iterative improvements based on feedback. Key collaboration points:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Weekly sprints for design validation and adjustments." />
            <Label title="Close alignment with content strategists to maintain clarity." />
            <Label title="Iterative testing to refine user experience." />
          </div>
        </div>
      </div>

      {/* Final Outcome & Impact */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Final Outcome & Impact</h2>
          <p>The redesigned website successfully:</p>
        </div>
        <FinalOutcome />
        {/* Videos */}
        <div className="flex flex-col gap-8">
          {/* Mobile UI Video  */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 dark:bg-dark-500 rounded-2xl p-6 md:p-8">
            <ReactPlayer
              url="/assets/portfolio-images/coherent/mobile-ui.mp4"
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
              playsinline={true}
            />
          </div>
          {/* Desktop UI VIdeo  */}
          <div className="w-full flex items-center justify-center bg-purple-300 rounded-2xl p-6 md:p-8">
            <ReactPlayer
              url="/assets/portfolio-images/coherent/desktop-ui.mp4"
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
              playsinline={true}
            />
          </div>
        </div>
      </div>

      {/* Key Takeaways & Lessons Learned */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Key Takeaways & Lessons Learned</h2>
          <div className="flex flex-col gap-4">
            <Label title="The importance of balancing technical content with user-friendly storytelling." />
            <Label title="How agile collaboration leads to more efficient and adaptable design solutions." />
            <Label title="The impact of well-structured information architecture on user engagement." />
          </div>
        </div>
      </div>

      {/* Next Steps: */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h4>Next Steps:</h4>
          <div className="flex flex-col gap-4">
            <Label title="Continuous refinement based on post-launch analytics and user feedback." />
            <Label title="A/B testing for ongoing UI/UX improvements." />
          </div>
        </div>
      </div>

      {/* Client Feedback & Testimonials */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Client Feedback & Testimonials</h2>
          <p>Here&apos;s what Coherent had to say about the project:</p>
        </div>

        {/* Testimonial  */}
        <div className="w-full bg-[#6700F6] rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-48 overflow-hidden relative">
          <div className="lg:max-w-lg flex flex-col gap-2.5">
            <p className="subtitle italic text-white-100 ">
              &quot;Working with Argzon was an exceptional experience. His
              ability to translate our vision into a user-friendly and visually
              compelling website exceeded our expectations. From the initial
              research phase to the final design delivery, he demonstrated
              creativity, attention to detail, and a deep understanding of our
              brand&apos;s needs. The new website not only reflects our
              company&apos;s mission but also provides an intuitive experience
              for both technical and non-technical users. We couldn&apos;t be
              happier with the outcome.&quot;
            </p>
            <h6 className="text-white-100">
              - Peter Roschke, Chief Technology Officer, Coherent
            </h6>
          </div>
          <Image
            src={"/assets/portfolio-images/coherent/icon.svg"}
            height={471}
            width={755}
            alt="Coherent Icon"
            className="absolute top-[83px] -right-96 hidden lg:block select-text"
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
