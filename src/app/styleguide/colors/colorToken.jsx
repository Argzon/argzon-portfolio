import { useTheme } from "next-themes";

export default function ColorToken({
  color,
  colorVariable,
  rating,
  ratingText,
  isFirst = false,
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`h-[414px] w-full ${color} p-[30px] rounded-[20px] justify-between flex flex-col ${
        isFirst ? "" : "-ml-9"
      }`}
    >
      <h6
        className={`${theme === "dark" ? "text-black-600" : "text-white-100"}`}
      >
        {color}
      </h6>
      <div className="flex flex-row gap-5">
        <div
          className={`${
            theme === "dark"
              ? "bg-black-600  text-white-100"
              : "bg-white-100 text-black-600"
          } w-fit flex gap-1 p-2 rounded-[10px]`}
        >
          <span
            className={`w-[23px] h-[23px] ${color} rounded-full block`}
          ></span>
          <span>@</span>
          <span>{colorVariable}</span>
        </div>
        <div
          className={`${
            theme === "dark"
              ? "bg-black-600  text-white-100"
              : "bg-white-100 text-black-600"
          } w-fit flex gap-1 p-2 rounded-[10px]`}
        >
          <span>{ratingText}</span>
          <span className="font-bold">{rating}</span>
          <span>:</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
