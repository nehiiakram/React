import React from "react";
import { Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      id: "mehndi",
      title: "Mehndi & Sangeet",
      urduTitle: "مہندی و سنگیت",
      date: "Thursday, December 24, 2026",
      isoDateStart: "20261224T190000",
      isoDateEnd: "20261224T230000",
      time: "7:00 PM Onwards",
      venue: "Creek Club (Lawn)",
      address: "Zulfiqar Street, DHA Phase 8, Karachi",
      mapUrl: "https://maps.google.com/?q=Creek+Club+DHA+Phase+8+Karachi",
      dressCode: "Traditional Mustard, Yellow & Festive Colorful",
      badgeColor: "from-amber-500/20 to-emerald-600/20 border-amber-400/40",
      accentColor: "#f59e0b",
      tag: "Dholki & Colors",
    },
    {
      id: "barat",
      title: "Barat & Nikkah",
      urduTitle: "بارات و نکاح",
      date: "Friday, December 25, 2026",
      isoDateStart: "20261225T200000",
      isoDateEnd: "20261225T235900",
      time: "8:00 PM (Nikkah at 8:30 PM)",
      venue: "Pearl Continental Hotel (Grand Marquee)",
      address: "Club Road, Civil Lines, Karachi",
      mapUrl: "https://maps.google.com/?q=Pearl+Continental+Hotel+Karachi",
      dressCode: "Royal Traditional / Sherwani & Embellished Formals",
      badgeColor: "from-red-900/30 to-[#d4af37]/20 border-[#d4af37]/60",
      accentColor: "#d4af37",
      tag: "Main Ceremony",
    },
    {
      id: "walima",
      title: "Walima Reception",
      urduTitle: "دعوت ولیمہ",
      date: "Sunday, December 27, 2026",
      isoDateStart: "20261227T200000",
      isoDateEnd: "20261227T235900",
      time: "8:00 PM Onwards",
      venue: "Mövenpick Hotel (Grand Ballroom)",
      address: "Club Road, Civil Lines, Karachi",
      mapUrl: "https://maps.google.com/?q=Movenpick+Hotel+Karachi",
      dressCode: "Regal Evening Wear / Western & Eastern Formals",
      badgeColor: "from-blue-950/30 to-amber-700/20 border-blue-400/30",
      accentColor: "#60a5fa",
      tag: "Grand Reception",
    },
  ];

  // Helper to open Google Calendar event generator
  const createGoogleCalendarLink = (event) => {
    const text = encodeURIComponent(`Wedding: ${event.title} - Hamza & Ayesha`);
    const details = encodeURIComponent(
      `You are warmly invited to the ${event.title}.\nVenue: ${event.venue}, ${event.address}\nDress Code: ${event.dressCode}`
    );
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${event.isoDateStart}/${event.isoDateEnd}&details=${details}&location=${location}`;
  };

  return (
    <section className="py-16 px-4 relative max-w-4xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          Wedding Itinerary
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </p>
        <h2 className="font-script text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-gold-shimmer mb-2 sm:mb-3">
          Events &amp; Functions
        </h2>
        <p className="text-xs sm:text-sm text-amber-200/70 max-w-md mx-auto px-2">
          Please join and bless us with your gracious presence at each ceremony
        </p>
      </div>

      {/* Cards List */}
      <div className="space-y-6 sm:space-y-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative rounded-2xl bg-gradient-to-br ${event.badgeColor} p-4 xs:p-6 sm:p-8 backdrop-blur-md border shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all duration-300 group`}
          >
            {/* Top Ornamental Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-amber-900/40 pb-3 sm:pb-4 mb-4 sm:mb-5">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#18050a]/70 border border-[#d4af37]/40 text-[#fae090] font-cinzel text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold">
                {event.tag}
              </span>
              <span className="text-lg sm:text-2xl font-serif text-[#d4af37] tracking-wider font-semibold">
                {event.urduTitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              {/* Event Title & Date Info */}
              <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
                <h3 className="font-playfair text-xl xs:text-2xl sm:text-3xl font-bold text-amber-100 group-hover:text-gold-gradient transition-colors">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2.5 text-amber-200/90 text-sm">
                  <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{event.date}</span>
                </div>

                <div className="text-xs text-[#fae090] font-medium tracking-wide">
                  ⏰ Time: {event.time}
                </div>

                <div className="flex items-start gap-2.5 text-amber-200/80 text-xs sm:text-sm pt-2">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-100">{event.venue}</p>
                    <p className="text-amber-200/60 text-xs mt-0.5">{event.address}</p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-amber-300/70 italic">
                  👗 Dress Code: {event.dressCode}
                </div>
              </div>

              {/* Action Buttons: Google Maps & Add to Calendar */}
              <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2a0810] hover:bg-[#3d0c18] border border-[#d4af37]/50 text-[#fae090] text-xs font-cinzel tracking-wider uppercase font-semibold transition-all hover:scale-[1.02] shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>View On Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={createGoogleCalendarLink(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a050b]/80 hover:bg-[#250810] border border-amber-900/60 hover:border-[#d4af37] text-amber-200 text-xs font-cinzel tracking-wider uppercase transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Add To Calendar</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
