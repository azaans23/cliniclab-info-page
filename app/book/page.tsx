"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

export default function BookPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200/20 via-neutral-50 to-neutral-50 dark:from-neutral-900/20 dark:via-neutral-950 dark:to-neutral-950 pointer-events-none" />

      {/* Animated Glowing Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Logo at Top Right */}
      <div className="fixed top-6 right-6 z-50 flex items-end gap-1">
        <Image
          src="/cliniclab-logo.png"
          alt="Clinic Lab AI Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-neutral-900 dark:text-white">Clinic Lab{" "}</span>
          <span className="text-sky-500">AI</span>
        </h1>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Heading Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            <span className="text-white">Book a </span>
            <span className="text-sky-400">
              Direct AI Patient System Call
            </span>
            <span className="text-white"> Below</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-200">
            See how AI will{" "}
            <span className="font-semibold text-sky-400">change the game</span>{" "}
            in your dental practice.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="w-full">
          <div className="w-full overflow-hidden rounded-lg bg-white/90 dark:bg-neutral-900/90 shadow-2xl border border-neutral-200/70 dark:border-neutral-800/70">
            <iframe
              src="https://link.cliniclab.ai/widget/booking/1vPDtpCW6IYhWsxzfIXy"
              style={{ width: "100%", border: "none", minHeight: "800px" }}
              scrolling="yes"
              id="cliniclab-booking-widget-book-page"
              className="w-full"
            />
          </div>
          <Script
            src="https://link.cliniclab.ai/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>

        {/* Footer Copy */}
        <div className="mt-16 text-center text-sm text-neutral-500 dark:text-neutral-500">
          <p>
            After booking, you&apos;ll receive a confirmation email with all of
            your call details.
          </p>
        </div>
      </div>
    </div>
  );
}


