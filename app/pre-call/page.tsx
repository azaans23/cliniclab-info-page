"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function PreCallPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: '"I feel less pressure... it\'s like a safety net!"',
      author: "— Dr. Anthony & Dr. Lauren",
      videoUrl:
        "https://www.loom.com/embed/bd221950a9bc4aee9bfb2796574d943b",
    },
    {
      quote:
        '"I was really apprehensive when we started... Really helpful, big time-saver!"',
      author: "— Julie Koval, Office Manager",
      videoUrl:
        "https://www.loom.com/embed/4ab57de9b9d64d7bac8ee986c6fb1548",
    },
    {
      quote: '"Remarkable accuracy and empathy."',
      author: "— Dr. Shantz, APRN",
      videoUrl:
        "https://www.loom.com/embed/063d2fdccf374d3b991ed45469808b20",
    },
    {
      quote: "$890K/Month to $1.2M in Under 60 Days | Case Study",
      author: "— Kirkland Dental",
      videoUrl:
        "https://www.loom.com/embed/092130bd8df148ca81012276391e5eb8",
    },
    {
      quote: '"It\'s the best decision I\'ve made administratively."',
      author: "— Dr. Ivry, Implant Surgeon",
      videoUrl:
        "https://www.loom.com/embed/53fd98038cc34a47a62ed185666340ac",
    },
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Initialize theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-16">
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Pre‑Call Success Page
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
            Follow the simple steps below so you&apos;re fully prepared to{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              get maximum value
            </span>{" "}
            from your strategy call.
          </p>
        </div>

        {/* Step 1 */}
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Step 1
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
            MUST WATCH BEFORE YOUR CALL
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Watch below to find out how to add{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              $1M+ to your company&apos;s annual revenue
            </span>
            .
          </p>

          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-2xl overflow-hidden mt-4">
            <CardContent className="p-0">
              <div
                className="relative w-full"
                style={{ paddingBottom: "42.15456674473068%" }}
              >
                {/* Reuse your main explainer video – swap the URL if you have a dedicated pre-call video */}
                <iframe
                  src="https://www.loom.com/embed/f1740373967e4294831185523b1225b1?sid=ac3c5f46-f894-4c47-91dd-6987fd461544"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Step 2 – Pre-call checklist */}
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Step 2
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
            PRE‑CALL CHECKLIST
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Take 2–3 minutes to complete this checklist so we can make your
            call as actionable and personalized as possible.
          </p>

          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-lg">
            <CardContent className="pt-6 pb-6 px-6 sm:px-8">
              <ul className="space-y-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-500 text-xs font-semibold text-sky-500">
                    1
                  </span>
                  <span>
                    Confirm that{" "}
                    <span className="font-semibold">
                      all key decision‑makers
                    </span>{" "}
                    can attend the call (owner, practice manager, or marketing
                    lead).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-500 text-xs font-semibold text-sky-500">
                    2
                  </span>
                  <span>
                    Have your{" "}
                    <span className="font-semibold">
                      last 3–6 months of new‑patient numbers
                    </span>{" "}
                    and revenue handy so we can model the impact of the Direct
                    AI Patient System.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-500 text-xs font-semibold text-sky-500">
                    3
                  </span>
                  <span>
                    Make sure you&apos;re able to{" "}
                    <span className="font-semibold">
                      join from a quiet location
                    </span>{" "}
                    (not between patients or while driving) so we can focus on
                    strategy.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-500 text-xs font-semibold text-sky-500">
                    4
                  </span>
                  <span>
                    Write down{" "}
                    <span className="font-semibold">
                      your top 3 questions
                    </span>{" "}
                    about AI, call handling, or implementation so nothing gets
                    missed.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Step 3 – Testimonials carousel */}
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Step 3
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
            CHECK OUT OUR TESTIMONIALS & RESULTS
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Slide through a few of the practices using AI to transform patient
            acquisition and retention.
          </p>

          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-lg overflow-hidden">
            <CardContent className="pt-6 pb-6 px-4 sm:px-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
                {/* Video / thumbnail */}
                <div className="flex-1 min-w-0">
                  <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors z-10">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play
                          className="w-8 h-8 text-neutral-900 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div
                      className="w-full h-full pointer-events-none"
                      dangerouslySetInnerHTML={{
                        __html: `<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="${testimonials[currentTestimonialIndex].videoUrl}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
                      }}
                    />
                  </div>
                </div>

                {/* Copy */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                    {testimonials[currentTestimonialIndex].quote}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">
                    {testimonials[currentTestimonialIndex].author}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrevTestimonial}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-10 h-10 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTestimonial}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-10 h-10 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentTestimonialIndex
                          ? "w-6 bg-sky-500"
                          : "w-2.5 bg-neutral-300 dark:bg-neutral-700"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA + Booking Widget */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-3">
              WHAT ARE YOU WAITING FOR?
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              BOOK A FREE STRATEGY CALL WITH US BELOW TO{" "}
              <span className="italic text-sky-500">CLAIM YOUR MARKET</span>
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Reserve your spot now—once your market is taken, it&apos;s gone.
            </p>
          </div>

          <div className="w-full">
            <div className="w-full overflow-hidden rounded-lg bg-white/90 dark:bg-neutral-900/90 shadow-2xl border border-neutral-200/70 dark:border-neutral-800/70">
              <iframe
                src="https://link.cliniclab.ai/widget/booking/1vPDtpCW6IYhWsxzfIXy"
                style={{ width: "100%", border: "none", minHeight: "800px" }}
                scrolling="yes"
                id="cliniclab-precall-booking-widget"
                className="w-full"
              />
            </div>
            <Script
              src="https://link.cliniclab.ai/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>
        </section>
      </div>
    </div>
  );
}


