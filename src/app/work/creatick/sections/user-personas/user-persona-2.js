export default function UserPersona2() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div className="order-2 lg:order-1 pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Automate posting to maintain consistent content flow
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Respond quickly to DMs from followers and brands
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Track engagement performance to improve content strategy
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Managing multiple conversations without a central inbox
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Losing engagement during busy travel periods
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              No clear insights into which content formats perform best
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers mobile-friendly tools for on-the-go management
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs performance reports with actionable insights
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Values features that simplify content planning
            </p>
          </div>
        </div>
      </div>
      <div
        className="order-1 lg:oder-2 flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/creatick/user-persona-2.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-blue-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Ethan Reynolds
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Lifestyle Content Creator
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Ethan is a
            27-year-old influencer sharing fitness and wellness content on
            Instagram. He collaborates with brands and needs to maintain
            consistent content quality and audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
