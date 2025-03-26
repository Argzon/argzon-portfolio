export default function UserPersona1() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div
        className="flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/northbeam/user-persona-1.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-blue-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Emily Parker
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Marketing Manager
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Works at a mid-sized
            eCommerce brand, managing paid media campaigns across Google Ads,
            Meta, and TikTok. Emily is focused on improving ad performance but
            struggles with attribution tools that are too technical or complex.
          </p>
        </div>
      </div>
      <div className="pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Easily understand how Northbeam&apos;s platform tracks and
              attributes conversions
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Sign up and explore the product without needing to schedule a demo
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Access actionable insights that help improve campaign performance
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Existing website lacks clear product explanations
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              No self-serve signup option to try the platform
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Feels overwhelmed by technical jargon on data attribution
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers a self-serve experience rather than contacting sales
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs simple product messaging focused on outcomes, not technology
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Values quick access to product demos or trial versions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
