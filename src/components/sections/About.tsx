"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { capabilities, stats } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3QgZmlsbD0nI0VBREZDQicgd2lkdGg9JzEwJyBoZWlnaHQ9JzEyJy8+PC9zdmc+";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, ref);

  return (
    <Card ref={ref} className="bg-card/70">
      <CardContent className="p-5">
        <p className="stroke-text font-display text-5xl font-bold leading-none">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

export function About() {
  const reduceMotion = useReducedMotion();
  const badges = ["Design Systems", "Brand Identity", "Motion", "Figma", "Adobe CC"];

  return (
    <section id="about" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="relative"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-[6/7] overflow-hidden rounded-lg border bg-card shadow-luxe">
            <Image
              src="/images/about-portrait.svg"
              alt="Editorial portrait illustration for Antipas Shem"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover"
            />
          </div>
          {badges.map((badge, index) => (
            <motion.div
              key={badge}
              className="absolute rounded-full border bg-background/80 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur"
              style={{
                left: `${index % 2 === 0 ? 4 : 58}%`,
                top: `${16 + index * 15}%`,
              }}
              animate={reduceMotion ? false : { y: [0, index % 2 ? -9 : 9, 0] }}
              transition={{ duration: 3.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>

        <div>
          <p className="backdrop-label" data-backdrop="About">
            About Me
          </p>
          <h2 className="editorial-heading mt-4">I build premium product stories across interface, brand, and motion.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {capabilities.map((capability) => (
              <div
                key={capability.label}
                className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm shadow-sm backdrop-blur"
              >
                <span className="font-semibold">{capability.label}</span>
                <span className="font-mono text-xs text-primary">({capability.value}%)</span>
              </div>
            ))}
          </div>
          <div className="mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              I am a multidisciplinary UI/UX Designer, Graphic Designer, and Creative Technologist focused on building
              premium digital experiences across web, mobile, branding, and SaaS platforms.
            </p>
            <p>
              My work combines modern UI/UX systems, frontend product design, brand identity development, motion and
              visual storytelling, product prototyping, and full-stack product implementation. I focus on design systems,
              information hierarchy, Figma prototypes, Adobe CC workflows, and accessible responsive interfaces.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {["UI/UX Design", "Graphic Design", "Brand Identity", "Motion Design", "Figma", "Adobe CC"].map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
