import Footer from "@/components/services/Footer";
import About from "@/components/main/About";
import HeroSection from "@/components/main/Herosection";
import Offer from "@/components/main/Offer";
import Services from "@/components/main/Services";
import Testimels from "@/components/main/Testimels";
import Navbar from "@/components/services/Navbar";
import React from "react";
import CTA from "@/components/services/CTA";
import SquareLoader from "@/components/services/Loader";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Testimels />
      <Offer />
      <CTA />
      <Footer />
      <SquareLoader />
    </div>
  );
}
