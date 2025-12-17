"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Bar from "../services/bar";
import Button from "../services/Button";

const services = [
  {
    title: "Web Application Development",
    description:
      "Custom, scalable web applications using modern stacks, built to match your business goals and long-term growth plans.",
    image: "/webservice.avif",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "Conversion-focused interfaces and thoughtful product experiences that make your brand look premium.",
    image: "/design.avif",
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 150);
    });
  }, []);

  // SMOOTH 3D Tilt with transform3d for GPU acceleration
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    // Use transform3d for buttery smooth GPU rendering
    card.style.transform = `translate3d(-6px, -6px, 0) scale3d(1.015, 1.015, 1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform =
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <Bar desktopText="What We Offer!" mobileText="Services" id="services" />

      <section className="bg-white/90 backdrop-blur-xl py-20 will-change-contents">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Brutalist Header */}
          <header className="mb-16 text-center">
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
                Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#0B1F3F] to-[#E63946] bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[4px_4px_0_rgba(230,57,70,0.3)]">
              Powerful Services for <br />
              <span className="block">Digital Growth</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-slate-700 font-semibold leading-relaxed drop-shadow-[2px_2px_0_rgba(11,31,63,0.1)]">
              From idea to execution — everything you need to build, launch, and
              scale your digital product.
            </p>
          </header>

          {/* ULTRA-SMOOTH Brutalist Service Cards */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <article
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="
        group relative w-full overflow-hidden
        border-4 border-[#E63946] bg-white/95 backdrop-blur-sm
        shadow-[6px_6px_0_#E63946] 
        xs:shadow-[8px_8px_0_#E63946]
        sm:shadow-[10px_10px_0_#E63946]
        md:shadow-[12px_12px_0_#E63946]
        group-hover:shadow-[10px_10px_0_#E63946]
        xs:group-hover:shadow-[12px_12px_0_#E63946]
        sm:group-hover:shadow-[16px_16px_0_#E63946]
        md:group-hover:shadow-[20px_20px_0_#E63946]
        group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]
        xs:group-hover:-translate-x-[3px] xs:group-hover:-translate-y-[3px]
        sm:group-hover:-translate-x-[4px] sm:group-hover:-translate-y-[4px]
        md:group-hover:-translate-x-[6px] md:group-hover:-translate-y-[6px]
        group-hover:scale-[1.01]
        md:group-hover:scale-[1.015]
        active:shadow-[3px_3px_0_#E63946] 
        active:translate-x-0 active:translate-y-0
        transition-all duration-400 ease-out 
        rounded-none origin-bottom-right
        will-change-transform
        perspective-[1000px]
        
        /* Responsive padding */
        px-3 py-4 xs:px-4 xs:py-6
        sm:px-6 sm:py-8 md:px-8 md:py-10
        
        /* Responsive min-height */
        min-h-[280px] xs:min-h-[300px] sm:min-h-[320px] md:min-h-[360px]
      "
              >
                {/* Responsive GPU Border Glow */}
                <div className="pointer-events-none absolute inset-0 border-4 border-transparent group-hover:border-[#E63946]/80 transition-all duration-500 ease-out" />

                {/* Ultra Smooth Responsive Gradient Sweep */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out xs:duration-1100 sm:duration-1200" />

                <div className="flex flex-col md:flex-row h-full">
                  {/* Responsive Image Section */}
                  <div
                    className="relative w-full md:w-2/5 
          min-h-[200px] xs:min-h-[220px] sm:min-h-[240px] md:min-h-[280px]
          border-r-4 border-r-[#E63946]/50 overflow-hidden will-change-transform
          p-2 xs:p-3 sm:p-4"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
              object-cover transition-all duration-900 ease-out
              group-hover:scale-[1.08] xs:group-hover:scale-[1.10]
              sm:group-hover:scale-[1.12] md:group-hover:scale-[1.15]
              group-hover:brightness-[1.05] xs:group-hover:brightness-[1.08]
              will-change-transform
            "
                    />

                    {/* Responsive Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600 ease-out" />

                    {/* Responsive Badge */}
                    <div
                      className="absolute top-4 right-4 
            w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16
            bg-gradient-to-br from-[#E63946]/95 to-[#FACC15]/95 
            border-3 xs:border-4 border-[#0B1F3F] 
            shadow-[4px_4px_0_#0B1F3F] xs:shadow-[6px_6px_0_#0B1F3F]
            flex items-center justify-center 
            group-hover:shadow-[6px_6px_0_#0B1F3F] xs:group-hover:shadow-[8px_8px_0_#0B1F3F]
            group-hover:scale-[1.1] xs:group-hover:scale-[1.15]
            transition-all duration-500 ease-out rounded-none z-10 backdrop-blur-sm origin-bottom-right"
                    >
                      <svg
                        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 
                text-white drop-shadow-[1px_1px_0_#0B1F3F] 
                group-hover:rotate-12 transition-all duration-500 ease-out"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Responsive Content */}
                  <div
                    className="flex-1 flex flex-col justify-between 
          border-l-4 border-l-[#0B1F3F]/30
          p-6 xs:p-8 sm:p-10 md:p-12 lg:p-14
          will-change-transform"
                  >
                    <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                      {/* Responsive Title Badge */}
                      <div
                        className="inline-block px-4 xs:px-5 sm:px-6 py-2 xs:py-3 
              bg-gradient-to-r from-[#E63946]/20 to-[#FACC15]/20 
              border-2 xs:border-3 border-[#E63946] 
              shadow-[3px_3px_0_#E63946] xs:shadow-[4px_4px_0_#E63946] sm:shadow-[5px_5px_0_#E63946]
              group-hover:shadow-[5px_5px_0_#E63946] xs:group-hover:shadow-[6px_6px_0_#E63946]
              transition-all duration-400 ease-out rounded-none origin-bottom-right"
                      >
                        <h2
                          className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-black 
                text-[#0B1F3F] uppercase tracking-[0.06em] xs:tracking-[0.08em]
                group-hover:text-[#E63946] transition-all duration-400 ease-out 
                drop-shadow-[1px_1px_0_rgba(230,57,70,0.3)] xs:drop-shadow-[2px_2px_0_rgba(230,57,70,0.3)]"
                        >
                          {service.title}
                        </h2>
                      </div>

                      <p
                        className="text-base xs:text-lg text-slate-700 leading-relaxed font-semibold 
              max-w-xl drop-shadow-[1px_1px_0_rgba(11,31,63,0.1)]
              transition-all duration-400 ease-out"
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Responsive Footer */}
                    <div
                      className="flex items-center justify-between pt-6 xs:pt-8 sm:pt-10 
            border-t-3 xs:border-t-4 border-t-[#E63946]/40"
                    >
                      <span
                        className="text-xs xs:text-sm uppercase tracking-[0.2em] xs:tracking-[0.25em] 
              font-black text-[#E63946] drop-shadow-[1px_1px_0_#0B1F3F]"
                      >
                        Featured Service
                      </span>

                      <div
                        className="inline-flex items-center gap-2 xs:gap-3 font-black 
              text-base xs:text-lg sm:text-xl 
              bg-gradient-to-r from-[#0B1F3F] to-[#E63946] bg-clip-text text-transparent 
              group-hover:from-[#E63946] group-hover:to-[#FACC15] 
              transition-all duration-400 ease-out 
              group-hover:translate-x-3 xs:group-hover:translate-x-4
              shadow-[3px_3px_0_rgba(230,57,70,0.4)] xs:shadow-[4px_4px_0_rgba(230,57,70,0.4)]
              group-hover:shadow-[5px_5px_0_rgba(250,204,21,0.5)]"
                      >
                        Learn more
                        <span className="transition-all duration-400 ease-out group-hover:translate-x-2 xs:group-hover:translate-x-3">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Ultra Smooth CTA */}
          <div className="mt-28 text-center">
            <Link href="/services">
              <Button text="View All Services →" fontSize={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
