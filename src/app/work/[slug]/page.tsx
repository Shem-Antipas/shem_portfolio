import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudyScreens } from "@/components/shared/CaseStudyScreens";
import { ProjectVisual } from "@/components/shared/ProjectVisual";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function WorkDetailPage({ params }: PageProps) {
  const index = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const caseStudy = project.caseStudy;

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b bg-background py-16 md:py-24">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 dark:opacity-55", project.gradient)} />
        <div className="absolute inset-0 bg-background/55 dark:bg-background/35" />
        <div className="absolute inset-0 soft-grid opacity-30 dark:opacity-20" />
        <div className="noise-layer absolute inset-0" />
        <div className="container relative">
          <Button asChild variant="outline" className="mb-10 bg-background/70 backdrop-blur">
            <Link href="/#work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.client ? <Badge className="bg-[#CC0000] text-white">{project.client}</Badge> : null}
                <Badge>{project.category}</Badge>
                <Badge variant="outline" className="bg-background/60 backdrop-blur">
                  {project.year}
                </Badge>
              </div>
              <h1 className="case-study-title text-4xl leading-tight text-foreground md:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">{project.summary}</p>
            </div>
            <Card className="border-border/80 bg-card/80 text-card-foreground shadow-luxe backdrop-blur-xl">
              <CardContent className="grid gap-5 p-5 md:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">My Role</p>
                  <p className="mt-2 text-lg font-semibold leading-7">{project.role}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          {caseStudy?.tags.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-background/60 backdrop-blur">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-12 overflow-hidden rounded-lg border bg-card shadow-luxe">
          <ProjectVisual project={project} mode="detail" />
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-4">
            <Card>
              <CardContent className="grid gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Year</p>
                  <p className="mt-1 font-semibold">{project.year}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Role</p>
                  <p className="mt-1 font-semibold">{project.role}</p>
                </div>
                {caseStudy ? (
                  <>
                    <Separator />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Client</p>
                      <p className="mt-1 font-semibold">{caseStudy.client}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Users</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{caseStudy.actors}</p>
                    </div>
                  </>
                ) : null}
                <Separator />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Outcome</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{project.outcome}</p>
                </div>
                {project.liveUrl || project.appUrl ? (
                  <>
                    <Separator />
                    <div className="grid gap-2">
                      {project.liveUrl ? (
                        <Button asChild variant="outline" className="justify-between">
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            Visit project
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                      {project.appUrl ? (
                        <Button asChild className="justify-between">
                          <a href={project.appUrl} target="_blank" rel="noreferrer">
                            View on Play Store
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-12">
            <div>
              <p className="eyebrow">Project Brief</p>
              <h2 className="mt-3 font-display text-4xl font-bold">{caseStudy?.sections[0]?.heading ?? project.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {caseStudy?.lede ?? `${project.summary} My role covered ${project.role.toLowerCase()}, with the final direction focused on ${project.outcome.toLowerCase()}.`}
              </p>
            </div>
            {(caseStudy?.sections ?? []).map((section) => (
              <Card key={section.title} className="bg-card/70">
                <CardContent className="p-6 md:p-8">
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{section.title}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold">{section.heading}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {caseStudy ? (
              <>
                <CaseStudyScreens project={project} />
                <Card className="bg-card/70">
                  <CardContent className="p-6 md:p-8">
                    <p className="eyebrow">Design Decisions Worth Noting</p>
                    <div className="mt-5 grid gap-4">
                      {caseStudy.decisions.map((decision) => (
                        <p key={decision} className="rounded-lg border bg-background/50 p-4 text-sm leading-6 text-muted-foreground">
                          {decision}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/70">
                  <CardContent className="p-6 md:p-8">
                    <p className="eyebrow">Outcome</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold">{caseStudy.outcomeHeading}</h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {caseStudy.metrics.map((metric) => (
                        <div key={metric} className="rounded-lg border bg-background/55 p-4 text-sm font-semibold leading-6">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : null}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <Button asChild variant="outline" size="lg" className="justify-start">
            <Link href={`/work/${previous.slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {previous.title}
            </Link>
          </Button>
          <Button asChild size="lg" className="justify-end">
            <Link href={`/work/${next.slug}`}>
              {next.title}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
