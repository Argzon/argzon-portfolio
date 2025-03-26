export default function Takeaways() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 bg-yellow-400 rounded-2xl p-4 md:p-8">
      {/* First block */}
      <div className="flex flex-col gap-3 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Client:</h6>
          <p>Cryptico (A Next-Gen Cryptocurrency Trading Platform)</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Industry:</h6>
          <p>Fintech / Cryptocurrency</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Scope of Work:</h6>
          <p>UI/UX Design, Research, Prototyping, Frontend Development</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Tech Stack:</h6>
          <p>Next.js, Supabase, Tailwind CSS, Chart.js, GitHub</p>
        </div>
      </div>
      {/* My Role: */}
      <div className="flex flex-col gap-6 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <h5>My Role:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Led end-to-end UI/UX design from research to high-fidelity
            prototypes.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Developed responsive front-end components for seamless web and
            mobile experiences.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Conducted user research & usability testing to refine the trading
            workflow.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Designed interactive dashboards for real-time market data
            visualization.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Ensured cross-platform consistency for a smooth user experience.
          </p>
        </div>
      </div>
      {/* Key Features: */}
      <div className="flex flex-col gap-6 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <h5>Key Features:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Real-time trading dashboard</span> with
            live market data and price alerts.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Secure authentication</span> with
            multi-factor authentication (MFA).
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Customizable portfolio tracking</span>{" "}
            with profit/loss analytics.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Intuitive order placement</span> with
            market, limit, and stop-loss orders.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Dark-mode UI</span> for a modern and
            professional trading experience.
          </p>
        </div>
      </div>
      {/* Results: */}
      <div className="flex flex-col gap-6 bg-yellow-500 rounded-2xl p-4 md:p-6">
        <h5 className="text-black-600">Results:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Increased user engagement</span> with an
            intuitive, mobile-friendly trading interface.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Higher conversion rates</span> due to a
            streamlined onboarding and KYC process.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Enhanced platform security</span>,
            leading to improved trust among traders.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Reduced trade execution time</span>{" "}
            through optimized UI interactions.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Competitive differentiation</span> by
            addressing common UX pain points in crypto trading.
          </p>
        </div>
      </div>
    </div>
  );
}
