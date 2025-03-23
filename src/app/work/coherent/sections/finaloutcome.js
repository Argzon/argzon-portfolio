export default function FinalOutcome() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* First Item */}
      <div className="px-8 pb-8 pt-16 rounded-2xl bg-purple-100 relative w-full">
        {/* icon */}
        <div className="absolute -top-6 left-2.5">
          <div className="flex items-center justify-center w-[84px] h-[78px] bg-purple-100 border-[3px] border-white-100 rounded-2xl">
            <svg
              width="27"
              height="20"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.666 3L9.91602 17L3.66602 10.6364"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="subtitle text-black-600 text-center">
          Enhanced user engagement through a visually compelling and structured
          layout.
        </p>
      </div>
      {/* Second Item */}
      <div className="px-8 pb-8 pt-16 rounded-2xl bg-purple-200 relative w-full">
        {/* icon */}
        <div className="absolute -top-6 left-2.5">
          <div className="flex items-center justify-center w-[84px] h-[78px] bg-purple-100 border-[3px] border-white-100 rounded-2xl">
            <svg
              width="27"
              height="20"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.666 3L9.91602 17L3.66602 10.6364"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="subtitle text-black-600 text-center">
          Improved navigation, making it easier for users to find key
          information.
        </p>
      </div>
      {/* Third Item */}
      <div className="px-8 pb-8 pt-16 rounded-2xl bg-purple-100 relative w-full">
        {/* icon */}
        <div className="absolute -top-6 left-2.5">
          <div className="flex items-center justify-center w-[84px] h-[78px] bg-purple-100 border-[3px] border-white-100 rounded-2xl">
            <svg
              width="27"
              height="20"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.666 3L9.91602 17L3.66602 10.6364"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="subtitle text-black-600 text-center">
          Differentiated Coherent from competitors by effectively showcasing its
          unique approach.
        </p>
      </div>
    </div>
  );
}
