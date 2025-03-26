export default function UserPersona2() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div className="order-2 lg:order-1 pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-yellow-200 px-6 py-4 w-fit">
              Access real-time market data without delays.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-200 px-6 py-4 w-fit">
              Customize alerts and portfolio tracking tools.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-200 px-6 py-4 w-fit">
              Use advanced charting tools for in-depth technical analysis.
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-yellow-300 px-6 py-4 w-fit">
              Poorly optimized mobile apps that lag during peak market hours.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-300 px-6 py-4 w-fit">
              Complicated navigation for setting up custom alerts.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-300 px-6 py-4 w-fit">
              Lack of multi-factor authentication on some platforms.
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-200 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Values speed and performance over fancy UI elements.
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs a consistent experience across web and mobile.
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Advanced features should be accessible without cluttering the
              interface.
            </p>
          </div>
        </div>
      </div>
      <div
        className="order-1 lg:oder-2 flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/cryptico/user-persona-2.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-yellow-500 p-6 w-full">
          <p className="text-black-600">
            <span className="font-bold">Name:</span> Marcus Rivera
          </p>
          <p className="text-black-600">
            <span className="font-bold">Role:</span> Experienced Crypto Trader
          </p>
          <p className="text-black-600">
            <span className="font-bold">Background:</span> Marcus is a
            40-year-old freelance software developer who has been trading
            cryptocurrencies for over five years. He relies on crypto trading as
            a significant income stream and prefers platforms that offer
            advanced features without sacrificing usability.
          </p>
        </div>
      </div>
    </div>
  );
}
