import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Heart, Sparkles } from "lucide-react";

export default function HeroSection({
  groom = "Hamza Khan",
  groomParents = "Mr. & Mrs. Shakeel Ahmed Khan",
  bride = "Ayesha Tariq",
  brideParents = "Mr. & Mrs. Tariq Mahmood",
  city = "Karachi, Pakistan",
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0,
        y: -15, // Starts gently from the top downwards
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Floating ornamental glow
      gsap.to(".gold-orb", {
        scale: 1.15,
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-4 sm:pt-8 pb-12 px-4 text-center overflow-hidden flex flex-col items-center justify-start"
    >
      {/* Background radial gold glow */}
      <div className="gold-orb absolute top-20 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Ornate Islamic Bismillah & Crest */}
      <div className="hero-anim max-w-xs mx-auto mb-6">
        {/* Golden Arch SVG */}
        <div className="flex justify-center mb-3">
          <svg className="w-24 h-12 text-[#d4af37]" viewBox="0 0 100 50" fill="none">
            <path
              d="M10 45 C 30 10, 70 10, 90 45"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="50" cy="18" r="3" fill="currentColor" />
            <path d="M40 28 Q 50 20 60 28" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Bismillah Text */}
        <p className="text-xl sm:text-2xl text-gold-shimmer font-serif tracking-wide leading-relaxed font-bold">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <p className="text-[10px] tracking-[0.25em] uppercase text-amber-200/80 mt-1 font-cinzel">
          In the Name of Allah, The Most Gracious, The Most Merciful
        </p>
      </div>

      {/* Quranic Verse */}
      <div className="hero-anim max-w-md mx-auto mb-8 px-4 py-3 rounded-xl bg-gradient-to-r from-transparent via-[#2d0912]/60 to-transparent border-y border-[#d4af37]/30">
        <p className="italic text-xs sm:text-sm text-amber-100/90 font-serif leading-relaxed">
          &ldquo;And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.&rdquo;
        </p>
        <p className="text-[10px] text-[#d4af37] font-cinzel tracking-widest mt-1.5 uppercase font-medium">
          Surah Ar-Rum [30:21]
        </p>
      </div>

      {/* Invitation Header */}
      <div className="hero-anim mb-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-cinzel">
          The Wedding Celebration Of
        </p>
      </div>

      {/* Couple Names - Luxury Typography */}
      <div className="hero-anim relative py-2 mb-6 w-full px-2">
        <h1 className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gold-shimmer tracking-normal leading-tight break-words">
          {groom.split(" ")[0]}
        </h1>

        <div className="flex items-center justify-center gap-2 sm:gap-4 my-2 sm:my-3">
          <div className="w-8 xs:w-14 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <span className="font-serif italic text-base sm:text-xl md:text-2xl text-[#fae090] px-2 flex items-center gap-1.5 shrink-0">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] fill-[#d4af37] animate-pulse" />
            weds
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] fill-[#d4af37] animate-pulse" />
          </span>
          <div className="w-8 xs:w-14 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>

        <h1 className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gold-shimmer tracking-normal leading-tight break-words">
          {bride.split(" ")[0]}
        </h1>
      </div>

      {/* Full Names with Parentage (Mobile Stacked, Tablet/Desktop Side-by-Side) */}
      <div className="hero-anim w-full max-w-xl lg:max-w-2xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-center">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#22070e]/70 border border-[#d4af37]/30 backdrop-blur-sm shadow-md">
            <p className="text-sm sm:text-base md:text-lg font-cinzel font-semibold text-amber-100">
              {groom}
            </p>
            <p className="text-[11px] sm:text-xs text-amber-300/80 mt-1">Son of {groomParents}</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#22070e]/70 border border-[#d4af37]/30 backdrop-blur-sm shadow-md">
            <p className="text-sm sm:text-base md:text-lg font-cinzel font-semibold text-amber-100">
              {bride}
            </p>
            <p className="text-[11px] sm:text-xs text-amber-300/80 mt-1">Daughter of {brideParents}</p>
          </div>
        </div>
      </div>

      {/* City & Year Badge */}
      <div className="hero-anim inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#d4af37]/50 bg-[#350a14]/70 backdrop-blur-md shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
        <span className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-widest text-[#fae090] uppercase font-semibold">
          {city} • December 2026
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
      </div>
    </section>
  );
}
