"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.style.scrollBehavior = prefersReducedMotion ? "auto" : "smooth";
  }, []);
}
