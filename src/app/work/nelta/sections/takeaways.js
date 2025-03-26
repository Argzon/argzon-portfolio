export default function Takeaways() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 bg-blue-600 rounded-2xl p-4 md:p-8">
      {/* First block */}
      <div className="flex flex-col gap-3 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Client:</h6>
          <p>Nelta - TÜV-certified IT consulting company</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Industry:</h6>
          <p>
            IT Consulting (Automotive, Finance, E-commerce, Healthcare,
            Government)
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Scope of Work:</h6>
          <p>UX Research, UI Design, Full-Stack Development</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Tech Stack:</h6>
          <p>Next.js, Strapi, GitHub, Jira, Figma</p>
        </div>
      </div>
      {/* My Role: */}
      <div className="flex flex-col gap-6 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <h5>My Role:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Led the entire design and development process from concept to launch
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Collaborated directly with stakeholders to align business goals with
            user needs
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Managed agile sprints and feedback loops for continuous improvements
          </p>
        </div>
      </div>
      {/* Key Features: */}
      <div className="flex flex-col gap-6 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <h5>Key Features:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Modern, responsive design aligned with brand identity
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Intuitive navigation and improved user experience
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Seamless content management system with Strapi
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            High-performance, scalable architecture
          </p>
        </div>
      </div>
      {/* Results: */}
      <div className="flex flex-col gap-6 bg-blue-100 rounded-2xl p-4 md:p-6">
        <h5 className="text-black-600">Results:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Enhanced brand positioning
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Increased user engagement
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Improved content flow and scalability
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Positive client feedback
          </p>
        </div>
      </div>
    </div>
  );
}
