"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize theme in localStorage if it doesn't exist
    if (!localStorage.getItem("portfolio-theme")) {
      localStorage.setItem("portfolio-theme", "system");
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
          <main className="bg-surface-primary min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
