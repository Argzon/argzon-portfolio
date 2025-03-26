"use client";
import Image from "next/image";
import Link from "next/link";
import stacksData from "../../data/stacks.json";
import { useTheme } from "next-themes";

export default function Stacks() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row gap-[30px]">
      {/* Left Side */}
      <div className="flex flex-col gap-[30px] w-full">
        {stacksData.stacks.slice(0, 3).map((stack) => (
          <Link
            href={stack.link}
            target="_blank"
            key={stack.id}
            className="bg-white-200 hover:bg-white-300 dark:bg-black-500 dark:hover:bg-black-400 rounded-lg p-4 flex items-center justify-between transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white-100 dark:bg-black-600">
                <Image
                  src={stack.icon}
                  height={30}
                  width={30}
                  alt={stack.name}
                  loading="lazy"
                />
              </div>
              <div>
                <h6>{stack.name}</h6>
                <p className="subtitle">{stack.description}</p>
              </div>
            </div>
            {/* Show the arrow icon of Light Mode */}
            <div className="inline-block dark:hidden">
              <Image
                src={"/assets/icons/arrow-right-dark.svg"}
                height={24}
                width={24}
                alt="Arrow right icon"
                loading="lazy"
              />
            </div>
            {/* Show the arrow icon of Dark Mode */}
            <div className="hidden dark:inline-block">
              <Image
                src={"/assets/icons/arrow-right-light.svg"}
                height={24}
                width={24}
                alt="Arrow right icon"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-[30px] w-full">
        {stacksData.stacks.slice(3, 6).map((stack) => (
          <Link
            href={stack.link}
            target="_blank"
            key={stack.id}
            className="bg-white-200 hover:bg-white-300 dark:bg-black-500 dark:hover:bg-black-400 rounded-lg p-4 flex items-center justify-between transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white-100 dark:bg-black-600">
                <Image
                  src={stack.icon}
                  height={30}
                  width={30}
                  alt={stack.name}
                  loading="lazy"
                />
              </div>
              <div>
                <h6>{stack.name}</h6>
                <p className="subtitle">{stack.description}</p>
              </div>
            </div>
            {/* Show the arrow icon of Light Mode */}
            <div className="inline-block dark:hidden">
              <Image
                src={"/assets/icons/arrow-right-dark.svg"}
                height={24}
                width={24}
                alt="Arrow right icon"
                loading="lazy"
              />
            </div>
            {/* Show the arrow icon of Dark Mode */}
            <div className="hidden dark:inline-block">
              <Image
                src={"/assets/icons/arrow-right-light.svg"}
                height={24}
                width={24}
                alt="Arrow right icon"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
