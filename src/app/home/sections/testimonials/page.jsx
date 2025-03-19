import testimonialsData from "../../data/testimonials.json";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Testimonials() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row gap-2.5">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full">
        {testimonialsData.testimonials.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="border border-white-300 dark:border-black-400 rounded-2xl px-[35px] py-[50px]"
          >
            <div className="block lg:hidden mb-12">
              <Image
                src={theme === "dark" ? item.logo.dark : item.logo.light}
                alt={item.company}
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-lg mb-12 whitespace-pre-line">
              "{item.testimonial}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={item.profilePic}
                  alt={item.author}
                  height={45}
                  width={45}
                  className="rounded-full"
                />
                <div>
                  <p className="subtitle font-archiv text-primary">
                    {item.author}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>{item.position},</span>
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src={theme === "dark" ? item.logo.dark : item.logo.light}
                  alt={item.company}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-4 w-full">
        {testimonialsData.testimonials.slice(3, 7).map((item) => (
          <div
            key={item.id}
            className="border border-white-300 dark:border-black-400 rounded-2xl px-[35px] py-[50px]"
          >
            <div className="block lg:hidden mb-12">
              <Image
                src={theme === "dark" ? item.logo.dark : item.logo.light}
                alt={item.company}
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-lg mb-8 whitespace-pre-line">
              "{item.testimonial}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={item.profilePic}
                  alt={item.author}
                  height={45}
                  width={45}
                  className="rounded-full"
                />
                <div>
                  <p className="subtitle font-archiv text-primary">
                    {item.author}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>{item.position},</span>
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src={theme === "dark" ? item.logo.dark : item.logo.light}
                  alt={item.company}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
