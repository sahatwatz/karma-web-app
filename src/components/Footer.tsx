"use client";

import React, { useContext } from "react";
import { Facebook, Instagram } from "lucide-react";
import { LangContext } from "../context/LangContext";

export const Footer = () => {
  const { t } = useContext(LangContext);
  return (
    <footer className="border-t border-[#B88A44]/30 bg-[#3E2723] py-12 text-[#FFF8E7]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-[#B88A44]">
          Karma 2
        </h2>
        <p className="mb-8 text-sm tracking-widest uppercase opacity-60">
          {t.footerSubtitle}
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
          {t.footerRights}
        </p>
      </div>
    </footer>
  );
};
