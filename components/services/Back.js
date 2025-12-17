"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

export default function Backbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 ">
      {/* Left Section - Logo */}
      <div className="flex-shrink-0">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-xl md:text-2xl bg-gradient-to-r from-[#0B1F3F] to-[#E63946] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          <div className="w-45 h-16 relative">
            <Image src="/Logo.png" alt="Logo" fill />
          </div>
        </Link>
      </div>

      {/* Right Section - Back Button (spaced apart) */}
      <div className="flex-shrink-0 ml-auto">
        <Link href="/">
          <Button text="↩ Back to Home" />
        </Link>
      </div>
    </nav>
  );
}
