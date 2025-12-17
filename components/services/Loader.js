"use client";

import { useEffect, useState } from "react";

export default function SquareLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show for 2 seconds, then hide (adjust if you want)
    const t = setTimeout(() => setShow(false), 300);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Themed square loader */}
        <div className="relative w-12 h-12">
          {/* Base square */}
          <div className="absolute inset-0 bg-[#E63946] shadow-[8px_8px_0_#0B1F3F]"></div>
          {/* Animated inner square */}
          <div className="absolute inset-1 bg-white animate-[squarePulse_0.9s_ease-in-out_infinite]"></div>
        </div>

        <p className="text-sm font-medium text-[#0B1F3F] tracking-wide">
          Loading…
        </p>
      </div>

      <style jsx>{`
        @keyframes squarePulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.7);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
