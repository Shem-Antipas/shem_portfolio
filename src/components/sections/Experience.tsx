"use client";

import { TimelineItem } from "@/components/shared/TimelineItem";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-shell border-y bg-card/30">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="eyebrow">Experience</p>
        <h2 className="editorial-heading mt-4">A timeline of product, brand, and visual direction.</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((item, index) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
