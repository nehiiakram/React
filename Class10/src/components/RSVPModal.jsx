import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, User, Users, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function RSVPModal({ hostPhoneNumber = "923001234567", coupleNames = "Hamza & Ayesha" }) {
  const [formData, setFormData] = useState({
    name: "",
    guestsCount: 2,
    attendance: "yes",
    attendingEvents: ["Mehndi", "Barat", "Walima"],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (eventName) => {
    setFormData((prev) => {
      const exists = prev.attendingEvents.includes(eventName);
      if (exists) {
        return {
          ...prev,
          attendingEvents: prev.attendingEvents.filter((e) => e !== eventName),
        };
      } else {
        return {
          ...prev,
          attendingEvents: [...prev.attendingEvents, eventName],
        };
      }
    });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }

    // Trigger celebration confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#25D366", "#D4AF37", "#FFFFFF"],
    });

    const statusText =
      formData.attendance === "yes"
        ? "✅ Joyfully Attending"
        : "❌ Regretfully Unable to Attend";

    const eventsList =
      formData.attendingEvents.length > 0
        ? formData.attendingEvents.join(", ")
        : "None";

    const text =
      `*Wedding RSVP - ${coupleNames}*\n` +
      `---------------------------------\n` +
      `👤 *Guest Name:* ${formData.name}\n` +
      `✨ *Attendance Status:* ${statusText}\n` +
      `👥 *Number of Guests:* ${formData.guestsCount}\n` +
      `🎉 *Functions Attending:* ${eventsList}\n` +
      (formData.message.trim() ? `💌 *Duas / Wishes:* ${formData.message}\n` : "") +
      `---------------------------------\n` +
      `Sent via Digital Wedding Invitation Card`;

    const whatsappUrl = `https://wa.me/${hostPhoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="rsvp-section" className="py-16 px-4 relative max-w-2xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#2a0810] via-[#1d050c] to-[#120306] border-2 border-[#d4af37]/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex p-2.5 sm:p-3 rounded-full bg-[#3d0d18] border border-[#d4af37]/40 text-[#d4af37] mb-2 sm:mb-3">
            <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-[#d4af37]" />
          </div>
          <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-1 font-semibold">
            Kindly Respond
          </p>
          <h2 className="font-script text-3xl xs:text-4xl sm:text-5xl text-gold-shimmer mb-1.5 sm:mb-2">
            Confirm Your Presence
          </h2>
          <p className="text-[11px] sm:text-xs text-amber-200/70">
            Please RSVP by December 15, 2026 to help us prepare the arrangements
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 sm:py-10 space-y-4">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500/60 mx-auto flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <h3 className="font-cinzel text-lg sm:text-xl text-amber-100 font-semibold">
              Thank You, {formData.name}!
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 max-w-md mx-auto">
              Your RSVP response has been sent to the host via WhatsApp. We cannot wait to celebrate with you!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-5 py-2 text-xs font-cinzel tracking-wider text-[#d4af37] hover:underline"
            >
              Update or Send Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSend} className="space-y-4 sm:space-y-6">
            {/* Guest Name */}
            <div>
              <label className="block text-[11px] sm:text-xs font-cinzel tracking-wider text-amber-200 uppercase mb-1.5 sm:mb-2">
                Full Name / Family Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400/50" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Asad Ali & Family"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#140407]/90 border border-amber-900/60 focus:border-[#d4af37] text-amber-100 placeholder:text-stone-500 text-xs sm:text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Attendance Radio */}
            <div>
              <label className="block text-[11px] sm:text-xs font-cinzel tracking-wider text-amber-200 uppercase mb-1.5 sm:mb-2">
                Will you be attending?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <label
                  className={`flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl border cursor-pointer text-xs font-cinzel tracking-wider uppercase transition-all ${
                    formData.attendance === "yes"
                      ? "bg-[#3a0d17] border-[#d4af37] text-[#fae090] shadow-md font-semibold"
                      : "bg-[#140407]/60 border-amber-900/40 text-amber-200/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === "yes"}
                    onChange={() => setFormData({ ...formData, attendance: "yes" })}
                    className="hidden"
                  />
                  <span>✨ Joyfully Accept</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl border cursor-pointer text-xs font-cinzel tracking-wider uppercase transition-all ${
                    formData.attendance === "no"
                      ? "bg-[#3a0d17] border-[#d4af37] text-[#fae090] shadow-md font-semibold"
                      : "bg-[#140407]/60 border-amber-900/40 text-amber-200/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === "no"}
                    onChange={() => setFormData({ ...formData, attendance: "no" })}
                    className="hidden"
                  />
                  <span>Regretfully Decline</span>
                </label>
              </div>
            </div>

            {/* Number of Guests */}
            {formData.attendance === "yes" && (
              <>
                <div>
                  <label className="block text-[11px] sm:text-xs font-cinzel tracking-wider text-amber-200 uppercase mb-1.5 sm:mb-2">
                    Total Persons Attending
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((p) => ({ ...p, guestsCount: Math.max(1, p.guestsCount - 1) }))
                      }
                      className="w-10 h-10 rounded-xl bg-[#26070e] border border-[#d4af37]/40 text-amber-200 font-bold hover:bg-[#3d0d18] transition-colors"
                    >
                      -
                    </button>
                    <div className="flex-1 py-2 sm:py-2.5 rounded-xl bg-[#140407]/90 border border-amber-900/60 text-center font-cinzel text-amber-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-[#d4af37]" />
                      <span>{formData.guestsCount} Guest{formData.guestsCount > 1 ? "s" : ""}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((p) => ({ ...p, guestsCount: p.guestsCount + 1 }))
                      }
                      className="w-10 h-10 rounded-xl bg-[#26070e] border border-[#d4af37]/40 text-amber-200 font-bold hover:bg-[#3d0d18] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Functions checkboxes */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-cinzel tracking-wider text-amber-200 uppercase mb-1.5 sm:mb-2">
                    Select Functions You Will Attend
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {["Mehndi", "Barat", "Walima"].map((func) => {
                      const isSelected = formData.attendingEvents.includes(func);
                      return (
                        <button
                          type="button"
                          key={func}
                          onClick={() => handleCheckboxChange(func)}
                          className={`py-2 sm:py-2.5 px-2 rounded-xl border text-center text-xs font-cinzel tracking-wider uppercase transition-all ${
                            isSelected
                              ? "bg-[#3e0d19] border-[#d4af37] text-[#fae090] shadow-sm font-semibold"
                              : "bg-[#140407]/60 border-amber-900/40 text-amber-300/50"
                          }`}
                        >
                          {isSelected ? "✓ " : ""}{func}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Special Dua / Wishes */}
            <div>
              <label className="block text-xs font-cinzel tracking-wider text-amber-200 uppercase mb-2">
                Warm Wishes &amp; Duas for the Couple (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="May Allah shower endless blessings on this union..."
                className="w-full px-4 py-3 rounded-xl bg-[#140407]/90 border border-amber-900/60 focus:border-[#d4af37] text-amber-100 placeholder:text-stone-500 text-sm focus:outline-none transition-colors"
              />
            </div>

            {/* Submit via WhatsApp Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1bd741] via-[#25D366] to-[#128C7E] text-white font-cinzel text-xs sm:text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-[1.01]"
            >
              <Send className="w-4 h-4" />
              <span>Send RSVP via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
