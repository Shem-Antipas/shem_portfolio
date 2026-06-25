"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";

export function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 96], [0, 1]);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && theme === "light" ? "/images/Portfolio-logo-black.png" : "/images/Portfolio-logo-white.png";

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-border/0 bg-background/70 backdrop-blur-xl"
      style={{ borderColor: useTransform(borderOpacity, (value) => `hsl(var(--border) / ${value})`) }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="Antipas Shem home">
          <Image
            src={logoSrc}
            alt="Antipas Shem logo"
            width={96}
            height={24}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link className="rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="/#contact">Start a Project</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background/95">
              <SheetHeader>
                <SheetTitle>Antipas Shem</SheetTitle>
              </SheetHeader>
              <nav className="mt-10 grid gap-3">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link className="rounded-md px-2 py-3 font-display text-2xl font-semibold" href={item.href}>
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <Link href="/#contact">Start a Project</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
