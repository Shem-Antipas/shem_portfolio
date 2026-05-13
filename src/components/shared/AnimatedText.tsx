"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={cn("font-display text-[clamp(3.5rem,13vw,11rem)] font-bold leading-[0.85] tracking-normal", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="block"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
          hidden: {},
        }}
      >
        {words.map((word, index) => (
          <span className="mr-[0.18em] inline-block overflow-hidden pb-2" key={`${word}-${index}`}>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "105%", rotate: 3, opacity: 0 },
                visible: { y: 0, rotate: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </h1>
  );
}
