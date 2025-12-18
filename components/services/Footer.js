"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Our Happy Clients" },
    { href: "/services", label: "Portfolio" },
    { href: "/Contact", label: "Contact" },
  ];

  const services = [
    { href: "/services/#uiux", label: "Web Design" },
    { href: "/services/#webdevelopment", label: "Web Development" },
    { href: "/services/#digitalmarketing", label: "Digital Marketing" },
    { href: "/services/#seo", label: "SEO" },
    { href: "/services/#digitalmarketing", label: "Social Media Marketing" },
    { href: "/services/#softwaredevelopment", label: "Software Development" },
    { href: "/services/#mobileapp", label: "Mobile App Development" },
  ];

  const contactInfo = [
    {
      href: "mailto:am.coders.web@gmail.com",
      label: "am.coders.web@gmail.com",
      icon: Mail,
      type: "email",
    },
    {
      href: "tel:+923700959829",
      label: "+92 3700959829",
      icon: Phone,
      type: "phone",
    },
    {
      href: "https://www.google.com/maps/place/Lahore,Pakistan",
      label: "Lahore ▸ Pakistan",
      icon: MapPin,
      type: "address",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61584380487502",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/a.m.d.e.v/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/abdul-mateen-3b61173a0",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#0B1F3F] text-white pt-16 lg:pt-24">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
          {/* Company Info */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-6">
            <div
              className="
                inline-flex lg:inline-flex
                bg-white backdrop-blur-xl
                border-4 border-[#E63946]
                shadow-[8px_8px_0_#E63946]
                rounded-none
                p-4
                origin-bottom-right
              "
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <Image
                  src="/Logo.png"
                  alt="AM Devs Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-xs mx-auto lg:mx-0 font-medium">
              Professional web development agency delivering high-performance,
              conversion-focused digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black text-white mb-5 tracking-[0.15em] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      group flex items-center gap-2
                      text-[#CBD5E1] text-sm font-medium
                      transition-all duration-200
                    "
                  >
                    <span className="h-[2px] w-3 bg-[#E63946] opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-200" />
                    <span className="group-hover:text-[#E63946]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black text-white mb-5 tracking-[0.15em] uppercase">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="
                      group flex items-center gap-2
                      text-[#CBD5E1] text-sm font-medium
                      transition-all duration-200
                    "
                  >
                    <span className="h-[2px] w-3 bg-[#FACC15] opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-200" />
                    <span className="group-hover:text-[#E63946]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black text-white mb-5 tracking-[0.15em] uppercase">
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group flex items-start gap-3 text-[#CBD5E1] text-sm
                    transition-all duration-200
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      bg-white/10
                      border-2 border-[#E63946]
                      rounded-none
                      flex items-center justify-center
                      shadow-[4px_4px_0_#E63946]
                      group-hover:shadow-[6px_6px_0_#E63946]
                      group-hover:-translate-x-[2px]
                      group-hover:-translate-y-[2px]
                      transition-all duration-200
                      flex-shrink-0
                    "
                  >
                    <item.icon className="w-4 h-4 text-[#FACC15]" />
                  </div>
                  <span className="mt-1 group-hover:text-[#E63946]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-[#E63946] bg-[#0B1F3F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-[#CBD5E1] font-medium text-center sm:text-left">
            © {new Date().getFullYear()} AM Devs. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  w-9 h-9
                  bg-white/10
                  border-2 border-[#E63946]
                  rounded-none
                  flex items-center justify-center
                  shadow-[4px_4px_0_#E63946]
                  hover:shadow-[6px_6px_0_#E63946]
                  hover:-translate-x-[2px]
                  hover:-translate-y-[2px]
                  transition-all duration-200
                "
              >
                <Icon className="w-4 h-4 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
