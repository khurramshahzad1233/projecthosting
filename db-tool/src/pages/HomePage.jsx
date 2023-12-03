import React from "react";
import { Layout } from "../components/layouts/Layout";
import HeroSection from "../components/sections/HeroSection";
import OurPartnersSection from "../components/sections/OurPartnersSection";
import CloudManagementSection from "../components/sections/CloudManagementSection";
import AboutSection from "../components/sections/AboutSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <OurPartnersSection />
      <CloudManagementSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
