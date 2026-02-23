"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Play } from "lucide-react";

export default function ThankYou() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<{ videoUrl: string; author: string } | null>(null);

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
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
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
          <span className="text-neutral-900 dark:text-white">
            Clinic Lab{" "}
          </span>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            You&apos;re Booked!
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            REQUIRED: MUST WATCH THIS VIDEO BEFORE YOUR CALL
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto italic mb-8">
            Watch below to find out how to use A.I. to bring in 10-20 extra patients in as soon as <u>7 days</u>
          </p>
        </div>

        {/* Video Player Section */}
        <div className="mb-16">
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '42.15456674473068%' }}>
                <iframe 
                  src="https://www.loom.com/embed/f1740373967e4294831185523b1225b1?sid=ac3c5f46-f894-4c47-91dd-6987fd461544" 
                  frameBorder="0" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Divider */}
        <div className="mb-16 border-t border-neutral-200 dark:border-neutral-800"></div>

        {/* Try Out AI Receptionist Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
              Next, Try Out Our <em>A.I. Receptionist</em>
            </h2>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              See the system <u>NOW</u> by calling Ashley, one of our demo AI avatars
            </p>
            <a 
              href="tel:+19547513967" 
              className="inline-flex items-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500 hover:text-sky-600 transition-colors group mb-4"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl group-hover:translate-x-1 transition-transform">➟</span>
              <span>(954) 751-3967</span>
            </a>
            <div className="mt-6">
              <a
                href="tel:+19547513967"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-sky-500/25 text-lg transition-colors"
              >
                Tap Here to Call
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16 border-t border-neutral-200 dark:border-neutral-800"></div>

        {/* Add to Calendar Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            LAST STEP: Add Your Appointment to Your <em>Calendar!</em>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            (Google, Outlook, Apple, etc.)
          </p>
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://storage.googleapis.com/msgsndr/lsRkLEFyYwqF2xpmgLp9/media/683d8c41e1360ea944245bb5.jpeg"
              alt="Calendar"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16 border-t border-neutral-200 dark:border-neutral-800"></div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-12">
            Hear From Top Doctors
          </h2>
          <div className="space-y-8">
          {[
            {
              quote: "\"I feel less pressure... it's like a safety net!\"",
              author: "— Dr. Anthony & Dr. Lauren",
              videoUrl: "https://www.loom.com/embed/bd221950a9bc4aee9bfb2796574d943b",
            },
            {
              quote: "\"I was really apprehensive when we started... Really helpful, big time-saver!\"",
              author: "— Julie Koval, Office Manager",
              videoUrl: "https://www.loom.com/embed/4ab57de9b9d64d7bac8ee986c6fb1548",
            },
            {
              quote: "\"Remarkable accuracy and empathy.\"",
              author: "— Dr. Shantz, APRN",
              videoUrl: "https://www.loom.com/embed/063d2fdccf374d3b991ed45469808b20",
            },
            {
              quote: "$890K/Month to $1.2M in Under 60 Days | Case Study",
              author: "— Kirkland Dental",
              videoUrl: "https://www.loom.com/embed/092130bd8df148ca81012276391e5eb8",
            },
            {
              quote: "\"It's the best decision I've made administratively.\"",
              author: "— Dr. Ivry, Implant Surgeon",
              videoUrl: "https://www.loom.com/embed/53fd98038cc34a47a62ed185666340ac",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-full sm:w-80 cursor-pointer" onClick={() => setSelectedTestimonial({ videoUrl: testimonial.videoUrl, author: testimonial.author })}>
                    <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden group hover:opacity-90 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors z-10">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-8 h-8 text-neutral-900 ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div 
                        className="w-full h-full pointer-events-none"
                        dangerouslySetInnerHTML={{
                          __html: `<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="${testimonial.videoUrl}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                      {testimonial.quote}
                    </h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Testimonial Video Modal */}
        {selectedTestimonial && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div 
              className="relative w-full max-w-5xl bg-white dark:bg-neutral-900 rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src={selectedTestimonial.videoUrl} 
                  frameBorder="0" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="p-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-xl font-semibold text-neutral-900 dark:text-white text-center">
                  {selectedTestimonial.author}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="mb-16 border-t border-neutral-200 dark:border-neutral-800"></div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-2 mt-12">
            {[
              {
                question: "Can the AI integrate with our practice's scheduling system?",
                subtitle: "(e.g., Dentrix, eClinicalWorks, EagleSoft, AthenaHealth)",
                answer: "Yes. ClinicLab AI integrates with many leading EHR and practice management platforms, enabling it to schedule, reschedule, and cancel appointments directly within your calendar. If your system has restrictions on patient or appointment modifications, we will review compatibility and available workarounds during your AI strategy call.",
              },
              {
                question: "What happens if a patient asks something the AI can't answer?",
                answer: "When an inquiry requires clinical judgment or involves complex billing or insurance matters, ClinicLab AI can transfer the call to your front office and escalate the request to your team via email to ensure timely follow-up and continuity of care.",
              },
              {
                question: "Can the AI handle both inbound and outbound calls?",
                answer: "Yes. ClinicLab AI answers inbound calls 24/7 and can also place outbound calls for lead follow-up, callback requests, appointment confirmations, unscheduled treatment plan reminders, and patient reactivation initiatives.",
              },
              {
                question: "How long does it take to set up and go live?",
                answer: "In most cases, ClinicLab AI can be implemented within approximately seven days of onboarding. The system is configured to your practice and integrated so it can begin handling calls, scheduling appointments, and supporting patient communications promptly upon launch.",
              },
              {
                question: "Is there training required for my staff?",
                answer: "Minimal ongoing involvement is required. Beyond completing an initial customization form and a brief onboarding overview, ClinicLab AI operates in the background, reducing front-desk interruptions and allowing staff to focus on in-office patient needs.",
              },
              {
                question: "Is the AI HIPAA compliant?",
                answer: "Yes. ClinicLab AI is designed to support HIPAA compliance through strong security controls and encryption measures intended to safeguard patient data and communications.",
              },
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Card 
                  key={index} 
                  className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-200 dark:border-neutral-800/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden !py-0"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full"
                  >
                    <CardContent className="pt-6 pb-2.5 px-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 text-left">
                          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                            {faq.question}
                          </h3>
                          {faq.subtitle && (
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-0.5">
                              {faq.subtitle}
                            </p>
                          )}
                        </div>
                        <svg
                          className={`w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </CardContent>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pt-4 pb-4 border-t border-neutral-200 dark:border-neutral-800 mt-2">
                      <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
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

