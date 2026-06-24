"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { capabilities, stats } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, ref);

  return (
    <Card ref={ref} className="bg-card/70">
      <CardContent className="p-5">
        <p className="font-display text-5xl font-bold leading-none text-primary">
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
          <div className="relative aspect-[6/7] overflow-hidden rounded-lg border bg-card p-3 shadow-luxe">
            <div className="grid h-full grid-rows-[1.08fr_0.92fr] gap-3">
              <div className="relative overflow-hidden rounded-md border bg-muted">
                <Image
                  src="/images/projects/Inkwell Home landing.png"
                  alt="Inkwell Creations website hero design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-left-top"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden rounded-md border bg-muted">
                  <Image
                    src="/images/projects/Holidawn-landing.png"
                    alt="Holidawn Adventures website hero design"
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative overflow-hidden rounded-md border bg-muted">
                  <Image
                    src="/images/projects/MIFBEMS Dashboard.png"
                    alt="MIFBeDAS fisheries dashboard interface"
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
            </div>
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
              </div>
            ))}
          </div>
          <div className="mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              I&apos;m a Creative Designer at Kenya Airways - Africa&apos;s flagship carrier - where I&apos;ve spent 4+ years
              shipping campaigns, building brand systems, and designing enterprise product UIs used by thousands of
              staff and passengers.
            </p>
            <p>
              Outside of KQ, I build polished digital products through my studio, Inkwell Creations - including Advent
              Study Hub, an Android app serving the East African Seventh-day Adventist community published on the Google
              Play Store.
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
