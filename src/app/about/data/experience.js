import experienceInfo from "./experienceInformation.json";

export const experienceData = experienceInfo.experiences.map((experience) => ({
  title: experience.period,
  location: experience.location,
  content: (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h5>{experience.position}</h5>
        <h6>{experience.company}</h6>
      </div>
      <ul className="flex flex-col gap-2 body text-body">
        {experience.achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2">
            <div className="h-[5px] w-[5px] bg-white-400 rounded-full shrink-0 mt-1.5"></div>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  ),
}));
