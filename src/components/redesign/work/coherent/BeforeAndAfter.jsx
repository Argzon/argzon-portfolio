"use client";
import { Compare } from "@/components/ui/compare";

export default function BeforeAndAfter() {
  return (
    <div className="rounded-[2.5rem] overflow-hidden border border-slate-200">
      <Compare
        firstImage="/assets/portfolio-images/coherent/website-before.jpg"
        secondImage="/assets/portfolio-images/coherent/website-after.svg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] md:h-[500px] lg:h-[700px] w-full"
        slideMode="drag"
      />
    </div>
  );
}
