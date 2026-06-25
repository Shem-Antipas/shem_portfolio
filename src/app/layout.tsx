import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shem-ui-ux-portfolio.vercel.app"),
  title: {
    default: "Antipas Shem - UI/UX Designer & Creative Technologist",
    template: "%s | Antipas Shem",
  },
  description:
    "My UI/UX, graphic design, brand identity, SaaS product design, and motion-driven creative technology portfolio.",
  keywords: ["UI/UX Designer", "Graphic Designer", "Creative Technologist", "Brand Identity", "SaaS Design", "Figma"],
  authors: [{ name: "Antipas Shem" }],
  icons: {
    icon: "/images/Portfolio-logo-faicon.png",
  },
  openGraph: {
    title: "Antipas Shem - UI/UX Designer & Creative Technologist",
    description: "My portfolio spans UI/UX systems, graphic design, branding, motion, and product implementation.",
    url: "https://shem-ui-ux-portfolio.vercel.app",
    siteName: "Antipas Shem Portfolio",
    images: [{ url: "/images/projects/inkwell-og.jpg", width: 1200, height: 630, alt: "Antipas Shem portfolio work preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antipas Shem - UI/UX Designer & Creative Technologist",
    description: "UI/UX, graphic design, branding, motion, and product implementation portfolio.",
    images: ["/images/projects/inkwell-og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSerifDisplay.variable} dark`} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
