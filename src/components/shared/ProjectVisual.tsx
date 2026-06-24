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
      <ImageFill src={image.src} alt={image.alt} className="object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent" />
    </>
  );
}

function ScreenshotPairVisual({
  images,
  mode,
  background,
}: {
  images: Project["images"];
  mode: "card" | "detail";
  background: string;
}) {
  const [primary, secondary] = images ?? [];
  if (!primary) return <div className={cn("absolute inset-0", background)} />;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", background)}>
      <ImageFill src={primary.src} alt={primary.alt} className="object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-black/5" />
      {mode === "detail" && secondary ? (
        <div className="absolute bottom-6 right-6 w-[42%] overflow-hidden rounded-lg border border-white/20 bg-background/80 shadow-2xl backdrop-blur">
          <div className="flex gap-1 border-b border-white/10 bg-black/35 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="relative aspect-[16/10]">
            <ImageFill src={secondary.src} alt={secondary.alt} className="object-cover object-top" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function AdventVisual({ project, mode }: { project: Project; mode: "card" | "detail" }) {
  const images = project.images ?? [];
  const [featureImage, secondaryImage] = images;
  const isWebsitePreview = featureImage?.src.includes("landing");
  const frameClass =
    mode === "detail"
      ? "relative aspect-[9/16] min-w-[180px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-2xl md:min-w-[220px]"
      : "relative aspect-[9/16] min-w-[118px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-black shadow-2xl";

  if (isWebsitePreview) {
    return <ScreenshotPairVisual images={[featureImage, secondaryImage].filter(Boolean) as Project["images"]} mode={mode} background="bg-[#071156]" />;
  }

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

  if (login?.src.includes("MIFBEMS")) {
    return <ScreenshotPairVisual images={project.images} mode={mode} background="bg-[#121d20]" />;
  }

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

function KenyaAirwaysVisual({ project, mode }: { project: Project; mode: "card" | "detail" }) {
  const isBits = project.slug === "bits-my-idea-portal";
  const panels = isBits ? ["Ideas", "Initiatives", "Campaigns", "Partners"] : ["Pending", "Approved", "Oracle", "Failed"];
  const screenshots = project.images ?? [];

  if (screenshots.length > 0) {
    return <ScreenshotPairVisual images={screenshots} mode={mode} background="bg-[#101826]" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#130506] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(204,0,0,0.55),transparent_26%),radial-gradient(circle_at_75%_34%,rgba(255,255,255,0.14),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%)]" />
      <div className="absolute left-6 top-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#CC0000] text-xs font-black">KQ</span>
        <div>
          <div className="mb-2 h-2 w-28 rounded bg-white/70" />
          <div className="h-3 w-48 rounded bg-white/90" />
        </div>
      </div>
      <div className="absolute bottom-8 left-6 right-6 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-lg border border-white/15 bg-white/[0.06] p-4 backdrop-blur">
          <div className="mb-4 h-3 w-32 rounded bg-white/80" />
          <div className="grid gap-3">
            {panels.map((panel, index) => (
              <div key={panel} className="flex items-center justify-between rounded-md bg-black/25 p-3">
                <div>
                  <div className="mb-2 h-2 w-24 rounded bg-white/60" />
                  <div className="h-2 w-16 rounded bg-white/30" />
                </div>
                <span
                  className={cn(
                    "h-3 w-3 rounded-full",
                    index === 0 && "bg-amber-400",
                    index === 1 && "bg-emerald-400",
                    index === 2 && "bg-white",
                    index === 3 && "bg-red-500",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/[0.08] p-4 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-3 w-44 rounded bg-white/80" />
            <div className="rounded-full bg-[#CC0000] px-3 py-1 text-[10px] font-bold">ENTERPRISE UI</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="rounded-md bg-white/10 p-3">
                <div className="mb-4 h-2 w-14 rounded bg-white/35" />
                <div className="h-5 w-10 rounded bg-white/80" />
              </div>
            ))}
          </div>
          <div className={cn("mt-4 grid gap-2", mode === "detail" ? "grid-cols-3" : "grid-cols-2")}>
            {[0, 1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="h-8 rounded-md bg-white/10" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
    </div>
  );
}

export function ProjectVisual({ project, mode = "card" }: ProjectVisualProps) {
  const aspect = mode === "detail" ? "aspect-[16/9] rounded-lg border shadow-luxe" : "absolute inset-0";
  const customVisuals = [
    "advent-study-hub",
    "mifbedas-fisheries-data-system",
    "inkwell-creations-website",
    "denied-boarding-compensation-system",
    "bits-my-idea-portal",
  ];

  return (
    <div className={cn("relative overflow-hidden", aspect)} aria-label={`${project.title} visual preview`} role="img">
      {project.slug === "denied-boarding-compensation-system" || project.slug === "bits-my-idea-portal" ? (
        <KenyaAirwaysVisual project={project} mode={mode} />
      ) : null}
      {project.slug === "advent-study-hub" ? <AdventVisual project={project} mode={mode} /> : null}
      {project.slug === "mifbedas-fisheries-data-system" ? <MifbedasVisual project={project} mode={mode} /> : null}
      {project.slug === "inkwell-creations-website" ? <ScreenshotPairVisual images={project.images} mode={mode} background="bg-[#0d1421]" /> : null}
      {!customVisuals.includes(project.slug) ? <SingleImageVisual project={project} /> : null}
    </div>
  );
}
