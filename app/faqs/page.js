"use client";

import { useState } from "react";
import { Plus, Minus, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/services/Footer";
import Bar from "@/components/services/bar";
import Backbar from "@/components/services/Back";
import SquareLoader from "@/components/services/Loader";

const FAQS = [
  {
    question: "What services does AMDevs provide?",
    answer:
      "AMDevs specializes in professional React, Next.js, and fullstack web development. We create high-performance SaaS applications, responsive websites, and modern UI/UX designs with GSAP animations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary from 2-12 weeks depending on complexity. Simple landing pages take 2-4 weeks, while full SaaS platforms take 8-12 weeks. We provide detailed timelines during discovery.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing: Hourly ($35-60/hr), Fixed-price projects, or Monthly retainers. Get a free quote by contacting us at +92 370 0959829 or amdevs@gmail.com.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes! We offer monthly maintenance packages including updates, performance optimization, and 24/7 monitoring to keep your site running perfectly.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Next.js, React, GSAP animations, Node.js, MongoDB, Tailwind CSS, TypeScript. We stay updated with the latest web technologies for optimal performance.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We specialize in modern redesigns that improve speed, SEO, and conversions while maintaining your brand identity.",
  },
  {
    question: "Do you offer hosting and domain services?",
    answer:
      "We recommend and setup optimized hosting (Vercel, Netlify) and handle domain configuration for seamless deployment.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us via WhatsApp (+92 370 0959829), email (amdevs@gmail.com), or the contact form. We'll schedule a free 30-min consultation.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Backbar />
      <section className="mt-30">
        <Bar mobileText="FAQS" desktopText="Have a Questions !" />
        <title>FAQs - AMDevs | Web Development Questions Answered</title>
        <meta
          name="description"
          content="Frequently asked questions about AMDevs web development services, pricing, timelines, and process. Contact +92 370 0959829"
        />

        <div className="min-h-screen ">
          {/* Hero Section */}
          <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 sm:px-8 lg:px-12 overflow-hidden">
            <div className="absolute inset-0 " />

            <div className="relative max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 mb-6 md:mb-8 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-2xl border border-slate-200/50 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-[#FACC15] rounded-full animate-pulse" />
                <span className="text-sm md:text-base font-medium text-slate-600 uppercase tracking-wide">
                  Frequently Asked Questions
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#0B1F3F] via-[#1E3A8A] to-[#E63946] bg-clip-text text-transparent mb-6 md:mb-8 leading-tight">
                Got Questions?
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-600/90 max-w-3xl mx-auto leading-relaxed font-medium">
                Find answers to everything about our web development services,
                pricing, and process.
              </p>
            </div>
          </section>

          {/* FAQ List - Single column */}
          <section className="px-6 sm:px-8 lg:px-12 pb-24 md:pb-32 max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              {FAQS.map((faq, index) => (
                <div
                  key={faq.question}
                  className="group bg-white/80 backdrop-blur-2xl rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 overflow-hidden hover:border-[#E63946]/20"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 lg:p-10 flex items-start justify-between text-left hover:bg-gradient-to-r hover:from-[#E63946]/5 hover:to-[#FACC15]/5 transition-all duration-500"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3F] group-hover:text-[#E63946] transition-all duration-500 leading-tight pr-4 flex-1">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-[#E63946]/10 group-hover:to-[#FACC15]/10 border-2 border-slate-200 group-hover:border-[#E63946]/30 transition-all duration-500 flex items-center justify-center shadow-sm hover:shadow-md relative overflow-hidden">
                      {openIndex === index ? (
                        <Minus className="h-7 w-7 text-[#E63946] z-10 transition-transform duration-500 group-hover:rotate-180" />
                      ) : (
                        <Plus className="h-7 w-7 text-slate-500 group-hover:text-[#E63946] z-10 transition-all duration-500" />
                      )}
                      {/* Subtle ring animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/20 to-[#FACC15]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-ping-slow"></div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 lg:px-10 pb-8 lg:pb-10 pt-2 border-t border-slate-100 bg-gradient-to-r from-slate-50/70 to-white">
                      <p className="text-slate-700 leading-relaxed text-lg lg:text-xl font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section - Responsive */}
            <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 text-center">
              <div className="bg-gradient-to-br from-[#0B1F3F] via-[#1E3A8A] to-[#E63946] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 shadow-3xl border-4 border-white/20 backdrop-blur-md mx-4 sm:mx-6 md:mx-8">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#FACC15] to-[#E63946] rounded-2xl shadow-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#0B1F3F]" />
                  </div>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
                  Still Have Questions?
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-4">
                  Let's discuss your project. Free 30-minute consultation
                  included.
                </p>

                {/* Buttons - Stack on mobile, row on larger screens */}
                <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-2 sm:px-4">
                  {/* Primary WhatsApp Button */}
                  <Link
                    href="https://wa.me/923700959829/?text=Hello%20I%20want%20to%20discuss%20my%20project"
                    target="_blank"
                    className="group bg-white text-[#0B1F3F] hover:bg-[#E63946] hover:text-white px-6 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 md:py-7 rounded-3xl font-bold text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 flex items-center gap-3 justify-center border-4 border-white/30 hover:border-[#E63946]/50 min-h-[52px] sm:min-h-[60px]"
                  >
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">WhatsApp Now</span>
                  </Link>

                  {/* Secondary Contact Button */}
                  <Link
                    href="/contact"
                    className="group border-4 border-white hover:bg-white text-white hover:text-[#0B1F3F] px-6 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 md:py-7 rounded-3xl font-bold text-base sm:text-lg md:text-xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 min-h-[52px] sm:min-h-[60px] bg-white/10 backdrop-blur-sm hover:backdrop-blur-none flex items-center justify-center"
                  >
                    <span className="whitespace-nowrap">Send Proposal</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </section>
      <SquareLoader />
    </>
  );
}
