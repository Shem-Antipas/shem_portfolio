"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const railItems = [{ label: "Home", href: "#home" }, ...navItems];

export function SectionRail() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const observers = railItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(`#${entry.target.id}`);
          },
          { threshold: 0.32, rootMargin: "-20% 0px -40% 0px" },
        );
        observer.observe(section);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 rounded-lg border bg-background/55 p-2 shadow-lg backdrop-blur-xl xl:block"
    >
      <ul className="grid gap-1">
        {railItems.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "group flex items-center gap-2 rounded-md px-2 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )}
              >
                <span
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded-full border text-[10px] uppercase transition-colors",
                    isActive ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card",
                  )}
                >
                  {item.label.charAt(0)}
                </span>
                <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-24">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
