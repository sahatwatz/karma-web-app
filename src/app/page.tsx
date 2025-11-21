/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Head from "next/head";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// --- Mock Data: Massage Menu ---
const massageMenu = [
  {
    id: 1,
    name: "Traditional Thai Massage",
    desc: "Ancient healing system combining acupressure and yoga postures.",
    price: "300",
    duration: "60 mins",
  },
  {
    id: 2,
    name: "Aromatic Oil Massage",
    desc: "Gentle massage with essential oils to relax the body and mind.",
    price: "400",
    duration: "60 mins",
  },
  {
    id: 3,
    name: "Foot Reflexology",
    desc: "Pressure points massage to restore energy flow.",
    price: "300",
    duration: "60 mins",
  },
  {
    id: 4,
    name: "Back, Neck & Shoulder",
    desc: "Focused relief for tension and office syndrome.",
    price: "350",
    duration: "60 mins",
  },
  {
    id: 5,
    name: "Coconut Oil Massage",
    desc: "Deep moisturizing massage for sun-kissed skin.",
    price: "500",
    duration: "60 mins",
  },
  {
    id: 6,
    name: "Karma Signature Package",
    desc: "Combination of Thai & Oil massage + Foot Spa.",
    price: "800",
    duration: "120 mins",
  },
];

// --- Mock Data: Nail Menu ---
const nailMenu = [
  {
    id: 1,
    name: "Classic Manicure",
    desc: "Cuticle care, shape, buff and polish.",
    price: "250",
    duration: "45 mins",
  },
  {
    id: 2,
    name: "Gel Polish Hands",
    desc: "Long-lasting premium gel color application.",
    price: "400",
    duration: "60 mins",
  },
  {
    id: 3,
    name: "Gel Polish Feet",
    desc: "Long-lasting premium gel color for toes.",
    price: "450",
    duration: "60 mins",
  },
  {
    id: 4,
    name: "Spa Pedicure",
    desc: "Scrub, mask, massage and heel care.",
    price: "500",
    duration: "75 mins",
  },
  {
    id: 5,
    name: "Acrylic Extensions",
    desc: "Full set extensions with natural finish.",
    price: "1,200",
    duration: "90 mins",
  },
  {
    id: 6,
    name: "Nail Art Design",
    desc: "Custom designs, glitter, ombre (per finger).",
    price: "50+",
    duration: "Var",
  },
];

