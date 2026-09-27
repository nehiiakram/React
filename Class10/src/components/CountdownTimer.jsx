import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function CountdownTimer({ targetDate = "2026-12-24T19:00:00" }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 text-center relative">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2 text-[#d4af37]">
          <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 animate-spin" style={{ animationDuration: '12s' }} />
          <p className="font-cinzel text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] font-semibold">
            Counting Down To The Big Day
          </p>
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-amber-100 font-semibold mb-6 sm:mb-8">
          The Wedding Awaits
        </h3>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-4 gap-1.5 xs:gap-2.5 sm:gap-4 md:gap-6">
          {timeBlocks.map((block, idx) => (
            <div
              key={idx}
              className="relative p-2 xs:p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#2e0912]/90 to-[#190408]/90 border border-[#d4af37]/40 shadow-[0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-md flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Corner Gold Accents */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#d4af37]" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#d4af37]" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#d4af37]" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#d4af37]" />

              <span className="font-cinzel text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold text-gold-shimmer leading-none">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="font-cinzel text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-amber-200/80 uppercase tracking-wider sm:tracking-widest mt-1.5 sm:mt-2">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
