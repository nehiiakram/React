import React, { useState } from "react";
import EnvelopeIntro from "./components/EnvelopeIntro";
import AudioPlayer from "./components/AudioPlayer";
import HeroSection from "./components/HeroSection";
import CountdownTimer from "./components/CountdownTimer";
import EventsSection from "./components/EventsSection";
import CoupleStory from "./components/CoupleStory";
import RSVPModal from "./components/RSVPModal";
import FloatingControls from "./components/FloatingControls";
import { Sparkles, Heart } from "lucide-react";

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [musicAutoplayTrigger, setMusicAutoplayTrigger] = useState(false);

  // Wedding Details (Easily customizable)
  const weddingData = {
    groom: "Hamza Shakeel Khan",
    groomShort: "Hamza",
    groomParents: "Mr. & Mrs. Shakeel Ahmed Khan",
    bride: "Ayesha Tariq",
    brideShort: "Ayesha",
    brideParents: "Mr. & Mrs. Tariq Mahmood",
    weddingDate: "2026-12-25T20:00:00", // Barat Date
    city: "Karachi, Pakistan",
    hostWhatsApp: "923272105077", // Host WhatsApp for RSVP
  };

  const handleEnvelopeOpen = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setIsEnvelopeOpen(true);
    // User interaction enables browser audio autoplay
    setMusicAutoplayTrigger(true);
  };

  return (
    <div className="min-h-screen bg-[#120508] text-amber-50 selection:bg-[#d4af37] selection:text-[#1a050b] relative font-sans">
      {/* 1. Envelope Intro with GSAP 3D Flap opening & Wax Seal */}
      {!isEnvelopeOpen && (
        <EnvelopeIntro
          onOpen={handleEnvelopeOpen}
          groomName={weddingData.groomShort}
          brideName={weddingData.brideShort}
        />
      )}

      {/* Floating Quick Action Buttons (RSVP, Share, Scroll to Top) */}
      <FloatingControls
        coupleNames={`${weddingData.groomShort} & ${weddingData.brideShort}`}
      />

      {/* Background Decorative Gold Foil Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#871c31]/20 via-[#450e19]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Main Wedding Invitation Card Content - Adapts from 320px mobile to 4K LED displays */}
      <main className="relative z-10 w-full max-w-3xl lg:max-w-4xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-3.5 xs:px-4 sm:px-6 md:px-8 pb-24 sm:pb-20 lg:border-x lg:border-[#d4af37]/25 lg:shadow-[0_0_80px_rgba(0,0,0,0.85)] lg:bg-[#15060a]/90 backdrop-blur-sm">
        {/* Top Header Controls Bar (Music Button + Re-seal Button) */}
        <div className="pt-4 sm:pt-6 pb-3 flex items-center justify-between border-b border-amber-900/30 mb-2">
          {/* Re-seal Button */}
          <button
            onClick={() => {
              setIsEnvelopeOpen(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
            className="text-[10px] sm:text-[11px] font-cinzel tracking-widest text-[#d4af37]/80 hover:text-[#fae090] uppercase transition-all flex items-center gap-1.5 py-1 px-2.5 rounded-full hover:bg-[#340b15] border border-transparent hover:border-[#d4af37]/40"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Seal Envelope</span>
          </button>

          {/* Clean Music Player at the Top (Doesn't follow scroll) */}
          <AudioPlayer autoPlayTrigger={musicAutoplayTrigger} />
        </div>

        {/* 2. Hero Section: Islamic Crest, Bismillah, Names */}
        <HeroSection
          groom={weddingData.groom}
          groomParents={weddingData.groomParents}
          bride={weddingData.bride}
          brideParents={weddingData.brideParents}
          city={weddingData.city}
        />

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
          <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/40" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
        </div>

        {/* 3. Live Countdown Timer */}
        <CountdownTimer targetDate={weddingData.weddingDate} />

        {/* 4. Pakistani Functions / Events Timeline (Mehndi, Barat, Walima) */}
        <EventsSection />

        {/* 5. Family Greetings & Best Compliments */}
        <CoupleStory />

        {/* 6. Interactive WhatsApp RSVP Form */}
        <RSVPModal
          hostPhoneNumber={weddingData.hostWhatsApp}
          coupleNames={`${weddingData.groomShort} & ${weddingData.brideShort}`}
        />

        {/* 7. Footer */}
        <footer className="mt-16 text-center border-t border-amber-900/40 pt-8 pb-4">
          <p className="font-script text-3xl text-gold-shimmer mb-1">
            {weddingData.groomShort} &amp; {weddingData.brideShort}
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.25em] text-amber-200/60 uppercase">
            Forever &amp; Always • December 2026
          </p>
          <p className="text-[11px] text-amber-300/40 mt-3 font-cinzel">
            Smart Digital Wedding Invitation
          </p>
        </footer>
      </main>
    </div>
  );
}
