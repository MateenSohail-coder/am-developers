"use client";
import React, { useEffect, useRef } from "react";
import Bar from "@/components/services/bar";
import { gsap } from "gsap";
import Navbar from "@/components/services/Navbar";
import Footer from "@/components/services/Footer";

export default function Contact() {
  const formRef = useRef(null);
  const addressRef = useRef(null);
  const inputRefs = useRef([]);

  // Form fields data matching the picture exactly
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "",
      itemProp: "name",
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "",
      itemProp: "telephone",
    },
    {
      id: "projectDetails",
      label: "Project Details",
      type: "textarea",
      required: true,
      placeholder: "",
      rows: 4,
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

    // Stagger animation for form inputs exactly like the picture
    gsap.from(".form-field", {
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

  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  return (
    <>
      <Navbar />
      <Bar desktopText="Contact Us" mobileText="Contact Us" id="contact" />

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

        {/* Right Side: Form Section - EXACTLY LIKE THE PICTURE */}
        <div ref={formRef} className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            itemScope
            itemType="https://schema.org/ContactPage"
          >
            {/* Map through form fields */}
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className="form-field"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    ref={addToRefs}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                    className="w-full border-2 border-red-500 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                    required={field.required}
                    {...(field.itemProp ? { itemProp: field.itemProp } : {})}
                  />
                ) : (
                  <input
                    ref={addToRefs}
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="w-full border-2 border-red-500 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-500 transition-colors"
                    required={field.required}
                    {...(field.itemProp ? { itemProp: field.itemProp } : {})}
                  />
                )}
              </div>
            ))}

            {/* Submit Button */}
            <div className="pt-2 submit-btn">
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 active:bg-red-800 transition-colors duration-200"
                aria-label="Send Us"
              >
                Send Us
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
