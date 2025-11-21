/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Link as LinkIcon,
  Phone,
  Menu,
  X,
} from "lucide-react";

// --- Mock Data (จำลองฐานข้อมูลบทความ) ---
const articlesData: Record<string, any> = {
  "benefits-of-thai-massage": {
    title: "5 ประโยชน์ของการนวดแผนไทย ที่มากกว่าแค่ความผ่อนคลาย",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
    date: "20 Nov 2024",
    author: "Karma Admin",
    category: "Massage Therapy",
    readTime: "5 min read",
    content: `
      <p class="mb-6">การนวดแผนไทย (Traditional Thai Massage) เป็นศาสตร์การบำบัดที่มีมาอย่างยาวนาน ไม่ใช่เพียงแค่การบีบนวดเพื่อคลายกล้ามเนื้อ แต่ยังเป็นการปรับสมดุลธาตุในร่างกาย วันนี้ Karma 2 จะพามาดูประโยชน์ลึกๆ ที่คุณอาจไม่เคยรู้</p>
      
      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">1. ช่วยลดอาการปวดไมเกรน</h3>
      <p class="mb-6">การนวดกดจุดบริเวณคอ บ่า และศีรษะ ช่วยกระตุ้นการไหลเวียนของเลือดไปเลี้ยงสมอง ลดความตึงเครียดของกล้ามเนื้อ ซึ่งเป็นสาเหตุหลักของอาการไมเกรนได้เป็นอย่างดี</p>

      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">2. ปรับสมดุลระบบย่อยอาหาร</h3>
      <p class="mb-6">ท่าดัดและท่านวดท้องบางท่า ช่วยกระตุ้นการทำงานของกระเพาะอาหารและลำไส้ ลดอาการท้องอืด ท้องเฟ้อ และช่วยให้ระบบขับถ่ายทำงานได้ดีขึ้น</p>

      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">3. เพิ่มความยืดหยุ่นให้ร่างกาย</h3>
      <p class="mb-6">นวดไทยมีท่า "ดัดตน" ที่คล้ายกับโยคะ ช่วยยืดเหยียดกล้ามเนื้อและเส้นเอ็น ทำให้ข้อต่อต่างๆ เคลื่อนไหวได้ดีขึ้น ลดความเสี่ยงต่อการบาดเจ็บ</p>

      <div class="bg-[#FFF8E7] p-6 rounded-xl border-l-4 border-[#B88A44] my-8">
        <p class="font-bold text-[#8C6B35]">Tips: หลังนวดเสร็จควรดื่มน้ำอุ่นมากๆ เพื่อช่วยขับของเสียออกจากร่างกาย และหลีกเลี่ยงการอาบน้ำเย็นทันที</p>
      </div>

      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">4. ลดความเครียดและวิตกกังวล</h3>
      <p class="mb-6">การสัมผัสและการนวดในจังหวะที่เหมาะสม ช่วยลดระดับฮอร์โมนคอร์ติซอล (Cortisol) ซึ่งเป็นฮอร์โมนความเครียด และกระตุ้นการหลั่งสารแห่งความสุข (Endorphin)</p>

      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">5. กระตุ้นระบบไหลเวียนโลหิต</h3>
      <p class="mb-6">ช่วยให้เลือดลมเดินสะดวก ลดอาการบวมน้ำ และช่วยให้ผิวพรรณดูเปล่งปลั่งขึ้นจากการที่เลือดนำออกซิเจนไปเลี้ยงเซลล์ต่างๆ ได้ดีขึ้น</p>
    `,
  },
  "gel-nail-care-tips": {
    title: "เคล็ดลับดูแลเล็บเจลให้ติดทนนาน เงางามเกิน 3 สัปดาห์",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    date: "18 Nov 2024",
    author: "Nail Artist Joy",
    category: "Nail Care",
    readTime: "4 min read",
    content: `
      <p class="mb-6">ใครที่ชอบทำเล็บเจลคงเจอปัญหาเล็บหลุดร่อนก่อนเวลา หรือหน้าเล็บบาง วันนี้ช่างจอยจาก Karma 2 มีเทคนิคง่ายๆ มาฝากกันค่ะ</p>
      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">1. หลีกเลี่ยงการใช้เล็บแกะเกา</h3>
      <p class="mb-6">เล็บเจลมีความแข็งก็จริง แต่การใช้ปลายเล็บงัดแงะของแข็ง หรือแกะฉลาก จะทำให้ปลายเล็บเปิดและหลุดร่อนได้ง่าย</p>
      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">2. ทาออยล์บำรุงจมูกเล็บ (Cuticle Oil)</h3>
      <p class="mb-6">ความชุ่มชื้นคือหัวใจสำคัญ ทาออยล์ทุกวันจะช่วยให้หนังขอบเล็บไม่แห้งแข็ง และช่วยให้เจลยืดหยุ่นเกาะหน้าเล็บได้ดีขึ้น</p>
      <h3 class="text-2xl font-serif font-bold text-[#3E2723] mb-4">3. สวมถุงมือเมื่อทำงานบ้าน</h3>
      <p class="mb-6">น้ำยาล้างจานหรือน้ำยาทำความสะอาดมีสารเคมีที่กัดกร่อนสีเจลให้หมองลงได้ ควรป้องกันด้วยการสวมถุงมือยาง</p>
    `,
  },
  "office-syndrome-relief": {
    title: "ออฟฟิศซินโดรมถามหา? แนะนำ 3 ท่านวดแก้อาการปวดคอ บ่า ไหล่",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    date: "15 Nov 2024",
    author: "Therapist Lek",
    category: "Health",
    readTime: "6 min read",
    content: `<p class="mb-6">นั่งทำงานหน้าคอมพิวเตอร์นานๆ อาการปวดคอ บ่า ไหล่ เป็นสิ่งที่หลีกเลี่ยงยาก มาดูวิธีบรรเทาอาการเบื้องต้นกัน...</p>`,
  },
  "spa-pedicure-benefits": {
    title: "ทำไมต้องทำสปาเท้า? มากกว่าความสะอาดคือสุขภาพที่ดี",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1200&auto=format&fit=crop",
    date: "10 Nov 2024",
    author: "Karma Admin",
    category: "Spa Treatment",
    readTime: "3 min read",
    content: `<p class="mb-6">เท้าคืออวัยวะที่รับบทหนักที่สุดในร่างกาย การทำสปาเท้าจึงเป็นการให้รางวัลและดูแลสุขภาพเท้าที่ดีที่สุด...</p>`,
  },
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#B88A44]/20 bg-white/95 shadow-sm backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <Link href="/" className="font-serif text-2xl font-black text-[#8C6B35]">
        Karma 2
      </Link>
      <div className="hidden gap-8 font-medium text-[#3E2723] md:flex">
        <Link href="/" className="transition hover:text-[#B88A44]">
          Home
        </Link>
        <Link href="/articles" className="text-[#B88A44]">
          Blog
        </Link>
        <Link href="/#services" className="transition hover:text-[#B88A44]">
          Services
        </Link>
        <Link
          href="/#contact"
          className="rounded-full bg-[#B88A44] px-4 py-1.5 text-sm text-white transition hover:bg-[#3E2723]"
        >
          Book Now
        </Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="mt-20 bg-[#3E2723] py-10 text-center text-[#FFF8E7]">
    <h2 className="font-serif text-2xl font-bold text-[#B88A44]">Karma 2</h2>
    <p className="mt-2 text-sm opacity-60">Massage & Nails • Kata Karon</p>
  </footer>
);

