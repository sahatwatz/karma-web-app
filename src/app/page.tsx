"use client";

import React from "react";
import { LangProvider, LangContext } from "../context/LangContext";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { MenuSection } from "../components/MenuSection";
import { GallerySection } from "../components/GallerySection";
import { LocationSection } from "../components/LocationSection";
import { Footer } from "../components/Footer";

// We created a specialized internal component just to access the context if needed at page level,
// but actually we don't need it at this level. We just wrap everything in LangProvider.

const HighlightSection = () => {
  const { t } = React.useContext(LangContext);
  return (
    <section className="relative z-10 -mt-1 bg-[#B88A44] px-4 py-16 text-center">
      <h3 className="mb-4 font-serif text-3xl font-bold text-white italic md:text-5xl">
        {t.quote}
      </h3>
      <p className="mx-auto max-w-2xl text-lg text-[#FFF8E7]">
        {t.quoteDesc}
      </p>
    </section>
  );
};

export default function LandingPage() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-[#FFF8E7] font-sans text-[#3E2723]">
        <Navbar />

        <main>
          <Hero />
          <HighlightSection />
          <MenuSection />
          <GallerySection />
          <LocationSection />
        </main>

        <Footer />
      </div>
    </LangProvider>
  );
}
