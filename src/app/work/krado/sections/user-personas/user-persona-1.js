export default function UserPersona1() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div
        className="flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/krado/user-persona-1.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-green-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Maya Sullivan
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Plant Enthusiast & Busy
            Professional
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Maya is a 34-year-old
            marketing manager who recently discovered a passion for houseplants.
            She loves having greenery at home but often struggles to keep plants
            alive due to her busy work schedule and lack of proper plant care
            knowledge.
          </p>
        </div>
      </div>
      <div className="pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-green-100 px-6 py-4 w-fit">
              Easily find personalized plant care information without needing to
              research on multiple websites
            </p>
            <p className="text-black-600 rounded-2xl bg-green-100 px-6 py-4 w-fit">
              Subscribe to plant nourishment products tailored to her
              plants&apos; needs
            </p>
            <p className="text-black-600 rounded-2xl bg-green-100 px-6 py-4 w-fit">
              Learn how to better care for plants through visual and interactive
              guides
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-green-200 px-6 py-4 w-fit">
              Struggles with understanding plant care requirements, especially
              for different plant types
            </p>
            <p className="text-black-600 rounded-2xl bg-green-200 px-6 py-4 w-fit">
              Finds existing plant care websites overwhelming and difficult to
              navigate
            </p>
            <p className="text-black-600 rounded-2xl bg-green-200 px-6 py-4 w-fit">
              Limited time to search for reliable plant care solutions
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers quick, digestible content like short guides or visual
              instructions
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Motivated by subscription services that simplify plant care
              routines
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Engages more with interactive elements like animations or app
              demonstrations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
