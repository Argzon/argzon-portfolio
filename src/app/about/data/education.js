import educationInfo from "./educationInformation.json";

export const educationData = educationInfo.education.map((education) => ({
  title: education.period,
  location: education.location,
  content: (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h5>{education.degree}</h5>
        <h6>{education.school}</h6>
      </div>
      {education.more && education.more.length > 0 && (
        <ul className="flex flex-col gap-2 body text-body">
          {education.more.map((more, index) => (
            <li key={index} className="flex gap-2">
              <div className="h-[5px] w-[5px] bg-white-400 rounded-full shrink-0 mt-1.5"></div>
              {more}
            </li>
          ))}
        </ul>
      )}
    </div>
  ),
}));
