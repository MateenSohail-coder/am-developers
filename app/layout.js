import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Core SEO
  title: {
    default: "AMDevs | Professional React & Next.js Development Agency",
    template: "%s | AMDevs - Lahore's Top Web Development Agency",
  },
  description:
    "AMDevs provides expert React, Next.js, fullstack development & SaaS solutions. Trusted by 50+ clients in Pakistan. +92 370 0959829 | am.coders.web@gmail.com",

  // Open Graph / Social Media
  openGraph: {
    title: "AMDevs - Professional Web Development Agency in Lahore",
    description:
      "Expert React, Next.js, GSAP animations & fullstack development. Transform your business with modern web solutions.",
    url: "https://am-developers.vercel.app/",
    siteName: "AMDevs",
    images: [
      {
        url: "/amdev.png",
        width: 1200,
        height: 630,
        alt: "AMDevs - Professional Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card - Fixed URL consistency
  twitter: {
    card: "summary_large_image",
    title: "AMDevs - React & Next.js Development Experts",
    description:
      "Professional web development services with GSAP animations & fullstack solutions. Based in Lahore, Pakistan.",
    images: ["/amdev.png"], // Consistent with OG image
    creator: "@amdevs",
  },

  // Robots & Canonical
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://am-developers.vercel.app/", // Fixed to match your domain
  },

  // Additional SEO fields
  applicationName: "AMDevs",
  referrer: "origin-when-cross-origin",
  keywords: [
    "amdevs",
    "am",
    "am developers",
    "AMDevs agency",
    "React development",
    "Next.js development",
    "GSAP animations",
    "fullstack development",
    "SaaS solutions",
    "Lahore web agency",
    "Pakistan web development",
    "Professional web development",
    "Web development",
    "Software Development",
    "App development",
    "Digital marketing",
    "saas development",
    "fullstack developer lahore",
    "ui ux design pakistan",
  ],
  authors: [{ name: "AMDevs Team" }],
  creator: "AMDevs",
  publisher: "AMDevs",

  // Icons
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1F3F" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/* Structured Data - Fixed schema errors */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "AMDevs",
              description:
                "Professional web development agency specializing in React, Next.js, GSAP animations and fullstack solutions",
              url: "https://am-developers.vercel.app/",
              telephone: "+923700959829",
              email: "am.coders.web@gmail.com",
              address: {
                "@type": "PostalAddress", // Fixed: was invalid "899202"
                addressRegion: "Punjab",
                addressCountry: "PK",
                addressLocality: "Lahore",
              },
              areaServed: "Pakistan",
              priceRange: "$$",
              sameAs: [
                "https://www.linkedin.com/company/amdevs",
                "https://github.com/amdevs",
              ],
              serviceType: [
                "Web Development",
                "App Development",
                "Digital Marketing",
                "SaaS Development",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </head>

      {/* 🧼 NEUTRAL BODY - Won't affect your theme */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
