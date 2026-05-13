"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const scroll = (direction: "left" | "right") => {
    viewportRef.current?.scrollBy({ left: direction === "left" ? -360 : 360, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section className="section-shell">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="editorial-heading mt-4">What collaborators notice.</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => scroll("left")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => scroll("right")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div ref={viewportRef} className="flex gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="min-w-[300px] max-w-[380px] flex-1 whitespace-normal"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full bg-card/80">
                <CardContent className="p-6">
                  <Quote className="mb-8 h-7 w-7 text-primary" />
                  <p className="leading-7 text-muted-foreground">“{testimonial.quote}”</p>
                  <div className="mt-8 flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
