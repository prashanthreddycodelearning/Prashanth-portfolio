import React from "react";
import HeroSection from "../Components/portfolio/HeroSection";
import AboutSection from "../Components/portfolio/AboutSection";
import ExpertiseSection from "../Components/portfolio/ExpertiseSection";
import ServicesSection from "../Components/portfolio/ServicesSection";
import ContactCTA from "../Components/portfolio/ContactCTA";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <ContactCTA />
    </div>
  );
}
