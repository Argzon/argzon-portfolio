"use client";
import { useTheme } from "next-themes";

export default function Typography() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="py-20 px-10 gap-16 flex flex-col">
      {/* Typography indicator */}
      <div className="flex sm:flex-row flex-col gap-[10px] text-center">
        <div className="bg-white-300 dark:bg-black-500 rounded-full p-4 text-primary font-archiv font-bold">
          🃏 Typography
        </div>
        <div className="bg-white-300 dark:bg-black-500 rounded-full p-4 text-primary font-archiv font-bold">
          <span className="hidden sm:inline">💻 Desktop</span>
          <span className="sm:hidden">📱 Mobile</span>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-white-300 dark:bg-black-500 rounded-full p-4 text-primary font-archiv font-bold cursor-pointer hover:bg-white-400 dark:hover:bg-black-400 transition-colors"
        >
          <span className="dark:hidden">☀️ Light mode</span>
          <span className="hidden dark:block">🌙 Dark mode</span>
        </button>
      </div>

      {/* Headings Typography */}
      <div className="flex flex-col gap-6">
        <div className="font-archiv font-bold text-5xl">
          Headings Typography
        </div>
        <div className="flex sm:flex-row gap-4 flex-col justify-between">
          <div className="font-archiv font-bold text-4xl">Headers</div>
          <p className="font-work text-xl">
            For all the headings of the website, including the main title and
            the titles for the rest of the pages for example on the case
            studies.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* H1 */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">H1</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Archiv Grotesk Bold</div>
              <div className="font-archiv text-sm">80px / 120%</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>The quick brown fox jumps over the lazy dog.</h1>
              <div className="font-archiv text-sm">Main title of the page</div>
            </div>
          </div>
        </div>
        {/* H2 */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">H2</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Archiv Grotesk Bold</div>
              <div className="font-archiv text-sm">61px / 120%</div>
            </div>
            <div className="flex flex-col gap-2">
              <h2>The quick brown fox jumps over the lazy dog.</h2>
              <div className="font-archiv text-sm">
                Important titles throughout the site
              </div>
            </div>
          </div>
        </div>
        {/* H3 */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">H3</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Archiv Grotesk Bold</div>
              <div className="font-archiv text-sm">47px / 120%</div>
            </div>
            <div className="flex flex-col gap-2">
              <h3>The quick brown fox jumps over the lazy dog.</h3>
              <div className="font-archiv text-sm">Titles of the sections</div>
            </div>
          </div>
        </div>
        {/* H4 */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">H4</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Archiv Grotesk Bold</div>
              <div className="font-archiv text-sm">34px / 120%</div>
            </div>
            <div className="flex flex-col gap-2">
              <h4>The quick brown fox jumps over the lazy dog.</h4>
              <div className="font-archiv text-sm">Titles of the sections</div>
            </div>
          </div>
        </div>
        {/* H5 */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">H5</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Archiv Grotesk Bold</div>
              <div className="font-archiv text-sm">27px / 120%</div>
            </div>
            <div className="flex flex-col gap-2">
              <h5>The quick brown fox jumps over the lazy dog.</h5>
              <div className="font-archiv text-sm">Titles of the sections</div>
            </div>
          </div>
        </div>
        {/* H6 */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">H6</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Archiv Grotesk Bold</div>
              <div className="font-archiv text-sm">21px / 120%</div>
            </div>
            <div className="flex flex-col gap-2">
              <h6>The quick brown fox jumps over the lazy dog.</h6>
              <div className="font-archiv text-sm">
                Titles of the sections, important small headers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Typography */}
      <div className="flex flex-col gap-6">
        <div className="font-archiv font-bold text-5xl">Body Typography</div>
        <div className="flex sm:flex-row flex-col gap-4 justify-between">
          <div className="font-archiv font-bold text-4xl">Body</div>
          <p className="font-work text-xl">
            For all the website's content text, which doesn't include the
            headings. It includes the CTA's excerpts, and all information.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Subtitle */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">Subtitle</div>
          <div className="flex sm:flex-row gap-4 flex-col ">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Work Sans Regular</div>
              <div className="font-archiv text-sm">18px / 120% / -4%</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="subtitle">
                The quick brown fox jumps over the lazy dog.
              </p>
              <div className="font-archiv text-sm">
                When a short paragraph is needed the subtitle style can be used
              </div>
            </div>
          </div>
        </div>
        {/* Paragraph */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">Paragraph</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Work Sans Regular</div>
              <div className="font-archiv text-sm">16px / 120% / -4%</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="body">
                The quick brown fox jumps over the lazy dog.
              </p>
              <div className="font-archiv text-sm">
                Used as the main paragraph style
              </div>
            </div>
          </div>
        </div>
        {/* Label */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">Label</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Work Sans Regular</div>
              <div className="font-archiv text-sm">14px / 120% / -4%</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="label">
                The quick brown fox jumps over the lazy dog.
              </p>
              <div className="font-archiv text-sm">
                Used for labels, small piece of content
              </div>
            </div>
          </div>
        </div>
        {/* Tooltip */}
        <div className="flex flex-col gap-6">
          <div className="font-archiv font-bold text-2xl">Tooltip</div>
          <div className="flex sm:flex-row gap-4 flex-col">
            <div className="min-w-[200px] flex flex-col gap-2">
              <div className="font-archiv text-sm">Work Sans Regular</div>
              <div className="font-archiv text-sm">10px / 120% / -4%</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="tooltip">
                The quick brown fox jumps over the lazy dog.
              </p>
              <div className="font-archiv text-sm">
                Mainly for tooltips when needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
