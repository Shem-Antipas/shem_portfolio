"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CaseStudyScreensProps {
  project: Project;
}

export function CaseStudyScreens({ project }: CaseStudyScreensProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const screens = project.caseStudy?.screens ?? [];
  const images = project.images ?? [];
  const selectedScreen = selectedIndex !== null ? screens[selectedIndex] : null;
  const selectedImage = selectedIndex !== null ? images[selectedIndex] ?? images[0] : null;

  const screenCards = useMemo(
    () =>
      screens.map((screen, screenIndex) => {
        const screenImage = images[screenIndex] ?? images[0];
        return (
          <Card
            key={screen.title}
            className="bg-card/70 hover:border-primary hover:border hover:shadow-lg transition-shadow"
            onClick={() => setSelectedIndex(screenIndex)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedIndex(screenIndex);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <CardContent className="p-5">
              {screenImage ? (
                <div className="mb-4 aspect-[16/9] overflow-hidden rounded-lg border bg-muted">
                  <div className="relative h-full w-full">
                    <Image
                      src={screenImage.src}
                      alt={screenImage.alt}
                      fill
                      sizes="(max-width: 768px) 92vw, 520px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ) : null}
              <h3 className="font-display text-xl font-semibold">{screen.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{screen.caption}</p>
            </CardContent>
          </Card>
        );
      }),
    [screens, images],
  );

  return (
    <>
      <div>
        <p className="eyebrow">Screens</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">{screenCards}</div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedScreen?.title ?? "Screen detail"}</DialogTitle>
            <DialogDescription>{selectedScreen?.caption}</DialogDescription>
          </DialogHeader>
          {selectedImage ? (
            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg border bg-muted">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 768px) 92vw, 760px"
                className="object-cover object-top"
              />
            </div>
          ) : null}
          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
