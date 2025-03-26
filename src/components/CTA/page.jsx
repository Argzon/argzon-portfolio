"use client";
import Link from "next/link";
import Image from "next/image";
import Magnet from "@/components/ui/magnet";
import { useTheme } from "next-themes";

export default function CTA() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-16 max-w-[844px] w-full mx-auto items-center text-center px-4 md:px-10 lg:px-0">
      <h3>
        Interested in crafting intuitive digital experiences? Let's connect!
      </h3>
      <Magnet padding={100} disabled={false} magnetStrength={70}>
        <Link
          href="/work"
          className="reverse bg-black-600 hover:bg-black-500 dark:bg-white-100 dark:hover:bg-white-300 p-8 rounded-full w-fit flex items-center gap-2.5 hover:gap-3 subtitle transition-all duration-300"
        >
          See more work
          {/* Show the arrow icon of Light Mode */}
          <div className="inline-block dark:hidden">
            <Image
              src={"/assets/icons/arrow-right-light.svg"}
              height={24}
              width={24}
              alt="Arrow right icon"
              loading="eager"
            />
          </div>
          {/* Show the arrow icon of Dark Mode */}
          <div className="hidden dark:inline-block">
            <Image
              src={"/assets/icons/arrow-right-dark.svg"}
              height={24}
              width={24}
              alt="Arrow right icon"
              loading="eager"
            />
          </div>
        </Link>
      </Magnet>
    </div>
  );
}
