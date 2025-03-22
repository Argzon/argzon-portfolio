import Navigation from "@/components/Navigation/page";

export default function Nelta() {
  return (
    <div className="flex flex-col gap-[200px]">
      {/* Header */}
      <div className="px-10 lg:px-0 h-full pb-10">
        <div className="pt-10 flex flex-col justify-between h-full">
          <div className="flex justify-center min-w-full">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
}
