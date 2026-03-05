"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function PreCallPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<{ videoUrl: string; author: string } | null>(null);

  // Testimonials in the specified order: Kirkland, Dr. Lauren, Dr Ivry, Dr Julie, Dr Schantz
  const testimonials = [
    {
      quote: "$890K/Month to $1.2M in Under 60 Days | Case Study",
      author: "— Kirkland Dental",
      videoUrl: "https://www.loom.com/embed/092130bd8df148ca81012276391e5eb8",
    },
    {
      quote: '"I feel less pressure... it\'s like a safety net!"',
      author: "— Dr. Anthony & Dr. Lauren",
      videoUrl: "https://www.loom.com/embed/bd221950a9bc4aee9bfb2796574d943b",
    },
    {
      quote: '"It\'s the best decision I\'ve made administratively."',
      author: "— Dr. Ivry, Implant Surgeon",
      videoUrl: "https://www.loom.com/embed/53fd98038cc34a47a62ed185666340ac",
    },
    {
      quote: '"I was really apprehensive when we started... Really helpful, big time-saver!"',
      author: "— Julie Koval, Office Manager",
      videoUrl: "https://www.loom.com/embed/4ab57de9b9d64d7bac8ee986c6fb1548",
    },
    {
      quote: '"Remarkable accuracy and empathy."',
      author: "— Dr. Shantz, APRN",
      videoUrl: "https://www.loom.com/embed/063d2fdccf374d3b991ed45469808b20",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-neutral-950 to-neutral-950 pointer-events-none" />

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

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-16">
        {/* Page Heading with Logo */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/cliniclab-logo.png"
              alt="Clinic Lab AI Logo"
              width={60}
              height={60}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-white">Clinic Lab </span>
              <span className="text-sky-500">AI</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-neutral-400">
            Follow the simple steps below so you&apos;re fully prepared to{" "}
            <span className="font-semibold text-white">
              get maximum value
            </span>{" "}
            from our time together.
          </p>
        </div>

        {/* Step 1 */}
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 text-center sm:text-left">
            Step 1
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
            MUST WATCH BEFORE YOUR CALL
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            Watch below to find out how to add{" "}
            <span className="font-semibold text-white">
              $1M+ to your practice&apos;s annual revenue
            </span>
            .
          </p>

          <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-2xl overflow-hidden mt-4">
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 text-center sm:text-left">
            Step 2
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
            PRE‑CALL CHECKLIST
          </h2>

          <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-lg">
            <CardContent className="pt-6 pb-6 px-6 sm:px-8">
              <ul className="space-y-4 text-base sm:text-lg text-neutral-300">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white flex-shrink-0">
                    1
                  </span>
                  <span>
                    Bring all decision makers so we can make sure all questions are answered.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white flex-shrink-0">
                    2
                  </span>
                  <span>
                    Have your call metrics and new-patient numbers handy so we can model the impact of the system.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white flex-shrink-0">
                    3
                  </span>
                  <span>
                    Join the meeting from a quiet location (not between patients or while driving) so we can focus on what&apos;s important.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Step 3 – Testimonials list */}
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 text-center sm:text-left">
            Step 3
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
            CHECK OUT OUR TESTIMONIALS & RESULTS
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 w-full sm:w-80 cursor-pointer" onClick={() => setSelectedTestimonial({ videoUrl: testimonial.videoUrl, author: testimonial.author })}>
                      <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden group hover:opacity-90 transition-opacity">
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
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {testimonial.quote}
                      </h3>
                      <p className="text-lg text-neutral-400">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial Video Modal */}
        {selectedTestimonial && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div 
              className="relative w-full max-w-5xl bg-neutral-900 rounded-lg shadow-2xl overflow-hidden"
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
              <div className="p-6 bg-neutral-900 border-t border-neutral-800">
                <p className="text-xl font-semibold text-white text-center">
                  {selectedTestimonial.author}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section with Videos */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-2 mt-12">
            {[
              {
                question: "Can the AI integrate with our practice's scheduling system?",
                subtitle: "(e.g., Dentrix, eClinicalWorks, EagleSoft, AthenaHealth)",
                videoUrl: "https://www.loom.com/embed/1074cee36506445bb0402cefc8881d2c",
              },
              {
                question: "What happens if a patient asks something the AI can't answer?",
                videoUrl: "https://www.loom.com/embed/f70b47e0d14d4242970fa425607b7111",
              },
              {
                question: "Can the AI handle both inbound and outbound calls?",
                videoUrl: "https://www.loom.com/embed/fed4b02387cf4b7784c06bd1a0b58f88",
              },
              {
                question: "Is there training required for my staff?",
                videoUrl: "https://www.loom.com/embed/01f483ba54434789861accade54a6a95",
              },
              {
                question: "Is the AI HIPAA compliant?",
                videoUrl: "https://www.loom.com/embed/04a1a87adc654cd6a669ef09133afe2a",
              },
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Card 
                  key={index} 
                  className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden !py-0"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full"
                  >
                    <CardContent className="pt-6 pb-2.5 px-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 text-left">
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {faq.question}
                          </h3>
                          {faq.subtitle && (
                            <p className="text-sm sm:text-base text-neutral-400 mt-0.5">
                              {faq.subtitle}
                            </p>
                          )}
                        </div>
                        <svg
                          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
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
                    <div className="px-6 pt-4 pb-4 border-t border-neutral-800 mt-2">
                      {faq.videoUrl ? (
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe 
                            src={faq.videoUrl} 
                            frameBorder="0" 
                            allowFullScreen 
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                          />
                        </div>
                      ) : (
                        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                          Video coming soon...
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


