export default function Color({
  color,
  hex,
  rating,
  ratingText,
  labelColor = "dark",
  isFirst = false,
}) {
  return (
    <div
      className={`h-[414px] w-full ${
        color.startsWith("bg-") ? color : `bg-${color}`
      } p-[30px] rounded-[20px] justify-between flex flex-col ${
        isFirst ? "" : "-ml-9"
      }`}
    >
      <h6
        className={`${
          labelColor === "dark" ? "text-black-600" : "text-white-100"
        }`}
      >
        {color.replace("bg-", "")}
      </h6>
      <div className="flex flex-col gap-5">
        <div className="bg-white-100 w-fit text-black-600 flex gap-1 p-2 rounded-[10px]">
          <span
            className={`w-[23px] h-[23px] ${
              color.startsWith("bg-") ? color : `bg-${color}`
            } rounded-full block`}
          ></span>
          <span>#</span>
          <span>{hex}</span>
        </div>
        <div className="bg-white-100 w-fit text-black-600 flex gap-1 p-2 rounded-[10px]">
          <span>{ratingText}</span>
          <span className="font-bold">{rating}</span>
          <span>:</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
