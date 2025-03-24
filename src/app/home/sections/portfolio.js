import Link from "next/link";
import Image from "next/image";
import portfolioData from "../data/portfolio.json";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">
      {portfolioData.portfolio.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          scroll={false}
          className="w-full flex flex-col gap-6 group"
        >
          <div className="relative">
            <Image
              src={project.image}
              alt={project.name}
              width={700}
              height={390}
              objectFit="cover"
              className="rounded-2xl h-[390px] object-cover w-full lg:group-hover:scale-105 transition-transform duration-300"
            />
            {/* Desktop hover overlay */}
            <div className="absolute inset-0 bg-black-600 bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center hidden lg:flex">
              <div className="flex items-center gap-2 text-white-100">
                <span className="subtitle text-white-100">
                  Check Full Case Study
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* Mobile/Tablet permanent overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black-600 bg-opacity-70 rounded-b-2xl p-4 flex items-center justify-between lg:hidden">
              <span className="subtitle text-white-100">
                Check Full Case Study
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 lg:group-hover:bg-white-200 dark:lg:group-hover:bg-black-500 transition-all duration-300 lg:group-hover:px-4 lg:group-hover:pl-1 lg:group-hover:rounded-lg">
            <h4 className="lg:group-hover:scale-95 transition-transform duration-300">
              {project.name}
            </h4>
            <div className="flex fle-wrap gap-2">
              {project.workDone.map((tag, index) => (
                <p
                  key={index}
                  className="label bg-white-200 dark:bg-black-500 lg:group-hover:bg-white-300 dark:lg:group-hover:bg-black-400 rounded-full px-4 py-2 shrink-0 transition-all duration-1000"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
