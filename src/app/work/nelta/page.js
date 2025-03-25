"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA/page";
import BeforeAndAfter from "./sections/beforeandafter";
import Label from "@/components/Label/page";
import Takeaways from "./sections/takeaways";

export default function Nelta() {
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
          <h1>Nelta Case Study</h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <p className="subtitle">
              Redesigned and developed a high-performing website for Nelta,
              enhancing user experience and brand positioning. Leveraged UX
              research, modern design, and Next.js for a scalable solution.
            </p>
            <div className="flex flex-row gap-6 shrink-0 h-fit">
              <div className="flex flex-col justify-between">
                <p className="subtitle text-primary">Date</p>
                <p className="subtitle text-primary">Client</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6>10 February 2024</h6>
                <h6>Nelta</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full p-6 md:p-[60px] lg:p-[90px] brand-light flex items-center justify-center rounded-xl">
          <Image
            src="/assets/portfolio-images/nelta/hero-image.svg"
            height={572}
            width={1100}
            alt="TalentAlly Website Redesign"
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/nelta/hero-image.svg"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Introduction</h2>
          <p>
            Nelta is a TÜV-certified IT consulting company serving industries
            such as automotive, banking and finance, logistics, e-commerce,
            healthcare, and government. They specialize in software testing, CRM
            consulting, SAP consulting, and custom software development. Their
            goal is to provide innovative IT solutions that help businesses
            succeed in the digital age.
          </p>
        </div>
      </div>

      {/* The Challenge */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>The Challenge</h2>
          <p>
            Nelta needed a website that not only showcased their services but
            also effectively engaged a diverse audience of businesses. The
            challenge was to highlight their unique offerings and differentiate
            them in a competitive market while ensuring an intuitive and
            engaging user experience.
          </p>
          <p>
            They approached me with a vision to transform their outdated website
            into a high-performing marketing platform that would:
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Clearly communicate their services and expertise." />
            <Label title="Provide a seamless user experience for businesses seeking IT solutions." />
            <Label title="Position them as industry leaders through strong storytelling and branding." />
          </div>
          <p>
            Additionally, they required full-stack development of the website,
            ensuring optimal performance and maintainability.
          </p>
        </div>
        {/* Before & After */}
        <div className="w-full flex flex-col gap-8">
          <BeforeAndAfter />
          {/* Image */}
          <div className="w-full flex items-center justify-center bg-blue-600 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/nelta/user-flow.png"}
              height={612}
              width={1200}
              alt="TalentAlly User Flow"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/nelta/user-flow.png"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>The Solution</h2>
          <p>
            A comprehensive approach was taken to create a visually engaging and
            user-friendly website. I conducted thorough research to understand
            the target audience, ensuring a user-centric design.
          </p>
          <h3>Research & Strategy</h3>
          <div className="flex flex-col gap-4">
            <Label title="Conducted in-depth research on the target audience to identify their pain points and needs." />
            <Label title="Created a well-structured sitemap to enhance information flow and navigation." />
            <Label title="Developed moodboards to establish the visual direction of the website." />
            <Label title="Designed wireframes to structure the user journey and optimize engagement." />
          </div>
        </div>

        {/* Image  */}
        <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
          <Image
            src={"/assets/portfolio-images/nelta/information-architecture.svg"}
            height={529}
            width={1200}
            alt="Nelta Information Architecture"
            loading="lazy"
            placeholder="blur"
            blurDataURL={
              "/assets/portfolio-images/nelta/information-architecture.svg"
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>UI/UX Design</h3>
          <div className="flex flex-col gap-4">
            <Label title="Crafted a modern, visually appealing interface that aligned with Nelta's brand identity." />
            <Label title="Focused on intuitive navigation and accessibility to enhance the user experience." />
            <Label title="Created high-fidelity UI designs that effectively conveyed Nelta's expertise and credibility." />
          </div>
        </div>
        {/* Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Image 1 */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/nelta/design-1.svg"}
              height={612}
              width={1200}
              alt="Homepage"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/nelta/design-1.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {/* Image 2 & 3 */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {/* Image 2 */}
            <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/nelta/design-2.svg"}
                height={612}
                width={1200}
                alt="Vacancy Page"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/nelta/design-2.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            {/* Image 3 */}
            <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/nelta/design-3.svg"}
                height={612}
                width={1200}
                alt="Contact Us"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/nelta/design-3.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
          {/* Image 4 */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/nelta/design-4.svg"}
              height={612}
              width={1200}
              alt="Services"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/portfolio-images/nelta/design-4.svg"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Development */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h3>Development</h3>
          <div className="flex flex-col gap-4">
            <Label title="Built the frontend using Next.js for performance and scalability." />
            <Label title="Integrated Strapi as a headless CMS for easy content management." />
            <Label title="Used GitHub for version control and Jira for issue tracking and agile project management." />
          </div>
        </div>
      </div>

      {/* Agile & Collaborative Approach */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Agile & Collaborative Approach</h2>
          <p>
            As the project lead, I adopted an agile methodology, working
            iteratively with the team to adapt quickly to changing requirements.
            Regular sprints and feedback loops ensured flexibility and
            efficiency, ultimately delivering a dynamic and engaging digital
            experience.
          </p>
          <div className="flex flex-col gap-4">
            <Label title="Led an agile workflow with iterative sprints, allowing for flexibility and continuous improvements." />
            <Label title="Engaged in active collaboration with Nelta's stakeholders and marketing team to align with business goals." />
            <Label title="Ensured seamless communication and feedback loops throughout the project." />
          </div>
        </div>
      </div>

      {/* The Results */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>The Results</h2>
          <div className="flex flex-col gap-4">
            <Label title="Successfully developed a high-performing, scalable website that effectively communicates Nelta's services." />
            <Label title="Enhanced user engagement through an intuitive and structured content flow." />
            <Label title="Improved brand positioning, helping Nelta stand out in a competitive IT consulting market." />
            <Label title="Provided a seamless content management system for effortless updates and scalability." />
          </div>
        </div>
        {/* Before & After */}
        <BeforeAndAfter />
      </div>

      {/* Client Feedback & Testimonials */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Client Feedback & Testimonials</h2>
          <p>
            To validate the success of the project, client testimonials and
            feedback were collected.
          </p>
        </div>

        {/* Testimonial  */}
        <div className="w-full brand-light rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-48 overflow-hidden relative">
          <div className="lg:max-w-lg flex flex-col gap-2.5">
            <p className="subtitle italic text-white-100 dark:text-black-600">
              &quot;The new website perfectly aligns with our brand and
              communicates our services more effectively. The UX improvements
              have enhanced our customer engagement significantly!&quot;
            </p>
            <h6 className="text-white-100 dark:text-black-600">
              - Youssuf Zarhan, Chief Executive Officer, Nelta
            </h6>
          </div>
          <Image
            src={"/assets/portfolio-images/nelta/icon.svg"}
            height={300}
            width={490}
            alt="Nelta Icon"
            className="absolute -bottom-9 -right-[188px] hidden lg:block"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/assets/portfolio-images/nelta/icon.svg"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
          <h2>Conclusion</h2>
          <p>
            By combining UX research, a user-centric design approach, and
            cutting-edge development technologies, I successfully transformed
            Nelta&apos;s website into a powerful business asset. This project
            showcases my ability to lead a full-cycle design and development
            process, from initial research to final implementation.
          </p>
        </div>

        {/* Takeaways  */}
        <Takeaways />
      </div>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
