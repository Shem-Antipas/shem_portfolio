"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), reduceMotion ? 200 : 3000);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[110] grid place-items-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mx-auto mb-6 h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={reduceMotion ? false : { scaleX: [0, 1, 0.35, 1] }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            <p className="font-display text-3xl font-bold">Antipas Shem</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">Portfolio Loading</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
