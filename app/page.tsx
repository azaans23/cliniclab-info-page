"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

export default function LandingPage() {
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
          <span className="text-neutral-900 dark:text-white">Clinic Lab </span>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Warning Banner */}
        <div className="mb-6 text-center">
          <p className="text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400">
            ⚠️ WARNING: THIS AI IS ONLY FOR MEDICAL PRACTICE OWNERS ABLE TO HANDLE 50+ NEW PATIENTS A MONTH!
          </p>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4 leading-tight">
            Our new AI will{" "}
            <span className="text-sky-500">GET YOU 50+ HIGH-VALUE PATIENTS</span>{" "}
            In Your Chair Every Month
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-neutral-700 dark:text-neutral-300 italic">
            While You Sleep!
          </p>
        </div>

        {/* Survey Section */}
        <div id="survey-section" className="mb-16">
          {/* ClinicLab Survey Embed */}
          <div className="w-full">
            <iframe
              src="https://link.cliniclab.ai/widget/survey/O5TNUWhQ0291mmjtuPpC"
              style={{ border: "none", width: "100%", minHeight: "500px" }}
              scrolling="no"
              id="O5TNUWhQ0291mmjtuPpC"
              title="survey"
              className="w-full"
            />
          </div>
          <Script
            src="https://link.cliniclab.ai/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-neutral-900 dark:text-white mb-12 uppercase tracking-tight">
            HERE ARE SOME REASONS WHY YOU SHOULD CHOOSE TO WORK WITH US
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Benefit 1 */}
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 dark:bg-sky-500/20">
                  <Users className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
                  We Handle The{" "}
                  <span className="text-sky-500">PATIENTS FOR YOU</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  Our AI-driven system and in-house team manage patient inquiries,
                  qualify them, and book appointments directly into your calendar.
                </p>
                <p className="text-lg font-bold text-neutral-900 dark:text-white">
                  You focus on care—we handle the scheduling.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 dark:bg-sky-500/20">
                  <ShieldCheck className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
                  No{" "}
                  <span className="text-sky-500">No-Shows Or Unqualified Patients</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  We rigorously vet every new lead using smart AI filters before
                  they&apos;re ever booked — no more wasted consults or fake requests.
                </p>
                <p className="text-lg font-bold text-neutral-900 dark:text-white">
                  This ensures your team only talks to real patients who are ready
                  to move forward.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 dark:bg-sky-500/20">
                  <TrendingUp className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
                  <span className="text-sky-500">SAVE MONEY AND SCALE</span> YOUR PRACTICE
                </h3>
                <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  We don&apos;t sell leads. We install a done-for-you system that
                  answers patient inquiries, qualifies them instantly, and fills your
                  schedule — without the overhead of extra employees.
                </p>
                <p className="text-lg font-bold text-neutral-900 dark:text-white">
                  Our tech becomes your front desk. Our campaigns bring in new
                  patients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-to-br from-sky-500 via-sky-600 to-indigo-600 border-0 shadow-2xl overflow-hidden">
            <CardContent className="pt-16 pb-16 px-6 sm:px-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 uppercase tracking-tight">
                YES, I WANT AN AI TEAM FOR MY PRACTICE
              </h2>
              <p className="text-xl sm:text-2xl text-white/95 mb-8 font-semibold">
                Limited Spots Available
              </p>
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-neutral-50 text-xl px-10 py-7 h-auto font-extrabold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                onClick={() => {
                  const surveySection = document.getElementById("survey-section");
                  if (surveySection) {
                    surveySection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-600 dark:text-neutral-400 font-semibold mb-2">
            Clinic Lab AI
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © 2025 Clinic Lab AI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
