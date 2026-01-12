export const metadata = {
  title: "Pitch Deck - Argzon Haziraj",
  description: "Presentation regarding my skills, experience and works.",
};

export default function PitchLayout({ children }) {
  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-indigo-500 selection:text-white overflow-hidden">
      {children}
    </div>
  );
}
