"use client";
import React, { useEffect, useRef } from "react";
import Bar from "@/components/services/bar";
import { gsap } from "gsap";
import Navbar from "@/components/services/Navbar";
import Footer from "@/components/services/Footer";
import Button from "@/components/services/Button";
import Backbar from "@/components/services/Back";

export default function Contact() {
  const formRef = useRef(null);
  const addressRef = useRef(null);

  // Form fields data with placeholders
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
      id: "projectDetails",
      label: "Enter Project Details",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your project...",
    },
  ];

  useEffect(() => {
    // Animate address section from left
    gsap.from(addressRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Animate form container from right
    gsap.from(formRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.4,
    });

    // Stagger animation for form inputs
    gsap.from(".input-container", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.6,
    });

    // Button animation
    gsap.from(".submit-btn", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 1,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Backbar />
      <Bar
        desktopText="Send Us Proposal !"
        mobileText="Contact Us"
        id="contact"
      />

      {/* Structured Data for SEO */}
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

      <section className="flex flex-col md:flex-row justify-between items-start p-6 md:p-12 gap-10 md:gap-16">
        {/* Left Side: Address Section */}
        <div
          ref={addressRef}
          className="w-full md:w-1/2 text-gray-800"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <h2 className="text-2xl font-semibold mb-6">Our Address</h2>

          <div className="space-y-3">
            <p className="text-gray-700" itemProp="streetAddress">
              123 Main Street
            </p>
            <p className="text-gray-700">
              <span itemProp="addressLocality">Lahore</span>,{" "}
              <span itemProp="addressRegion">Punjab</span>,{" "}
              <span itemProp="addressCountry">Pakistan</span>
            </p>
            <p className="text-gray-700">
              Phone:{" "}
              <a
                href="tel:+923001234567"
                className="text-blue-600 hover:underline"
                itemProp="telephone"
              >
                +92 300 1234567
              </a>
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:contact@example.com"
                className="text-blue-600 hover:underline"
                itemProp="email"
              >
                contact@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div ref={formRef} className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            itemScope
            itemType="https://schema.org/ContactPage"
          >
            {/* Custom Uiverse Input Components */}
            {formFields.map((field, index) => (
              <div key={field.id} className="input-container">
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  className="input"
                  placeholder={field.placeholder}
                  required={field.required}
                  {...(field.itemProp ? { itemProp: field.itemProp } : {})}
                />
                <label htmlFor={field.id} className="label">
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <div className="topline"></div>
                <div className="underline"></div>
              </div>
            ))}

            {/* Submit Button - Same Style as Inputs */}
            <div className="pt-2 submit-btn">
              <div className="input-container">
                <button
                  type="submit"
                  className="input submit-input"
                  aria-label="Send Us"
                >
                  Send Us
                </button>
                <label className="label">Send Us</label>
                <div className="topline"></div>
                <div className="underline"></div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Updated Custom Styles */}
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

        .input::placeholder {
          color: #999;
          opacity: 1;
        }

        .input:focus,
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
        .input-container .submit-input:focus ~ .underline {
          width: 100%;
          transition: all 0.5s;
        }

        .input-container input:focus ~ .label,
        .input-container .submit-input:focus ~ .label {
          top: -8px;
          transform: scale(1);
          transition: all 0.5s;
        }

        /* Textarea styles */
        .input[type="textarea"] {
          height: 120px;
          resize: vertical;
          padding: 14px 10px;
        }
      `}</style>

      <Footer />
    </>
  );
}
