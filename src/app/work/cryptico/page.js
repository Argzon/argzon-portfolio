"use client";
import Footer from "@/components/Footer/page";
import Label from "@/components/Label/page";
import Navigation from "@/components/Navigation/page";
import Image from "next/image";
import Link from "next/link";
import UserPersona1 from "./sections/user-personas/user-persona-1";
import UserPersona2 from "./sections/user-personas/user-persona-2";
import ComparisonTable from "./sections/comparison-table";
import { useEffect, useState } from "react";
import Takeaways from "./sections/takeaways";
import CTA from "@/components/CTA/page";

export default function Cryptico() {
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
            href="/work/krado"
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
          <h1>
            Cryptico: Transforming Crypto Trading with an Intuitive Web & Mobile
            Experience
          </h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <p className="subtitle">
              A sleek and secure crypto trading platform designed for seamless
              web and mobile experiences. This case study showcases my role in
              UX research, UI design, and frontend development to enhance
              usability and engagement.
            </p>
            <div className="flex flex-row gap-6 shrink-0 h-fit">
              <div className="flex flex-col justify-between">
                <p className="subtitle text-primary">Date</p>
                <p className="subtitle text-primary">Client</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6>06 March 2024</h6>
                <h6>Cryptico</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full p-6 md:p-[60px] lg:p-[90px] yellow-default flex items-center justify-center rounded-xl">
          <Image
            src="/assets/portfolio-images/cryptico/hero-image.svg"
            height={572}
            width={1100}
            alt="Cryptico"
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="/assets/portfolio-images/cryptico/hero-image.svg"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Introduction</h2>
          <p>
            <span className="font-bold">Cryptico</span> is a cutting-edge
            cryptocurrency trading platform designed to offer seamless
            transactions, high security, and an intuitive user experience. The
            goal of the project was to create a website and mobile application
            that not only showcased Cryptico&apos;s services but also engaged a
            diverse audience of crypto traders, from beginners to seasoned
            professionals.
          </p>
          <p>
            As the{" "}
            <span className="font-bold">
              UI/UX Designer & Frontend Developer
            </span>
            , I was responsible for the{" "}
            <span className="font-bold">
              research, UX strategy, wireframing, UI design, and frontend
              development
            </span>
            . My task was to craft a high-performance trading platform that
            provided a smooth and secure trading experience while standing out
            in a competitive market.
          </p>
        </div>
        {/* Image */}
        <div className="w-full p-6 md:px-20 md:py-8 lg:px-[120px] lg:py-8 bg-black-300 flex items-center justify-center rounded-xl">
          <Image
            src="/assets/portfolio-images/cryptico/introduction.png"
            height={572}
            width={1100}
            alt="Cryptico"
            loading="eager"
            placeholder="blur"
            blurDataURL="/assets/portfolio-images/cryptico/introduction.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* The Challenge */}
      <div className="max-w-[844px] w-full mx-auto flex flex-col gap-8 px-4 md:px-10 lg:px-0">
        <h2>The Challenge</h2>
        <p>Cryptico needed a platform that could:</p>
        <div className="flex flex-col gap-4">
          <Label title="Effectively communicate its unique value proposition in the crowded crypto market." />
          <Label title="Offer a secure, scalable, and efficient trading experience." />
          <Label title="Be both beginner-friendly and feature-rich for advanced traders." />
          <Label title="Ensure seamless integration between web and mobile platforms." />
          <Label title="Improve user retention and engagement through a streamlined UX." />
        </div>
        <p>
          The primary challenge was balancing security, usability, and
          performance while maintaining a sleek, modern interface that inspired
          trust and engagement.
        </p>
      </div>

      {/* Research & Strategy */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Research & Strategy</h2>
          <p>To create a user-centered solution, I conducted:</p>
          <h3>User Research & Personas</h3>
          <div className="flex flex-col gap-4">
            <Label
              title="Target audience:"
              description="Crypto enthusiasts, retail investors, and professional traders."
            />
            <Label
              title="Pain points:"
              description="Complex UI in existing platforms, lack of transparency, and security concerns."
            />
            <Label
              title="User goals:"
              description="Easy access to real-time data, quick transactions, and secure asset management."
            />
          </div>
        </div>
        {/* User Personas */}
        <div className="w-full flex flex-col gap-8">
          <UserPersona1 />
          <UserPersona2 />
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Competitive Analysis</h3>
          <div className="flex flex-col gap-4">
            <Label title="Studied major platforms like Binance, Coinbase, and Kraken." />
            <Label title="Identified UX gaps and opportunities to differentiate Cryptico." />
          </div>
        </div>
        {/* Comparison Table */}
        <div className="w-full flex items-center justify-center bg-white-600 dark:bg-black-500 rounded-2xl p-4 md:p-10 lg:p-8">
          <ComparisonTable />
        </div>
      </div>

      {/* Information Architecture & User Flow */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Information Architecture & User Flow</h3>
          <div className="flex flex-col gap-4">
            <Label title="Developed a sitemap to ensure intuitive navigation." />
            <Label title="Created user journey maps to optimize the trading process." />
          </div>
        </div>
        {/* Image */}
        <div className="w-full bg-white-200 dark:bg-black-500 rounded-2xl flex items-center justify-center p-2.5 md:p-8 ">
          <Image
            src={
              "/assets/portfolio-images/cryptico/information-architecture.svg"
            }
            height={467}
            width={1200}
            alt="Information Architecture"
            loading="lazy"
            placeholder="blur"
            blurDataURL={
              "/assets/portfolio-images/cryptico/information-architecture.svg"
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Design Process */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Design Process</h2>
          <h3>Wireframing & Prototyping</h3>
          <p>
            I designed low-fidelity wireframes to establish structure and
            navigation, then developed high-fidelity prototypes for user
            testing.
          </p>
        </div>
      </div>

      {/* UI Design & Branding */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>UI Design & Branding</h3>
          <div className="flex flex-col gap-4">
            <Label title="Developed a dark-mode-inspired UI for a sleek and modern aesthetic." />
            <Label title="Created a visual hierarchy with a focus on clarity and efficiency." />
            <Label title="Designed interactive elements for enhanced usability." />
          </div>
        </div>
        {/* Image */}
        <div className="w-full flex items-center justify-center bg-yellow-200 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/cryptico/moodboard.png"}
            height={612}
            width={1200}
            alt="Moodboard"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/cryptico/moodboard.png"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Design Deliverables */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Design Deliverables</h3>
          <div className="flex flex-col gap-4">
            <Label title="Moodboards for branding consistency." />
            <Label title="High-fidelity UI designs for web and mobile." />
            <Label title="Interactive prototypes for usability testing." />
          </div>
        </div>
        {/* Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Image 1 */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/cryptico/design-1.svg"}
              height={612}
              width={1200}
              alt="Homepage"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/cryptico/design-1.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image 2 & 3 */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {/* Image 2 */}
            <div className="w-full flex items-center justify-center bg-white-300 dark:bg-black-400 rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/cryptico/design-2.svg"}
                height={612}
                width={1200}
                alt="Withdraw page"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/cryptico/design-2.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            {/* Image 3 */}
            <div className="w-full flex items-center justify-center bg-white-400 dark:bg-black-300 rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/cryptico/design-3.svg"}
                height={612}
                width={1200}
                alt="Setup MFA"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/cryptico/design-3.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
          {/* Image 4 */}
          <div className="w-full flex items-center justify-center yellow-light rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/cryptico/design-4.svg"}
              height={612}
              width={1200}
              alt="Create an account"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/cryptico/design-4.svg"}
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
            I leveraged modern technologies to ensure a high-performance
            platform:
          </p>
          <div className="flex flex-col gap-4">
            <Label
              title="Frontend:"
              description="Next.js (for speed & SEO optimization)"
            />
            <Label
              title="Backend:"
              description="Supabase (for authentication & database management)"
            />
            <Label title="Version Control:" description="GitHub" />
            <Label
              title="Project Management:"
              description="Linear (for issue tracking)"
            />
          </div>
        </div>
        {/* Image */}
        <div className="w-full flex items-center justify-center bg-yellow-100 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/cryptico/development-code.png"}
            height={612}
            width={1200}
            alt="Development Code"
            loading="lazy"
            placeholder="blur"
            blurDataURL={
              "/assets/portfolio-images/cryptico/development-code.png"
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Key Features Implemented */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Key Features Implemented</h3>
          <div className="flex flex-col gap-4">
            <Label title="Real-time market data & trading dashboard" />
            <Label title="Secure authentication (MFA & encryption)" />
            <Label title="Customizable portfolio tracking & alerts" />
            <Label title="Mobile-first approach for seamless cross-platform experience" />
          </div>
        </div>
      </div>

      {/* Creative Collaboration & Agile Methodology */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Creative Collaboration & Agile Methodology</h2>
          <p>
            I adopted an agile development process, working in iterative
            sprints:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Regular feedback loops with stakeholders." />
            <Label title="Usability testing at different stages." />
            <Label title="Rapid prototyping to refine user experience." />
          </div>
          <p>
            This ensured that we stayed adaptable, addressed challenges
            efficiently, and delivered a robust final product.
          </p>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/cryptico/roadmap.png"}
            height={529}
            width={1200}
            alt="Roadmap"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/cryptico/roadmap.png"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Final Outcome & Impact */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Final Outcome & Impact</h2>
          <p>The redesigned Cryptico platform successfully:</p>
          <div className="flex flex-col gap-4">
            <Label title="Increased user engagement with a seamless trading experience." />
            <Label title="Improved conversion rates with an intuitive onboarding process." />
            <Label title="Enhanced security measures, building trust with traders." />
            <Label title="Strengthened brand identity with a modern UI and mobile-first approach." />
          </div>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center yellow-dark rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/cryptico/homepage-laptop.png"}
            height={768}
            width={1200}
            alt="Homepage"
            loading="lazy"
            placeholder="blur"
            blurDataURL={
              "/assets/portfolio-images/cryptico/homepage-laptop.png"
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Client Feedback & Testimonials */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Client Feedback & Testimonials</h2>
          <p>Here&apos;s what Cryptico had to say about the project:</p>
        </div>

        {/* Testimonial  */}
        <div
          className="w-full bg-white-200 rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-48 overflow-hidden relative"
          style={{
            backgroundImage:
              "url('/assets/portfolio-images/cryptico/testimonial-dots.svg')",
          }}
        >
          <div className="lg:max-w-lg flex flex-col gap-2.5">
            <p className="subtitle italic text-black-600">
              &quot;The transformation of our platform exceeded our
              expectations. The user experience is now seamless, and the design
              truly sets us apart in the industry. Working with Argzon was a
              fantastic experience, and we highly recommend their
              expertise.&quot;
            </p>
            <h6 className="text-black-600">
              - Jaxson Stanton, Chief Operating Officer, Cryptico
            </h6>
          </div>
          <Image
            src={"/assets/portfolio-images/cryptico/testimonial-logo.svg"}
            height={271}
            width={271}
            alt="Cryptico Icon"
            className="absolute top-[83px] -right-7 hidden lg:block"
          />
        </div>
      </div>

      {/* Key Takeaways & Learnings */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Key Takeaways & Learnings</h2>
          <div className="flex flex-col gap-4">
            <Label title="Balancing aesthetics and functionality is crucial in fintech UX design." />
            <Label title="Security & transparency should be at the core of any crypto platform." />
            <Label title="Iterative design & development lead to a more refined user experience." />
            <Label title="Cross-platform consistency enhances usability and user satisfaction." />
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
            Cryptico was a challenging yet rewarding project that pushed my
            expertise in{" "}
            <span className="font-bold">
              UI/UX design, research, and frontend development
            </span>
            . By leveraging{" "}
            <span className="font-bold">
              design thinking, agile methodologies, and modern tech stacks
            </span>
            , I was able to create a{" "}
            <span className="font-bold">
              secure, intuitive, and high-performance crypto trading platform
            </span>
            . This project showcases my ability to{" "}
            <span className="font-bold">
              transform complex financial platforms into user-friendly
              experiences
            </span>
            , making me a strong candidate for{" "}
            <span className="font-bold">senior UI/UX roles</span>.
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
