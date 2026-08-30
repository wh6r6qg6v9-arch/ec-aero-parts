import React from "react";
import Navbar from "@/components/ec/Navbar";
import Hero from "@/components/ec/Hero";
import FleetMatrix from "@/components/ec/FleetMatrix";
import PartCategories from "@/components/ec/PartCategories";
import LogisticalEngine from "@/components/ec/LogisticalEngine";
import CoverageSection from "@/components/ec/CoverageSection";
import AboutSection from "@/components/ec/AboutSection";
import PartnersLedger from "@/components/ec/PartnersLedger";
import Terminal from "@/components/ec/Terminal";
import WhatsAppFloat from "@/components/ec/WhatsAppFloat";
import IntroOverlay from "@/components/ec/IntroOverlay";

export default function Home() {
  return (
    <div className="relative bg-background">
      <IntroOverlay />
      <Navbar />
      <main>
        <Hero />
        <FleetMatrix />
        <PartCategories />
        <LogisticalEngine />
        <CoverageSection />
        <AboutSection />
        <PartnersLedger />
        <Terminal />
      </main>
      <WhatsAppFloat />
    </div>
  );
}