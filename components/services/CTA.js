"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function CTA() {
  return (
    <div className="w-full max-w-md mx-auto py-16">
      <div className="text-center space-y-8 p-8 lg:p-12 border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 rounded-none origin-bottom-right bg-white/80 backdrop-blur-xl">
        {/* CTA Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3F] drop-shadow-[2px_2px_0_rgba(11,31,63,0.1)] tracking-tight leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl font-black text-slate-700 tracking-tight">
            Get in touch with us today
          </p>
        </div>
        {/* CTA Button */}
        <Link href="/Contact">
          <Button text="Contact Us Now" />
        </Link>
      </div>
    </div>
  );
}
