"use client";

import React, { useContext } from "react";
import { Phone, MapPin } from "lucide-react";
import { LangContext } from "../context/LangContext";

export const LocationSection = () => {
  const { t } = useContext(LangContext);
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
              {t.locationTitle}
            </h3>
            <div className="h-1 w-20 bg-[#B88A44]"></div>
          </div>

          <p className="text-lg leading-relaxed text-gray-600">
            {t.locationDesc}
          </p>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 rounded-xl border border-[#B88A44]/20 bg-[#FFF8E7] p-4">
              <div className="rounded-full bg-[#B88A44] p-3 text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-[#3E2723]">{t.addressTitle}</p>
                <p className="text-sm text-gray-600">{t.addressDesc}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-[#B88A44]/20 bg-[#FFF8E7] p-4">
              <div className="rounded-full bg-[#B88A44] p-3 text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-[#3E2723]">{t.bookingTitle}</p>
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
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-4xl bg-white p-6 text-center">
              {/* Content inside phone */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <MapPin size={32} />
              </div>
              <h4 className="mb-1 text-xl font-bold text-gray-800">
                {t.scanTitle}
              </h4>
              <p className="mb-6 text-sm text-gray-500">
                {t.scanDesc}
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
                {t.openAppBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
