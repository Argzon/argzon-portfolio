"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // If lenis is available, use it to scroll to top immediately
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native window scroll
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}
