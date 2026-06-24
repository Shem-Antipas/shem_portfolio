"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectVisual } from "@/components/shared/ProjectVisual";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden border-border/70 bg-card/85">
        <div className={cn("relative overflow-hidden border-b bg-muted", featured ? "aspect-[16/8]" : "aspect-[16/10]")}>
          <ProjectVisual project={project} />
          <motion.div
            className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
            initial={false}
          />
        </div>
        <div className={cn("flex flex-1 flex-col p-5", featured && "md:p-7")}>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {project.client ? (
              <span className="rounded-full bg-[#CC0000] px-3 py-1 text-xs font-bold text-white">{project.client}</span>
            ) : null}
            <Badge>{project.category}</Badge>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">{project.year}</span>
            {project.featureTag ? (
              <span className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground">{project.featureTag}</span>
            ) : null}
          </div>
          <h3 className={cn("font-display font-bold leading-tight", featured ? "text-3xl md:text-4xl" : "text-2xl")}>{project.title}</h3>
          <p className={cn("mt-3 text-sm leading-6 text-muted-foreground", featured && "max-w-3xl text-base leading-7")}>{project.summary}</p>
          <div className="mt-5 border-t pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">My role</p>
            <p className="mt-2 text-sm font-semibold leading-6">{project.role}</p>
          </div>
          {featured ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.outcome}</p> : null}
          <div className="mt-auto pt-5">
            <Button asChild size="sm" variant="outline" className="w-full justify-between">
              <Link href={`/work/${project.slug}`}>
                View case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
