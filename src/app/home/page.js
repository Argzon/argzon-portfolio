"use client";
import Footer from "@/components/Footer/page";
import Navigation from "@/components/Navigation/page";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import Image from "next/image";
import Magnet from "@/components/ui/magnet";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { TextEffect } from "@/components/ui/text-effect";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Testimonials from "./sections/testimonials/page";
import Stacks from "./sections/stacks/page";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[200px]">
      {/* Header */}
      <AuroraBackground>
        <div className="px-10 lg:px-0 h-full pb-10">
          <FollowerPointerCard title={"Argzon Haziraj"}>
            <div className="pt-10 flex flex-col justify-between h-full">
              <div className="flex justify-center min-w-full">
                <Navigation />
              </div>
              <h1 className="text-center text-[64px] md:text-8xl lg:text-9xl">
                Delighting humans{" "}
                <span className="inline-block">
                  thr
                  <span className="inline">
                    <Image
                      src="/assets/ArgiPic.png"
                      height={75}
                      width={75}
                      alt="Argi"
                      className="inline rounded-full hover:-mt-2 border-4 border-white-300 transition-all duration-1200"
                    />
                  </span>
                  ugh
                </span>{" "}
                design
              </h1>
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-80 items-start">
                <p>
                  Building websites & apps for immersive digital experiences.
                </p>
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-100"></div>
                  <p>Working remotely</p>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      </AuroraBackground>

      {/* About me */}
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

        <Magnet padding={100} disabled={false} magnetStrength={70}>
          <Link
            href="/about"
            className="reverse bg-black-600 hover:bg-black-500 dark:bg-white-100 dark:hover:bg-white-300 p-8 rounded-full w-fit flex items-center gap-2.5 hover:gap-3 subtitle transition-all duration-300"
          >
            Read more about me{" "}
            <Image
              src={
                theme === "dark"
                  ? "/assets/icons/arrow-right-dark.svg"
                  : "/assets/icons/arrow-right-light.svg"
              }
              height={24}
              width={24}
              alt="Arrow right icon"
            />
          </Link>
        </Magnet>
      </div>

      {/* Clients & Partners */}
      <div className="px-4 md:px-10 lg:px-0">
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-16  py-20 bg-white-200 dark:bg-black-500 rounded-2xl">
          <div className="flex flex-col gap-4 px-[30px] md:ml-10 lg:ml-20 max-w-[857px]">
            <div className="flex flex-col gap-2">
              <p>Clients & Partners</p>
              <h3>Trusted by the world&apos;s best companies</h3>
            </div>
            <p className="subtitle">
              I&apos;ve had the opportunity to collaborate with amazing
              companies, helping them create intuitive and engaging digital
              experiences. Here are some of the brands I&apos;ve worked with.
            </p>
          </div>
          <div>
            <InfiniteSlider speedOnHover={20} gap={8}>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/TalentAlly.svg"}
                  width={150}
                  height={150}
                  alt="TalentAlly"
                />
              </div>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/Northbeam.svg"}
                  width={150}
                  height={150}
                  alt="Northbeam"
                />
              </div>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/Creatick.svg"}
                  width={150}
                  height={150}
                  alt="Creatick"
                />
              </div>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/Coherent.svg"}
                  width={150}
                  height={150}
                  alt="Coherent"
                />
              </div>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/Krado.svg"}
                  width={150}
                  height={150}
                  alt="Krado"
                />
              </div>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/Nelta.svg"}
                  width={150}
                  height={150}
                  alt="Nelta"
                />
              </div>
              <div className="bg-white-300 hover:bg-white-400 dark:bg-white-400 dark:hover:bg-white-300 h-[80px] w-[210px] flex items-center justify-center rounded-lg transition-colors duration-300">
                <Image
                  src={"/assets/logos/Cryptico.svg"}
                  width={150}
                  height={150}
                  alt="Cryptico"
                />
              </div>
            </InfiniteSlider>
          </div>
        </div>
      </div>

      {/* Portfolio*/}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-4 max-w-[857px]">
          <div className="flex flex-col gap-2">
            <p>Portfolio</p>
            <h3>Crafting Thoughtful & Engaging Digital Experiences</h3>
          </div>
          <p className="subtitle">
            I design intuitive, visually compelling, and user-friendly digital
            experiences. From wireframes to high-fidelity prototypes, I focus on
            usability, accessibility, and aesthetics to create seamless
            interfaces.
          </p>
        </div>
        <div className="flex flex-col gap-[30px] lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* Krado */}
            <Link href="/work/krado" className="w-full flex flex-col gap-6">
              <Image
                src="/assets/portfolio-images/main-images/Krado-Mockup.png"
                alt="Krado"
                width={700}
                height={390}
                objectFit="cover"
                className="rounded-2xl h-[390px] object-cover w-full"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                <h4>Krado</h4>
                <div className="flex fle-wrap gap-2">
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Web Design
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Animation
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Wireframe
                  </p>
                </div>
              </div>
            </Link>
            {/* Cryptico */}
            <Link href="/work/cryptico" className="w-full flex flex-col gap-6">
              <Image
                src="/assets/portfolio-images/main-images/Cryptico-Mockup.png"
                alt="Cryptico"
                width={700}
                height={390}
                objectFit="cover"
                className="rounded-2xl h-[390px] object-cover w-full"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                <h4>Cryptico</h4>
                <div className="flex flex-wrap gap-2">
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Product Design
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    UI/UX Design
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Wireframe
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* Coherent */}
            <Link href="/work/coherent" className="w-full flex flex-col gap-6">
              <Image
                src="/assets/portfolio-images/main-images/Coherent-Mockup.png"
                alt="Coherent"
                width={700}
                height={390}
                objectFit="cover"
                className="rounded-2xl h-[390px] object-cover w-full"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                <h4>Coherent</h4>
                <div className="flex flex-wrap gap-2">
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    UI/UX Design
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Animation
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Wireframe
                  </p>
                </div>
              </div>
            </Link>
            {/* Creatick */}
            <Link href="/work/creatick" className="w-full flex flex-col gap-6">
              <Image
                src="/assets/portfolio-images/main-images/Creatick-Mockup.png"
                alt="Creatick"
                width={700}
                height={390}
                objectFit="cover"
                className="rounded-2xl h-[390px] object-cover w-full"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                <h4>Creatick</h4>
                <div className="flex flex-wrap gap-2">
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Product Design
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    UI/UX Design
                  </p>
                  <p className="label bg-white-200 dark:bg-black-500 rounded-full px-4 py-2 shrink-0">
                    Wireframe
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Magnet padding={100} disabled={false} magnetStrength={70}>
          <Link
            href="/work"
            className="reverse bg-black-600 hover:bg-black-500 dark:bg-white-100 dark:hover:bg-white-300 p-8 rounded-full w-fit flex items-center gap-2.5 hover:gap-3 subtitle transition-all duration-300"
          >
            View all case studies
            <Image
              src={
                theme === "dark"
                  ? "/assets/icons/arrow-right-dark.svg"
                  : "/assets/icons/arrow-right-light.svg"
              }
              height={24}
              width={24}
              alt="Arrow right icon"
            />
          </Link>
        </Magnet>
      </div>

      {/* Testimonials*/}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-4 max-w-[857px]">
          <div className="flex flex-col gap-2">
            <p>Feedback</p>
            <h3>Customer Testimonials</h3>
          </div>
          <p className="subtitle">
            I take pride in creating seamless, user-friendly designs that make
            an impact. Here&apos;s what clients and collaborators have to say
            about working with me.
          </p>
        </div>
        <Testimonials />
      </div>

      {/* Stacks*/}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col gap-4 max-w-[857px]">
          <div className="flex flex-col gap-2">
            <p>Tools</p>
            <h3>My Stacks</h3>
          </div>
          <p className="subtitle">
            Commitment to staying updated with the latest design trends and
            techniques.
          </p>
        </div>
        <Stacks />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
