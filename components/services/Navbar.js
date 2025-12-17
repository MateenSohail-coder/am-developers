"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback, memo, useMemo } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { gsap } from "gsap";
import Button from "./Button";

// Memoized contact link with better accessibility
const ContactLink = memo(({ href, icon: Icon, children, className = "" }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-1.5 text-white hover:text-[#E63946] transition-all duration-200 font-medium ${className}`}
    aria-label={`Contact via ${children}`}
  >
    <Icon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
    <span>{children}</span>
  </Link>
));

// Memoized nav items with SEO-friendly structure
const NAV_ITEMS = [
  { href: "#about", label: "About", key: "about" },
  { href: "#services", label: "Services", key: "services" },
  { href: "#clients", label: "Clients", key: "clients" },
  { href: "#work", label: "Work", key: "work" },
  { href: "/contact", label: "Contact", key: "contact", isSpecial: true },
];

// Optimized BottomMenu with perfect spacing
const BottomMenu = memo(({ isVisible, onClose }) => (
  <div
    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95vw] max-w-6xl bg-white/95 backdrop-blur-xl rounded-3xl border border-[#0B1F3F]/10 shadow-2xl transition-all duration-500 ease-out ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-12 opacity-0 pointer-events-none"
    }`}
    role="navigation"
    aria-label="Secondary navigation menu"
  >
    <div className="px-8 py-6 relative">
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 bg-white/90 hover:bg-red-50 rounded-full p-2.5 shadow-xl border border-[#0B1F3F]/20 hover:border-red-200 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Close bottom navigation"
      >
        <X className="h-4 w-4 text-[#0B1F3F]" />
      </button>
      <ul className="flex items-center justify-center gap-6">
        {NAV_ITEMS.slice(0, -1).map((item) => (
          <li key={item.key}>
            <Link href={item.href} className="block">
              <Button
                text={item.label}
                height={42}
                fontSize={14}
                shadowSize={6}
              />
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact">
            <Button
              text="Contact"
              height={42}
              fontSize={14}
              shadowSize={6}
              bg="#E63946"
              color="#0B1F3F"
              hoverBg="#ffffff"
              hoverColor="#E63946"
            />
          </Link>
        </li>
      </ul>
    </div>
  </div>
));

BottomMenu.displayName = "BottomMenu";

export default function Navbar() {
  // Consolidated state
  const [state, setState] = useState({
    isMobileMenuOpen: false,
    showBottomMenu: false,
    userClosedBottomMenu: false,
  });

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const closeBtnRef = useRef(null);
  const bottomToggleRef = useRef(null);

  // Memoized callbacks
  const toggleMobileMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMobileMenuOpen: false }));
  }, []);

  const toggleBottomMenu = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showBottomMenu: !prev.showBottomMenu,
      userClosedBottomMenu: !prev.userClosedBottomMenu,
    }));
  }, []);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (
        !ticking &&
        window.innerWidth >= 1024 &&
        !state.isMobileMenuOpen &&
        !state.userClosedBottomMenu
      ) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setState((prev) => ({
            ...prev,
            showBottomMenu: currentScrollY > 120,
          }));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state.isMobileMenuOpen, state.userClosedBottomMenu]);

  // Single GSAP context for all animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.85, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );

      // Staggered nav items
      gsap.fromTo(
        navItemsRef.current.filter(Boolean),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const ctx = gsap.context(() => {
      if (state.isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, scale: 0.95, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
        );
        gsap.fromTo(
          closeBtnRef.current,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            delay: 0.15,
            ease: "back.out(1.5)",
          }
        );
      }
    }, mobileMenuRef);

    return () => ctx.revert();
  }, [state.isMobileMenuOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = state.isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state.isMobileMenuOpen]);

  // SEO-friendly title context
  const titleContext = useMemo(
    () => (
      <>
        <title>AMDevs - Professional Web Development Services</title>
        <meta
          name="description"
          content="AMDevs provides expert React, Next.js, and fullstack development services. Contact us at +92 370 0959829 or amdevs@gmail.com"
        />
      </>
    ),
    []
  );

  return (
    <>
      {titleContext}
      <header className="relative w-full z-[1000]">
        {/* Main Navigation - Perfectly centered */}
        <nav
          ref={navRef}
          className="relative flex justify-between lg:justify-center lg:flex-col items-center pt-20 lg:pt-24 pb-6 lg:pb-8 px-6 sm:px-8 lg:px-12 mx-auto max-w-7xl w-full"
          role="banner"
          aria-label="Main navigation"
        >
          {/* Logo - Perfect positioning */}
          <Link href="/" className="mb-6 lg:mb-8" aria-label="AMDevs Homepage">
            <div
              ref={logoRef}
              className="relative h-20 w-36 sm:h-24 sm:w-44 md:h-28 md:w-52 lg:h-32 lg:w-60 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-[1.05]"
              style={{ perspective: "1000px" }}
            >
              <Image
                src="/Logo.png"
                alt="AMDevs - Professional Web Development Agency"
                fill
                priority
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                className="object-contain p-4 md:p-6 hover:[transform:rotateY(5deg)_rotateX(2deg)] transition-all duration-500"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Perfect alignment */}
          <div className="hidden lg:flex items-center gap-2 mb-4 lg:mb-6">
            <div className="flex items-center gap-5 px-8 py-5 rounded-3xl bg-gradient-to-r from-[#0B1F3F] to-[#1E3A5F] shadow-2xl border-2 border-white/20 backdrop-blur-sm">
              {NAV_ITEMS.slice(0, -1).map((item, index) => (
                <div
                  key={item.key}
                  ref={(el) => (navItemsRef.current[index] = el)}
                >
                  <Link href={item.href} className="block">
                    <Button
                      text={item.label}
                      height={50}
                      fontSize={25}
                      shadowSize={8}
                    />
                  </Link>
                </div>
              ))}
              <div ref={(el) => (navItemsRef.current[4] = el)}>
                <Link href="/contact">
                  <Button
                    text="Contact"
                    height={50}
                    fontSize={25}
                    shadowSize={10}
                    bg="#E63946"
                    color="#FFFFFF"
                    hoverBg="#ffffff"
                    hoverColor="#E63946"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-14 h-14  rounded-2xl bg-gradient-to-r from-[#0B1F3F] to-[#1E3A5F] hover:from-[#E63946] hover:to-[#D00000] text-white shadow-2xl border-2 border-white/30 hover:border-white/50 hover:shadow-3xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label={
              state.isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={state.isMobileMenuOpen}
          >
            {state.isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Floating Toggle Button - Better positioning */}
        <div className="fixed bottom-10 right-10  z-[150] hidden lg:block animate-pulse">
          <button
            ref={bottomToggleRef}
            className="w-14 h-14 rounded-3xl bg-white/95 hover:bg-white backdrop-blur-xl border-2 border-[#0B1F3F]/20 shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-105 transition-all duration-300 flex items-center justify-center hover:border-[#0B1F3F]/40"
            onClick={toggleBottomMenu}
            aria-label={
              state.showBottomMenu ? "Hide bottom menu" : "Show bottom menu"
            }
          >
            {state.showBottomMenu ? (
              <X className="h-5 w-5 text-[#0B1F3F]" />
            ) : (
              <Menu className="h-5 w-5 text-[#0B1F3F]" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {state.isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed inset-0 z-[300] bg-gradient-to-b from-[#0B1F3F]/98 to-[#1E3A5F]/98 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center px-8 py-32 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <button
              ref={closeBtnRef}
              className="absolute top-24 right-8 w-16 h-16 rounded-3xl bg-white/90 hover:bg-white shadow-3xl hover:shadow-4xl border-2 border-[#0B1F3F]/20 hover:border-[#E63946]/50 active:scale-95 transition-all duration-300 flex items-center justify-center"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <X className="h-8 w-8 text-[#E63946]" />
            </button>

            <div className="w-full max-w-md space-y-6 md:space-y-10">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block w-full"
                  onClick={closeMobileMenu}
                  ref={(el) => (navItemsRef.current[index + 5] = el)}
                >
                  <Button
                    text={item.label}
                    height={72}
                    fontSize={35}
                    shadowSize={20}
                    fullWidth
                    bg={item.isSpecial ? "#E63946" : "white"}
                    color={item.isSpecial ? "#0B1F3F" : "#0B1F3F"}
                    hoverBg={item.isSpecial ? "white" : "#E63946"}
                    hoverColor={item.isSpecial ? "#E63946" : "white"}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Menu */}
        <BottomMenu
          isVisible={state.showBottomMenu}
          onClose={toggleBottomMenu}
        />
      </header>
    </>
  );
}
