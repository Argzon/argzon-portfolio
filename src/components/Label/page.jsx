export default function Label({ title, description = null }) {
  return (
    <div className="flex flex-col gap-2.5 w-fit">
      <p className="bg-white-200 hover:bg-white-300 dark:bg-black-500 dark:hover:bg-black-400 px-6 py-4 rounded-2xl w-fit transition-all duration-300">
        {title}
      </p>
      {description && <p>{description}</p>}
    </div>
  );
}
