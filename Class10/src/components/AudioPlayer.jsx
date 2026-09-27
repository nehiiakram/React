import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Heart } from "lucide-react";

export default function AudioPlayer({ autoPlayTrigger = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const isPlayingRef = useRef(false);
  const melodyTimerRef = useRef(null);

  // Sweet Romantic Wedding Harp / Music Box Chords & Notes (G Major - Canon in D inspired progression)
  const melodyNotes = [
    // Measure 1: G Major
    { freq: 196.0, duration: 1.8, delay: 0 },    // G3 Bass
    { freq: 392.0, duration: 1.2, delay: 0.2 },  // G4
    { freq: 493.88, duration: 1.2, delay: 0.4 }, // B4
    { freq: 587.33, duration: 1.5, delay: 0.6 }, // D5
    { freq: 783.99, duration: 1.6, delay: 0.8 }, // G5

    // Measure 2: D Major
    { freq: 146.83, duration: 1.8, delay: 1.2 }, // D3 Bass
    { freq: 369.99, duration: 1.2, delay: 1.4 }, // F#4
    { freq: 440.0, duration: 1.2, delay: 1.6 },  // A4
    { freq: 587.33, duration: 1.5, delay: 1.8 }, // D5
    { freq: 739.99, duration: 1.6, delay: 2.0 }, // F#5

    // Measure 3: E Minor
    { freq: 164.81, duration: 1.8, delay: 2.4 }, // E3 Bass
    { freq: 329.63, duration: 1.2, delay: 2.6 }, // E4
    { freq: 392.0, duration: 1.2, delay: 2.8 },  // G4
    { freq: 493.88, duration: 1.5, delay: 3.0 }, // B4
    { freq: 659.25, duration: 1.6, delay: 3.2 }, // E5

    // Measure 4: C Major (Sweet Resolution)
    { freq: 130.81, duration: 1.8, delay: 3.6 }, // C3 Bass
    { freq: 261.63, duration: 1.2, delay: 3.8 }, // C4
    { freq: 329.63, duration: 1.2, delay: 4.0 }, // E4
    { freq: 392.0, duration: 1.5, delay: 4.2 },  // G4
    { freq: 523.25, duration: 1.8, delay: 4.4 }, // C5
  ];

  const totalLoopDuration = 4.8; // seconds

  // Play a soft, gentle acoustic plucked note (like a warm piano/harp/celesta string)
  const playSweetPluck = (ctx, freq, startTime, duration) => {
    if (!ctx || ctx.state === "closed") return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm filter to keep the tone soothing and mellow
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, startTime);
    filter.Q.setValueAtTime(1, startTime);

    // Warm sine wave
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    // Pluck Envelope (Fast smooth attack, gentle romantic acoustic decay)
    const peakVolume = 0.08;
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakVolume, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  };

  const scheduleMelodyLoop = () => {
    if (!isPlayingRef.current || !audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const now = ctx.currentTime;

    melodyNotes.forEach((note) => {
      playSweetPluck(ctx, note.freq, now + note.delay, note.duration);
    });

    melodyTimerRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        scheduleMelodyLoop();
      }
    }, totalLoopDuration * 1000);
  };

  const startSweetMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      isPlayingRef.current = true;
      setIsPlaying(true);
      scheduleMelodyLoop();
    } catch (err) {
      console.log("Audio Error:", err);
    }
  };

  const stopMusic = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);

    if (melodyTimerRef.current) {
      clearTimeout(melodyTimerRef.current);
      melodyTimerRef.current = null;
    }

    if (audioContextRef.current && audioContextRef.current.state === "running") {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startSweetMelody();
    }
  };

  // Trigger when envelope opens
  useEffect(() => {
    if (autoPlayTrigger && !isPlayingRef.current) {
      startSweetMelody();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <div className="relative inline-flex items-center z-30">
      {/* Clean Single Music Control Button */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Music" : "Play Wedding Music"}
        className={`flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 shadow-xl ${
          isPlaying
            ? "bg-[#380914]/90 border-[#d4af37] text-[#fae090] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
            : "bg-[#18050a]/85 border-amber-900/60 text-amber-200/60 hover:border-[#d4af37]"
        }`}
      >
        {/* Animated Equalizer Wave Bars */}
        {isPlaying ? (
          <div className="flex items-end gap-1 h-3.5">
            <span
              className="w-0.5 bg-gradient-to-t from-[#d4af37] to-[#ffe082] rounded-full animate-bounce h-2"
              style={{ animationDuration: "0.6s" }}
            />
            <span
              className="w-0.5 bg-gradient-to-t from-[#d4af37] to-[#ffe082] rounded-full animate-bounce h-3.5"
              style={{ animationDuration: "0.4s" }}
            />
            <span
              className="w-0.5 bg-gradient-to-t from-[#d4af37] to-[#ffe082] rounded-full animate-bounce h-2.5"
              style={{ animationDuration: "0.7s" }}
            />
            <span
              className="w-0.5 bg-gradient-to-t from-[#d4af37] to-[#ffe082] rounded-full animate-bounce h-1.5"
              style={{ animationDuration: "0.5s" }}
            />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 text-amber-300/50" />
        )}

        <div className="flex flex-col text-left">
          <span className="font-cinzel text-[11px] tracking-wider font-semibold leading-tight flex items-center gap-1">
            {isPlaying ? "Wedding Music" : "Play Music"}
            {isPlaying && <Heart className="w-2.5 h-2.5 fill-[#d4af37] text-[#d4af37] animate-pulse" />}
          </span>
          <span className="text-[9px] text-amber-300/60 font-sans tracking-tight">
            {isPlaying ? "Romantic Melody" : "Tap to Listen"}
          </span>
        </div>
      </button>
    </div>
  );
}
