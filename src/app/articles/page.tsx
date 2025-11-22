/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
// Remove next/link to fix preview error
// import Link from "next/link";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  ChevronRight,
  Phone,
  Menu,
  X,
  Filter,
} from "lucide-react";

// --- Mock Data: บทความ (SEO Optimized) ---
const articles = [
  {
    id: 1,
    slug: "benefits-of-thai-massage",
    title: "5 ประโยชน์ของการนวดแผนไทย ที่มากกว่าแค่ความผ่อนคลาย",
    excerpt:
      "รู้หรือไม่? การนวดแผนไทยช่วยกระตุ้นการไหลเวียนโลหิต ลดอาการปวดไมเกรน และปรับสมดุลธาตุในร่างกายได้อย่างน่าอัศจรรย์...",
    category: "Massage Therapy",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop",
    date: "20 Nov 2025",
    author: "Karma Admin",
    tags: ["Thai Massage", "Health", "Relaxation"],
  },
  {
    id: 2,
    slug: "gel-nail-care-tips",
    title: "เคล็ดลับดูแลเล็บเจลให้ติดทนนาน เงางามเกิน 3 สัปดาห์",
    excerpt:
      "สาวๆ ที่ชอบทำเล็บต้องรู้! วิธีดูแลเล็บเจลไม่ให้หลุดลอกง่าย พร้อมเทคนิคการบำรุงหน้าเล็บให้แข็งแรงแม้ทำเล็บเป็นประจำ...",
    category: "Nail Care",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
    date: "18 Nov 2025",
    author: "Karma Admin",
    tags: ["Nails", "Beauty Tips", "Gel Polish"],
  },
  {
    id: 3,
    slug: "office-syndrome-relief",
    title: "ออฟฟิศซินโดรมถามหา? แนะนำ 3 ท่านวดแก้อาการปวดคอ บ่า ไหล่",
    excerpt:
      "นั่งหน้าคอมนานๆ จนปวดหลังใช่ไหม? มาดูวิธีคลายกล้ามเนื้อเบื้องต้น และโปรแกรมนวดที่ช่วยแก้อาการออฟฟิศซินโดรมโดยเฉพาะ...",
    category: "Health & Wellness",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    date: "15 Nov 2025",
    author: "Karma Admin",
    tags: ["Office Syndrome", "Massage", "Health"],
  },
  {
    id: 4,
    slug: "spa-pedicure-benefits",
    title: "ทำไมต้องทำสปาเท้า? มากกว่าความสะอาดคือสุขภาพที่ดี",
    excerpt:
      "สปาเท้าช่วยลดกลิ่นอับ ขจัดเซลล์ผิวที่ตายแล้ว และช่วยให้เลือดลมเดินสะดวก เหมาะสำหรับผู้ที่เดินเยอะหรือใส่ส้นสูงเป็นประจำ...",
    category: "Spa Treatment",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "10 Nov 2025",
    author: "Karma Admin",
    tags: ["Foot Spa", "Pedicure", "Hygiene"],
  },
];

// --- Components (Reuse from Landing Page style) ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-serif text-2xl font-black text-[#8C6B35]">
          Karma 2
        </a>
        <div className="hidden gap-8 font-medium text-[#3E2723] md:flex">
          <a href="/" className="transition hover:text-[#B88A44]">
            Home
          </a>
          <a href="/articles" className="text-[#B88A44]">
            Blog
          </a>
          <a href="/#services" className="transition hover:text-[#B88A44]">
            Services
          </a>
          <a href="/#contact" className="transition hover:text-[#B88A44]">
            Contact
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-[#8C6B35]" />
          ) : (
            <Menu className="text-[#8C6B35]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#B88A44]/20 bg-[#FFF8E7] p-4 md:hidden">
          <a href="/" className="block py-2 text-[#3E2723]">
            Home
          </a>
          <a href="/articles" className="block py-2 font-bold text-[#B88A44]">
            Blog
          </a>
        </div>
      )}
    </>
  );
};

const Footer = () => (
  <footer className="mt-20 bg-[#3E2723] py-10 text-center text-[#FFF8E7]">
    <h2 className="font-serif text-2xl font-bold text-[#B88A44]">Karma 2</h2>
    <p className="mt-2 text-sm opacity-60">Massage & Nails • Kata Karon</p>
    <p className="mt-6 text-xs opacity-40">
      © 2024 Karma 2. All rights reserved.
    </p>
  </footer>
);