// --- Components ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#B88A44]/20 bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#8C6B35] to-[#B88A44] bg-clip-text font-serif text-3xl font-black text-transparent">
            Karma 2
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-8 md:flex">
          {["Home", "Menu", "Blog", "Location"].map((item) => (
            <a
              key={item}
              href={item === "Blog" ? "/articles" : `#${item.toLowerCase()}`}
              className="font-sans font-medium text-[#3E2723] transition-colors hover:text-[#B88A44]"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+66857965849"
            className="flex items-center gap-2 rounded-full bg-[#B88A44] px-6 py-2.5 font-sans font-semibold text-white shadow-lg transition-all hover:bg-[#8C6B35]"
          >
            <Phone size={18} />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-[#8C6B35] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="space-y-4 border-t border-[#B88A44]/20 bg-[#FFF8E7] px-6 py-6 md:hidden">
          {["Home", "Menu", "Blog", "Location"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-[#3E2723]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header
      id="home"
      className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-[#FFF8E7]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-[#3E2723]/40 to-[#FFF8E7]"></div>
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop"
          alt="Karma 2 Shop"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-16 px-4 text-center">
        {/* <div className="inline-block animate-bounce">
          <div className="mb-6 -rotate-2 transform rounded-full border border-white/30 bg-[#D4A017] px-6 py-2 text-white shadow-xl">
            <span className="font-serif font-bold tracking-wider">
              ✨ Fresh Opening ✨
            </span>
          </div>
        </div> */}

        <h1 className="mb-4 font-serif text-6xl font-black text-white drop-shadow-lg md:text-8xl">
          Karma 2
        </h1>
        <h2 className="mb-8 font-sans text-xl font-light tracking-[0.3em] text-[#FFF8E7] uppercase drop-shadow-md md:text-3xl">
          Massage & Nails
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg font-light text-white/90">
          Experience premium relaxation and beauty services at Karon.
        </p>

        <button className="mx-auto flex items-center gap-2 rounded-full bg-[#B88A44] px-10 py-4 text-lg font-bold text-white shadow-2xl transition-transform hover:scale-105">
          <a href="#menu" className="flex items-center gap-2">
            Explore Our Services <ArrowRight size={20} />
          </a>
        </button>
      </div>

      {/* Curve Divider */}
      <div className="absolute bottom-0 left-0 z-20 w-full rotate-180 overflow-hidden leading-none">
        <svg
          className="relative block h-[80px] w-[calc(100%+1.3px)] text-[#FFF8E7]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </header>
  );
};

// --- MENU SECTION COMPONENT ---
const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<"massage" | "nails">("massage");

  return (
    <section id="menu" className="relative bg-[#FFF8E7] px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-serif text-4xl font-bold text-[#3E2723] md:text-5xl">
            Our Services Menu
          </h3>
          <p className="font-sans text-sm tracking-widest text-[#8C6B35] uppercase">
            Relax • Rejuvenate • Beauty
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-[#B88A44]/20 bg-white p-1.5 shadow-md">
            <button
              onClick={() => setActiveTab("massage")}
              className={`rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                activeTab === "massage"
                  ? "bg-[#3E2723] text-[#FFF8E7] shadow-lg"
                  : "text-[#8C6B35] hover:bg-[#FFF8E7]"
              }`}
            >
              Massage
            </button>
            <button
              onClick={() => setActiveTab("nails")}
              className={`rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                activeTab === "nails"
                  ? "bg-[#3E2723] text-[#FFF8E7] shadow-lg"
                  : "text-[#8C6B35] hover:bg-[#FFF8E7]"
              }`}
            >
              Nails & Spa
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 grid grid-cols-1 gap-6 duration-500 md:grid-cols-2">
          {(activeTab === "massage" ? massageMenu : nailMenu).map((item) => (
            <div
              key={item.id}
              className="group flex items-start justify-between rounded-2xl border border-[#B88A44]/10 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
            >
              <div>
                <h4 className="font-serif text-xl font-bold text-[#3E2723] transition-colors group-hover:text-[#B88A44]">
                  {item.name}
                </h4>
                <p className="mt-1 mb-2 text-sm text-gray-500">{item.desc}</p>
                <span className="inline-flex items-center gap-1 rounded-md bg-[#FFF8E7] px-2 py-1 text-xs font-medium text-[#B88A44]/80">
                  <Clock size={12} /> {item.duration}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-serif text-2xl font-bold text-[#B88A44]">
                  {item.price}
                </span>
                <span className="text-[10px] text-gray-400 uppercase">THB</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>* Prices are subject to change without prior notice.</p>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  const googleMapUrl = "https://maps.app.goo.gl/5DLhy9FEzSSRdy498";
  return (
    <section
      id="location"
      className="relative z-30 rounded-t-[3rem] bg-white px-4 py-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
    >
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        {/* Text Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="mb-2 font-serif text-4xl font-bold text-[#3E2723]">
              Visit Karma 2
            </h3>
            <div className="h-1 w-20 bg-[#B88A44]"></div>
          </div>

          <p className="text-lg leading-relaxed text-gray-600">
            Located in the heart of Karon, we offer a sanctuary of tranquility.
            Parking is available. Walk-ins are welcome, but booking is
            recommended.
          </p>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 rounded-xl border border-[#B88A44]/20 bg-[#FFF8E7] p-4">
              <div className="rounded-full bg-[#B88A44] p-3 text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-[#3E2723]">Address</p>
                <p className="text-sm text-gray-600">Karon, Phuket, Thailand</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-[#B88A44]/20 bg-[#FFF8E7] p-4">
              <div className="rounded-full bg-[#B88A44] p-3 text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-[#3E2723]">Booking</p>
                <a
                  href="tel:+66857965849"
                  className="text-lg font-bold text-[#B88A44] hover:underline"
                >
                  (+66) 857965849
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map/QR Mockup */}
        <div className="flex flex-1 justify-center">
          <div className="relative h-[500px] w-[300px] rounded-[2.5rem] border-4 border-[#B88A44] bg-[#3E2723] p-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-[#3E2723]"></div>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-white p-6 text-center">
              {/* Content inside phone */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <MapPin size={32} />
              </div>
              <h4 className="mb-1 text-xl font-bold text-gray-800">
                Scan to Navigate
              </h4>
              <p className="mb-6 text-sm text-gray-500">
                Open Google Maps location
              </p>
              <div className="mb-6 rounded-lg border-2 border-dashed border-gray-300 p-2">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.app.goo.gl/5DLhy9FEzSSRdy498"
                  alt="QR Code"
                  className="h-32 w-32 opacity-90"
                />
              </div>

              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-[#B88A44] py-3 text-sm font-bold text-white shadow-lg"
              >
                Open in App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-[#B88A44]/30 bg-[#3E2723] py-12 text-[#FFF8E7]">
    <div className="container mx-auto px-6 text-center">
      <h2 className="mb-2 font-serif text-3xl font-bold text-[#B88A44]">
        Karma 2
      </h2>
      <p className="mb-8 text-sm tracking-widest uppercase opacity-60">
        Massage & Nails • Kata Karon
      </p>

      <div className="mb-8 flex justify-center gap-6">
        <a
          href="#"
          className="rounded-full bg-white/5 p-2 transition-colors hover:bg-[#B88A44]"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          className="rounded-full bg-white/5 p-2 transition-colors hover:bg-[#B88A44]"
        >
          <Instagram size={20} />
        </a>
      </div>

      <p className="text-xs opacity-40">
        © 2024 Karma 2. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] font-sans text-[#3E2723]">
      {/* Font Injection Style Tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Prompt:wght@300;400;500;600&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Prompt', sans-serif;
        }
        
        .font-serif { font-family: var(--font-serif); }
        .font-sans { font-family: var(--font-sans); }
      `,
        }}
      />

      <Navbar />

      <main>
        <Hero />

        {/* Highlight / Quote Section */}
        <section className="relative z-10 -mt-1 bg-[#B88A44] px-4 py-16 text-center">
          <h3 className="mb-4 font-serif text-3xl font-bold text-white italic md:text-5xl">
            &quot;Nailed it, Every Time!&quot;
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-[#FFF8E7]">
            Relaxing atmosphere with professional therapists.
          </p>
        </section>

        <MenuSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}
