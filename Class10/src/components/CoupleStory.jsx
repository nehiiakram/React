import React from "react";
import { Heart, Sparkles } from "lucide-react";

export default function CoupleStory() {
  return (
    <section className="py-16 px-4 relative max-w-3xl mx-auto text-center">
      {/* Golden Floral Filigree Border Container */}
      <div className="relative p-4 xs:p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-[#2a0810]/80 via-[#1d050c]/90 to-[#120306]/90 border border-[#d4af37]/40 shadow-2xl backdrop-blur-md">
        {/* Corner Motifs */}
        <div className="absolute top-3 left-3 text-[#d4af37]/60 text-xs">✦</div>
        <div className="absolute top-3 right-3 text-[#d4af37]/60 text-xs">✦</div>
        <div className="absolute bottom-3 left-3 text-[#d4af37]/60 text-xs">✦</div>
        <div className="absolute bottom-3 right-3 text-[#d4af37]/60 text-xs">✦</div>

        <div className="inline-flex p-2.5 sm:p-3 rounded-full bg-[#3d0d18] border border-[#d4af37]/40 text-[#d4af37] mb-3 sm:mb-4">
          <Heart className="w-5 sm:w-6 h-5 sm:h-6 fill-[#d4af37]/30 text-[#d4af37]" />
        </div>

        <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-1.5 sm:mb-2 font-semibold">
          With Love &amp; Gratitude
        </p>

        <h3 className="font-script text-3xl xs:text-4xl sm:text-5xl text-gold-shimmer mb-4 sm:mb-6">
          A Celebration of Two Families
        </h3>

        <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-serif italic mb-8">
          &ldquo;Your presence, prayers, and blessings are the greatest gifts as we embark on this new chapter of life together. We eagerly anticipate sharing our joy with you and your family.&rdquo;
        </p>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />

        {/* Best Compliments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div className="p-4 rounded-xl bg-[#140407]/60 border border-amber-900/40">
            <p className="font-cinzel text-[11px] text-[#d4af37] uppercase tracking-widest font-semibold mb-1">
              With Best Compliments
            </p>
            <p className="font-playfair text-base text-amber-100 font-medium">
              Khan &amp; Alvi Families
            </p>
            <p className="text-xs text-amber-200/60 mt-1">
              Near &amp; Dear Friends &amp; Relatives
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#140407]/60 border border-amber-900/40">
            <p className="font-cinzel text-[11px] text-[#d4af37] uppercase tracking-widest font-semibold mb-1">
              Special Duas From
            </p>
            <p className="font-playfair text-base text-amber-100 font-medium">
              Grandparents &amp; Elders
            </p>
            <p className="text-xs text-amber-200/60 mt-1">
              May Allah bless this blessed union with barakah
            </p>
          </div>
        </div>

        {/* No Box Gifts Request Note (Common in modern digital invites) */}
        <div className="mt-8 pt-6 border-t border-amber-900/30">
          <p className="text-xs text-amber-200/70 font-cinzel tracking-wider uppercase">
            ✨ No Boxed Gifts Please • Only Your Prayers &amp; Duas ✨
          </p>
        </div>
      </div>
    </section>
  );
}
