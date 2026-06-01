import { useEffect, useState } from "react";

const lines = [
  "$ initializing secure_node_01 ...",
  "$ loading kernel modules: [crypto, net, fw, ids] ✓",
  "$ establishing encrypted channel TLS_1.3 ✓",
  "$ injecting holographic interface ...",
  "$ welcome, operator AARI.PRANAV",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= lines.length) {
      const t = setTimeout(onDone, 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 240 + Math.random() * 180);
    return () => clearTimeout(t);
  }, [step, onDone]);

  return (
    <div className="fixed inset-0 z-[200] bg-background flex items-center justify-center">
      <div className="absolute inset-0 cyber-grid-bg opacity-50" />
      <div className="relative font-mono text-xs sm:text-sm text-cyber-cyan max-w-xl w-full px-6">
        <div className="mb-4 text-muted-foreground">
          ┌─ secure_terminal ─────────────────────────────┐
        </div>
        {lines.slice(0, step).map((l, i) => (
          <div key={i} className="opacity-90">
            {l}
          </div>
        ))}
        {step < lines.length && (
          <div className="text-cyber-cyan">
            {lines[step]?.slice(0, Math.floor((Date.now() / 30) % lines[step].length))}
            <span className="animate-caret">▍</span>
          </div>
        )}
        <div className="mt-4 text-muted-foreground">
          └───────────────────────────────────────────────┘
        </div>
      </div>
    </div>
  );
}
