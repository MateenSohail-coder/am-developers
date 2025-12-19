"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";

import Bar from "@/components/services/bar";
import Footer from "@/components/services/Footer";
import Button from "@/components/services/Button";
import Backbar from "@/components/services/Back";
import SquareLoader from "@/components/services/Loader";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const addressRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formFields = [
    {
      id: "name",
      label: "Enter Your Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
      itemProp: "name",
    },
    {
      id: "email",
      label: "Enter Your Email",
      type: "email",
      required: true,
      placeholder: "Enter your email address",
      itemProp: "email",
    },
    {
      id: "subject",
      label: "Enter Subject",
      type: "text",
      required: true,
      placeholder: "Enter your subject",
    },
    {
      id: "phone",
      label: "Enter Phone Number",
      type: "tel",
      required: true,
      placeholder: "+92 300 1234567",
      itemProp: "telephone",
    },
    {
      id: "service",
      label: "Select Service",
      type: "select",
      required: true,
      style: { paddingTop: "0.4rem" }, // Fix for half-text
      options: [
        { value: "", label: "Choose a service" },
        { value: "web-development", label: "Web Development" },
        { value: "mobile-app", label: "Mobile App Development" },
        { value: "ui-ux-design", label: "UI/UX Design" },
        { value: "digital-marketing", label: "Digital Marketing" },
        { value: "software development", label: "software development" },
        { value: "Website maintainence", label: "Website Maintainence" },
        { value: "consulting", label: "Consulting" },
        { value: "other", label: "Other" },
      ],
    },

    {
      id: "projectDetails",
      label: "Enter Project Details",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your project...",
    },
  ];

  useGSAP(
    () => {
      // address and form entrance
      if (addressRef.current) {
        gsap.from(addressRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
        });
      }

      // inputs + button (scoped selectors)
      const tl = gsap.timeline({ delay: 0.6 });

      tl.from(".input-container", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      }).from(
        ".submit-btn",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

    try {
      await emailjs.sendForm(serviceId, templateId, "#contact-form", publicKey);
      setIsSuccess(true);
      document.getElementById("contact-form").reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Backbar />
      <Bar
        desktopText="Send Us Proposal !"
        mobileText="Contact Us"
        id="contact"
      />

      {/* Structured Data for SEO (keep only one ContactPage script) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us",
            description: "Contact form for inquiries and project details",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Lahore",
              addressRegion: "Punjab",
              addressCountry: "Pakistan",
            },
            telephone: "+92 300 1234567",
            email: "contact@example.com",
          }),
        }}
      />

      <section
        ref={containerRef}
        className="flex flex-col md:flex-row justify-between items-start p-6 md:p-12 gap-10 md:gap-16"
      >
        {/* Left Side: Address Section */}
        <div
          ref={addressRef}
          className="w-full md:w-1/2"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <div
            className="space-y-8 bg-white/80 backdrop-blur-xl p-8 lg:p-12 border-4 border-[#E63946] shadow-[8px_8px_0_#E63946] hover:shadow-[12px_12px_0_#E63946] hover:-translate-x-[4px] hover:-translate-y-[4px] active:shadow-[4px_4px_0_#E63946] active:translate-x-0 active:translate-y-0 transition-all duration-200 rounded-none origin-bottom-right"
            style={{
              "--btn-height": "auto",
              "--btn-font-size": "16px",
              "--btn-bg": "#ffffff",
              "--btn-color": "#0b1f3f",
              "--btn-border-color": "#e63946",
              "--btn-shadow": "8px",
              "--btn-hover-bg": "#0b1f3f",
              "--btn-hover-color": "#ffffff",
            }}
          >
            {/* Street Address */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 mt-1 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] flex items-center justify-center shrink-0 group-hover:shadow-[8px_8px_0_#E63946] group-hover:scale-105 transition-all duration-200 rounded-none">
                <svg
                  className="w-7 h-7 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-[0.1em] text-slate-600 mb-3 border-b-2 border-[#E63946]/30 pb-1">
                  Address
                </p>

                <p
                  className="text-xl font-black text-slate-700 mt-2 tracking-tight"
                  itemProp="addressLocality"
                >
                  Lahore, Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] flex items-center justify-center shrink-0 group-hover:shadow-[8px_8px_0_#E63946] group-hover:scale-105 transition-all duration-200 rounded-none">
                <svg
                  className="w-7 h-7 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-[0.1em] text-slate-600 mb-3 border-b-2 border-[#E63946]/30 pb-1">
                  Phone
                </p>
                <a
                  href="tel:+923700959829"
                  className="block text-sm sm:text-lg md:text-xl font-black bg-gradient-to-r from-[#0B1F3F] to-[#E63946] bg-clip-text text-transparent hover:from-[#E63946] hover:to-[#FACC15] transition-all duration-200 group-hover:translate-x-4 shadow-[4px_4px_0_rgba(230,57,70,0.3)] hover:shadow-[6px_6px_0_rgba(230,57,70,0.4)]"
                  itemProp="telephone"
                >
                  +92 370 0959829
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E63946]/20 to-[#FACC15]/20 border-4 border-[#E63946] shadow-[6px_6px_0_#E63946] flex items-center justify-center shrink-0 group-hover:shadow-[8px_8px_0_#E63946] group-hover:scale-105 transition-all duration-200 rounded-none">
                <svg
                  className="w-7 h-7 text-[#E63946] drop-shadow-[2px_2px_0_#0B1F3F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-[0.1em] text-slate-600 mb-3 border-b-2 border-[#E63946]/30 pb-1">
                  Email
                </p>
                <a
                  href="mailto:am.coders.web@gmail.com"
                  className="block text-sm sm:text-lg md:text-xl font-black bg-gradient-to-r from-[#0B1F3F] to-[#E63946] bg-clip-text text-transparent hover:from-[#E63946] hover:to-[#FACC15] transition-all duration-200 group-hover:translate-x-4 shadow-[4px_4px_0_rgba(230,57,70,0.3)] hover:shadow-[6px_6px_0_rgba(230,57,70,0.4)]"
                  itemProp="email"
                >
                  am.coders.web@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* You can remove this if ContactPage script above is enough */}
        </div>

        {/* Right Side: Form Section */}
        <div ref={formRef} className="w-full md:w-1/2">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-6"
            itemScope
            itemType="https://schema.org/ContactPage"
          >
            {formFields.map((field) => (
              <div key={field.id} className="input-container">
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    className="input textarea-input"
                    placeholder={field.placeholder}
                    required={field.required}
                    {...(field.itemProp ? { itemProp: field.itemProp } : {})}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    className="input select-input"
                    required={field.required}
                    style={field.style} // Add this line
                    {...(field.itemProp ? { itemProp: field.itemProp } : {})}
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    className="input"
                    placeholder={field.placeholder}
                    required={field.required}
                    {...(field.itemProp ? { itemProp: field.itemProp } : {})}
                  />
                )}
                <label htmlFor={field.id} className="label">
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <div className="topline"></div>
                <div className="underline"></div>
              </div>
            ))}

            {isSuccess && (
              <div className="bg-white/90 border-4 border-green-500 text-green-700 font-bold px-4 py-3 text-sm uppercase tracking-wide rounded-none shadow-lg">
                Message sent successfully!
              </div>
            )}

            {errorMessage && (
              <div className="bg-white/90 border-4 border-red-500 text-red-700 font-bold px-4 py-3 text-sm uppercase tracking-wide rounded-none shadow-lg">
                {errorMessage}
              </div>
            )}

            <div className="pt-2 submit-btn">
              <Button
                text={isLoading ? "Sending..." : "Send Us"}
                fullWidth={true}
                fontSize={25}
                bg="#0B1F3F"
                color="white"
                hoverBg="white"
                hoverColor="#E63946"
                shadowSize={10}
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </section>

      <style jsx>{`
        .input-container {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .input,
        .submit-input {
          padding: 14px 10px;
          height: 48px;
          border: 2px solid #e63946;
          font-size: 16px;
          background: transparent;
          outline: none;
          box-shadow: 7px 7px 0px 0px #e63946;
          transition: all 0.5s;
          width: 100%;
          color: #333;
          border-radius: 0;
        }

        .textarea-input {
          height: 120px;
          resize: vertical;
          padding: 14px 10px;
        }

        .submit-input {
          font-weight: 600;
          cursor: pointer;
          color: #e63946 !important;
          background: white;
        }

        .submit-input:hover {
          box-shadow: 5px 5px 0px 0px #e63946;
          transform: translate(2px, 2px);
          transition: all 0.3s;
        }

        .input::placeholder,
        .textarea-input::placeholder {
          color: #999;
          opacity: 1;
        }

        .input:focus,
        .textarea-input:focus,
        .submit-input:focus {
          box-shadow: none;
          border-color: #e63946;
          transition: all 0.5s;
        }

        .label {
          position: absolute;
          top: 14px;
          left: 10px;
          background-color: white !important;
          color: #e63946;
          transition: all 0.5s;
          transform: scale(0);
          z-index: 20;
          pointer-events: none;
          font-size: 16px;
          font-weight: 500;
          padding: 0 4px;
        }

        .input-container .topline {
          position: absolute;
          content: "";
          background-color: #e63946;
          width: 0%;
          height: 2px;
          right: 0;
          top: 0;
          transition: all 0.5s;
          z-index: 1;
        }

        .input-container input:focus ~ .topline,
        .input-container textarea:focus ~ .topline,
        .input-container .submit-input:focus ~ .topline {
          width: 35%;
          transition: all 0.5s;
        }

        .input-container .underline {
          position: absolute;
          content: "";
          background-color: #e63946;
          width: 0%;
          height: 2px;
          right: 0;
          bottom: 0;
          transition: all 0.5s;
          z-index: 1;
        }

        .input-container input:focus ~ .underline,
        .input-container textarea:focus ~ .underline,
        .input-container .submit-input:focus ~ .underline {
          width: 100%;
          transition: all 0.5s;
        }

        .input-container input:focus ~ .label,
        .input-container textarea:focus ~ .label,
        .input-container .submit-input:focus ~ .label {
          top: -8px;
          transform: scale(1);
          transition: all 0.5s;
        }
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
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10">
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
        </div>
      )}

      <Footer />
      <SquareLoader />
    </>
  );
}
