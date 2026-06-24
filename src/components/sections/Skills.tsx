"use client";

import {
  Code2,
  Database,
  Figma,
  Film,
  ImageIcon,
  LayoutDashboard,
  MousePointer2,
  Move,
  Palette,
  PenTool,
  Smartphone,
  Sparkles,
  Triangle,
  WandSparkles,
  Wind,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { alsoUsedTools, toolGroups, type Skill } from "@/lib/data";

const icons: Record<string, typeof Figma> = {
  figma: Figma,
  "pen-tool": PenTool,
  vector: PenTool,
  image: ImageIcon,
  layout: LayoutDashboard,
  sparkles: Sparkles,
  film: Film,
  wand: WandSparkles,
  "mouse-pointer": MousePointer2,
  palette: Palette,
  code: Code2,
  wind: Wind,
  move: Move,
  smartphone: Smartphone,
  triangle: Triangle,
  database: Database,
};

function ToolCell({ tool, index }: { tool: Skill; index: number }) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[tool.icon] ?? Sparkles;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      className="flex min-h-24 items-center gap-3 rounded-lg border bg-background/55 p-4 shadow-sm"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/12 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold leading-5">{tool.name}</span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell border-y bg-card/30">
      <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 className="editorial-heading mt-4">Tools I use to move from strategy to shipped systems.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
          I combine product design, campaign craft, motion thinking, and implementation fluency across the tools teams
          actually use to ship work.
        </p>
      </div>

      <Tabs defaultValue="tools" className="w-full">
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 sm:w-fit">
          <TabsTrigger value="tools">Core Tools</TabsTrigger>
          <TabsTrigger value="methods">Design Method</TabsTrigger>
        </TabsList>
        <TabsContent value="tools">
          <div className="grid gap-5">
            {toolGroups.map((group) => (
              <Card key={group.label}>
                <CardHeader>
                  <CardTitle>{group.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {group.tools.map((tool, index) => (
                      <ToolCell key={tool.name} tool={tool} index={index} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>Also used when the project calls for it:</span>
            {alsoUsedTools.map((tool) => (
              <Badge key={tool} variant="outline" className="bg-background/60">
                {tool}
              </Badge>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="methods">
          <Card>
            <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
              {[
                "Information hierarchy and UX flow mapping",
                "Responsive systems and accessibility-aware patterns",
                "Component-driven dashboards and role-based interfaces",
                "Premium visual hierarchy for enterprise and campaign work",
              ].map((item) => (
                <div key={item} className="rounded-lg border bg-background/55 p-5 text-sm font-semibold leading-6">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Accordion type="single" collapsible className="mt-12">
        <AccordionItem value="method">
          <AccordionTrigger>Design approach</AccordionTrigger>
          <AccordionContent>
            I research the workflow, map the hierarchy, prototype the critical interactions, then refine the interface
            into a reusable visual system that can survive real product growth.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
