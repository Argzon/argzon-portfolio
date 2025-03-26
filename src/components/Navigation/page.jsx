import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center max-w-[728px] w-full bg-white-200 dark:bg-black-500 rounded-full p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-white-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-50 dark:border-black-500 z-20">
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center gap-2 select-none">
          <Image
            src={"/assets/ArgiProfilePic.png"}
            width={40}
            height={40}
            alt="Profile Picture"
            className="rounded-full w-10 h-10 object-cover border border-black-500"
            priority={true}
            loading="eager"
          />
          <p className="label md:body dark:text-white-100 text-black-600">
            Argzon Haziraj
          </p>
          <div className="w-2 h-2 dark:bg-black-400 bg-white-600 rounded-full"></div>
          <span className="tooltip md:label dark:text-black-100 text-black-200">
            Interface Designer
          </span>
        </Link>
        <ul className="hidden md:flex items-center">
          <li>
            <Link href="/">
              <p className="h-full rounded-2xl hover:bg-white-300/50 dark:hover:bg-black-400/50 transition-colors duration-300 p-3">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="h-full rounded-2xl hover:bg-white-300/50 dark:hover:bg-black-400/50 transition-colors duration-300 p-3">
                About me
              </p>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <p className="h-full rounded-2xl hover:bg-white-300/50 dark:hover:bg-black-400/50 transition-colors duration-300 p-3">
                Work
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="brand-default reverse flex px-6 py-3 rounded-full hover:bg-blue-400 dark:hover:bg-blue-300 transition-colors duration-300"
            >
              <p className="reverse">Let's talk</p>
            </Link>
          </li>
        </ul>
        {/* Mobile menu button */}
        <div
          className="flex md:hidden items-center justify-center cursor-pointer h-10 w-10 rounded-full bg-blue-100 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={
              isMenuOpen ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"
            }
            width={16}
            height={16}
            alt={isMenuOpen ? "close menu" : "open menu"}
            priority={true}
            loading="eager"
          />
        </div>
      </div>
      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 bg-white-100 dark:bg-black-600 md:hidden transition-transform duration-300 z-10 ease-in-out overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full gap-">
          <div className="flex flex-col px-8 items-center justify-center h-full gap-8">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left bg-white-200 dark:bg-black-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-white-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-50 dark:border-black-500 flex items-center justify-between p-8 rounded-2xl"
            >
              <p className="text-2xl font-archiv uppercase font-bold rounded-2xl">
                Home
              </p>
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
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left bg-white-200 dark:bg-black-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-white-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-50 dark:border-black-500 flex items-center justify-between p-8 rounded-2xl"
            >
              <p className="text-2xl font-archiv uppercase font-bold rounded-2xl">
                About me
              </p>
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
            <Link
              href="/work"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left bg-white-200 dark:bg-black-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-white-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-50 dark:border-black-500 flex items-center justify-between p-8 rounded-2xl"
            >
              <p className="text-2xl font-archiv uppercase font-bold rounded-2xl">
                Work
              </p>
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
          </div>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center"
          >
            <p className="text-4xl uppercase font-archiv font-medium transition-colors duration-300 brand-default reverse py-8">
              Let's talk
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
