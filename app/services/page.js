"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Backbar from "@/components/services/Back";
import Bar from "@/components/services/bar";
import Button from "@/components/services/Button";
import Footer from "@/components/services/Footer";

const services = [
  {
    id: "web-dev",
    title: "Web Application Development",
    description:
      "Custom, scalable web applications using React, Next.js, Node.js & MongoDB. Built for performance and long-term growth.",
    image: "/webservice.avif",
    features: [
      "React/Next.js Frontend",
      "Node.js/MongoDB Backend",
      "Responsive Design",
      "API Integration",
      "Performance Optimized",
    ],
    stats: "50+ Projects Delivered",
    cta: "Start Project",
  },
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    description:
      "Conversion-focused interfaces with GSAP animations. Premium branding that converts visitors to customers.",
    image: "/design.avif",
    features: [
      "Figma to React",
      "GSAP Animations",
      "Mobile-First Design",
      "Dark/Light Themes",
      "Accessibility (WCAG)",
    ],
    stats: "98% Client Satisfaction",
    cta: "Design Portfolio",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "React Native apps with native performance. Cross-platform solutions for iOS & Android.",
    image: "/phone.avif",
    features: [
      "React Native",
      "Native Performance",
      "Push Notifications",
      "Offline Support",
      "App Store Ready",
    ],
    stats: "10+ Live Apps",
    cta: "View Apps",
  },
  {
    id: "seo",
    title: "SEO & Performance",
    description:
      "Google #1 rankings with technical SEO, Core Web Vitals optimization, and content strategy.",
    image: "/seo2.avif",
    features: [
      "Technical SEO Audit",
      "Core Web Vitals",
      "Schema Markup",
      "Site Speed 90+",
      "Local SEO",
    ],
    stats: "300% Traffic Growth",
    cta: "Free Audit",
  },
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "Full-stack SaaS platforms with Stripe payments, authentication, and subscription management.",
    image: "/saas.avif",
    features: [
      "Stripe Integration",
      "User Auth (NextAuth)",
      "Subscription Plans",
      "Admin Dashboards",
      "Multi-Tenant",
    ],
    stats: "5+ SaaS Products",
    cta: "Build SaaS",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "24/7 monitoring, security updates, performance optimization, and support.",
    image: "/maintenance.avif",
    features: [
      "Daily Backups",
      "Security Patches",
      "Uptime 99.9%",
      "Performance Tuning",
      "Priority Support",
    ],
    stats: "100% Uptime Guarantee",
    cta: "Get Support",
  },
  {
    id: "Sotware Development",
    title: "Sotware Development",
    description:
      "Custom software development using React, Next.js, Node.js & MongoDB. Built for performance and long-term growth.",
    image: "/software2.avif",
    features: [
      "Custom Software Development",
      "Responsive Design",
      "API Integration",
      "Performance Optimized",
    ],
    stats: "50+ Projects Delivered",
    cta: "Start Project",
  },
  {
    id: "Digital Marketing",
    title: "Digital Marketing",
    description:
      "Digital marketing services including SEO, PPC, social media marketing, and content marketing.",
    image: "/marketing2.avif",
    features: [
      "SEO",
      "PPC",
      "Social Media Marketing",
      "Content Marketing",
      "Priority Support",
    ],
    stats: "Digital Presence",
    cta: "Get Support",
  },
];

