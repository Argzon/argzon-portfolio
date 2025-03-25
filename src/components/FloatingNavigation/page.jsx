"use client";
import { useEffect, useRef } from "react";

export default function FloatingNavigation({
  showFloatingNav,
  activeSection,
  sections,
  scrollToSection,
}) {
  const activeButtonRef = useRef(null);

  useEffect(() => {
    if (activeButtonRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  return (
    <>
      {showFloatingNav && (
        <div className="flex items-center justify-center max-w-7xl mx-auto z-50">
          <div
            className={`fixed bottom-6 flex items-center justify-start md:justify-center rounded-lg p-1 gap-2 overflow-x-auto overflow-y-hidden border border-white-100/50 backdrop-blur-[27px] bg-gradient-to-tr from-white via-white/50 to-white/20 shadow-[5px_6px_20px_0px_rgba(0,0,0,0.15)] max-w-[calc(100%-100px)] md:max-w-none mx-4 md:mx-0 transition-all duration-700 ease-in-out transform ${
              showFloatingNav
                ? "translate-y-0 opacity-100"
                : "translate-y-[150%] opacity-0"
            }`}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                ref={activeSection === section.id ? activeButtonRef : null}
                onClick={() => scrollToSection(section.id)}
                className={`label text-black-600 flex items-center shrink-0 justify-center p-2 md:p-2.5 rounded cursor-pointer hover:bg-white-300 transition-all whitespace-nowrap ${
                  activeSection === section.id ? "bg-white-400" : ""
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
