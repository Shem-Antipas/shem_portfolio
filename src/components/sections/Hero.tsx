"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

import { AnimatedText } from "@/components/shared/AnimatedText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function MagneticAction({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance > 80) {
      x.set(0);
      y.set(0);
      return;
    }

    const strength = (80 - distance) / 80;
    x.set(Math.max(-8, Math.min(8, deltaX * 0.18 * strength)));
    y.set(Math.max(-8, Math.min(8, deltaY * 0.18 * strength)));
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--primary)/0.26),transparent_26%),radial-gradient(circle_at_80%_24%,hsl(var(--accent)/0.16),transparent_22%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--card)))]" />
      <motion.div
        className="noise-layer absolute inset-0"
        animate={reduceMotion ? false : { x: [0, -18, 12, 0], y: [0, 12, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="outline" className="mb-6 bg-background/40 backdrop-blur">
              Creative Designer · UI/UX · Brand Systems
            </Badge>
          </motion.div>
          <AnimatedText text="I design clear digital systems." />
          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Creative Designer at Kenya Airways, shaping enterprise UIs, brand systems, and campaign experiences.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <MagneticAction>
              <Button asChild size="lg">
                <Link href="#work">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticAction>
            <MagneticAction>
              <Button asChild size="lg" variant="outline">
                <a href="/antipas-shem-cv.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </MagneticAction>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-[420px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-[2rem] border border-primary/35"
            animate={reduceMotion ? false : { scale: [1, 1.04, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-5 overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-luxe">
            <div className="grid h-full grid-rows-[1.12fr_0.88fr] gap-2 p-2">
              <div className="relative overflow-hidden rounded-xl border bg-muted">
                <Image
                  src="/images/projects/DBC - dashboard.png"
                  alt="Denied Boarding Compensation dashboard interface"
                  fill
                  priority
                  sizes="(max-width: 768px) 86vw, 420px"
                  className="object-cover object-left-top"
                />
                <div className="absolute left-3 top-3 rounded-full bg-[#CC0000] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  Kenya Airways UI
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative overflow-hidden rounded-xl border bg-muted">
                  <Image
                    src="/images/projects/Advent Study Hub  landing 2.png"
                    alt="Advent Study Hub landing page"
                    fill
                    sizes="(max-width: 768px) 43vw, 210px"
                    className="object-cover object-left-top"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl border bg-muted">
                  <Image
                    src="/images/projects/Wild Honey-Shop.png"
                    alt="Wild Honey Haven shop interface"
                    fill
                    sizes="(max-width: 768px) 43vw, 210px"
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-lg border bg-background/80 p-4 shadow-luxe backdrop-blur">
            <p className="font-display text-3xl font-bold">50+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects Delivered</p>
            <p className="mt-2 max-w-[190px] text-xs leading-5 text-muted-foreground/60">
              Including work for Kenya Airways, Africa&apos;s flagship carrier
            </p>
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 grid -translate-x-1/2 place-items-center rounded-full border border-border p-3"
        animate={reduceMotion ? false : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
