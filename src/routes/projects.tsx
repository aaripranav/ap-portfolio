import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

const projects = [
  {
    code: "PRJ_01",
    title: "23andMe Breach — Technical Postmortem",
    tag: "Incident Analysis",
    desc: "Detailed report on the 2023 23andMe data breach: technical analysis, countermeasures, IR and recovery playbook.",
    tech: ["OSINT", "IR", "Reporting"],
    accent: "cyan",
  },
  {
    code: "PRJ_02",
    title: "Brute-Force Simulation — Burp Suite",
    tag: "Pentesting",
    desc: "Username enumeration and automated brute force attacks via Burp Intruder against PortSwigger labs.",
    tech: ["Burp Suite", "OWASP", "Auth"],
    accent: "purple",
  },
  {
    code: "PRJ_03",
    title: "Password Cracking — John the Ripper",
    tag: "Offensive Security",
    desc: "Dictionary and brute-force auditing to surface weak credentials and quantify password security risk.",
    tech: ["John", "Hashcat", "Wordlists"],
    accent: "blue",
  },
  {
    code: "PRJ_04",
    title: "Cyber Risk Management Framework",
    tag: "GRC",
    desc: "Risk + vulnerability assessment, security policies and business-impact analysis for a hypothetical org.",
    tech: ["ISO 27001", "NIST", "Policy"],
    accent: "cyan",
  },
  {
    code: "PRJ_05",
    title: "AI Threat Detection Lab",
    tag: "AI Security",
    desc: "Exploring ML-based anomaly detection on network traffic — feature engineering, scoring and false-positive triage.",
    tech: ["Python", "Pandas", "scikit-learn"],
    accent: "purple",
  },
  {
    code: "PRJ_06",
    title: "Packet Sniffer Visualizer",
    tag: "Network Forensics",
    desc: "Live capture analysis with focus on visualising flows, detecting odd ports and surfacing IOC patterns.",
    tech: ["Python", "Scapy", "Wireshark"],
    accent: "blue",
  },
];

function TiltCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const handle = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative glass rounded-2xl p-6 overflow-hidden hover:neon-border transition will-change-transform"
      data-cursor="hover"
    >
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transition"
        style={{ background: `var(--cyber-${p.accent})` }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between font-mono text-[11px] mb-4">
          <span className="text-cyber-cyan">{p.code}</span>
          <span className="px-2 py-0.5 rounded-full glass-strong text-muted-foreground">{p.tag}</span>
        </div>
        <h3 className="font-display text-xl leading-snug">{p.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-2 font-mono text-xs">
          <button className="px-3 py-1.5 rounded-full glass-strong hover:bg-cyber-cyan/20 transition">↗ live_demo</button>
          <button className="px-3 py-1.5 rounded-full glass-strong hover:bg-cyber-cyan/20 transition">⌘ source_code</button>
        </div>

        {/* corner brackets */}
        <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyber-cyan" />
        <span className="pointer-events-none absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyber-cyan" />
        <span className="pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyber-cyan" />
        <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyber-cyan" />
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <PageShell>
      <SectionLabel index="03" title="operations log / projects" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl sm:text-5xl font-black mb-4"
      >
        Selected <span className="gradient-text">missions</span>.
      </motion.h1>
      <p className="text-muted-foreground max-w-xl mb-10">
        Hands-on cybersecurity work — from breach analysis and offensive labs to
        risk frameworks and AI-assisted detection.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <TiltCard key={p.code} p={p} i={i} />
        ))}
      </div>
    </PageShell>
  );
}
