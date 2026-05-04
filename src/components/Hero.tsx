"use client";

import React, { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { LangContext } from "../context/LangContext";

export const Hero = () => {
  const { t } = useContext(LangContext);
  return (
    <header
      id="home"
      className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-[#FFF8E7]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-[#3E2723]/40 to-[#FFF8E7]"></div>
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop"
          alt="Karma 2 Shop"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-16 px-4 text-center">
        <h1 className="mb-4 font-serif text-6xl font-black text-white drop-shadow-lg md:text-8xl">
          Karma 2
        </h1>
        <h2 className="mb-8 font-sans text-xl font-light tracking-[0.3em] text-[#FFF8E7] uppercase drop-shadow-md md:text-3xl">
          {t.heroSubtitle}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg font-light text-white/90">
          {t.heroDesc}
        </p>

        <button className="mx-auto flex items-center gap-2 rounded-full bg-[#B88A44] px-10 py-4 text-lg font-bold text-white shadow-2xl transition-transform hover:scale-105">
          <a href="#menu" className="flex items-center gap-2">
            {t.heroBtn} <ArrowRight size={20} />
          </a>
        </button>
      </div>

      {/* Curve Divider */}
      <div className="absolute bottom-0 left-0 z-20 w-full rotate-180 overflow-hidden leading-none">
        <svg
          className="relative block h-20 w-[calc(100%+1.3px)] text-[#FFF8E7]"
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