// --- Main Page Component ---

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 1. คำนวณจำนวนบทความในแต่ละหมวดหมู่ (Dynamic Count)
  const categoryCounts = articles.reduce(
    (acc, article) => {
      acc[article.category] = (acc[article.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // สร้างรายการหมวดหมู่ทั้งหมด (รวม 'All')
  const categories = ["All", ...Object.keys(categoryCounts)];

  // 2. ฟังก์ชันกรองบทความ (Title Search + Category Filter)
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFF8E7] font-sans text-[#3E2723]">
      {/* Fonts Injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Prompt:wght@300;400;500;600&display=swap');
        :root { --font-serif: 'Playfair Display', serif; --font-sans: 'Prompt', sans-serif; }
        .font-serif { font-family: var(--font-serif); }
        .font-sans { font-family: var(--font-sans); }
      `,
        }}
      />

      <Navbar />

      {/* --- Page Header (SEO H1) --- */}
      <header className="relative overflow-hidden bg-[#B88A44] px-4 pt-32 pb-16 text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            Health & Beauty Journal
          </span>
          <h1 className="mb-6 font-serif text-4xl leading-tight font-bold text-white md:text-6xl">
            สาระน่ารู้เรื่องสุขภาพและความงาม
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#FFF8E7] md:text-xl">
            รวมบทความเกี่ยวกับนวดแผนไทย การดูแลเล็บ
            และเทคนิคดูแลสุขภาพจากผู้เชี่ยวชาญร้าน Karma 2
          </p>
        </div>
      </header>
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center text-sm text-gray-500">
          <a href="/" className="transition hover:text-[#B88A44]">
            Home
          </a>
          <ChevronRight size={16} className="mx-2" />
          <span className="font-medium text-[#B88A44]">Articles</span>
          {selectedCategory !== "All" && (
            <>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gray-400">{selectedCategory}</span>
            </>
          )}
        </nav>
      </div>

      <main className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* --- Main Content: Articles Grid --- */}
          <div className="grid grid-cols-1 content-start gap-8 md:grid-cols-2 lg:col-span-2">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#B88A44]/10 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  {/* Clickable Overlay Link */}
                  <a
                    href={`/articles/${article.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Read more about ${article.title}`}
                  ></a>

                  {/* Image Wrapper */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Category Label on Image */}
                    <div
                      className="pointer-events-none absolute top-4 left-4 z-20 cursor-pointer rounded-full bg-[#B88A44] px-3 py-1 text-xs font-bold text-white shadow-md hover:bg-[#3E2723]"
                      onClick={(e) => {
                        // Allow clicking category tag to filter (Prevent navigation)
                        e.preventDefault();
                        setSelectedCategory(article.category);
                      }}
                      style={{ pointerEvents: "auto" }} // Override to make clickable
                    >
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} /> {article.author}
                      </span>
                    </div>

                    <h2 className="mb-3 font-serif text-xl leading-snug font-bold text-[#3E2723] transition-colors group-hover:text-[#B88A44]">
                      {article.title}
                    </h2>

                    <p className="mb-6 line-clamp-3 flex-1 text-sm font-light text-gray-500">
                      {article.excerpt}
                    </p>

                    <span className="inline-flex items-center text-sm font-semibold text-[#B88A44] group-hover:underline">
                      อ่านต่อ (Read More)
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-12 text-gray-400">
                <Search size={48} className="mb-4 opacity-20" />
                <p>
                  ไม่พบบทความที่ตรงกับคำค้นหา &quot;{searchQuery}&quot;{" "}
                  {selectedCategory !== "All" &&
                    `ในหมวด ${selectedCategory}`}{" "}
                </p>
                <div className="mt-4 flex gap-4">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-sm font-bold text-[#B88A44] hover:underline"
                    >
                      ล้างคำค้นหา
                    </button>
                  )}
                  {selectedCategory !== "All" && (
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="text-sm font-bold text-[#B88A44] hover:underline"
                    >
                      ดูทั้งหมด
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* --- Sidebar --- */}
          <aside className="space-y-8">
            {/* Search Widget */}
            <div className="top-24 z-20 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-serif text-xl font-bold text-[#3E2723]">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ค้นหาบทความ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[#B88A44]/20 bg-[#FFF8E7]/50 py-3 pr-4 pl-10 transition-all focus:ring-2 focus:ring-[#B88A44] focus:outline-none"
                />
                <Search
                  className="absolute top-3.5 left-3 text-[#B88A44] opacity-50"
                  size={18}
                />
              </div>
            </div>

            {/* Categories Widget (Interactive Filter) */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-[#3E2723]">
                  Categories
                </h3>
                {selectedCategory !== "All" && (
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#B88A44]"
                  >
                    <Filter size={12} /> Clear Filter
                  </button>
                )}
              </div>

              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`group flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-all ${selectedCategory === cat
                          ? "bg-[#B88A44] text-white shadow-md"
                          : "text-gray-600 hover:bg-[#FFF8E7] hover:text-[#B88A44]"
                        }`}
                    >
                      <span className="font-medium">
                        {cat === "All" ? "บทความทั้งหมด (All)" : cat}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold transition ${selectedCategory === cat
                            ? "bg-white/20 text-white"
                            : "bg-[#FFF8E7] text-[#B88A44] group-hover:bg-[#B88A44] group-hover:text-white"
                          }`}
                      >
                        {cat === "All" ? articles.length : categoryCounts[cat]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-serif text-xl font-bold text-[#3E2723]">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "#MassgePhuket",
                  "#NailArt",
                  "#OfficeSyndrome",
                  "#Relax",
                  "#Karma2",
                  "#KataKaron",
                  "#GelNails",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag.replace("#", ""))} // Simple tag filter via search
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#B88A44] hover:text-white"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div> */}

            {/* CTA Banner */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-linear-to-br from-[#3E2723] to-[#5D4037] p-8 text-center text-white shadow-lg">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <h3 className="relative z-10 mb-2 font-serif text-2xl font-bold">
                Ready to Relax?
              </h3>
              <p className="relative z-10 mb-6 text-sm text-white/80">
                อ่านจบแล้ว อย่าลืมมาผ่อนคลายกับเราที่ Karma 2
              </p>
              <a
                href="tel:+66857965849"
                className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B88A44] px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-white hover:text-[#B88A44]"
              >
                <Phone size={18} /> Book Now
              </a>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
