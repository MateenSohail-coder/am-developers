"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Bar from "../services/bar";
import { ArrowRightCircle, ArrowLeftCircle, Pause, Play } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Harry",
    role: "Founder, GenX (SMC-Pvt) Ltd",
    rating: 5,
    text: "GenX (SMC-Pvt) Ltd is a leading website development company in Lahore, working on various latest technologies.",
    image: "/avatar.avif",
  },
  {
    id: "4",
    name: "Ahsan",
    role: "Founder, GenX (SMC-Pvt) Ltd",
    rating: 5,
    text: "GenX (SMC-Pvt) Ltd is a leading website development company in Lahore, working on various latest technologies.",
    image: "/avatar.avif",
  },
  {
    id: "5",
    name: "Hassan",
    role: "Founder, GenX (SMC-Pvt) Ltd",
    rating: 5,
    text: "GenX (SMC-Pvt) Ltd is a leading website development company in Lahore, working on various latest technologies.",
    image: "/avatar.avif",
  },
  {
    id: "2",
    name: "Sarah Ahmed",
    role: "CEO, Brightline Studio",
    rating: 5,
    text: "AM Devs helped us launch a modern, fast website that our clients love. Communication and execution were both excellent.",
    image: "/avatar.avif",
  },
  {
    id: "3",
    name: "Ali Khan",
    role: "Product Lead, Nova Apps",
    rating: 4,
    text: "From idea to deployment, the team was reliable, detail-oriented, and focused on long-term scalability.",
    image: "/avatar.avif",
  },
];

