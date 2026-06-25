"use client";

import Link from "next/link";
import { Dribbble, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { navItems } from "@/lib/data";

const socialIcons = [
  { label: "Behance", href: "https://www.behance.net/antipasshem", icon: ExternalLink },
  { label: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antipas-shem-a421a81a2/", icon: Linkedin },
  { label: "Twitter/X", href: "https://x.com", icon: Twitter },
  { label: "GitHub", href: "https://github.com/Shem-Antipas", icon: Github },
];

export function Footer() {
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/60">
      <div className="container py-10">
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="origin-left"
        >
          <Separator className="mb-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div>
            <p className="font-display text-xl font-bold">Antipas Shem</p>
            <p className="mt-1 text-sm text-muted-foreground">Copyright {currentYear} Antipas Shem. Designed & built by me.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Designed by{' '}
              <Link href="https://inkwell-creations.vercel.app/" target="_blank" rel="noreferrer" className="text-primary transition-colors hover:underline">
                Inkwell Creations
              </Link>
              .
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 md:justify-end">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-md border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
