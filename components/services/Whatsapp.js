"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { gsap } from "gsap";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !buttonRef.current || !pulseRef.current) return;

    // Slide in from LEFT (negative x)
    gsap.fromTo(
      buttonRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Continuous pulse animation
    gsap.to(pulseRef.current, {
      scale: 1.4,
      opacity: 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      gsap.killTweensOf(pulseRef.current);
    };
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    window.open(
      "https://wa.me/+923700959829?text=Hello! I'd like to discuss a project.",
      "_blank"
    );
  };

  return (
    <div
      ref={buttonRef}
      className={`
        fixed left-6 sm:left-8 bottom-20 sm:bottom-24 lg:bottom-28 z-50 
        group w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
        bg-gradient-to-br from-[#25D366] to-[#128C7E]
        border-4 border-[#E63946] shadow-[10px_10px_0_#E63946]
        hover:shadow-[14px_14px_0_#E63946] hover:translate-x-2 hover:-translate-y-3
        active:shadow-[5px_5px_0_#E63946] active:translate-x-0 active:translate-y-0
        transition-all duration-300 rounded-none cursor-pointer
        backdrop-blur-sm hover:backdrop-blur-xl
        hover:bg-gradient-to-br hover:from-[#E63946] hover:to-[#FACC15]
        before:absolute before:inset-0 before:bg-white/20 before:blur-xl
        before:opacity-0 group-hover:before:opacity-100 before:transition-opacity
      `}
      onClick={handleWhatsAppClick}
      role="button"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-3.5">
        <Phone
          className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
          strokeWidth={2.5}
        />
      </div>

      {/* GSAP Pulse Badge */}
      <div
        ref={pulseRef}
        className="absolute -top-3 -right-3 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-[#E63946] border-4 border-white shadow-[6px_6px_0_#0B1F3F] flex items-center justify-center rounded-none"
      >
        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-white rounded-full shadow-sm" />
      </div>

      {/* Tooltip - Adjusted for left position */}
      <div className="absolute -top-14 left-0 w-50 bg-[#0B1F3F]/95 backdrop-blur-xl border-2 border-[#E63946] shadow-[8px_8px_0_#E63946] text-white text-sm font-bold uppercase tracking-wide px-4 py-2.5 rounded-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-400 whitespace-nowrap z-10">
        Chat on WhatsApp
      </div>

      {/* Bottom Shadow */}
      <div className="absolute -bottom-3 left-2 right-2 h-1.5 bg-gradient-to-r from-[#E63946] to-[#FACC15] shadow-[0_6px_16px_rgba(230,57,70,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-none" />
    </div>
  );
};

export default WhatsAppButton;
