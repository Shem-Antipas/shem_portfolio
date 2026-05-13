"use client";

import { Lightbulb, MousePointerClick, Palette, PanelsTopLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { services, type Service } from "@/lib/data";

const icons: Record<Service["icon"], typeof Palette> = {
  palette: Palette,
  cursor: MousePointerClick,
  lightbulb: Lightbulb,
  layout: PanelsTopLeft,
};

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-shell border-y bg-card/30">
      <div className="mb-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="backdrop-label" data-backdrop="Services">
            Services
          </p>
          <h2 className="editorial-heading mt-4">What I can shape from strategy to screen.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
          I help teams turn ideas into polished visual systems, thoughtful product flows, responsive interfaces, and
          brand assets that can move from concept to launch without losing quality.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
            >
              <Card className="h-full overflow-hidden bg-card/80">
                <CardContent className="grid h-full gap-6 p-6 md:grid-cols-[96px_1fr] md:p-8">
                  <div>
                    <p className="stroke-text font-display text-6xl font-bold leading-none">{service.number}</p>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground shadow-glow">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="leading-7 text-muted-foreground">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
