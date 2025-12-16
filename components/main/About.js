"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Bar from "../services/bar";

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
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-3xl border-4 border-t-[#E63946] border-b-[#E63946] border-l-[#0B1F3F] border-r-[#0B1F3F] overflow-hidden bg-slate-100 shadow-lg"
            >
              <Image
                src="/about.jpg" // replace with your image path
                alt="AM Devs team working on digital solutions"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
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
                <button className="inline-flex items-center justify-center rounded-xl bg-[#E63946] px-7 md:px-9 py-3 md:py-3.5 text-sm md:text-base font-semibold text-white shadow-md hover:bg-[#d3313e] hover:shadow-lg transition-colors">
                  Book a Free Consultation
                </button>
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
