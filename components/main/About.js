"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Bar from "../services/bar";
import Button from "../services/Button";
import Link from "next/link";

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const textEl = textRef.current;
    const imgEl = imageRef.current;

    if (textEl) {
      textEl.style.opacity = "0";
      textEl.style.transform = "translateY(20px)";
      requestAnimationFrame(() => {
        textEl.style.transition = "all 700ms ease-out";
        textEl.style.opacity = "1";
        textEl.style.transform = "translateY(0)";
      });
    }

    if (imgEl) {
      imgEl.style.opacity = "0";
      imgEl.style.transform = "translateY(20px) scale(0.98)";
      requestAnimationFrame(() => {
        imgEl.style.transition = "all 700ms ease-out";
        imgEl.style.opacity = "1";
        imgEl.style.transform = "translateY(0) scale(1)";
      });
    }
  }, []);

  return (
    <>
      <Bar desktopText="About Us ?" mobileText="About Us ?" id="about" />

      <section
        ref={sectionRef}
        className="relative bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* IMAGE SIDE */}
            <div
              ref={imageRef}
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] group hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-300 ease-out rounded-none bg-slate-100/50 backdrop-blur-sm overflow-hidden origin-bottom-right"
            >
              <Image
                src="/about.jpg"
                alt="AM Devs team working on digital solutions"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-[1.05] will-change-transform"
              />

              {/* Brutalist Overlay Badge */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-[#E63946]/95 to-[#FACC15]/95 border-4 border-[#0B1F3F] shadow-[6px_6px_0_#0B1F3F] flex items-center justify-center transition-all duration-500 ease-out group-hover:shadow-[8px_8px_0_#0B1F3F] group-hover:scale-110 group-hover:rotate-6 rounded-none z-10 backdrop-blur-sm">
                <svg
                  className="w-8 h-8 text-white drop-shadow-[2px_2px_0_#0B1F3F] transition-transform duration-500 ease-out group-hover:rotate-12"
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

              {/* Brutalist Bottom Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-[#0B1F3F]/98 to-[#E63946]/98 border-t-4 border-t-white/80 backdrop-blur-md flex items-center pl-8 pr-8 z-20 shadow-[0_-4px_0_rgba(230,57,70,0.3)] group-hover:shadow-[0_-6px_0_rgba(230,57,70,0.5)] transition-shadow duration-500 ease-out">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/30 border-3 border-white shadow-[4px_4px_0_white] backdrop-blur-sm flex items-center justify-center transition-all duration-500 ease-out group-hover:shadow-[6px_6px_0_white] group-hover:scale-110 rounded-none">
                    <svg
                      className="w-6 h-6 text-white drop-shadow-[1px_1px_0_#0B1F3F] transition-transform duration-500 ease-out group-hover:rotate-360"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="transition-all duration-500 ease-out group-hover:translate-x-2">
                    <p className="text-white font-black text-lg uppercase tracking-[0.15em] drop-shadow-[2px_2px_0_#0B1F3F] leading-tight">
                      AM Devs
                    </p>
                    <p className="text-white/95 font-black text-sm tracking-[0.1em] drop-shadow-[1px_1px_0_#0B1F3F]">
                      Digital Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT SIDE */}
            <div
              ref={textRef}
              className="space-y-8 lg:space-y-9 max-w-xl mx-auto lg:mx-0"
            >
              {/* Badge + Heading */}
              <header className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center rounded-full border border-[#E63946]/30 bg-[#E63946]/5 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E63946] mr-2" />
                    <span className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-[#E63946]">
                      About AM Devs
                    </span>
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-slate-900 text-center md:text-left">
                  Your Long‑Term Technology &{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#E63946]">
                      Growth Partner
                    </span>
                    <span className="absolute inset-x-0 -bottom-1 h-2 bg-[#E63946]/15 rounded-full -z-0" />
                  </span>
                </h1>
              </header>

              {/* Main copy */}
              <div className="space-y-4 text-base font-sans md:text-lg text-slate-600 leading-relaxed text-center md:text-left">
                <p>
                  AM Devs is a modern tech agency helping businesses build,
                  grow, and manage digital products with confidence. We focus on
                  long‑term stability, performance, and measurable growth — not
                  just one‑time projects.
                </p>
                <p>
                  Our team of developers, designers, and strategists uses modern
                  stacks like MERN to ship fast, secure, and scalable products
                  for startups and growing brands worldwide.
                </p>
              </div>

              {/* Highlight card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-4 md:px-6 md:py-5 shadow-sm">
                <p className="text-sm md:text-base font-semibold text-slate-700 leading-relaxed">
                  We do not just deliver features; we partner with you to align
                  technology with your business goals, improve processes, and
                  keep your product evolving as your market changes.
                </p>
              </div>

              {/* Lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-base">
                <ul className="space-y-2 text-slate-700 text-center md:text-left">
                  <li className="flex items-center gap-2 font-semibold text-slate-900">
                    <span className="h-1.5 w-6 rounded-full bg-[#E63946]" />
                    Why partners choose us
                  </li>
                  <li>Business‑first thinking, not just code</li>
                  <li>Clear, honest communication</li>
                  <li>Ongoing support & improvements</li>
                </ul>

                <ul className="space-y-2 text-slate-700 text-center md:text-left">
                  <li className="flex items-center gap-2 font-semibold text-slate-900">
                    <span className="h-1.5 w-6 rounded-full bg-slate-400" />
                    Our values
                  </li>
                  <li>Transparency & honesty</li>
                  <li>Quality over shortcuts</li>
                  <li>Long‑term relationships</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-col items-center md:items-start gap-2">
                <Link href="/Contact">
                  <Button text="Book a Free Consultation" />
                </Link>
                <p className="text-xs md:text-sm text-slate-500">
                  No pressure, no spam — just a 20‑minute strategy call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
