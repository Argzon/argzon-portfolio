export default function UserPersona1() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div
        className="flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/creatick/user-persona-1.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-blue-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Lana Mitchell
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Freelance Social Media
            Consultant
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Lana is a 32-year-old
            freelancer helping small businesses grow their Instagram presence.
            She manages multiple client accounts, creating content strategies
            and reporting performance metrics.
          </p>
        </div>
      </div>
      <div className="pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Streamline content scheduling and approval for multiple clients
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Provide detailed performance reports without using separate tools
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-100 px-6 py-4 w-fit">
              Manage direct messages across multiple accounts from one platform
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Juggling multiple tools for scheduling, messaging, and reporting
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Time-consuming manual work for creating reports
            </p>
            <p className="text-black-600 rounded-2xl bg-blue-200 px-6 py-4 w-fit">
              Missed client messages due to DM overload
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers intuitive interfaces with minimal learning curves
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs built-in report templates to save time
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Values tools that support collaboration with clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
