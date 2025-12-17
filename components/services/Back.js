"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

export default function Backbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 ">
      {/* Left Section - Logo */}
      <Link href="/" className="mb-6 lg:mb-8" aria-label="AMDevs Homepage">
        <div
          className="relative h-20 w-36 sm:h-24 sm:w-44 md:h-28 md:w-52 lg:h-32 lg:w-60 border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 rounded-none origin-bottom-right bg-white/80 backdrop-blur-xl overflow-hidden group"
          style={{ perspective: "1000px" }}
        >
          <Image
            src="/Logo.png"
            alt="AMDevs - Professional Web Development Agency"
            fill
            priority
            sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
            className="object-contain p-4 md:p-6"
          />

          {/* Themed accent corner */}
          <div className="absolute -top-2 -right-2 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#E63946]/30 to-[#FACC15]/30 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] rounded-none group-hover:scale-110 transition-all duration-200" />
        </div>
      </Link>

      {/* Right Section - Back Button (spaced apart) */}
      <div className="flex-shrink-0 ml-auto">
        <Link href="/">
          <div className="hidden md:block">
            <Button text="↩ Back to Home" />
          </div>
          <div className="md:hidden block">
            <Button text="↩" fontSize={25} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
