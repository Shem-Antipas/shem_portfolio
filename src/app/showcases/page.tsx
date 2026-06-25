import { Work } from "@/components/sections/Work";

export default function ShowcasesPage() {
  return (
    <main className="pt-24">
      <section className="section-shell mb-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="backdrop-label" data-backdrop="Showcases">
              Showcases
            </p>
            <h1 className="editorial-heading mt-4">A polished selection of UX, product, and brand work.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Browse strategic case studies from enterprise workflows, product launches, and identity-led campaigns. Each project is selected for the clarity of its challenge, the craft of its execution, and the strength of its outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell mb-16">
        <div className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-luxe backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Technologies & Tools</p>
          <div className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Design & Prototyping</p>
              <p>Sketch, Figma, Adobe Creative Suite</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Collaboration & Planning</p>
              <p>Miro, Azure Boards</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Analytics</p>
              <p>Google Analytics</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Web & App Frameworks</p>
              <p>Next.js, React, Tailwind CSS, Flutter</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <Work />
      </section>
    </main>
  );
}
