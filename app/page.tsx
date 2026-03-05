"use client";

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck, TrendingUp, ArrowRight, Play } from "lucide-react";

export default function LandingPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{ videoUrl: string; author: string } | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 relative">
      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1958618878297644');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1958618878297644&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
      
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

      {/* Logo at Top */}
      <div className="absolute top-6 right-6 z-50 flex items-end gap-1">
        <Image
          src="/cliniclab-logo.png"
          alt="Clinic Lab AI Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-white">Clinic Lab </span>
          <span className="text-sky-500">AI</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Our <span className="text-sky-500">Human AI</span> will book <span className="text-sky-500">37+</span> implant, Invisalign, and cosmetic patients in your sleep.
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-neutral-300">
            Get your first 10 booked appointments in 30 days, or you don&apos;t pay.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="mb-16">
          <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '42.15456674473068%' }}>
                <iframe 
                  src="https://www.loom.com/embed/84949c4e9ef54d65b478cee1cb42a96a" 
                  frameBorder="0" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Survey Section */}
        <div id="survey-section" className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
            Fill The Form Below To Get Started
          </h2>
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

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
            Hear From Our Doctors
          </h2>
          <div className="space-y-8">
            {[
              {
                quote: "$890K/Month to $1.2M in Under 60 Days | Case Study",
                author: "— Kirkland Dental",
                videoUrl: "https://www.loom.com/embed/092130bd8df148ca81012276391e5eb8",
              },
              {
                quote: "\"I feel less pressure... it's like a safety net!\"",
                author: "— Dr. Anthony & Dr. Lauren",
                videoUrl: "https://www.loom.com/embed/bd221950a9bc4aee9bfb2796574d943b",
              },
              {
                quote: "\"It's the best decision I've made administratively.\"",
                author: "— Dr. Ivry, Implant Surgeon",
                videoUrl: "https://www.loom.com/embed/53fd98038cc34a47a62ed185666340ac",
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
            ].map((testimonial, index) => (
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
        </div>

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

        {/* Benefits Section */}
        <div className="mb-16 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12 uppercase tracking-tight">
            HERE ARE SOME REASONS WHY YOU SHOULD CHOOSE TO WORK WITH US
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Benefit 1 */}
            <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/20">
                  <Users className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  We Handle The{" "}
                  <span className="text-sky-500">PATIENTS FOR YOU</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4">
                  Our AI-driven system and in-house team manage patient inquiries,
                  qualify them, and book appointments directly into your calendar.
                </p>
                <p className="text-lg font-bold text-white">
                  You focus on care—we handle the scheduling.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/20">
                  <ShieldCheck className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  No{" "}
                  <span className="text-sky-500">No-Shows Or Unqualified Patients</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4">
                  We rigorously vet every new lead using smart AI filters before
                  they&apos;re ever booked — no more wasted consults or fake requests.
                </p>
                <p className="text-lg font-bold text-white">
                  This ensures your team only talks to real patients who are ready
                  to move forward.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/20">
                  <TrendingUp className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  <span className="text-sky-500">SAVE MONEY AND SCALE</span> YOUR PRACTICE
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4">
                  We don&apos;t sell leads. We install a done-for-you system that
                  answers patient inquiries, qualifies them instantly, and fills your
                  schedule — without the overhead of extra employees.
                </p>
                <p className="text-lg font-bold text-white">
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
        <div className="text-center pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 font-semibold mb-2">
            Clinic Lab AI
          </p>
          <p className="text-sm text-neutral-500">
            © 2025 Clinic Lab AI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
