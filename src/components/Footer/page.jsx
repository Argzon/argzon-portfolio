"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { PopupButton } from "@typeform/embed-react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-black-600 dark:bg-white-100 pt-24 reverse">
      <div className="max-w-7xl mx-auto flex flex-col gap-11 px-10 lg:px-0">
        <div className="flex flex-col md:flex-row gap-11 items-center md:items-start justify-between">
          <div className="max-w-[643px] flex flex-col gap-8">
            <div className="reverse text-[52px] md:text-[61px] lg:text-[80px] font-archiv -tracking-wider leading-tight">
              Let's Connect
            </div>
            <p className="subtitle reverse">
              Reach out for top-notch designs. If you think I'd be a great fit
              for your project, email me—I'm open to new opportunities.
            </p>
          </div>
          <PopupButton
            id="DPsiGasZ"
            className="reverse bg-black-500 hover:bg-black-400 dark:bg-white-200 dark:hover:bg-white-300 transition-all duration-300 p-8 rounded-full h-fit w-fit subtitle shrink-0"
            height={500}
            width={900}
            opacity={95}
          >
            Hire Me Now!
          </PopupButton>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center pt-8 pb-14 border-t border-black-500 dark:border-white-200">
          <div className="flex order-3 md:order-1 flex-row items-center gap-2">
            <Image
              src={"/assets/ArgiProfilePic.png"}
              width={40}
              height={40}
              alt="Profile Picture"
              className="rounded-full w-10 h-10 object-cover border border-black-500"
              loading="eager"
              priority
            />
            <p className="text-white-100 dark:text-black-600">Argzon Haziraj</p>
            <div className="w-2 h-2 bg-black-400 dark:bg-white-600 rounded-full"></div>
            <span className="label text-black-100 dark:text-black-200">
              Interface Designer
            </span>
          </div>
          <ul className="flex order-1 md:order-2">
            <li>
              <Link
                href="https://linkedin.com/in/haziraj"
                target="_blank"
                className="p-1.5 underline subtitle reverse hover:bg-black-500 dark:hover:bg-white-200 hover:underline-offset-2 transition-all duration-300 rounded-md"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://behance.net/haziraj"
                target="_blank"
                className="p-1.5 underline subtitle reverse hover:bg-black-500 dark:hover:bg-white-200 hover:underline-offset-2 transition-all duration-300 rounded-md"
              >
                Behance
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/argzon"
                target="_blank"
                className="p-1.5 underline subtitle reverse hover:bg-black-500 dark:hover:bg-white-200 hover:underline-offset-2 transition-all duration-300 rounded-md"
              >
                GitHub
              </Link>
            </li>
          </ul>
          {/* Theme switcher */}
          <div className="flex order-2 md:order-3 gap-1 bg-black-500 dark:bg-white-300 py-2.5 px-4 rounded-full">
            {/* Light Mode */}
            <div
              onClick={() => setTheme("light")}
              className={`w-10 h-10 rounded-full ${
                theme === "light"
                  ? "bg-black-300 dark:bg-white-400"
                  : "hover:bg-black-300 dark:hover:bg-white-400"
              } flex items-center justify-center transition-colors duration-300 cursor-pointer`}
            >
              <div className="block dark:hidden">
                <Image
                  src={"/assets/icons/sun-light.svg"}
                  width={24}
                  height={24}
                  alt="Light Mode"
                  loading="eager"
                  priority
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src={"/assets/icons/sun-dark.svg"}
                  width={24}
                  height={24}
                  alt="Light Mode"
                  loading="eager"
                  priority
                />
              </div>
            </div>
            {/* Dark Mode */}
            <div
              onClick={() => setTheme("dark")}
              className={`w-10 h-10 rounded-full ${
                theme === "dark"
                  ? "bg-black-300 dark:bg-white-400"
                  : "hover:bg-black-300 dark:hover:bg-white-400"
              } flex items-center justify-center transition-colors duration-300 cursor-pointer`}
            >
              <div className="block dark:hidden">
                <Image
                  src={"/assets/icons/moon-light.svg"}
                  width={24}
                  height={24}
                  alt="Dark Mode"
                  loading="eager"
                  priority
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src={"/assets/icons/moon-dark.svg"}
                  width={24}
                  height={24}
                  alt="Dark Mode"
                  loading="eager"
                  priority
                />
              </div>
            </div>
            {/* System Mode */}
            <div
              onClick={() => setTheme("system")}
              className={`w-10 h-10 rounded-full ${
                theme === "system"
                  ? "bg-black-300 dark:bg-white-400"
                  : "hover:bg-black-300 dark:hover:bg-white-400"
              } flex items-center justify-center transition-colors duration-300 cursor-pointer`}
            >
              <div className="block dark:hidden">
                <Image
                  src={"/assets/icons/system-light.svg"}
                  width={24}
                  height={24}
                  alt="System Mode"
                  loading="eager"
                  priority
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src={"/assets/icons/system-dark.svg"}
                  width={24}
                  height={24}
                  alt="System Mode"
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
