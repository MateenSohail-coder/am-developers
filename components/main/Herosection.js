"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Button from "../services/Button";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const statsRef = useRef([]);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const serviceNameRef = useRef(null);

  const [currentImage, setCurrentImage] = useState(0);
const buttons = [primaryBtnRef.current, secondaryBtnRef.current].filter(
  Boolean
);
const images = [
  "/appdev.avif",
  "/webdev.avif",
  "/software.avif",
  "/ui.avif",
  "/marketing.avif",
];

const services = [
  "App Development",
  "Web Development",
  "Software Solutions",
  "UI/UX Design",
  "Digital Marketing",
];

const statsData = [
  { label: "Projects", target: 50 },
  { label: "Clients", target: 10 },
  { label: "Years of Experience", target: 5 },
];

useEffect(() => {
  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  const ctx = gsap.context(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    );

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, delay: 0.2 }
      );
    }

    gsap.fromTo(
      [subtitleRef.current, descriptionRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.5, stagger: 0.1 }
    );

    statsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: el.dataset.target,
          snap: { textContent: 1 },
          duration: 1.8,
          delay: 0.8 + i * 0.15,
        }
      );
    });

    if (buttons.length) {
      gsap.fromTo(
        buttons,
        { opacity: 0, y: 15, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.9,
          stagger: 0.1,
        }
      );
    }

    gsap.fromTo(
      imageWrapRef.current,
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, delay: 0.4 }
    );

    const tl = gsap.timeline({ repeat: -1, delay: 3 });

    images.forEach((_, i) => {
      tl.to([imageRef.current, serviceNameRef.current], {
        autoAlpha: 0,
        scale: 0.97,
        duration: 0.4,
      })
        .call(() => setCurrentImage(i))
        .to([imageRef.current, serviceNameRef.current], {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
        })
        .to({}, { duration: 2.8 });
    });
  });

  return () => ctx.revert();
}, []);

return (
  <section
    ref={sectionRef}
    className="relative min-h-[85vh] flex items-center bg-white overflow-hidden py-14 lg:py-20"
  >
    {/* Background accents */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 -right-16 h-40 w-40 rounded-full bg-[#E63946]/10 blur-2xl" />
      <div className="absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-[#0B1F3F]/5 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 lg:px-10 xl:px-14 relative z-10">
      <div
        className="
            flex flex-col-reverse
            lg:grid lg:grid-cols-[1.3fr_1fr]
            gap-12 lg:gap-16
            items-center
          "
      >
        {/* LEFT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#0B1F3F] space-y-4"
          >
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center border-4 border-[#E63946] bg-white px-4 py-2 shadow-[6px_6px_0_#E63946]">
                <span className="h-1.5 w-1.5 bg-[#E63946] mr-2" />
                <span className="text-xs tracking-[0.25em] uppercase font-black">
                  Premium Zone
                </span>
              </span>
            </div>

            <span className="block mt-4 text-[#E63946] drop-shadow-[7px_7px_0_#0b1f3fb5]">
              DIGITAL
            </span>
            <span className="block drop-shadow-[7px_7px_0_#e63947ba]">
              EXCELLENCE
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl lg:text-2xl font-medium text-[#0B1F3F]"
          >
            Premium digital solutions for ambitious brands.
          </p>

          <p ref={descriptionRef} className="max-w-md text-[#475569]">
            <b>AM Devs</b> builds fast, reliable web and mobile experiences that
            drive measurable digital growth.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md w-full">
            {statsData.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] px-4 py-3 text-center"
              >
                <div
                  ref={(el) => (statsRef.current[i] = el)}
                  data-target={stat.target}
                  className="text-3xl font-black text-[#0B1F3F]"
                >
                  0
                </div>
                <div className="text-xs uppercase font-black tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-2">
            <Link href="/Contact">
              <Button
                ref={primaryBtnRef}
                text="Start Project ➔"
                fontSize={20}
                shadowSize={10}
              />
            </Link>
            <Link href="#services">
              <button
                ref={secondaryBtnRef}
                className="border border-[#0B1F3F]/30 px-7 py-5 font-semibold hover:bg-[#0B1F3F] hover:text-white transition"
              >
                View Work
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end w-full">
          <div
            ref={imageWrapRef}
            className="
      relative
      w-full
      max-w-sm sm:max-w-md lg:max-w-[420px]
      border-4 border-[#E63946]
      bg-gradient-to-br from-[#E63946]/10 via-white/90 to-[#0B1F3F]/10
      p-6
      shadow-[8px_8px_0_#E63946]
      hover:shadow-[12px_12px_0_#E63946]
      hover:-translate-x-[4px] hover:-translate-y-[4px]
      active:shadow-[4px_4px_0_#E63946]
      active:translate-x-0 active:translate-y-0
      transition-all duration-300 ease-out
      rounded-none
      backdrop-blur-sm
      origin-bottom-right
      group
    "
          >
            {/* Brutalist Image */}
            <div
              ref={imageRef}
              className="
        relative
        w-full
        aspect-[4/3]
        border-4 border-[#E63946]
        shadow-[6px_6px_0_#E63946]
        hover:shadow-[10px_10px_0_#E63946]
        hover:-translate-x-[3px] hover:-translate-y-[3px]
        transition-all duration-400 ease-out
        rounded-none
        bg-slate-100/50
        overflow-hidden
        group-hover:scale-[1.02]
      "
            >
              <Image
                src={images[currentImage]}
                alt={services[currentImage]}
                fill
                className="
          object-cover
          transition-all duration-700 ease-out
          group-hover:scale-[1.08]
          group-hover:brightness-[1.05]
          will-change-transform
        "
                priority
              />

              {/* Corner Accent */}
              <div
                className="
          absolute top-3 right-3
          w-12 h-12
          bg-gradient-to-br from-[#E63946]/90 to-[#FACC15]/90
          border-3 border-[#0B1F3F]
          shadow-[4px_4px_0_#0B1F3F]
          flex items-center justify-center
          transition-all duration-500 ease-out
          group-hover:shadow-[6px_6px_0_#0B1F3F]
          group-hover:scale-110
          rounded-none
          z-10
        "
              >
                <svg
                  className="w-5 h-5 text-white drop-shadow-[1px_1px_0_#0B1F3F]"
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
            </div>

            {/* Service Name */}
            <div ref={serviceNameRef} className="mt-6 text-center">
              <div
                className="
          inline-block
          px-6 py-3
          bg-gradient-to-r from-[#0B1F3F]/95 to-[#E63946]/95
          border-3 border-[#E63946]
          shadow-[6px_6px_0_#E63946]
          hover:shadow-[8px_8px_0_#E63946]
          hover:-translate-x-[2px] hover:-translate-y-[2px]
          active:shadow-[3px_3px_0_#E63946]
          active:translate-x-0 active:translate-y-0
          transition-all duration-300 ease-out
          rounded-none
          backdrop-blur-sm
          group-hover:bg-gradient-to-r
          group-hover:from-[#E63946]/95
          group-hover:to-[#0B1F3F]/95
        "
              >
                <p
                  className="
            text-base lg:text-xl
            font-black uppercase tracking-[0.15em]
            text-white
            drop-shadow-[2px_2px_0_#E63946]
            leading-tight
            group-hover:drop-shadow-[3px_3px_0_#FACC15]
          "
                >
                  {services[currentImage]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default HeroSection;
