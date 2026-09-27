import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

export default function EnvelopeIntro({ onOpen, groomName = "Hamza", brideName = "Ayesha" }) {
  const envelopeRef = useRef(null);
  const flapRef = useRef(null);
  const sealRef = useRef(null);
  const textRef = useRef(null);
  const letterRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle floating animation for the sealed envelope
      gsap.to(envelopeRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Shimmer effect on seal button
      gsap.to(sealRef.current, {
        scale: 1.08,
        boxShadow: "0 0 35px rgba(212, 175, 55, 0.9)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpenEnvelope = () => {
    // Fire festive golden wedding confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#F7E7CE", "#E5A93C", "#FFFFFF", "#961C2C"],
    });

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpen) onOpen();
      },
    });

    // 1. Shrink and pop wax seal
    tl.to(sealRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.in(2)",
    })
      // 2. Open top flap in 3D perspective
      .to(flapRef.current, {
        rotateX: 180,
        duration: 0.8,
        ease: "power2.inOut",
        transformOrigin: "top center",
      })
      // 3. Slide letter upwards
      .to(
        letterRef.current,
        {
          y: -180,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.3"
      )
      // 4. Fade out intro overlay smoothly
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power3.inOut",
      });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#120508]/95 backdrop-blur-md px-4 overflow-hidden"
    >
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#85162b]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sparkles & Islamic Motif subtle background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative flex flex-col items-center max-w-md w-full">
        {/* Invitation Subtitle */}
        <div ref={textRef} className="text-center mb-6">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-spin" style={{ animationDuration: '8s' }} />
            The Royal Invitation
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-spin" style={{ animationDuration: '8s' }} />
          </p>
          <h2 className="font-script text-4xl sm:text-5xl text-gold-shimmer">
            {groomName} & {brideName}
          </h2>
          <p className="text-xs text-amber-200/70 tracking-widest uppercase mt-2">
            Save The Date • 2026
          </p>
        </div>

        {/* 3D Envelope Container */}
        <div
          ref={envelopeRef}
          style={{ perspective: "1000px" }}
          className="relative w-[90vw] max-w-[420px] h-52 sm:h-60 cursor-pointer select-none group"
          onClick={handleOpenEnvelope}
        >
          {/* Card / Letter Peek (Hidden initially, slides up upon opening) */}
          <div
            ref={letterRef}
            className="absolute inset-x-3 sm:inset-x-4 top-2 h-44 sm:h-52 bg-gradient-to-b from-[#fffbf2] to-[#f5ebd7] text-[#3a0d17] rounded-lg shadow-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center opacity-0 border border-[#d4af37]"
            style={{ zIndex: 1 }}
          >
            <p className="font-script text-2xl text-[#85162b]">You are invited</p>
            <p className="font-cinzel text-[11px] tracking-wider text-[#996515] mt-1 font-semibold">
              CELEBRATING LOVE & TOGETHERNESS
            </p>
            <div className="w-12 h-0.5 bg-[#d4af37] my-2" />
            <p className="text-[10px] text-stone-600 uppercase tracking-widest">
              Please join us on our special day
            </p>
          </div>

          {/* Envelope Body (Backplate) */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#3a0d17] to-[#20050b] rounded-xl shadow-2xl border-2 border-[#d4af37]/60 overflow-hidden"
            style={{ zIndex: 2 }}
          >
            {/* Inner envelope lining pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fbeea4_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Envelope Pocket Left/Right/Bottom triangles */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0% 100%, 50% 55%, 100% 100%)",
                background: "linear-gradient(to top, #2d0a12, #47111d)",
                boxShadow: "0 -4px 15px rgba(0,0,0,0.5)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0% 0%, 50% 55%, 0% 100%)",
                background: "linear-gradient(to right, #25070e, #3a0d17)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(100% 0%, 50% 55%, 100% 100%)",
                background: "linear-gradient(to left, #25070e, #3a0d17)",
              }}
            />
          </div>

          {/* Envelope Top Flap (Triangular Folding Lid) */}
          <div
            ref={flapRef}
            className="absolute inset-x-0 top-0 h-28 origin-top"
            style={{
              zIndex: 4,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                background: "linear-gradient(to bottom, #501522, #3a0d17)",
                borderTop: "2px solid #d4af37",
                boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          {/* Golden Wax Seal with Monogram */}
          <div
            ref={sealRef}
            className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#ffe082] via-[#d4af37] to-[#8c6514] flex flex-col items-center justify-center shadow-lg border-2 border-[#fff3b0] cursor-pointer transition-transform duration-300"
            style={{ zIndex: 5 }}
          >
            <div className="w-12 h-12 rounded-full border border-[#805300]/40 flex flex-col items-center justify-center bg-gradient-to-tr from-[#c89823] to-[#ebd26e]">
              <span className="font-decorative text-xs font-bold text-[#380e15] tracking-tight">
                {groomName[0]} & {brideName[0]}
              </span>
              <Heart className="w-2.5 h-2.5 fill-[#380e15] text-[#380e15] -mt-0.5" />
            </div>
          </div>
        </div>

        {/* Tap Instruction Button */}
        <button
          onClick={handleOpenEnvelope}
          className="mt-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/40 to-[#d4af37]/20 border border-[#d4af37] text-amber-200 font-cinzel text-xs tracking-widest uppercase hover:bg-[#d4af37]/30 transition-all duration-300 flex items-center gap-2 group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-pulse"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          Tap To Open Invitation
        </button>
      </div>
    </div>
  );
}
