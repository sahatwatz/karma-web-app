"use client";

import React, { useState, useContext } from "react";
import { Clock } from "lucide-react";
import { LangContext } from "../context/LangContext";
import { menuData } from "../data/menuData";

type MainCategory = "massage" | "nail";
type MassageCategory = "massage" | "bodyTherapy" | "packages" | "maskTreatment";
type NailCategory = "maintenance" | "nailSpa" | "nailExtension" | "nailColor" | "nailArt";

export const MenuSection = () => {
  const { t, lang } = useContext(LangContext);
  const [mainCategory, setMainCategory] = useState<MainCategory>("massage");
  const [massageTab, setMassageTab] = useState<MassageCategory>("massage");
  const [nailTab, setNailTab] = useState<NailCategory>("maintenance");

  const massageTabs: { id: MassageCategory; label: string }[] = [
    { id: "massage", label: t.massage },
    { id: "bodyTherapy", label: t.bodyTherapy },
    { id: "packages", label: t.package30 },
    { id: "maskTreatment", label: t.maskTreatment },
  ];

  const nailTabs: { id: NailCategory; label: string }[] = [
    { id: "maintenance", label: t.maintenance },
    { id: "nailSpa", label: t.spaTreatment },
    { id: "nailExtension", label: t.extension },
    { id: "nailColor", label: t.nailColor },
    { id: "nailArt", label: t.nailArt },
  ];

  const currentData = mainCategory === "massage" ? menuData[massageTab] : menuData[nailTab];

  return (
    <section id="menu" className="relative bg-[#FFF8E7] px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-serif text-4xl font-bold text-[#3E2723] md:text-5xl">
            {t.menuTitle}
          </h3>
          <p className="font-sans text-sm tracking-widest text-[#8C6B35] uppercase">
            {t.menuSubtitle}
          </p>
        </div>

        {/* Main Category Switcher */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full border border-[#B88A44]/20 bg-white p-1.5 shadow-md">
            <button
              onClick={() => setMainCategory("massage")}
              className={`rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                mainCategory === "massage"
                  ? "bg-[#3E2723] text-[#FFF8E7] shadow-lg"
                  : "text-[#8C6B35] hover:bg-[#FFF8E7]"
              }`}
            >
              {t.massageSpa}
            </button>
            <button
              onClick={() => setMainCategory("nail")}
              className={`rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                mainCategory === "nail"
                  ? "bg-[#3E2723] text-[#FFF8E7] shadow-lg"
                  : "text-[#8C6B35] hover:bg-[#FFF8E7]"
              }`}
            >
              {t.nailBeauty}
            </button>
          </div>
        </div>

        {/* Sub Category Switcher */}
        <div className="mb-12 flex w-full justify-start overflow-x-auto px-4 pb-4 md:justify-center">
          <div className="inline-flex shrink-0 flex-nowrap gap-2 rounded-full border border-[#B88A44]/10 bg-white/60 p-1.5 shadow-sm whitespace-nowrap">
            {mainCategory === "massage"
              ? massageTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setMassageTab(tab.id)}
                    className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                      massageTab === tab.id
                        ? "bg-[#B88A44] text-white shadow-md"
                        : "text-[#8C6B35] hover:bg-[#FFF8E7]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))
              : nailTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setNailTab(tab.id)}
                    className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                      nailTab === tab.id
                        ? "bg-[#B88A44] text-white shadow-md"
                        : "text-[#8C6B35] hover:bg-[#FFF8E7]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
          </div>
        </div>

        {/* Menu Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 grid grid-cols-1 gap-6 duration-500 md:grid-cols-2">
          {currentData.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-[#B88A44]/10 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-4 border-b border-gray-100 pb-3">
                <h4 className="font-serif text-xl font-bold text-[#3E2723] transition-colors group-hover:text-[#B88A44]">
                  {lang === "en" ? item.nameEn : item.nameTh}
                </h4>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {item.prices.map((price, pIdx) => (
                  <div key={pIdx} className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Clock size={12} /> {price.d}
                    </span>
                    <div className="flex items-end gap-1">
                      <span className="font-serif text-2xl font-bold text-[#B88A44]">
                        {price.p}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase mb-1">{t.thb}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>{t.priceNote}</p>
        </div>
      </div>
    </section>
  );
};
