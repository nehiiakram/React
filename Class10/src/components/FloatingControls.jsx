import React, { useState, useEffect } from "react";
import { Share2, ArrowUp, CalendarCheck } from "lucide-react";

export default function FloatingControls({ coupleNames = "Hamza & Ayesha" }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToRSVP = () => {
    const el = document.getElementById("rsvp-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShare = () => {
    const shareText = `*Wedding Invitation - ${coupleNames}*\nYou are warmly invited to join our wedding festivities! Click to view the interactive card: ${window.location.href}`;
    if (navigator.share) {
      navigator
        .share({
          title: `${coupleNames} Wedding Invitation`,
          text: shareText,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 sm:gap-2.5">
      {/* RSVP Quick Action */}
      <button
        onClick={scrollToRSVP}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#8a192f] to-[#d4af37] text-white flex items-center justify-center shadow-lg border border-[#fbeea4]/40 hover:scale-110 active:scale-95 transition-transform duration-200"
        title="Quick RSVP"
      >
        <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-100" />
      </button>

      {/* Share on WhatsApp */}
      <button
        onClick={handleShare}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e070d] text-[#fae090] border border-[#d4af37]/60 flex items-center justify-center shadow-lg hover:bg-[#340b15] hover:scale-110 active:scale-95 transition-transform duration-200"
        title="Share Invitation"
      >
        <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#120407]/90 text-amber-300 border border-amber-800/60 flex items-center justify-center shadow-md hover:bg-[#250810] hover:scale-110 active:scale-95 transition-transform duration-200"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
