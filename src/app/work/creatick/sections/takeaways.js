export default function Takeaways() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 bg-blue-600 rounded-2xl p-4 md:p-8">
      {/* First block */}
      <div className="flex flex-col gap-3 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Client:</h6>
          <p>
            Creatick - A social media management platform for Instagram users,
            businesses, and content creators.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Industry:</h6>
          <p>Social Media & Digital Marketing</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Scope of Work:</h6>
          <ul className="list-disc ml-4">
            <li className="body">UX Research & Strategy</li>
            <li className="body">
              UI/UX Design (Wireframing, Prototyping, High-Fidelity Designs)
            </li>
            <li className="body">Website & Mobile App Development</li>
            <li className="body">User Testing & Iterations</li>
            <li className="body">Deployment & Post-Launch Support</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
          <h6>Tech Stack:</h6>
          <ul className="list-disc ml-4">
            <li className="body">
              <span className="font-bold">Frontend:</span> Next.js
            </li>
            <li className="body">
              <span className="font-bold">Backend:</span> Firebase
            </li>
            <li className="body">
              <span className="font-bold">Version Control:</span> GitHub
            </li>
            <li className="body">
              <span className="font-bold">Project Management:</span> ClickUp
            </li>
          </ul>
        </div>
      </div>
      {/* My Role: */}
      <div className="flex flex-col gap-6 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <h5>My Role:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Conducted user research and created personas, wireframes, and
            prototypes to define user needs.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Designed an intuitive and visually appealing UI/UX for both web and
            mobile platforms.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Developed the frontend using Next.js, ensuring high performance and
            responsiveness.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Collaborated with stakeholders to align business goals with user
            needs.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Managed the project in an agile environment, ensuring iterative
            improvements based on feedback.
          </p>
        </div>
      </div>
      {/* Key Features: */}
      <div className="flex flex-col gap-6 bg-white-200 dark:bg-black-500 rounded-2xl p-4 md:p-6">
        <h5>Key Features:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">
              Post Scheduling & Content Calendar
            </span>{" "}
            - Users could plan posts, stories, and reels in advance.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">
              Instagram Direct Messaging Management
            </span>{" "}
            - Enabled seamless communication with followers.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Advanced Analytics & Reporting</span> -
            Provided detailed insights on engagement and content performance.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">
              Customizable Caption & Hashtag Library
            </span>{" "}
            - Allowed users to save and reuse content easily.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            <span className="font-bold">Multi-Account Management</span> -
            Supported handling multiple Instagram accounts from one dashboard.
          </p>
        </div>
      </div>
      {/* Results: */}
      <div className="flex flex-col gap-6 bg-blue-100 rounded-2xl p-4 md:p-6">
        <h5 className="text-black-600">Results:</h5>
        <div className="flex flex-col gap-3">
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Improved user engagement and retention by designing an intuitive,
            easy-to-use platform.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Streamlined social media management, saving users an estimated 40%
            of their scheduling time.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Successfully launched a fully functional website and mobile app,
            enhancing brand visibility.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Increased user satisfaction through data-driven iterations and
            improvements post-launch.
          </p>
          <p className="inline bg-white-100 dark:bg-black-600 rounded-2xl gap-2.5 px-6 py-4">
            Developed a scalable and responsive product ready for future growth
            and expansion.
          </p>
        </div>
      </div>
    </div>
  );
}
