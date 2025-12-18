"use client";
import Image from "next/image";
import Button from "../services/Button";

export default function Offer() {
  return (
    <section className="relative overflow-hidden min-h-[700px] md:min-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/offer.jpg"
          alt="Exclusive 25% OFF - Get Your Free Proposal Today!"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/80 via-[#E63946]/60 to-[#0B1F3F]/70 -z-5" />

      {/* Main Content Container */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="flex mb-6 items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[yellow] shadow-[6px_6px_0_#E63946] flex items-center justify-center rounded-none transition-all duration-500 hover:shadow-[8px_8px_0_#E63946] hover:scale-110">
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
              <span className="text-lg font-black uppercase tracking-[0.2em] text-[yellow] drop-shadow-[2px_2px_0_#0B1F3F]">
                Limited Time
              </span>
            </div>

            {/* Main Heading */}
            <div className="px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white/95 drop-shadow-xl">
                  Get Your
                </span>
                <span className="block bg-gradient-to-r from-white via-[#FACC15] to-[#E63946] bg-clip-text text-transparent drop-shadow-xl mt-2">
                  FREE Proposal
                </span>
                <span className="block text-white/95 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-4">
                  Today!
                </span>
              </h1>
            </div>

            {/* Discount Highlight */}
            <div className="relative px-4">
              <div className="inline-flex items-center px-8 py-6 bg-white/10 backdrop-blur-2xl rounded-2xl border-2 border-white/20 shadow-xl">
                <div className="relative">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#FACC15] drop-shadow-lg">
                    25%
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-[#FACC15] to-[#E63946] rounded-full blur-lg animate-pulse" />
                </div>
                <div className="ml-6">
                  <p className="text-lg sm:text-xl font-bold text-white/90">
                    OFF
                  </p>
                  <p className="text-sm sm:text-base text-white/70 font-light tracking-wide uppercase mt-1">
                    First Project
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md px-6">
              AM Devs delivers professional, high-performance websites built
              with cutting-edge technology. Transform your vision into reality
              with our expert team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-8 w-full px-6 sm:px-0">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-[#E63946] to-[#d6303d] text-white font-bold text-lg sm:text-xl rounded-0 shadow-2xl border-2 border-white/20 backdrop-blur-sm overflow-hidden min-w-[240px] transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="relative z-10">Get Free Proposal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              <Button text="View Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
