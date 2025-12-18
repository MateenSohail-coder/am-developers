"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Bar from "../services/bar";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

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

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [next, isAutoPlaying]);

  const activeTestimonial = testimonials[current];

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setTimeout(() => setIsAutoPlaying(true), 10000);

  return (
    <>
      <Bar
        desktopText="What Our Clients Say"
        mobileText="Testimonials"
        id="clients"
      />

      <section
        className="bg-white py-20 md:py-28 relative overflow-hidden"
        aria-labelledby="testimonials-title"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E63946]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#FACC15]/10 to-[#E63946]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <div className="flex mb-6 items-center justify-center gap-4">
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
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#0B1F3F] via-[#E63946] to-[#FACC15] bg-clip-text text-transparent mb-6"
            >
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from our satisfied clients
              about their experience working with us.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 lg:gap-20">
            {/* Avatar Carousel Wrapper - fixed height to avoid layout shift */}
            <div
              className="relative mb-12 h-[160px] md:h-[220px] flex items-end justify-center"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {/* Mobile: single avatar, centered at bottom */}
              <div className="md:hidden flex justify-center absolute bottom-0">
                {testimonials.slice(current, current + 1).map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => {
                      setCurrent(0);
                      pauseAutoPlay();
                    }}
                    onMouseEnter={pauseAutoPlay}
                    onMouseLeave={resumeAutoPlay}
                    className={[
                      "relative group cursor-pointer transition-all duration-300 ease-out",
                      "h-28 w-28 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] bg-white/80 backdrop-blur-xl",
                      "hover:shadow-[8px_8px_0_#E63946] hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-[4px_4px_0_#E63946]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-selected={true}
                    aria-controls="testimonial-content"
                  >
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}, ${testimonial.role}`}
                      fill
                      className="object-cover rounded-full drop-shadow-[2px_2px_0_#0B1F3F]"
                      sizes="120px"
                      priority={true}
                    />
                  </button>
                ))}
              </div>

              {/* Desktop: all avatars, fixed size + transforms only */}
              <div className="hidden md:flex items-end justify-center gap-4 lg:gap-8 absolute bottom-0">
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
                        pauseAutoPlay();
                      }}
                      onMouseEnter={pauseAutoPlay}
                      onMouseLeave={resumeAutoPlay}
                      className={[
                        "relative group cursor-pointer transition-all duration-500 ease-out hover:z-10 origin-bottom",
                        "h-32 w-32 lg:h-36 lg:w-36 bg-white/80 backdrop-blur-xl rounded-none",
                        isActive
                          ? "border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] scale-110 -translate-y-2 z-20 hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px]"
                          : isNext || isPrevious
                          ? "border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] scale-105 -translate-y-1 hover:shadow-[8px_8px_0_#E63946]"
                          : "border-4 border-[#E63946]/50 shadow-[4px_4px_0_#E63946]/50 opacity-70 hover:opacity-90 hover:shadow-[6px_6px_0_#E63946] hover:scale-105",
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
                        sizes="(max-width: 1024px) 100px, 120px"
                        priority={isActive}
                      />

                      {/* Name tooltip - themed */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0B1F3F] to-[#E63946] text-white text-xs px-3 py-2 font-black tracking-wide shadow-[4px_4px_0_#E63946] rounded-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
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
              <div className="relative z-10 bg-white/80 backdrop-blur-xl p-8 lg:p-12 border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 rounded-none origin-bottom-right">
                <Stars count={activeTestimonial.rating} />

                <blockquote className="mt-8">
                  <p className="text-lg md:text-xl lg:text-2xl text-[#0B1F3F] leading-relaxed mb-8 font-black tracking-tight drop-shadow-[2px_2px_0_rgba(11,31,63,0.1)]">
                    "{activeTestimonial.text}"
                  </p>
                </blockquote>

                <div className="flex items-start gap-6 pt-8 border-t-2 border-[#E63946]/30">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] rounded-none flex items-center justify-center flex-shrink-0 group-hover:shadow-[8px_8px_0_#E63946] group-hover:scale-105 transition-all duration-200">
                    <Image
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      width={80}
                      height={80}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover drop-shadow-[2px_2px_0_#0B1F3F]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0B1F3F] group-hover:text-[#E63946] transition-all duration-200 drop-shadow-[2px_2px_0_rgba(11,31,63,0.1)]">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-xl font-black text-slate-700 mt-2 tracking-tight">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent - enhanced theme style */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-[#E63946]/30 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 shadow-[6px_6px_0_#E63946]/50 rounded-none rotate-12 group-hover:rotate-[-8deg] transition-all duration-300 animate-pulse origin-bottom-right"></div>
            </article>

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
                    pauseAutoPlay();
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

            {/* Navigation buttons */}
            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-0 rounded-none border-t-4 border-[#E63946]/50 overflow-visible">
                <button
                  onClick={prev}
                  onMouseEnter={pauseAutoPlay}
                  onMouseLeave={resumeAutoPlay}
                  className="group relative bg-white/80 backdrop-blur-xl py-8 px-10 flex items-center justify-center gap-6 text-lg md:text-xl font-black text-[#0B1F3F] border-r-4 border-[#E63946]/30 shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 origin-bottom-right"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <ArrowLeftCircle className="w-8 h-8 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F] group-hover:text-[#FACC15]" />
                    Previous
                  </span>
                </button>

                <button
                  onClick={next}
                  onMouseEnter={pauseAutoPlay}
                  onMouseLeave={resumeAutoPlay}
                  className="group relative bg-white/80 backdrop-blur-xl py-8 px-10 flex items-center justify-center gap-6 text-lg md:text-xl font-black text-[#0B1F3F] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 origin-bottom-right border-l-4 border-[#E63946]/30"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    Next
                    <ArrowRightCircle className="w-8 h-8 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F] group-hover:text-[#FACC15]" />
                  </span>
                </button>
              </div>
            </div>

            {/* Auto-play indicator */}
            <div
              className={`flex items-center gap-2 border p-4 rounded-2xl text-sm text-slate-500 ${
                isAutoPlaying ? "border-green-400" : "border-yellow-400"
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span>Auto-playing</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Paused</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
