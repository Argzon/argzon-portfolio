export default function UserPersona2() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div className="order-2 lg:order-1 pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Quickly evaluate Northbeam&apos;s features without needing to
              contact sales
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Access granular attribution data to optimize cross-channel
              campaigns
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Understand how Northbeam&apos;s machine learning models improve
              performance
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Website lacks in-depth technical product information
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              No self-serve trial options to test the platform independently
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Hard to understand how Northbeam compares to other attribution
              tools
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers hands-on product trials before making decisions
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Seeks detailed product documentation to understand technical
              features
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs transparent data insights to build trust in the platform
            </p>
          </div>
        </div>
      </div>
      <div
        className="order-1 lg:oder-2 flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/northbeam/user-persona-2.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-blue-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Ryan Thompson
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Performance Marketer
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Works at a
            performance marketing agency, managing paid media campaigns for
            multiple clients across Google Ads, Meta, and TikTok. With a deep
            understanding of digital marketing, Ryan relies on data to optimize
            campaigns but often struggles to find transparent attribution
            insights that help him make faster decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
