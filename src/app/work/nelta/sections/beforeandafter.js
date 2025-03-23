import { Compare } from "@/components/ui/compare";

export default function BeforeAndAfter() {
  return (
    <div className="rounded-2xl">
      <Compare
        firstImage="/assets/portfolio-images/nelta/website-before.jpg"
        secondImage="/assets/portfolio-images/nelta/website-after.svg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[206px] w-auto md:h-[386px] lg:h-[663px] "
        slideMode="drag"
      />
    </div>
  );
}