function Stars({ count, className = "" }) {
  return (
    <div
      className={`flex justify-center gap-1 text-[#FACC15] text-2xl md:text-3xl ${className}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-label={`Star rating: ${i < count ? "filled" : "empty"}`}
        >
          {i < count ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)),
    []
  );

  // Ensure current is always valid
  useEffect(() => {
    if (current >= testimonials.length) {
      setCurrent(0);
    }
  }, [current, testimonials.length]);

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [next, isAutoPlaying, testimonials.length]);

  // Safe active testimonial with fallback
  const activeTestimonial =
    testimonials.length > 0
      ? testimonials[current % testimonials.length]
      : null;

  if (!activeTestimonial) {
    return (
      <>
        <Bar
          desktopText="What Our Clients Say"
          mobileText="Testimonials"
          id="clients"
        />
        <div className="bg-white py-16 text-center">
          <p>No testimonials available</p>
        </div>
      </>
    );
  }

  // Click-based pause with auto resume (3s)
  const handleTogglePlay = () => {
    setIsAutoPlaying((prev) => {
      const nextState = !prev;
      if (prev && !nextState) {
        // was playing → now paused, auto resume after 3s
        setTimeout(() => {
          setIsAutoPlaying(true);
        }, 3000);
      }
      return nextState;
    });
  };

  // User interaction handler - pause then auto resume
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <>
      <Bar
        desktopText="What Our Clients Say"
        mobileText="Testimonials"
        id="clients"
      />

      <section
        className="bg-white py-14 md:py-18 lg:py-20 relative overflow-hidden"
        aria-labelledby="testimonials-title"
      >
        {/* BG elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E63946]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#FACC15]/10 to-[#E63946]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-14">
            <div className="flex mb-4 items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] flex items-center justify-center rounded-none transition-all duration-500 hover:shadow-[8px_8px_0_#E63946] hover:scale-110">
                <svg
                  className="w-6 h-6 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-lg font-black uppercase tracking-[0.2em] text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F]">
                Clients
              </span>
            </div>
            <h2
              id="testimonials-title"
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0B1F3F] via-[#E63946] to-[#FACC15] bg-clip-text text-transparent mb-4"
            >
              Client Success Stories
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Hear from our clients about their experience working with us.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 lg:gap-14">
            {/* Avatars */}
            <div
              className="relative mb-6 h-[140px] md:h-[190px] flex items-end justify-center"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {/* Mobile */}
              <div className="md:hidden flex justify-center absolute bottom-0">
                <button
                  onClick={() => {
                    setCurrent(0);
                    handleUserInteraction();
                  }}
                  className={[
                    "relative group cursor-pointer transition-all duration-300 ease-out",
                    "h-24 w-24 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] bg-white/80 backdrop-blur-xl",
                    "hover:shadow-[8px_8px_0_#E63946] hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-[4px_4px_0_#E63946]",
                  ].join(" ")}
                  aria-selected={true}
                  aria-controls="testimonial-content"
                >
                  <Image
                    src={activeTestimonial.image}
                    alt={`${activeTestimonial.name}, ${activeTestimonial.role}`}
                    fill
                    className="object-cover rounded-full drop-shadow-[2px_2px_0_#0B1F3F]"
                    sizes="96px"
                    priority={true}
                  />
                </button>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex items-end justify-center gap-4 lg:gap-6 absolute bottom-0">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === current;
                  const isNext = index === (current + 1) % testimonials.length;
                  const isPrevious =
                    index ===
                    (current - 1 + testimonials.length) % testimonials.length;

                  return (
                    <button
                      key={testimonial.id}
                      onClick={() => {
                        setCurrent(index);
                        handleUserInteraction();
                      }}
                      className={[
                        "relative group cursor-pointer transition-all duration-400 ease-out hover:z-10 origin-bottom",
                        "h-28 w-28 lg:h-32 lg:w-32 bg-white/80 backdrop-blur-xl rounded-none",
                        isActive
                          ? "border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] scale-110 -translate-y-2 z-20 hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px]"
                          : isNext || isPrevious
                          ? "border-4 border-[#E63946]/60 shadow-[6px_6px_0_#E63946]/60 scale-105 -translate-y-1"
                          : "border-4 border-[#E63946]/40 opacity-70",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-selected={isActive}
                      aria-controls="testimonial-content"
                      tabIndex={isActive || isNext || isPrevious ? 0 : -1}
                    >
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}, ${testimonial.role}`}
                        fill
                        className="object-cover rounded-none drop-shadow-[2px_2px_0_#0B1F3F]"
                        sizes="120px"
                        priority={isActive}
                      />

                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0B1F3F] to-[#E63946] text-white text-xs px-3 py-1.5 font-black tracking-wide shadow-[4px_4px_0_#E63946] rounded-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {testimonial.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Testimonial Card */}
            <article
              id="testimonial-content"
              className="group relative w-full max-w-4xl mx-auto"
              aria-label={`Testimonial by ${activeTestimonial.name}`}
            >
              <div className="relative z-10 bg-white/80 backdrop-blur-xl p-6 lg:p-8 border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 rounded-none origin-bottom-right">
                <Stars count={activeTestimonial.rating} />

                <blockquote className="mt-6">
                  <p className="text-base md:text-lg lg:text-xl text-[#0B1F3F] leading-relaxed mb-6 font-black tracking-tight drop-shadow-[2px_2px_0_rgba(11,31,63,0.1)]">
                    "{activeTestimonial.text}"
                  </p>
                </blockquote>

                <div className="flex items-start gap-4 pt-6 border-t-2 border-[#E63946]/30">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] rounded-none flex items-center justify-center flex-shrink-0 group-hover:shadow-[8px_8px_0_#E63946] group-hover:scale-105 transition-all duration-200">
                    <Image
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      width={64}
                      height={64}
                      className="w-10 h-10 md:w-12 md:h-12 object-cover drop-shadow-[2px_2px_0_#0B1F3F]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#0B1F3F] group-hover:text-[#E63946] transition-all duration-200 drop-shadow-[2px_2px_0_rgba(11,31,63,0.1)]">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-sm md:text-base font-black text-slate-700 mt-1 tracking-tight">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#E63946]/30 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 shadow-[6px_6px_0_#E63946]/50 rounded-none rotate-12 group-hover:rotate-[-8deg] transition-all duration-300 animate-pulse origin-bottom-right"></div>
            </article>

            {/* Controls */}
            <div className="flex flex-col items-center gap-4">
              {/* Dots */}
              <nav
                className="flex gap-3"
                aria-label="Testimonial dots navigation"
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrent(index);
                      handleUserInteraction();
                    }}
                    className={[
                      "h-3 w-3 md:h-4 md:w-4 rounded-full transition-all duration-300 cursor-pointer",
                      index === current
                        ? "bg-gradient-to-r from-[#E63946] to-[#FACC15] scale-125 shadow-lg shadow-[#E63946]/25"
                        : "bg-slate-300 hover:bg-slate-400 hover:scale-110",
                    ].join(" ")}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === current ? "true" : "false"}
                  />
                ))}
              </nav>
              {/* Play/Pause toggle - positioned at top as requested */}
              <button
                onClick={handleTogglePlay}
                className={`flex items-center gap-2 px-4 py-3 border-4 rounded-none text-xs md:text-sm font-black tracking-wide transition-all duration-200 shadow-[6px_6px_0_var(--shadow-color)] hover:shadow-[8px_8px_0_var(--shadow-color)] hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-[4px_4px_0_var(--shadow-color)] active:translate-x-0 active:translate-y-0 origin-bottom-right ${
                  isAutoPlaying
                    ? "border-[#16a34a] text-[#0B1F3F] bg-white/80 [--shadow-color:#16a34a]"
                    : "border-[#eab308] text-[#0B1F3F] bg-white/80 [--shadow-color:#eab308]"
                }`}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause Auto
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Resume Auto
                  </>
                )}
              </button>
              {/* Navigation + Play/Pause */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
                {/* Prev/Next buttons */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-0 rounded-none border-t-4 border-[#E63946]/50 overflow-visible">
                    <button
                      onClick={() => {
                        prev();
                        handleUserInteraction();
                      }}
                      className="group relative bg-white/80 backdrop-blur-xl py-5 px-6 flex items-center justify-center gap-4 text-base md:text-lg font-black text-[#0B1F3F] border-r-4 border-[#E63946]/30 shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 origin-bottom-right"
                    >
                      <ArrowLeftCircle className="w-7 h-7 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F] group-hover:text-[#FACC15]" />
                      Previous
                    </button>

                    <button
                      onClick={() => {
                        next();
                        handleUserInteraction();
                      }}
                      className="group relative bg-white/80 backdrop-blur-xl py-5 px-6 flex items-center justify-center gap-4 text-base md:text-lg font-black text-[#0B1F3F] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 origin-bottom-right border-l-4 border-[#E63946]/30"
                    >
                      Next
                      <ArrowRightCircle className="w-7 h-7 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F] group-hover:text-[#FACC15]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
