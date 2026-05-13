"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { Experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const reduceMotion = useReducedMotion();
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative grid gap-5 md:grid-cols-[1fr_56px_1fr]"
      initial={reduceMotion ? false : { opacity: 0, x: fromLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={fromLeft ? "md:col-start-1" : "md:col-start-3"}>
        <Card className="bg-card/80">
          <CardContent className="p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <h3 className="font-display text-2xl font-semibold">{item.role}</h3>
              </div>
              <Badge variant="outline">{item.range}</Badge>
            </div>
            <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
      <div className="absolute left-[-7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary shadow-glow md:left-[calc(50%-7px)]" />
    </motion.div>
  );
}
