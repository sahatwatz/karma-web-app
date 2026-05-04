"use client";

import React, { createContext, useState, ReactNode } from "react";

export type Lang = "en" | "th";

export const translations = {
  en: {
    navHome: "Home",
    navMenu: "Menu",
    navGallery: "Gallery",
    navLocation: "Location",
    bookNow: "Book Now",
    heroSubtitle: "Massage & Nail",
    heroDesc: "Experience premium relaxation and beauty services at Karon.",
    heroBtn: "Explore Our Services",
    quote: "\"Nailed it, Every Time!\"",
    quoteDesc: "Relaxing atmosphere with professional therapists.",
    menuTitle: "Our Services Menu",
    menuSubtitle: "Relax • Rejuvenate • Beauty",
    massageSpa: "Massage & Spa",
    nailBeauty: "Nail & Beauty",
    massage: "Massage",
    bodyTherapy: "Body Therapy",
    package30: "30 Min Package",
    maskTreatment: "Mask Treatment",
    maintenance: "Maintenance",
    spaTreatment: "Spa & Treatment",
    extension: "Extension",
    nailColor: "Nail Color",
    nailArt: "Nail Art",
    priceNote: "* Prices are subject to change without prior notice.",
    galleryTitle: "Our Atmosphere",
    gallerySubtitle: "Peaceful • Clean • Relaxing",
    locationTitle: "Visit Karma 2",
    locationDesc: "Located in the heart of Karon, we offer a sanctuary of tranquility. Parking is available. Walk-ins are welcome, but booking is recommended.",
    addressTitle: "Address",
    addressDesc: "Karon, Phuket, Thailand",
    bookingTitle: "Booking",
    scanTitle: "Scan to Navigate",
    scanDesc: "Open Google Maps location",
    openAppBtn: "Open in App",
    footerSubtitle: "Massage & Nail • Kata Karon",
    footerRights: "© 2024 Karma 2. All rights reserved.",
    thb: "THB"
  },
  th: {
    navHome: "หน้าแรก",
    navMenu: "บริการของเรา",
    navGallery: "แกลเลอรี",
    navLocation: "ที่ตั้งร้าน",
    bookNow: "จองคิว",
    heroSubtitle: "บริการนวดและทำเล็บ",
    heroDesc: "สัมผัสประสบการณ์แห่งการพักผ่อนและความงามระดับพรีเมียมที่กะรน",
    heroBtn: "ดูบริการของเรา",
    quote: "\"สวยเป๊ะ ทุกครั้งที่ทำ!\"",
    quoteDesc: "บรรยากาศผ่อนคลาย พร้อมนักบำบัดมืออาชีพ",
    menuTitle: "เมนูบริการของเรา",
    menuSubtitle: "ผ่อนคลาย • ฟื้นฟู • สวยงาม",
    massageSpa: "นวดและสปา",
    nailBeauty: "ทำเล็บและความงาม",
    massage: "นวด",
    bodyTherapy: "ทรีตเมนต์ร่างกาย",
    package30: "แพ็กเกจ 30 นาที",
    maskTreatment: "มาร์กหน้า",
    maintenance: "ดูแลรักษาเล็บ",
    spaTreatment: "สปาและทรีตเมนต์",
    extension: "ต่อเล็บ",
    nailColor: "ทาสีเล็บ",
    nailArt: "เพ้นท์และตกแต่งเล็บ",
    priceNote: "* ราคาอาจมีการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่วงหน้า",
    galleryTitle: "บรรยากาศร้านของเรา",
    gallerySubtitle: "สงบ • สะอาด • ผ่อนคลาย",
    locationTitle: "แวะมาเยี่ยมเราที่ Karma 2",
    locationDesc: "ตั้งอยู่ใจกลางกะรน เรามีพื้นที่จอดรถให้บริการ สามารถ walk-in ได้ทันที แต่แนะนำให้จองคิวล่วงหน้าเพื่อความสะดวกของคุณ",
    addressTitle: "ที่อยู่",
    addressDesc: "กะรน, ภูเก็ต, ประเทศไทย",
    bookingTitle: "จองคิว",
    scanTitle: "สแกนเพื่อนำทาง",
    scanDesc: "เปิดพิกัดใน Google Maps",
    openAppBtn: "เปิดในแอป",
    footerSubtitle: "นวดและทำเล็บ • กะตะ กะรน",
    footerRights: "© 2024 Karma 2 สงวนลิขสิทธิ์",
    thb: "บาท"
  }
};

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: typeof translations.en }>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
