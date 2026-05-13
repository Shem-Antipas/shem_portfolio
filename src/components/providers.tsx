"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { BackgroundLines } from "@/components/shared/BackgroundLines";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionRail } from "@/components/shared/SectionRail";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <LoadingScreen />
      <CustomCursor />
      <BackgroundLines />
      <SectionRail />
      <PageTransition>{children}</PageTransition>
      <Toaster />
    </ThemeProvider>
  );
}
