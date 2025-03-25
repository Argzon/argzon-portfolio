"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA/page";
import BeforeAndAfter from "./sections/beforeandafter";
import Label from "@/components/Label/page";
import ChallengeImages from "./sections/challenge-image";
import UserPersona1 from "./sections/user-personas/user-persona-1";
import UserPersona2 from "./sections/user-personas/user-persona-2";
import ReactPlayer from "react-player";

export default function Krado() {
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
          <h1>Krado Website Redesign</h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <p className="subtitle">
              A complete redesign of Krado&apos;s website to enhance user
              experience, modernize visuals, and improve engagement. This
              project focused on intuitive navigation, interactive animations,
              and a seamless mobile experience.
            </p>
            <div className="flex flex-row gap-6 shrink-0 h-fit">
              <div className="flex flex-col justify-between">
                <p className="subtitle text-primary">Date</p>
                <p className="subtitle text-primary">Client</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6>22 November 2022</h6>
                <h6>Krado</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full p-6 md:p-[60px] lg:p-[90px] green-light flex items-center justify-center rounded-xl">
          <Image
            src="/assets/portfolio-images/krado/hero-image.svg"
            height={572}
            width={1100}
            alt="Krado"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Introduction</h2>
          <p className="italic">
            Krado is an integrative plant care system designed to help plants
            thrive by utilizing real-time data and AI-powered insights. Their
            ecosystem includes <span className="font-bold">Leaflet</span>, a
            mobile app that provides detailed plant care instructions,{" "}
            <span className="font-bold">a growing plant database</span>, and a{" "}
            <span className="font-bold">
              subscription-based nourishment product line
            </span>{" "}
            tailored to individual users and their plants&apos; needs.
          </p>
          <p>
            Despite Krado&apos;s innovative approach, their website was
            outdated, lacked user engagement, and did not reflect the
            company&apos;s technology-driven vision. My role was to{" "}
            <span className="font-bold">redesign the website</span> to improve
            user experience, integrate engaging animations, optimize navigation,
            and enhance mobile responsiveness while maintaining the brand&apos;s
            essence. I collaborated with a Webflow developer to bring my designs
            to life.
          </p>
        </div>
        {/* Before & After */}
        <div className="w-full">
          <BeforeAndAfter />
        </div>
      </div>

      {/* The Challenge */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>The Challenge</h2>
          <p>
            Krado&apos;s previous website lacked visual appeal,{" "}
            <span className="font-bold">
              modern design elements, and user-friendly features
            </span>
            . The outdated design failed to engage visitors and provide a
            positive user experience. Some key challenges included:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Outdated Visuals & UI:"
              description="The old design lacked modern aesthetics and failed to reflect Krado's innovation."
            />
            <Label
              title="Poor User Experience:"
              description="A cluttered layout and confusing navigation made it difficult for visitors to find relevant information."
            />
            <Label
              title="Limited Conversion Focus:"
              description="The website was not responsive, negatively impacting mobile users."
            />
            <Label
              title="No Interactive Features:"
              description="The website did not leverage animations or interactive elements to engage users and showcase the flagship Leaflet app."
            />
          </div>
        </div>
        {/* Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          <ChallengeImages />
          <BeforeAndAfter />
        </div>
      </div>

      {/* My Role & Contributions */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>My Role & Contributions</h2>
          <p>
            To address these challenges, I led a{" "}
            <span className="font-bold">comprehensive redesign</span> of
            Krado&apos;s website with a focus on usability, aesthetics, and
            seamless user experience. My role included:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Research & Discovery:"
              description="Conducting UX research to identify user pain points and industry trends."
            />
            <Label
              title="Sitemap & Information Architecture:"
              description="Redesigning the structure for intuitive navigation."
            />
            <Label
              title="Wireframing & Prototyping:"
              description="Creating low and high-fidelity wireframes to establish a new design direction."
            />
            <Label
              title="UI/UX Design:"
              description="Developing a modern, visually appealing interface with interactive elements."
            />
            <Label
              title="Collaboration with Webflow Developer:"
              description="Partnering with a developer to ensure seamless implementation of the designs."
            />
            <Label
              title="SEO Optimization:"
              description="Enhancing content structure for better search engine visibility."
            />
            <Label
              title="E-commerce Integration:"
              description="Designing a checkout page for direct product sales."
            />
          </div>
        </div>
        {/* Image */}
        <div className="w-full flex items-center justify-center bg-green-400 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/krado/information-architecture.svg"}
            height={612}
            width={1200}
            alt="Information Architecture"
            loading="lazy"
          />
        </div>
      </div>

      {/* Research & Discovery */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Research & Discovery</h2>
          <p>
            To create a design that aligns with Krado&apos;s vision and user
            needs, I conducted:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Competitive Analysis:"
              description="Studied leading plant-care websites to identify industry best practices."
            />
            <Label
              title="User Behavior Analysis:"
              description="Identified common navigation issues and expectations for tech-driven plant care solutions."
            />
            <Label
              title="Moodboards & Visual Direction:"
              description="Explored typography, color schemes, and UI elements that would enhance brand perception."
            />
            <Label
              title="Sitemap Optimization:"
              description="Restructured pages to improve information accessibility."
            />
          </div>
        </div>
        {/* User Personas */}
        <div className="w-full flex flex-col gap-8">
          <UserPersona1 />
          <UserPersona2 />
        </div>
      </div>

      {/* Design Process & Solutions */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Design Process & Solutions</h2>
          <h3>1. Visual & UX Overhaul</h3>
          <p>
            A modern and <span className="font-bold">minimalistic design</span>{" "}
            was implemented to reflect Krado&apos;s innovation. Key elements
            included:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Clean and engaging UI elements" />
            <Label title="Consistent brand colors and typography" />
            <Label title="High-quality imagery and subtle animations" />
          </div>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center green-light rounded-2xl p-6 md:p-8">
          <ReactPlayer
            url="/assets/portfolio-images/krado/desktop-ui.mp4"
            width="100%"
            height="100%"
            controls={false}
            playing={true}
            muted={true}
            loop={true}
            style={{ borderRadius: "16px", overflow: "hidden" }}
            playsinline={true}
          />{" "}
        </div>
      </div>

      {/* 2. Intuitive Navigation & User Flow */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>2. Intuitive Navigation & User Flow</h3>
          <p>
            I restructured the website&apos;s{" "}
            <span className="font-bold">information architecture</span> to
            provide seamless browsing and clear CTAs:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Improved menu navigation for easy access to resources" />
            <Label title="Optimized page hierarchy to highlight key offerings" />
            <Label title="Strategic placement of CTAs for lead conversion" />
          </div>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/krado/user-flow.png"}
            height={529}
            width={1200}
            alt="User Flow"
            loading="lazy"
          />
        </div>
      </div>

      {/* 3. Interactive Animations & Engaging UI */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>3. Interactive Animations & Engaging UI</h3>
          <p>
            To match Krado&apos;s tech-driven nature, I designed animations that
            were implemented in Webflow:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Scroll-based interactions to engage users dynamically" />
            <Label title="Micro-interactions for buttons, icons, and hover effects" />
            <Label title="Animated showcase of the Leaflet app to highlight its features visually" />
          </div>
        </div>

        {/* Video  */}
        <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
          <ReactPlayer
            url="/assets/portfolio-images/krado/homepage-desktop.mp4"
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

      {/* 4. Mobile Responsiveness & Performance Enhancements */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>4. Mobile Responsiveness & Performance Enhancements</h3>
          <p>
            With a growing number of mobile users, ensuring responsiveness was a
            top priority:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Fully responsive design for a seamless mobile experience" />
            <Label title="Optimized loading times by reducing heavy assets" />
            <Label title="Touch-friendly interactions for an improved mobile UX" />
          </div>
        </div>

        {/* Video  */}
        <div className="w-full flex items-center justify-center green-light rounded-2xl p-6 md:p-8">
          <ReactPlayer
            url="/assets/portfolio-images/krado/mobile-ui.mp4"
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

      {/* 5. E-commerce & Checkout Integration */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>5. E-commerce & Checkout Integration</h3>
          <p>
            A checkout system was designed to allow Krado to sell its plant-care
            products directly from the website:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Minimalist and easy-to-use checkout page" />
            <Label title="Secure payment integration" />
            <Label title="Product page optimization for better conversions" />
          </div>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/krado/checkout-process.png"}
            height={529}
            width={1200}
            alt="Checkout Process"
            loading="lazy"
          />
        </div>
      </div>

      {/* Development & Implementation */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Development & Implementation</h2>
          <p>
            The website was developed in{" "}
            <span className="font-bold">Webflow</span> by a dedicated Webflow
            developer. My role was to ensure that the designs were accurately
            implemented while maintaining:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="A robust CMS for Krado's growing plant database" />
            <Label title="SEO-friendly content structure for improved search rankings" />
            <Label title="A scalable platform for future updates and optimizations" />
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Results & Impact</h2>
          <p>
            The redesign transformed Krado&apos;s website into a visually
            appealing, user-friendly platform, resulting in:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Higher user engagement due to improved UI/UX." />
            <Label title="Better mobile experience, reducing bounce rates on smaller screens." />
            <Label title="Seamless shopping experience, increasing product sales via the checkout page." />
            <Label title="Enhanced discoverability, thanks to SEO-optimized content." />
          </div>
        </div>
      </div>

      {/* Client Feedback & Testimonials */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Client Feedback & Testimonials</h2>
          <p>Here&apos;s what Krado had to say about the project:</p>
        </div>

        {/* Testimonial  */}
        <div className="w-full green-light rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-48 overflow-hidden relative">
          <div className="lg:max-w-lg flex flex-col gap-2.5">
            <p className="subtitle italic text-white-100 dark:text-black-600 dark:black-600">
              &quot;The website redesign exceeded our expectations. The improved
              user experience and seamless navigation have significantly
              increased engagement. The animations beautifully showcase our
              product, and we couldn&apos;t be happier with the results!&quot;
            </p>
            <h6 className="text-white-100 dark:text-black-600 dark:black-600">
              - Max Ono, CTO / Co-Founder, Krado
            </h6>
          </div>
          <Image
            src={"/assets/portfolio-images/krado/krado-sensor.png"}
            height={471}
            width={755}
            alt="Krado Sensor"
            className="absolute top-[83px] -right-32 hidden lg:block select-text"
            loading="lazy"
          />
        </div>
      </div>

      {/* Final Thoughts & Learnings */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Final Thoughts & Learnings</h2>
          <p>
            This project reinforced the importance of{" "}
            <span className="font-bold">
              balancing aesthetics with functionality
            </span>
            . Through research-driven design, interactive UI elements, and
            seamless UX, I was able to transform Krado&apos;s website into a
            dynamic, user-centric platform that aligns with its innovative
            mission.
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
