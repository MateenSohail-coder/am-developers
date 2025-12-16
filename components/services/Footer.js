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
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Our Happy Clients" },
    { href: "/work", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/web-design", label: "Web Design" },
    { href: "/web-development", label: "Web Development" },
    { href: "/digital-marketing", label: "Digital Marketing" },
    { href: "/seo", label: "SEO" },
    { href: "/social-media", label: "Social Media Marketing" },
    { href: "/software", label: "Software Development" },
    { href: "/mobile-app", label: "Mobile App Development" },
  ];

  const contactInfo = [
    {
      href: "mailto:amdevs@gmail.com",
      label: "amdevs@gmail.com",
      icon: Mail,
      type: "email",
    },
    {
      href: "tel:+922345678",
      label: "+92 2345678",
      icon: Phone,
      type: "phone",
    },
    {
      href: "#",
      label: "123 Main St, City, Country",
      icon: MapPin,
      type: "address",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0B1F3F] text-white">
      {/* Main Footer Content */}
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Company Info */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
              <Image
                src="/FooterLogo.png"
                alt="amdevs Logo"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-xs mx-auto lg:mx-0">
              Professional web development agency delivering innovative digital
              solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#CBD5E1] hover:text-[#E63946] hover:underline text-sm font-medium transition-all duration-300 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#CBD5E1] hover:text-[#E63946] hover:underline text-sm font-medium transition-all duration-300 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 text-[#CBD5E1] hover:text-[#E63946] hover:translate-x-2 transition-all duration-300 group text-sm"
                >
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E63946] group-hover:scale-110" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#E63946] to-[#d63031] py-6">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-white/90 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} AM Devs. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
