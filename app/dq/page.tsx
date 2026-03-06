"use client";

import Image from "next/image";
import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";

export default function DQPage() {
  return (
    <div className="min-h-screen bg-neutral-950 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-neutral-950 to-neutral-950 pointer-events-none bg-grid-pattern" />

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
          <span className="text-white">Clinic Lab{" "}</span>
          <span className="text-sky-500">AI</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-20 lg:py-24">
        {/* Heading Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Must Watch This Video Before Continuing!
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
            Please watch the video below to understand our requirements and investment criteria before booking your call.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="mb-12">
          <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="https://www.loom.com/embed/d3c83ab941c249a6bfd7da17ba587f7c" 
                  frameBorder="0" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer Banner */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-amber-500/20 border border-amber-500/50 rounded-lg px-6 py-4">
            <p className="text-base sm:text-lg font-semibold text-amber-300 italic">
              Only book if you have the capital to invest into your practice
            </p>
          </div>
        </div>

        {/* Booking Widget Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Book Your Discovery Call
            </h2>
            <p className="text-lg text-neutral-400">
              Select a time below that works best for you
            </p>
          </div>
          
          <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full">
                <iframe
                  src="https://link.cliniclab.ai/widget/booking/qVCzgvPuViqQlhM4sxhi"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="vYwXac4B22CvpUlaEQ7D_1772749862131"
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
          <Script
            src="https://link.cliniclab.ai/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>

        {/* Footer Copy */}
        <div className="mt-12 text-center text-sm text-neutral-500 mb-8">
          <p>
            After booking, you&apos;ll receive a confirmation email with all of
            your call details.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 font-semibold mb-2">
            Clinic Lab AI
          </p>
          <p className="text-sm text-neutral-500">
            © 2026 Clinic Lab AI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

