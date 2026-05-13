"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { graphicSkills, tools, uiUxSkills, type Skill } from "@/lib/data";

function SkillList({ skills }: { skills: Skill[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={reduceMotion ? false : { width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: index * 0.04 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell border-y bg-card/30">
      <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 className="editorial-heading mt-4">I use sharp systems for product and visual design.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
          I combine clean editorial layouts, premium SaaS aesthetics, motion-driven interfaces, and mobile-first systems
          with brand craft, campaign visuals, product mockups, and implementation thinking.
        </p>
      </div>

      <Tabs defaultValue="uiux" className="w-full">
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 sm:w-fit">
          <TabsTrigger value="uiux">UI/UX Skills</TabsTrigger>
          <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
        </TabsList>
        <TabsContent value="uiux">
          <Card>
            <CardHeader>
              <CardTitle>UI/UX Capability</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillList skills={uiUxSkills} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="graphic">
          <Card>
            <CardHeader>
              <CardTitle>Graphic Design Capability</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillList skills={graphicSkills} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Tools</p>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
        >
          {tools.map((tool) => (
            <motion.div key={tool} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <Badge variant="outline" className="bg-background/60 px-4 py-2">
                {tool}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
