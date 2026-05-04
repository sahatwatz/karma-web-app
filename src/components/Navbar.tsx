"use client";

import React, { useState, useContext } from "react";
import { Phone, Menu, X, Globe } from "lucide-react";
import { LangContext } from "../context/LangContext";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useContext(LangContext);

  const navItems = [
    { id: "home", label: t.navHome },
    { id: "menu", label: t.navMenu },
    { id: "gallery", label: t.navGallery },
    { id: "location", label: t.navLocation },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#B88A44]/20 bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-r from-[#8C6B35] to-[#B88A44] bg-clip-text font-serif text-3xl font-black text-transparent">
            Karma 2
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-sans font-medium text-[#3E2723] transition-colors hover:text-[#B88A44]"
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-[#B88A44]/30 pl-6">
            <button
              onClick={() => setLang(lang === "en" ? "th" : "en")}
              className="flex items-center gap-1 font-sans font-medium text-[#8C6B35] transition-colors hover:text-[#3E2723]"
            >
              <Globe size={18} />
              <span className="uppercase">{lang}</span>
            </button>

            <a
              href="tel:+66857965849"
              className="flex items-center gap-2 rounded-full bg-[#B88A44] px-6 py-2.5 font-sans font-semibold text-white shadow-lg transition-all hover:bg-[#8C6B35]"
            >
              <Phone size={18} />
              <span>{t.bookNow}</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "th" : "en")}
            className="flex items-center gap-1 font-sans font-medium text-[#8C6B35]"
          >
            <Globe size={20} />
            <span className="uppercase text-sm">{lang}</span>
          </button>
          
          <button
            className="text-[#8C6B35]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="space-y-4 border-t border-[#B88A44]/20 bg-[#FFF8E7] px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setTimeout(() => setIsMobileMenuOpen(false), 2000);
              }}
              className="block text-lg font-medium text-[#3E2723]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
