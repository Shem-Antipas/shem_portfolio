"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { AnimatedText } from "@/components/shared/AnimatedText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3QgZmlsbD0nIzExMTAwZScgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9zdmc+";

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
              UI/UX Designer · Graphic Designer · Creative Technologist
            </Badge>
          </motion.div>
          <AnimatedText text="I design premium digital systems with clarity and motion." />
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            I build refined web, mobile, branding, and SaaS experiences where editorial layouts, product logic, and
            visual storytelling work as one.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Button asChild size="lg">
              <Link href="#work">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/antipas-shem-cv.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
            <Image
              src="/images/profile.svg"
              alt="Stylized profile avatar of Antipas Shem"
              fill
              priority
              sizes="(max-width: 768px) 86vw, 420px"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-lg border bg-background/80 p-4 shadow-luxe backdrop-blur">
            <p className="font-display text-3xl font-bold">50+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects Delivered</p>
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
