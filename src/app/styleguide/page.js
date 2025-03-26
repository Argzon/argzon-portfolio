import Link from "next/link";

export const metadata = {
  title: "Styleguide - Argzon Haziraj",
  description: "A styleguide for the design system of this website.",
  url: "/styleguide",
};

export default function StyleGuide() {
  return (
    <div className="flex flex-col gap-12 items-center mx-auto h-screen justify-center">
      <h1 className="text-primary">Styleguide</h1>
      <div className="flex gap-8">
        <Link
          href="/styleguide/colors"
          className="bg-white-300 hover:bg-white-400 dark:bg-black-500 dark:hover:bg-black-400 rounded-[30px] py-8 px-16 transition-all duration-300"
        >
          <h3>🎨 Colors</h3>
        </Link>

        <Link
          href="/styleguide/typography"
          className="bg-white-300 hover:bg-white-400 dark:bg-black-500 dark:hover:bg-black-400 rounded-[30px] py-8 px-16 transition-all duration-300"
        >
          <h3>🃏 Typography</h3>
        </Link>
      </div>
    </div>
  );
}
