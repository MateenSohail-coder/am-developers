"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

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
      // Fade the whole hero in slightly
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 }
      );

      // Headline: simple, clean entrance, one word per row stays intact
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            delay: 0.2,
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, delay: 0.4 }
        );
      }

      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, delay: 0.55 }
        );
      }

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

      const buttons = [primaryBtnRef.current, secondaryBtnRef.current].filter(
        Boolean
      );
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

      if (imageWrapRef.current) {
        gsap.fromTo(
          imageWrapRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, delay: 0.4 }
        );
      }

      // Image + service name rotation
      const tl = gsap.timeline({ repeat: -1, delay: 3 });

      images.forEach((_, i) => {
        tl.to([imageRef.current, serviceNameRef.current], {
          autoAlpha: 0,
          scale: 0.97,
          duration: 0.4,
          ease: "power2.inOut",
        })
          .call(() => setCurrentImage(i))
          .to([imageRef.current, serviceNameRef.current], {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
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
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-16 h-40 w-40 rounded-full bg-[#E63946]/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-[#0B1F3F]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-2 lg:px-10 xl:px-14 relative z-10">
        <div
          className="
          flex flex-col-reverse
          lg:grid lg:grid-cols-2
          gap-12 lg:gap-16
          items-center
        "
        >
          {/* LEFT: TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-[#0B1F3F]"
            >
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="inline-flex items-center rounded-full border border-[#E63946]/30 bg-[#E63946]/5 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E63946] mr-2" />
                  <span className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-[#E63946]">
                    Premium Zone
                  </span>
                </span>
              </div>
              <span className="block text-[#E63946]">DIGITAL</span>
              <span className="block">EXCELLENCE</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl lg:text-2xl font-medium text-[#0B1F3F]"
            >
              Premium digital solutions for ambitious brands.
            </p>

            <p
              ref={descriptionRef}
              className="text-base lg:text-lg text-[#475569] max-w-md"
            >
              <b>AM Devs</b> builds fast, reliable web and mobile experiences
              and drives measurable digital growth for businesses that want to
              stand out.
            </p>

            <div className="grid grid-cols-3 gap-4 w-full max-w-md mt-2">
              {statsData.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center border-2 border-[#E63946] bg-[#E63946]/10 text-[#E63946] rounded-xl px-4"
                >
                  <div
                    ref={(el) => {
                      if (el) statsRef.current[i] = el;
                    }}
                    data-target={stat.target}
                    className="text-3xl lg:text-4xl text-[#E63946] font-extrabold font-cursive m-2"
                  >
                    0
                  </div>
                  <div className="text-xs lg:text-sm text-[#64748B] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/contact">
                <button
                  ref={primaryBtnRef}
                  className="bg-[#E63946] text-white font-semibold px-7 py-3 rounded-xl text-sm lg:text-base hover:bg-[#d62f3c] transition-colors"
                >
                  Start Project ➔
                </button>
              </Link>
              <Link href="/services">
                <button
                  ref={secondaryBtnRef}
                  className="border border-[#0B1F3F]/30 px-7 py-3 rounded-xl font-semibold text-sm lg:text-base text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white transition-colors"
                >
                  View Work
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE CARD */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2">
            <div
              ref={imageWrapRef}
              className="
                relative 
                w-full 
                max-w-sm sm:max-w-md 
                rounded-3xl 
                bg-gradient-to-br from-[#E63946]/8 via-white to-[#0B1F3F]/8 
                p-4 shadow-xl
              "
            >
              <div
                ref={imageRef}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
              >
                <Image
                  src={images[currentImage]}
                  alt={services[currentImage]}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>

              <div ref={serviceNameRef} className="mt-4 text-center">
                <p className="text-sm lg:text-xl font-mono font-bold text-[#0B1F3F] tracking-wide">
                  {services[currentImage]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