export default function AllServices() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, []);

  return (
    <>
      <Backbar />
      <Bar
        desktopText="Complete Services"
        mobileText="All Services"
        id="all-services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3F]/20 via-white to-[#E63946]/20 border-b-4 border-b-[#E63946] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex mb-6 items-center justify-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-3 sm:border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] flex items-center justify-center rounded-none">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#E63946]"
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
              <span className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F]">
                Full Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#0B1F3F] to-[#E63946] bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-[3px_3px_0_rgba(230,57,70,0.2)]">
              Everything You Need
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-slate-700 font-semibold leading-relaxed drop-shadow-[1px_1px_0_rgba(11,31,63,0.1)]">
              Full-stack development from idea to launch.
            </p>
          </div>

          {/* Compact Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {[
              { label: "50+", desc: "Projects Live" },
              { label: "98%", desc: "Client Satisfaction" },
              { label: "100%", desc: "Uptime" },
              { label: "24/7", desc: "Support" },
              { label: "7+", desc: "Years" },
              { label: "300%", desc: "Traffic Growth" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-4 sm:p-6 border-2 border-[#E63946]/20 hover:border-[#E63946] hover:shadow-[6px_6px_0_#E63946] transition-all duration-300 rounded-none"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-[#E63946] to-[#FACC15] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.label}
                </div>
                <p className="text-slate-600 font-bold uppercase tracking-wide mt-1 sm:mt-2 text-xs sm:text-sm">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <article
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="
            group relative overflow-hidden border-4 border-[#E63946] 
            bg-white/95 backdrop-blur-sm 
            shadow-[6px_6px_0_#E63946] 
            xs:shadow-[8px_8px_0_#E63946]
            sm:shadow-[10px_10px_0_#E63946]
            lg:shadow-[12px_12px_0_#E63946]
            hover:shadow-[12px_12px_0_#E63946] 
            xs:hover:shadow-[14px_14px_0_#E63946]
            sm:hover:shadow-[18px_18px_0_#E63946]
            lg:hover:shadow-[20px_20px_0_#E63946]
            hover:-translate-x-[2px] hover:-translate-y-[2px]
            sm:hover:-translate-x-[3px] sm:hover:-translate-y-[3px]
            lg:hover:-translate-x-[4px] lg:hover:-translate-y-[4px]
            hover:scale-[1.01] lg:hover:scale-[1.02]
            active:shadow-[3px_3px_0_#E63946] active:translate-x-0 active:translate-y-0
            transition-all duration-400 ease-out rounded-none origin-bottom-right
            will-change-transform h-full flex flex-col
          "
              >
                {/* Compact Image */}
                <div className="relative flex-shrink-0 h-40 xs:h-44 sm:h-48 lg:h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                object-cover transition-all duration-700 ease-out
                group-hover:scale-[1.08] group-hover:brightness-[1.05]
                will-change-transform
              "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Compact Badge */}
                  <div
                    className="absolute top-3 right-3 
              w-10 h-10 xs:w-12 xs:h-12 sm:w-14
              bg-gradient-to-br from-[#E63946]/95 to-[#FACC15]/95 
              border-2 xs:border-3 border-[#0B1F3F] 
              shadow-[3px_3px_0_#0B1F3F]
              flex items-center justify-center 
              group-hover:shadow-[5px_5px_0_#0B1F3F]
              group-hover:scale-110
              transition-all duration-400 rounded-none z-10"
                  >
                    <svg
                      className="w-4 h-4 xs:w-5 text-white drop-shadow-sm"
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

                {/* Compact Content */}
                <div className="flex-1 flex flex-col p-4 xs:p-5 sm:p-6 lg:p-8 justify-between">
                  {/* Compact Title + Content */}
                  <div className="space-y-3 mb-4 sm:mb-5 flex-1">
                    {/* Compact Title */}
                    <div
                      className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 
                bg-gradient-to-r from-[#E63946]/20 to-[#FACC15]/20 
                border-2 border-[#E63946] 
                shadow-[2px_2px_0_#E63946]
                group-hover:shadow-[4px_4px_0_#E63946]
                transition-all duration-300 rounded-none"
                    >
                      <h3
                        className="text-base xs:text-lg sm:text-xl font-black uppercase 
                  text-[#0B1F3F] tracking-wide
                  group-hover:text-[#E63946] transition-colors"
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-700 text-sm xs:text-base line-clamp-2 leading-tight">
                      {service.description}
                    </p>

                    {/* Compact Features */}
                    <div className="space-y-1.5 text-xs xs:text-sm max-h-16 overflow-hidden">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#E63946] rounded-full flex-shrink-0"></div>
                          <span className="font-semibold text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Compact Stats */}
                    <div className="text-lg xs:text-xl font-black text-[#E63946] mt-2">
                      {service.stats}
                    </div>
                  </div>

                  {/* Compact Button */}
                  <div className="pt-2">
                    <Button
                      text={service.cta}
                      fullWidth={true}
                      fontSize={14}
                      bg="#E63946"
                      color="white"
                      hoverBg="#0B1F3F"
                      hoverColor="#FACC15"
                      shadowSize={4}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B1F3F] to-[#E63946] text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <div className="inline-block p-8 border-4 border-white/20 backdrop-blur-sm shadow-[12px_12px_0_rgba(255,255,255,0.2)] hover:shadow-[16px_16px_0_rgba(255,255,255,0.3)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-500 rounded-none mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight drop-shadow-2xl">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-xl">
              Get a free consultation and project roadmap within 24 hours.
            </p>
            <Link href="/contact">
              <Button
                text="Get Free Quote →"
                fontSize={20}
                bg="white"
                color="#0B1F3F"
                hoverBg="#E63946"
                hoverColor="white"
                shadowSize={10}
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
