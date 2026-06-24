"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

const filters = ["All", "UI·UX", "Graphic Design", "Branding", "Motion"] as const;

export function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="section-shell">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <p className="backdrop-label" data-backdrop="Portfolio">
              Selected Work
            </p>
            <HoverCard>
              <HoverCardTrigger aria-label="Project filtering note" className="rounded-full text-muted-foreground hover:text-foreground">
                <Info className="h-4 w-4" />
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm text-muted-foreground">
                  Projects are grouped by discipline, but most combine UX architecture, visual systems, brand craft, and implementation thinking.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <h2 className="editorial-heading mt-4">Where design meets impact: latest pixels.</h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          I move across enterprise dashboards, healthcare SaaS, public-sector data systems, premium campaigns, and
          cinematic graphic systems.
        </p>
      </div>

      <Tabs defaultValue="All">
        <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-1 sm:w-fit">
          {filters.map((filter) => (
            <TabsTrigger key={filter} value={filter}>
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
        {filters.map((filter) => {
          const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);
          const heroProjects = visible.filter((project) => project.tier === 1);
          const supportingProjects = visible.filter((project) => project.tier !== 1);
          return (
            <TabsContent key={filter} value={filter}>
              <motion.div
                className="grid gap-5"
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
              >
                {heroProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} featured />
                ))}
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {supportingProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index + heroProjects.length} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
