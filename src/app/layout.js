"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import ReactLenis from "@studio-freight/react-lenis";
import { PostHogProvider } from "../components/PostHogProvider";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize theme in localStorage if it doesn't exist
    if (!localStorage.getItem("portfolio-theme")) {
      localStorage.setItem("portfolio-theme", "system");
    }
  }, []);

  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta
            name="apple-mobile-web-app-title"
            content="Argzon's Portfolio"
          />
        </head>
        <body>
          <PostHogProvider>
            <ThemeProvider attribute="class" forcedTheme="light">
              <main className="bg-surface-primary min-h-screen">
                <ReactLenis root>
                  <ScrollToTop />
                  {children}
                </ReactLenis>
                <Analytics />
                <SpeedInsights />
              </main>
            </ThemeProvider>
          </PostHogProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
