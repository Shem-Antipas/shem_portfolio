import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
