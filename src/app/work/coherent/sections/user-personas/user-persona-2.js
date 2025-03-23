export default function UserPersona2() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div className="order-2 lg:order-1 pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-purple-100 px-6 py-4 w-fit">
              Understand how Coherent&apos;s APIs integrate with existing
              systems
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-100 px-6 py-4 w-fit">
              Ensure security and scalability of solutions
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-100 px-6 py-4 w-fit">
              Reduce manual work on repetitive tasks
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-purple-200 px-6 py-4 w-fit">
              Time-consuming manual workflows
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-200 px-6 py-4 w-fit">
              Miscommunication between IT and business teams
            </p>
            <p className="text-black-600 rounded-2xl bg-purple-200 px-6 py-4 w-fit">
              Overly simplified tools that don&apos;t offer customization
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers technical documentation and API references
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs access to product demos and technical support
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Values seamless integration with existing tools
            </p>
          </div>
        </div>
      </div>
      <div
        className="order-1 lg:oder-2 flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/coherent/user-persona-2.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-purple-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> James Carter
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Backend Developer
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Works in a SaaS
            company, developing APIs and collaborating with business teams on
            automation projects.
          </p>
        </div>
      </div>
    </div>
  );
}
