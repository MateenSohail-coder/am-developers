"use client";
import Image from "next/image";

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
            <div className="inline-flex items-center px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
              <span className="text-xs lg:text-sm font-medium tracking-wider uppercase mr-2">
                Limited Time
              </span>
              <div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full animate-pulse" />
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
              <button className="group relative px-10 py-5 bg-gradient-to-r from-[#E63946] to-[#d6303d] text-white font-bold text-lg sm:text-xl rounded-xl shadow-2xl border-2 border-white/20 backdrop-blur-sm overflow-hidden min-w-[240px] transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="relative z-10">Get Free Proposal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              <button className="px-10 py-5 bg-white/20 backdrop-blur-xl text-white font-bold text-lg sm:text-xl rounded-xl border-2 border-white/30 hover:bg-white/30 hover:shadow-2xl transition-all duration-300 min-w-[200px] hover:scale-105 active:scale-95">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
