"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      className={`fixed right-5 bottom-5 z-50 items-center justify-center rounded-full border border-border bg-background/95 shadow-xl transition-all duration-300 hover:bg-background ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
