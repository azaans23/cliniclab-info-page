"use client";

import Image from "next/image";
import Script from "next/script";

export default function BookPage() {
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
            fbq('init', '1874164233158652');
            fbq('track', 'Lead');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1874164233158652&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
      
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
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            <span className="text-white">Book a </span>
            <span className="text-sky-400">
              Direct AI Patient System Call
            </span>
            <span className="text-white"> Below</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-200">
            Book a time below to see if our <span className="font-semibold text-sky-400">Human AI</span> could fit into your practice.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="w-full">
          <div className="w-full overflow-hidden rounded-lg bg-neutral-900/90 shadow-2xl border border-neutral-800/70">
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
        <div className="mt-16 text-center text-sm text-neutral-500 mb-8">
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
      
      {/* Footer Tracking Script */}
      <Script
        id="ghl-booking-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('message', function(event) {
              // Listen for GHL Calendar booking event
              if(event.data.type === 'booking-created') {
                 // Create the key
                 localStorage.setItem('ghl_lead_verified', 'true');
              }
            });
          `,
        }}
      />
    </div>
  );
}