// --- Main Detail Page ---
export default function ArticleDetailPage({
  params,
}: {
  params?: { slug?: string };
}) {
  // 1. ใช้ State เพื่อเก็บค่า Slug
  const [slug, setSlug] = useState<string>(
    params?.slug || "benefits-of-thai-massage",
  );

  // 2. ใช้ useEffect เพื่อดึง Slug จาก URL (Client-Side Fallback)
  // สิ่งนี้ช่วยแก้ปัญหาเมื่อ params ไม่ถูกส่งมาในโหมด Preview
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const lastPart = pathParts[pathParts.length - 1];

      // ถ้า URL slug ตรงกับข้อมูลที่เรามี ให้ใช้ค่าจาก URL
      if (articlesData[lastPart]) {
        setSlug(lastPart);
      }
    }
  }, [params]); // ทำงานเมื่อ params เปลี่ยน หรือโหลดหน้าใหม่

  const article = articlesData[slug];

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFF8E7]">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-[#3E2723]">
            Article Not Found
          </h1>
          <p className="mb-4 text-gray-500">Could not load article: {slug}</p>
          <Link href="/articles" className="text-[#B88A44] hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#3E2723]">
      {/* Styles */}
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

      {/* --- Hero Image --- */}
      <header className="relative mt-[72px] h-[50vh] w-full overflow-hidden md:h-[60vh]">
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/articles"
              className="mb-6 inline-flex items-center text-sm font-medium text-white/80 transition hover:text-[#B88A44]"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Articles
            </Link>
            <div className="mb-4 flex gap-2">
              <span className="rounded-full bg-[#B88A44] px-3 py-1 text-xs font-bold text-white">
                {article.category}
              </span>
            </div>
            <h1 className="mb-4 font-serif text-3xl leading-tight font-bold text-white md:text-5xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <User size={16} /> {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: Article Body */}
          <article className="flex-1">
            {/* Social Share (Mobile Top) */}
            <div className="mb-8 flex gap-4 border-b border-gray-100 pb-4 lg:hidden">
              <span className="text-sm font-bold text-gray-400">Share:</span>
              <Facebook size={20} className="text-blue-600" />
              <Twitter size={20} className="text-sky-400" />
              <LinkIcon size={20} className="text-gray-500" />
            </div>

            {/* Content Injection */}
            <div
              className="prose prose-lg prose-brown max-w-none leading-relaxed text-gray-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>

            {/* Author Box */}
            <div className="mt-16 flex items-center gap-6 rounded-2xl bg-[#FFF8E7] p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B88A44] text-2xl font-bold text-white">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="mb-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Written By
                </p>
                <h4 className="font-serif text-xl font-bold text-[#3E2723]">
                  {article.author}
                </h4>
                <p className="text-sm text-gray-600">
                  ผู้เชี่ยวชาญด้านสุขภาพและความงามประจำ Karma 2
                </p>
              </div>
            </div>
          </article>

          {/* Right: Sidebar */}
          <aside className="w-full space-y-8 lg:w-80">
            {/* Share Widget (Desktop) */}
            <div className="hidden rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm lg:block">
              <h4 className="mb-4 flex items-center justify-center gap-2 font-bold text-[#3E2723]">
                <Share2 size={18} /> Share this article
              </h4>
              <div className="flex justify-center gap-4">
                <button className="rounded-full bg-blue-50 p-3 text-blue-600 transition hover:bg-blue-100">
                  <Facebook size={20} />
                </button>
                <button className="rounded-full bg-sky-50 p-3 text-sky-500 transition hover:bg-sky-100">
                  <Twitter size={20} />
                </button>
                <button className="rounded-full bg-gray-50 p-3 text-gray-600 transition hover:bg-gray-100">
                  <LinkIcon size={20} />
                </button>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#3E2723] p-8 text-center text-white">
              <div className="absolute inset-0 bg-[#B88A44] opacity-0 transition duration-500 group-hover:opacity-10"></div>
              <h3 className="mb-2 font-serif text-2xl font-bold">
                Book Your Relax Time
              </h3>
              <p className="mb-6 text-sm text-white/70">
                อ่านจบแล้ว สนใจนวดผ่อนคลายหรือทำเล็บสวยๆ จองเลย!
              </p>
              <a
                href="tel:+66857965849"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B88A44] py-3 font-bold text-white transition hover:bg-white hover:text-[#B88A44]"
              >
                <Phone size={18} /> Call (+66) 857965849
              </a>
            </div>

            {/* Related Articles Mockup */}
            <div>
              <h4 className="mb-4 font-serif text-xl font-bold text-[#3E2723]">
                Related Articles
              </h4>
              <div className="space-y-4">
                {["Office Syndrome Relief", "Spa Pedicure Benefits"].map(
                  (title, i) => (
                    <a href="#" key={i} className="group block">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=200"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="text-sm leading-snug font-bold text-[#3E2723] transition group-hover:text-[#B88A44]">
                            {title}
                          </h5>
                          <span className="mt-1 block text-xs text-gray-400">
                            Read more
                          </span>
                        </div>
                      </div>
                    </a>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
