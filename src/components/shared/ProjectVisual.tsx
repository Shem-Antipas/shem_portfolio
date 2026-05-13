import Image from "next/image";

import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  project: Project;
  mode?: "card" | "detail";
}

function ImageFill({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 92vw, (max-width: 1200px) 48vw, 760px"
      className={cn("object-cover", className)}
    />
  );
}

function GenericVisual({ project }: { project: Project }) {
  return (
    <>
      <div className={cn("absolute inset-0 bg-gradient-to-br", project.gradient)} />
      <div className="absolute inset-0 soft-grid opacity-30" />
      <div className="noise-layer absolute inset-0" />
    </>
  );
}

function SingleImageVisual({ project }: { project: Project }) {
  const image = project.images?.[0];
  if (!image) return <GenericVisual project={project} />;

  return (
    <>
      <ImageFill src={image.src} alt={image.alt} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-black/5" />
    </>
  );
}

function AdventVisual({ project, mode }: { project: Project; mode: "card" | "detail" }) {
  const images = project.images ?? [];
  const frameClass =
    mode === "detail"
      ? "relative aspect-[9/16] min-w-[180px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-2xl md:min-w-[220px]"
      : "relative aspect-[9/16] min-w-[118px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-black shadow-2xl";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0d121b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(135,43,63,0.55),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(13,44,98,0.65),transparent_34%)]" />
      <div className="absolute inset-x-6 top-6">
        <div className="mb-3 h-3 w-28 rounded bg-white/80" />
        <div className="h-6 w-64 rounded bg-white/90" />
      </div>
      <div className={cn("absolute flex gap-5", mode === "detail" ? "bottom-8 left-8 right-8" : "bottom-4 left-5 right-5")}>
        {images.slice(0, mode === "detail" ? 4 : 3).map((image, index) => (
          <div
            key={image.src}
            className={cn(frameClass, index === 0 && "z-10", index === 1 && "translate-y-7", index === 2 && "-translate-y-3")}
          >
            <ImageFill src={image.src} alt={image.alt} className="object-cover object-top" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/10" />
    </div>
  );
}

function MifbedasVisual({ project, mode }: { project: Project; mode: "card" | "detail" }) {
  const [login, dashboard, lakefront] = project.images ?? [];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#121d20] text-[#e8f0f0]">
      {login ? <ImageFill src={login.src} alt={login.alt} className="scale-105 opacity-45" /> : null}
      <div className="absolute inset-0 bg-[#10191d]/72" />
      <div className="absolute inset-y-0 left-0 w-[18%] border-r border-white/10 bg-[#172226]/95 p-3">
        <div className="mb-7 flex gap-2">
          <div className="h-8 w-8 rounded-full bg-[conic-gradient(from_30deg,#e9d65d,#fff,#1aa093,#e9d65d)]" />
          <div>
            <div className="mb-2 h-2 w-16 rounded bg-[#20b2a6]" />
            <div className="h-3 w-28 rounded bg-white/80" />
          </div>
        </div>
        {["Dashboard", "Farmers", "Licenses", "Projects", "Analytics"].map((item, index) => (
          <div key={item} className={cn("mb-3 h-8 rounded-md", index === 0 ? "bg-[#219c93]" : "bg-white/5")} />
        ))}
      </div>
      <div className="absolute left-[21%] right-4 top-6">
        <div className="mb-5 grid grid-cols-5 gap-3">
          {["1086", "1", "688,455", "KES 10,500", "62,550,700"].map((metric) => (
            <div key={metric} className="rounded-lg border border-white/15 bg-white/[0.05] p-4 backdrop-blur">
              <div className="mb-4 h-2 w-20 rounded bg-white/35" />
              <div className="h-4 w-16 rounded bg-white/90" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[lakefront, dashboard, login].filter(Boolean).map((image, index) => (
            <div key={image!.src} className="overflow-hidden rounded-lg border border-white/15 bg-white/[0.04]">
              <div className={cn("relative", mode === "detail" ? "h-48" : "h-28")}>
                <ImageFill src={image!.src} alt={image!.alt} />
              </div>
              <div className="p-3">
                <div className="mb-3 h-3 w-32 rounded bg-white/90" />
                {[0, 1, 2].map((row) => (
                  <div key={row} className="mb-2 h-2 w-full rounded bg-white/35" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
    </div>
  );
}

function InkwellVisual({ project }: { project: Project }) {
  const [og, logo] = project.images ?? [];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f5f7fb] text-[#080f1d]">
      {og ? <ImageFill src={og.src} alt={og.alt} className="object-cover" /> : null}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute left-1/2 top-10 z-10 w-44 -translate-x-1/2 rounded-md bg-white/95 p-3 shadow-xl">
        {logo ? (
          <div className="relative h-12">
            <Image src={logo.src} alt={logo.alt} fill sizes="180px" className="object-contain" />
          </div>
        ) : null}
      </div>
      <div className="absolute inset-x-8 bottom-10 text-center text-white">
        <div className="mx-auto mb-4 h-7 max-w-[560px] rounded bg-white/90" />
        <div className="mx-auto h-7 max-w-[430px] rounded bg-white/80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
    </div>
  );
}

export function ProjectVisual({ project, mode = "card" }: ProjectVisualProps) {
  const aspect = mode === "detail" ? "aspect-[16/9] rounded-lg border shadow-luxe" : "absolute inset-0";

  return (
    <div className={cn("relative overflow-hidden", aspect)} aria-label={`${project.title} visual preview`} role="img">
      {project.slug === "advent-study-hub" ? <AdventVisual project={project} mode={mode} /> : null}
      {project.slug === "mifbedas-fisheries-data-system" ? <MifbedasVisual project={project} mode={mode} /> : null}
      {project.slug === "inkwell-creations-digital-studio" ? <InkwellVisual project={project} /> : null}
      {!["advent-study-hub", "mifbedas-fisheries-data-system", "inkwell-creations-digital-studio"].includes(project.slug) ? (
        <SingleImageVisual project={project} />
      ) : null}
    </div>
  );
}
