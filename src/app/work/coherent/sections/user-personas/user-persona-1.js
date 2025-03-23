export default function UserPersona1() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div
        className="flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/coherent/user-persona-1.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-purple-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Anna Thompson
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Operations Manager
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Works in a corporate
            environment, managing internal processes and collaborating with IT
            teams to automate workflows.
          </p>
        </div>
      </div>
      <div className="pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-purple-100 px-6 py-4 w-fit">
              Understand how Coherent&apos;s solution can simplify internal
              processes
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-100 px-6 py-4 w-fit">
              Improve efficiency without relying heavily on the IT department
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-100 px-6 py-4 w-fit">
              Find a low-code/no-code solution to transform spreadsheet-based
              tasks
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-purple-200 px-6 py-4 w-fit">
              Lack of technical knowledge
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-200 px-6 py-4 w-fit">
              Dependency on IT teams for automation
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-200 px-6 py-4 w-fit">
              Frustrated with complex software interfaces
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers simple, easy-to-use interfaces
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs educational content explaining technical concepts in simple
              terms
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Values case studies and product demos to understand the
              platform&apos;s benefits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
