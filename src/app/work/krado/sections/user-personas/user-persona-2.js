export default function UserPersona2() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div className="order-2 lg:order-1 pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-green-100 px-6 py-4 w-fit">
              Discover smart, AI-powered solutions to improve plant health
            </p>
            <p className="text-black-600 rounded-2xl bg-green-100 px-6 py-4 w-fit">
              Engage with interactive features that explain how products work
            </p>
            <p className="text-black-600 rounded-2xl bg-green-100 px-6 py-4 w-fit">
              Purchase plant care products directly from the website with a
              seamless shopping experience
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-green-200 px-6 py-4 w-fit">
              Dislikes outdated websites with poor mobile experiences
            </p>
            <p className="text-black-600 rounded-2xl bg-green-200 px-6 py-4 w-fit">
              Hard to find trustworthy plant care products that integrate with
              tech apps
            </p>
            <p className="text-black-600 rounded-2xl bg-green-200 px-6 py-4 w-fit">
              Lack of product visuals or animations that showcase how products
              work
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-100 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Highly values tech-driven brands with clean, modern UI
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Responds well to interactive elements like animations or dynamic
              product showcases
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Likely to engage with educational content that explains product
              functionality
            </p>
          </div>
        </div>
      </div>
      <div
        className="order-1 lg:oder-2 flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/krado/user-persona-2.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-green-600 p-6 w-full">
          <p className="text-white-100">
            <span className="font-bold">Name:</span> Leo Harrison
          </p>
          <p className="text-white-100">
            <span className="font-bold">Role:</span> Tech-Savvy Home Gardener
          </p>
          <p className="text-white-100">
            <span className="font-bold">Background:</span> Leo is a 28-year-old
            UX designer working remotely. He has a growing collection of
            houseplants and enjoys experimenting with smart home solutions.
            He&apos;s always on the lookout for tech-based solutions that help
            him optimize daily tasks, including plant care.
          </p>
        </div>
      </div>
    </div>
  );
}
