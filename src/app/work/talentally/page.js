"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import CTA from "@/components/CTA/page";
import BeforeAndAfter from "./sections/beforeandafter";
import Label from "@/components/Label/page";
import FloatingNavigation from "@/components/FloatingNavigation/page";

export default function Talentally() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  const sections = useMemo(
    () => [
      { id: "introduction", label: "Introduction" },
      { id: "challenge", label: "The Challenge" },
      { id: "collaboration", label: "My Role & Collaboration" },
      { id: "solution", label: "The Solution" },
      { id: "outcome", label: "Final Outcome" },
    ],
    []
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get hero and CTA elements
      const heroSection = document.querySelector(".hero");
      const ctaSection = document.querySelector(".cta");

      const scrollPosition = window.scrollY;
      const heroBottom = heroSection?.offsetTop + heroSection?.offsetHeight;
      const ctaTop = ctaSection?.offsetTop - 800; // Update comment: Show nav until 800px before CTA

      // Show/hide floating nav based on scroll position
      if (scrollPosition > heroBottom && scrollPosition < ctaTop) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }

      const scrollPositionWithOffset = scrollPosition + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPositionWithOffset >= offsetTop - 100 &&
            scrollPositionWithOffset < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
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
              href="/work/coherent"
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
        <div className="hero max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
          <div className="flex flex-col gap-8">
            <h1>TalentAlly Website Redesign</h1>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              <p className="subtitle">
                A complete UI/UX redesign of TalentAlly&apos;s (formerly: IPDN)
                website, transforming an outdated platform into a modern,
                user-friendly experience. This case study showcases my design
                process, collaboration, and final impactful results.
              </p>
              <div className="flex flex-row gap-6 shrink-0 h-fit">
                <div className="flex flex-col justify-between">
                  <p className="subtitle text-primary">Date</p>
                  <p className="subtitle text-primary">Client</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6>12 February 2024</h6>
                  <h6>TalentAlly</h6>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-full p-6 md:p-[60px] lg:p-[90px] yellow-default flex items-center justify-center rounded-xl">
            <Image
              src="/assets/portfolio-images/talentally/hero-image.svg"
              height={572}
              width={1100}
              alt="TalentAlly Website Redesign"
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/assets/portfolio-images/talentally/hero-image.svg"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* Introduction */}
        <div
          id="introduction"
          className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0"
        >
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>Introduction</h2>
            <p>
              TalentAlly is the operator of the Professional Diversity Network
              (PDN) and a holding company for the International Association of
              Women (IAW) and RemoteMore USA. Founded in 2008 and publicly
              traded since 2013 (NASDAQ: IPDN), TalentAlly provides online
              professional networking communities with career resources tailored
              to diverse cultural groups.
            </p>
            <p>
              The goal of this project was to redesign the TalentAlly website,
              which was previously the Professional Diversity Network (PDN). The
              existing website was outdated, difficult to navigate, and lacked
              modern design elements such as animations and an intuitive user
              experience.
            </p>
          </div>
          {/* Before & After */}
          <div className="w-full flex flex-col gap-8">
            <BeforeAndAfter />
            {/* Image */}
            <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/talentally/moodboard.jpg"}
                height={612}
                width={1200}
                alt="TalentAlly Moodboard"
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  "/assets/portfolio-images/talentally/moodboard.jpg"
                }
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
        {/* The Challenge */}
        <div
          id="challenge"
          className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0"
        >
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>The Challenge</h2>
            <p>
              The old website was visually outdated, lacked modern UX
              principles, and was difficult to navigate. The primary challenges
              included:
            </p>
            <div className="flex flex-col gap-4">
              <Label title="Creating a modern, engaging, and user-friendly design." />
              <Label title="Improving site navigation and accessibility." />
              <Label title="Balancing technical details with a user-friendly experience." />
            </div>
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/talentally/old-website.jpg"}
              height={529}
              width={1200}
              alt="TalentAlly Old Website"
              className="rounded-2xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/talentally/old-website.jpg"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* My Role & Collaboration */}
        <div
          id="collaboration"
          className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0"
        >
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>My Role & Collaboration</h2>
            <p>As the lead UI/UX designer, I was responsible for:</p>
            <div className="flex flex-col gap-4">
              <Label title="Conducting research." />
              <Label title="Creating sitemaps, wireframes, and prototypes." />
              <Label title="Designing the full UI/UX experience." />
              <Label title="Collaborating with a team consisting of a developers lead, a backend developer, and a marketing manager." />
              <Label title="Attending and leading design-related discussions in weekly meetings (Monday planning, Wednesday progress check-ins, and Friday recaps)." />
            </div>
          </div>
          {/* Image  */}
          <div className="w-full flex items-center justify-center yellow-dark rounded-2xl p-6 md:p-8">
            <Image
              src={"/assets/portfolio-images/talentally/collaboration.png"}
              height={529}
              width={1200}
              alt="TalentAlly Collaboration"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                "/assets/portfolio-images/talentally/collaboration.png"
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* The Solution */}
        <div
          id="solution"
          className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0"
        >
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>The Solution</h2>
            <p>The redesign involved a comprehensive approach:</p>
            <div className="flex flex-col gap-4">
              <Label title="Conducted research to align the design with user needs." />
              <Label title="Designed a new sitemap for better navigation." />
              <Label title="Developed wireframes and prototypes for user testing." />
              <Label title="Created a modern UI with engaging visuals and interactive elements." />
              <Label title="Ensured a seamless design handoff to developers for smooth implementation." />
            </div>
          </div>
          {/* Images */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Image 1 */}
            <div className="w-full flex items-center justify-center brand-default rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/talentally/design-1.svg"}
                height={612}
                width={1200}
                alt="Homepage"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/talentally/design-1.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            {/* Image 2 & 3 */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              {/* Image 2 */}
              <div className="w-full flex items-center justify-center brand-light rounded-2xl p-6 md:p-8">
                <Image
                  src={"/assets/portfolio-images/talentally/design-2.svg"}
                  height={612}
                  width={1200}
                  alt="Employer Features"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={
                    "/assets/portfolio-images/talentally/design-2.svg"
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              {/* Image 3 */}
              <div className="w-full flex items-center justify-center yellow-dark rounded-2xl p-6 md:p-8">
                <Image
                  src={"/assets/portfolio-images/talentally/design-3.svg"}
                  height={612}
                  width={1200}
                  alt="Job Box"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={
                    "/assets/portfolio-images/talentally/design-3.svg"
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </div>
            {/* Image 4 */}
            <div className="w-full flex items-center justify-center bg-white-200 dark:bg-black-500 rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/talentally/design-4.svg"}
                height={612}
                width={1200}
                alt="Design System"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/talentally/design-4.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            {/* Image 5 */}
            <div className="w-full flex items-center justify-center brand-light rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/talentally/design-5.svg"}
                height={612}
                width={1200}
                alt="Career Resources"
                loading="lazy"
                placeholder="blur"
                blurDataURL={"/assets/portfolio-images/talentally/design-5.svg"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
        {/* Final Outcome */}
        <div
          id="outcome"
          className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0"
        >
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>Final Outcome</h2>
            <p>
              The redesigned TalentAlly website successfully improved user
              engagement, navigation, and overall aesthetics. It now provides a
              modern and seamless experience that aligns with TalentAlly&apos;s
              mission.
            </p>
          </div>
          {/* Before & After */}
          <div className="w-full flex flex-col gap-8">
            <BeforeAndAfter />
            {/* Image */}
            <div className="w-full flex items-center justify-center yellow-dark rounded-2xl p-6 md:p-8">
              <Image
                src={"/assets/portfolio-images/talentally/presentation.png"}
                height={612}
                width={1200}
                alt="TalentAlly Presentation"
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  "/assets/portfolio-images/talentally/presentation.png"
                }
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
        {/* Client Feedback & Testimonials */}
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>Client Feedback & Testimonials</h2>
            <p>Here&apos;s what TalentAlly had to say about the project:</p>
          </div>
          {/* Testimonial  */}
          <div
            className="w-full bg-[#3643E6] rounded-2xl px-8 py-16 md:p-16 lg:py-40 lg:pl-24 overflow-hidden relative"
            style={{
              backgroundImage:
                "url('/assets/portfolio-images/talentally/testimonial-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
          >
            <div className="lg:max-w-[694px] flex flex-col gap-2.5">
              <div className="flex flex-col gap-2">
                <p className="subtitle italic text-white-100">
                  &quot;During the project, Argi demonstrated exceptional
                  communication skills. Throughout the collaboration, they
                  consistently maintained open lines of communication, ensuring
                  that all team members were well-informed and on the same page.
                </p>
                <p className="subtitle italic text-white-100">
                  In addition to his excellent communication, Argi demonstrated
                  remarkable organizational skills and efficiency. He approached
                  tasks methodically, consistently meeting deadlines and
                  contributing to the project&apos;s overall success. His
                  ability to keep the design process streamlined and on track
                  was instrumental in achieving our goals.
                </p>
                <p className="subtitle italic text-white-100">
                  Moreover, I was particularly impressed with Argi&apos;s
                  thoughtful design choices. He understood our brand&apos;s
                  intricacies and offered creative solutions that seamlessly
                  integrated with our overall design vision.
                </p>
                <p className="subtitle italic text-white-100">
                  Finally, one of the most enjoyable aspects of working with
                  Argi was his positive attitude and collaborative spirit. His
                  enthusiasm for the project and willingness to go above and
                  beyond made him a pleasure to work with. I am confident that
                  Argi would be a valuable asset to any project, and I
                  wholeheartedly recommend him.&quot;
                </p>
              </div>
              <h6 className="text-white-100">
                - Megan Bozzuto, Chief Marketing Officer, TalentAlly
              </h6>
            </div>
            <Image
              src={"/assets/portfolio-images/talentally/icon.svg"}
              height={435}
              width={1093}
              alt="TalentAlly Icon"
              className="absolute -bottom-[118px] hidden lg:block"
            />
          </div>
        </div>
        {/* Conclusion & Key Learnings */}
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
          <div className="flex flex-col gap-8 max-w-[844px] w-full mx-auto">
            <h2>Conclusion & Key Learnings</h2>
            <p>
              This project reinforced my expertise in UI/UX design,
              collaboration, and project management. The biggest takeaways
              included:
            </p>
            <div className="flex flex-col gap-4">
              <Label title="The importance of user research in driving design decisions." />
              <Label title="The value of seamless collaboration between designers, developers, and marketing teams." />
              <Label title="The impact of a well-structured design handoff for smooth implementation." />
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="cta">
          <CTA />
        </div>
        {/* Footer */}
        <Footer />
      </div>
      {/* Floating Navigation */}
      <FloatingNavigation
        showFloatingNav={showFloatingNav}
        activeSection={activeSection}
        sections={sections}
        scrollToSection={scrollToSection}
      />
    </>
  );
}
