"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Bar from "../services/bar";

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
      card.style.transform = "translateY(30px)";
      card.style.transition =
        "opacity 600ms ease-out, transform 600ms ease-out";

      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 120);
    });
  }, []);

  // optional: subtle 3D tilt on mouse move
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * 4; // tilt left/right

    card.style.transform = `translateY(-6px) scale(1.01) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = "translateY(0) scale(1) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <Bar desktopText="What We Offer!" mobileText="Services" id="services" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* heading */}
          <header className="mb-14  text-center">
            <div className="flex mb-3 items-center justify-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[#E63946]/30 bg-[#E63946]/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E63946] mr-2" />
                <span className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-[#E63946]">
                  Services
                </span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3F]">
              Powerful Services for{" "}
              <span className="text-[#E63946]">Digital Growth</span>
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-base text-slate-600">
              From idea to execution — everything you need to build, launch, and
              scale your digital product.
            </p>
          </header>

          {/* services */}
          <div className="space-y-12">
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
                  rounded-3xl border border-slate-200 bg-white
                  transition-all duration-500 ease-out
                  hover:shadow-[0_22px_60px_rgba(12,22,58,0.20)]
                  will-change-transform
                "
              >
                {/* glowing border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#E63946]/50 transition-colors duration-500" />

                {/* gradient sweep */}
                <span
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-r from-transparent via-white/35 to-transparent
                    translate-x-[-130%] group-hover:translate-x-[130%]
                    transition-transform duration-700 ease-in-out
                  "
                />

                <div className="flex flex-col md:flex-row min-h-[300px]">
                  {/* image */}
                  <div className="relative w-full md:w-2/5 min-h-[240px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-medium text-[#0B1F3F] shadow-sm">
                      AM Devs
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h2 className="text-xl md:text-2xl font-bold text-[#0B1F3F]">
                        {service.title}
                      </h2>
                      <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#E63946]">
                        Featured service
                      </span>

                      <button
                        className="
                          inline-flex items-center gap-2 font-semibold
                          text-[#0B1F3F] transition-colors
                          group-hover:text-[#E63946]
                        "
                      >
                        Learn more
                        <span
                          className="
                            transition-transform duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="
                inline-flex items-center justify-center
                rounded-xl bg-[#E63946]
                px-10 py-4 text-base font-semibold text-white
                shadow-lg transition-all
                hover:bg-[#d3313e] hover:shadow-xl
              "
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
