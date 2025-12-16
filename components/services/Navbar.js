"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  useLayoutEffect,
} from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

// Memoized contact link component (unchanged)
const ContactLink = memo(({ href, icon: Icon, children, className = "" }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center text-[#0B1F3F] hover:text-white transition-colors duration-200 ${className}`}
    aria-label={children}
  >
    <Icon className="mr-1 h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
    {children}
  </Link>
));
ContactLink.displayName = "ContactLink";

// Navigation items configuration
const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact", isSpecial: true },
];

const BottomMenu = memo(({ isVisible }) => (
  <div
    className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40
                w-[95%] max-w-6xl
                bg-white/70 backdrop-blur-xl
                rounded-2xl
                transition-all duration-500 ease-out
                hidden lg:block
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0 pointer-events-none"
                }`}
    role="navigation"
    aria-label="Bottom navigation"
  >
    <div className="px-6 py-3">
      <ul className="flex items-center justify-center gap-2">
        {NAV_ITEMS.slice(0, -1).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="px-4 py-2 text-sm font-medium
                         text-[#0B1F3F]/80 hover:text-[#E63946]
                         rounded-lg
                         border border-transparent
                         transition-all duration-300
                         hover:border-[#E63946]/40
                         hover:bg-[#E63946]/5
                         active:scale-95"
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Contact Button */}
        <li>
          <Link
            href="/contact"
            className="ml-2 px-6 py-2.5 text-sm font-semibold
                       text-white rounded-xl
                       bg-gradient-to-r from-[#E63946] to-[#d63031]
                       transition-all duration-300
                       hover:scale-105 active:scale-95
                       flex items-center gap-2"
          >
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
));

BottomMenu.displayName = "BottomMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBottomMenu, setShowBottomMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Toggle functions (unchanged)
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Fixed scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show bottom menu when scrolled >100px AND scrolling down (desktop only)
          if (window.innerWidth >= 1024) {
            setShowBottomMenu(currentScrollY > 100);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial animations (unchanged)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        navItemsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Mobile menu animations (unchanged)
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const ctx = gsap.context(() => {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        );

        gsap.fromTo(
          closeBtnRef.current,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            delay: 0.1,
            ease: "back.out(1.5)",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [isMobileMenuOpen]);

  // Body scroll lock (unchanged)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative w-full" role="banner">
      {/* Top contact bar (unchanged) */}
      <div
        className="fixed top-0 h-7 md:h-8 rounded-b-xl z-50 w-full md:w-[85%] lg:w-[80%] 
                       bg-[#E63946] flex items-center justify-center md:justify-between 
                       px-3 md:px-6 lg:px-10 gap-3 md:gap-4 text-xs md:text-sm 
                       mx-auto left-0 right-0 border-2 border-[#0B1F3F] border-t-0 
                       shadow-md"
      >
        <ContactLink href="https://wa.me/923700959829" icon={Phone}>
          +92 370 0959829
        </ContactLink>
        <ContactLink
          href="mailto:amdevs@gmail.com"
          icon={Mail}
          className="hidden sm:flex"
        >
          amdevs@gmail.com
        </ContactLink>
      </div>

      {/* Main navigation (unchanged) */}
      <nav
        ref={navRef}
        className="flex items-center justify-between mt-7 md:mt-8 h-20 md:h-24 lg:h-28 
                   px-4 sm:px-6 lg:px-12 bg-white"
        aria-label="Main navigation"
      >
        {/* Logo (unchanged) */}
        <Link href="/" aria-label="AMDevs Home">
          <div
            ref={logoRef}
            className="relative h-16 w-32 sm:h-20 sm:w-36 md:h-24 md:w-40 lg:h-28 lg:w-48"
          >
            <Image
              src="/Logo.png"
              alt="AMDevs Logo"
              fill
              priority
              sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 192px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu (unchanged) */}
        <ul
          className="hidden md:flex items-center gap-1.5 lg:gap-2 border border-white 
                        rounded-l-3xl px-4 py-4 lg:px-6 lg:py-5 bg-[#0B1F3F] shadow-lg"
        >
          {NAV_ITEMS.slice(0, -1).map((item, index) => (
            <li key={item.href} ref={(el) => (navItemsRef.current[index] = el)}>
              <Link
                href={item.href}
                className="px-3 py-2.5 lg:px-5 lg:py-3 text-base lg:text-lg font-bold 
                           text-[#E63946] border-2 border-white rounded-xl bg-white 
                           hover:bg-transparent hover:text-white transition-all duration-300 
                           hover:scale-105 shadow-md active:scale-95"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li ref={(el) => (navItemsRef.current[4] = el)}>
            <Link
              href="/contact"
              className="px-5 py-2.5 lg:px-7 lg:py-3 text-base lg:text-lg font-bold 
                         text-white bg-[#E63946] border-4 border-white rounded-xl 
                         hover:bg-white hover:text-[#E63946] hover:shadow-xl 
                         hover:scale-105 transition-all duration-300 shadow-lg 
                         active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact ➔</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (unchanged) */}
        <button
          className="md:hidden rounded-lg p-2.5 bg-[#0B1F3F] hover:bg-[#0B1F3F]/90 
                     transition-colors duration-200 active:scale-95 shadow-md"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#E63946]" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-[#E63946]" aria-hidden="true" />
          )}
        </button>

        {/* Mobile Menu (unchanged) */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed inset-0 z-50 bg-[#0B1F3F] md:hidden flex flex-col 
                       items-center justify-center gap-4 sm:gap-5 px-6 py-20 
                       overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              ref={closeBtnRef}
              className="absolute top-8 right-8 p-2.5 rounded-xl bg-white shadow-lg 
                         active:scale-95 transition-transform"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-[#E63946]" aria-hidden="true" />
            </button>

            {NAV_ITEMS.map((item, index) => (
              <div key={item.href} className="w-full max-w-md">
                <Link
                  href={item.href}
                  className={`block w-full text-5xl sm:text-6xl font-bold border-3 
                             border-white rounded-xl py-5 sm:py-6 px-8 sm:px-10 
                             shadow-xl text-center transition-all duration-300 
                             hover:scale-105 active:scale-95 ${
                               item.isSpecial
                                 ? "text-white bg-[#E63946] hover:bg-white hover:text-[#E63946]"
                                 : "text-[#E63946] bg-white hover:bg-[#E63946] hover:text-white"
                             }`}
                  onClick={closeMobileMenu}
                  ref={(el) => (navItemsRef.current[index + 5] = el)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* FIXED: Working Bottom Menu */}
      <BottomMenu isVisible={showBottomMenu} />
    </header>
  );
}
