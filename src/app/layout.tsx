import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antipasshem.vercel.app"),
  title: {
    default: "Antipas Shem - UI/UX Designer & Creative Technologist",
    template: "%s | Antipas Shem",
  },
  description:
    "My UI/UX, graphic design, brand identity, SaaS product design, and motion-driven creative technology portfolio.",
  keywords: ["UI/UX Designer", "Graphic Designer", "Creative Technologist", "Brand Identity", "SaaS Design", "Figma"],
  authors: [{ name: "Antipas Shem" }],
  openGraph: {
    title: "Antipas Shem - UI/UX Designer & Creative Technologist",
    description: "My portfolio spans UI/UX systems, graphic design, branding, motion, and product implementation.",
    url: "https://antipasshem.vercel.app",
    siteName: "Antipas Shem Portfolio",
    images: [{ url: "/images/profile.svg", width: 900, height: 900, alt: "Antipas Shem avatar" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antipas Shem - UI/UX Designer & Creative Technologist",
    description: "UI/UX, graphic design, branding, motion, and product implementation portfolio.",
    images: ["/images/profile.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} dark`} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
