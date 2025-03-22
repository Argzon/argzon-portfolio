export default function ComparisonTable() {
  return (
    <div className="h-full flex flex-col gap-2 overflow-x-auto pb-4">
      <div className="flex flex-row gap-4 w-full py-3">
        <p className="subtitle px-4 py-2 rounded-2xl bg-black-500 text-white-100 dark:bg-white-600 dark:text-black-600 w-[203px] shrink-0">
          Feature / Platform
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-yellow-300 text-black-600 dark:bg-yellow-600 w-[232px] shrink-0">
          Cryptico 🚀
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-white-200 text-black-600 dark:bg-black-600 dark:text-white-100 w-[222px] shrink-0">
          Binance
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-white-200 text-black-600 dark:bg-black-600 dark:text-white-100 w-[222px] shrink-0">
          Coinbase
        </p>
        <p className="subtitle px-4 py-2 rounded-2xl bg-white-200 text-black-600 dark:bg-black-600 dark:text-white-100 w-[232px] shrink-0">
          Kraken
        </p>
      </div>
      <div className="flex flex-row gap-2 min-w-fit">
        {/* Features Column */}
        <div className="shrink-0 bg-black-500 dark:bg-white-600 rounded-2xl p-3 w-[203px] h-auto flex flex-col justify-between">
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            User Interface
          </p>
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            Beginner-Friendly UX
          </p>
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            Trading Experience
          </p>
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            Portfolio Management
          </p>
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            Security & Authentication
          </p>
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            Cross-Platform Consistency
          </p>
          <p className="font-bold text-white-100 dark:text-black-600 h-[38px]">
            Performance & Speed
          </p>
        </div>
        {/* Comparison companies */}
        <div className="flex flex-row rounded-2xl overflow-hidden">
          {/* Cryptico */}
          <div className="shrink-0 bg-yellow-300 dark:bg-yellow-600 flex flex-col w-[243px] gap-[42px] p-3">
            <p className="text-black-600 h-[38px]">
              Modern, sleek dark mode with customizable UI
            </p>
            <p className="text-black-600 h-[38px]">
              Guided onboarding, tooltips, and explainer videos
            </p>
            <p className="text-black-600 h-[38px]">
              Intuitive, one-click trading with real-time market updates
            </p>
            <p className="text-black-600 h-[38px]">
              Customizable tracking, smart insights, and alerts
            </p>
            <p className="text-black-600 h-[38px]">
              Multi-factor authentication (MFA) & encrypted transactions
            </p>
            <p className="text-black-600 h-[38px]">
              Seamless experience across web & mobile
            </p>
            <p className="text-black-600 h-[38px]">
              Optimized for fast load times and smooth interactions
            </p>
          </div>
          {/* Binance */}
          <div className="shrink-0 bg-white-200 dark:bg-black-600 flex flex-col w-[243px] gap-[42px] border border-white-300 dark:border-black-500 p-3">
            <p className="h-[38px]">Complex and crowded UI</p>
            <p className="h-[38px]">Steep learning curve</p>
            <p className="h-[38px]">Feature-packed but overwhelming</p>
            <p className="h-[38px]">Basic portfolio view</p>
            <p className="h-[38px]">Strong security but complex KYC process</p>
            <p className="h-[38px]">Mobile app differs from desktop UX</p>
            <p className="h-[38px]">Sometimes slow due to heavy UI </p>
          </div>
          {/* Coinbase */}
          <div className="shrink-0 bg-white-200 dark:bg-black-600 flex flex-col w-[243px] gap-[42px] border border-white-300 dark:border-black-500 p-3">
            <p className="h-[38px]">Simple but limited customization</p>
            <p className="h-[38px]">Very beginner-friendly</p>
            <p className="h-[38px]">Simplified trading for retail users</p>
            <p className="h-[38px]">Easy tracking but lacks customization</p>
            <p className="h-[38px]">Good security, but basic 2FA options</p>
            <p className="h-[38px]">Great mobile experience</p>
            <p className="h-[38px]">Fast and responsive</p>
          </div>
          {/* Kraken */}
          <div className="shrink-0 bg-white-200 dark:bg-black-600 flex flex-col w-[243px] gap-[42px] border border-white-300 dark:border-black-500 p-3">
            <p className="h-[38px]">Professional but slightly outdated</p>
            <p className="h-[38px]">Moderate learning curve</p>
            <p className="h-[38px]">Advanced tools, but can feel complex</p>
            <p className="h-[38px]">
              Advanced analytics for experienced traders
            </p>
            <p className="h-[38px]">
              High security, but slow verification process
            </p>
            <p className="h-[38px]">
              Desktop-focused, mobile slightly different
            </p>
            <p className="h-[38px]">Can lag under heavy load</p>
          </div>
        </div>
      </div>
    </div>
  );
}
