"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer/page";
import Navigation from "@/components/Navigation/page";
import { TextEffect } from "@/components/ui/text-effect";
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "./data/experience";
import { TimelineEdu } from "@/components/ui/timeline-edu";
import { educationData } from "./data/education";
import skills from "./data/skills";
import { Progress } from "flowbite-react";
import SpotlightCard from "@/components/ui/spotlight-card";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const customTheme = {
    color: {
      primary: "bg-blue-300 hover:bg-blue-400",
    },
  };

  return (
    <div className="flex flex-col gap-[150px] lg:gap-[200px]">
      {/* Header */}
      <div className="px-10 lg:px-0 h-full pb-10">
        <div className="pt-10 flex flex-col justify-between h-full">
          <div className="flex justify-center min-w-full">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Who am I? */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8 px-4 md:px-20">
        <h3>Who am I?</h3>
        <TextEffect preset="fade-in-blur" speedReveal={3.1} speedSegment={0.3}>
          Accomplished UI/UX designer with 12+ years of experience crafting
          intuitive websites, apps, and platforms across diverse industries.
          Proven success as a Design Lead, driving project efficiency through
          agile and waterfall methodologies. Expert in Figma, creating
          interactive prototypes that enhance collaboration and streamline
          workflows. Demonstrated exceptional project management skills,
          achieving a 20% boost in on-time project delivery and a 40%
          improvement in quality, driving user engagement and client
          satisfaction.
        </TextEffect>
      </div>

      {/* Key Achievements */}
      <div className="max-w-7xl w-full mx-auto bg-white-200 dark:bg-black-500 py-20 flex flex-col gap-16 rounded-2xl px-4 md:px-10 lg:px-20">
        <h3 className="text-center">Key Achievements</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* User Engagement Boost */}
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="px-10 py-20 text-center flex flex-col items-center gap-8">
              <div className="h-[90px] w-[90px] rounded-2xl bg-blue-200 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h5>User Engagement Boost</h5>
                <p>
                  Achieved 20% increase in user engagement by transforming
                  complex requirements into user-friendly designs.
                </p>
              </div>
            </div>
          </SpotlightCard>
          {/* Design System Implementation */}
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="px-10 py-20 text-center flex flex-col items-center gap-8">
              <div className="h-[90px] w-[90px] rounded-2xl bg-blue-200 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h5>Design System Implementation</h5>
                <p>
                  Increased design consistency by 30% using Figma to create a
                  comprehensive design system.
                </p>
              </div>
            </div>
          </SpotlightCard>
          {/* On-time Project Delivery */}
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="px-10 py-20 text-center flex flex-col items-center gap-8">
              <div className="h-[90px] w-[90px] rounded-2xl bg-blue-200 flex items-center justify-center">
                <span className="text-4xl">🕐</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h5>On-time Project Delivery</h5>
                <p>
                  Delivered all projects on time and within budget, leading to
                  95% client satisfaction rate.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-10 lg:px-0">
        <h3 className="text-center">Experience</h3>
        <Timeline data={experienceData} />
      </div>

      {/* Education */}
      <div className="max-w-7xl w-full mx-auto bg-white-200 dark:bg-black-500 rounded-2xl pt-20 px-4 md:px-10 lg:px-0">
        <h3 className="text-center">Education</h3>
        <TimelineEdu data={educationData} />
      </div>

      {/* Training / Courses */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-10 lg:px-0 flex flex-col gap-16">
        <h3 className="text-center">Training / Courses</h3>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-[160px]">
          <div className="flex flex-col gap-2">
            <h5>Full Stack JavaScript</h5>
            <h6>Treehouse</h6>
          </div>
          <div className="flex flex-col gap-2">
            <h5>MailerLite Classic Fundamentals</h5>
            <h6>MailerLite</h6>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-10 lg:px-0 flex flex-col gap-16">
        <h3 className="text-center">Languages</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Albanian */}
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h6>Albanian</h6>
                <span className="subtitle">Native</span>
              </div>
              <Progress progress={100} color="primary" theme={customTheme} />
            </div>
          </div>
          {/* English */}
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h6>English</h6>
                <span className="subtitle">Proficient</span>
              </div>
              <Progress progress={85} color="primary" theme={customTheme} />
            </div>
          </div>
          {/* German */}
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h6>German</h6>
                <span className="subtitle">Beginner</span>
              </div>
              <Progress progress={20} color="primary" theme={customTheme} />
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-10 lg:px-0 flex flex-col gap-16">
        <h3 className="text-center">Skills</h3>
        {skills.skills.map((skillCategory, index) => (
          <div key={index} className="flex flex-col gap-6">
            <h5>{skillCategory.category}</h5>
            <div className="flex flex-wrap gap-6">
              {skillCategory.items.map((skill, skillIndex) => (
                <p
                  key={skillIndex}
                  className="subtitle p-2 rounded-lg bg-white-200 hover:bg-white-300 dark:bg-black-500 dark:hover:bg-black-400 w-fit transition-colors duration-300"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
