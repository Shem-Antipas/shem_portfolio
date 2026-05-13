"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme !== "light";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Toggle color theme"
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative overflow-hidden"
          >
            <motion.span
              className="absolute"
              animate={reduceMotion ? false : { rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
              transition={{ duration: 0.35 }}
            >
              <Moon className="h-4 w-4" />
            </motion.span>
            <motion.span
              className="absolute"
              animate={reduceMotion ? false : { rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
              transition={{ duration: 0.35 }}
            >
              <Sun className="h-4 w-4" />
            </motion.span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Switch theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
