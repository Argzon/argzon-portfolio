"use client";
import Navigation from "@/components/Navigation/page";
import Footer from "@/components/Footer/page";
import CTA from "@/components/CTA/page";
import { useEffect, useState } from "react";
import { useTransitionRouter } from "next-view-transitions";

// Redesigned components
import CreatickHero from "@/components/redesign/work/creatick/CreatickHero";
import ProjectIntro from "@/components/redesign/work/creatick/ProjectIntro";
import TheChallenge from "@/components/redesign/work/creatick/TheChallenge";
import ResearchAndStrategy from "@/components/redesign/work/creatick/ResearchAndStrategy";
import DesignProcess from "@/components/redesign/work/creatick/DesignProcess";
import Implementation from "@/components/redesign/work/creatick/Implementation";
import FinalOutcome from "@/components/redesign/work/creatick/FinalOutcome";
import Takeaways from "@/components/redesign/work/creatick/Takeaways";
import NextProject from "@/components/redesign/work/creatick/NextProject";

export default function Creatick() {
  const [mounted, setMounted] = useState(false);
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-[150px] md:gap-[200px]">
        {/* Navigation */}
        <Navigation router={router} slideInOut={slideInOut} />

        {/* Hero Section */}
        <CreatickHero />

        {/* Project Introduction */}
        <ProjectIntro />

        {/* The Challenge */}
        <TheChallenge />

        {/* Research & Strategy */}
        <ResearchAndStrategy />

        {/* Design Process */}
        <DesignProcess />

        {/* Implementation */}
        <Implementation />

        {/* Final Outcome */}
        <FinalOutcome />

        {/* Takeaways */}
        <Takeaways />

        {/* Next Project */}
        <NextProject />

        {/* CTA */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
