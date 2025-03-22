export default function UserPersona1() {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl bg-white-200 dark:bg-black-500 overflow-hidden">
      <div
        className="flex items-end bg-white-300 p-4 md:p-[30px] h-[520px] w-full lg:w-[544px] lg:h-auto shrink-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/assets/portfolio-images/cryptico/user-persona-1.jpg')",
        }}
      >
        <div className="flex flex-col gap-2.5 rounded-2xl bg-yellow-500 p-6 w-full">
          <p className="text-black-600">
            <span className="font-bold">Name:</span> Oliver Bennett
          </p>
          <p className="text-black-600">
            <span className="font-bold">Role:</span> Retail Crypto Investor
          </p>
          <p className="text-black-600">
            <span className="font-bold">Background:</span> Oliver is a
            32-year-old marketing specialist who started investing in crypto as
            a side hobby. With moderate experience in traditional stock trading,
            he&apos;s eager to explore crypto but often feels overwhelmed by the
            complexity of most platforms.
          </p>
        </div>
      </div>
      <div className="pt-[35px] md:p-[30px] w-full flex flex-col gap-[50px]">
        {/* Goals */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Goals:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-yellow-200 px-6 py-4 w-fit">
              Easily track his portfolio and market trends in real-time.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-200 px-6 py-4 w-fit">
              Execute quick buy/sell orders without complex technical steps.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-200 px-6 py-4 w-fit">
              Use a secure platform that protects his investments.
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col gap-6 px-4 md:px-0">
          <h5>Pain Points:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-yellow-300 px-6 py-4 w-fit">
              Confusing interface on existing platforms.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-300 px-6 py-4 w-fit">
              Lack of transparency in fees and security policies.
            </p>
            <p className="text-black-600 rounded-2xl bg-yellow-300 px-6 py-4 w-fit">
              Too many unnecessary features designed for advanced traders.
            </p>
          </div>
        </div>
        {/* Key Finding */}
        <div className="flex flex-col gap-6 bg-green-200 rounded-2xl p-6">
          <h5 className="text-black-600">Key Finding:</h5>
          <div className="flex flex-col gap-4">
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Needs a simplified interface with clear call-to-actions.
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Prefers mobile-first platforms to manage trades on the go.
            </p>
            <p className="text-black-600 rounded-2xl bg-white-100 px-6 py-4 w-fit">
              Security and trustworthiness are top priorities when choosing a
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
