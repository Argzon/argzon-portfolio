import { Compare } from "@/components/ui/compare";

export default function BeforeAndAfter() {
  return (
    <div className="rounded-2xl">
      <Compare
        firstImage="/assets/portfolio-images/northbeam/website-before.jpg"
        secondImage="/assets/portfolio-images/northbeam/website-after.svg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[206px] w-auto md:h-[386px] lg:h-[720px] "
        slideMode="drag"
      />
    </div>
  );
}
