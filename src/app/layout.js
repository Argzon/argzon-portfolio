"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import { View } from "lucide-react";
import ReactLenis from "@studio-freight/react-lenis";

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
        </body>
      </html>
    </ViewTransitions>
  );
}
