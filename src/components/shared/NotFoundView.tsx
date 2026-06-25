"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function NotFoundView() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    if (countdown <= 0) {
      router.replace("/");
      return;
    }

    const countdownTimer = window.setTimeout(() => {
      setCountdown((value) => Math.max(value - 1, 0));
    }, 1000);

    return () => window.clearTimeout(countdownTimer);
  }, [countdown, router]);

  const countdownText = useMemo(
    () => `Redirecting in ${countdown} second${countdown === 1 ? "" : "s"}…`,
    [countdown],
  );

  return (
    <main className="grid min-h-screen place-items-center overflow-hidden px-4 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.18),transparent_28%)]" />
      <div className="relative text-center">
        <motion.div
          className="mx-auto mb-8 grid h-44 w-44 place-items-center rounded-full border border-primary/30 bg-card shadow-glow"
          animate={reduceMotion ? false : { rotate: [0, 3, -3, 0], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-display text-6xl font-bold">404</span>
        </motion.div>
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 font-display text-5xl font-bold">This frame missed the artboard.</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          The page you are looking for does not exist, or the route has moved during a redesign.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">{countdownText}</p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
