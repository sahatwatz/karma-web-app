import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// @ts-expect-error: side-effect CSS import has no type declarations
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Karma 2 Massage & Nails - Kata Karon",
  description: "Fresh Opening! Luxury massage and nail services in Kata Karon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} `}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
