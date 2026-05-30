import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(12px)", y: -24 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 pt-28 pb-24 px-4 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.main>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 font-mono text-xs">
      <span className="text-cyber-cyan">[{index}]</span>
      <span className="text-muted-foreground tracking-[0.3em] uppercase">{title}</span>
      <span className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/60 to-transparent" />
    </div>
  );
}
