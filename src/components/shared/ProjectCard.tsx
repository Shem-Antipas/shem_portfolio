"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectVisual } from "@/components/shared/ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden border-border/70 bg-card/80">
        <div className="relative min-h-[360px] overflow-hidden">
          <ProjectVisual project={project} />
          <div className="absolute left-5 top-5 flex items-center gap-3">
            <Badge>{project.category}</Badge>
            <span className="rounded-full bg-background/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{project.year}</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="mb-3 max-w-sm text-sm text-white/70">{project.summary}</p>
            <h3 className="max-w-lg font-display text-3xl font-bold leading-none text-white">{project.title}</h3>
          </div>
          <motion.div
            className="absolute inset-x-0 bottom-0 translate-y-full bg-background/92 p-5 backdrop-blur-xl transition-transform duration-300 group-hover:translate-y-0"
            initial={false}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case Study</p>
                <p className="font-display text-xl font-semibold">{project.title}</p>
              </div>
              <Button asChild size="sm">
                <Link href={`/work/${project.slug}`}>
                  View <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
