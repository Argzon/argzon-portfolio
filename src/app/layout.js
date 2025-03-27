"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import ReactLenis from "@studio-freight/react-lenis";
import { PostHogProvider } from "../components/PostHogProvider";

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
          <meta property="og:image" content="<generated>" />
          <meta property="og:image:type" content="<generated>" />
          <meta property="og:image:width" content="<generated>" />
          <meta property="og:image:height" content="<generated>" />
          <meta name="twitter:image" content="<generated>" />
          <meta name="twitter:image:type" content="<generated>" />
          <meta name="twitter:image:width" content="<generated>" />
          <meta name="twitter:image:height" content="<generated>" />
        </head>
        <body>
          <PostHogProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="portfolio-theme"
              resolver={(theme, systemTheme) => {
                if (theme === "system") {
                  return systemTheme || "light";
                }
                return theme;
              }}
            >
              <main className="bg-surface-primary min-h-screen">
                <ReactLenis root>{children}</ReactLenis>
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
