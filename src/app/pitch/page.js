import Header from "@/components/redesign/Header";
import Footer from "@/components/redesign/Footer";

// We primarily want a full screen experience, but we can reuse the Header if needed.
// For a pitch deck, it's often better to have a dedicated navigation or just "Next/Prev".

// However, let's keep the standard layout structure if the user wants to navigate back easily.
// Actually, usually pitch decks are immersive. I'll make it immersive but with a "Close" button.

import Deck from "@/components/pitch/Deck";

export default function PitchPage() {
  return (
    <main className="w-full h-screen relative">
      <Deck />
    </main>
  );
}
