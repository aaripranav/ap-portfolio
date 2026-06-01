import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

const timeline = [
  {
    when: "Sep 2024 — Sep 2026",
    role: "MSc Cyber Security Management",
    org: "Ravensbourne University · London, UK",
    points: [
      "Cyber Security Principles, Risk Management, Strategic Security Mgmt",
      "Research Methods, Project Management, Financial Mgmt for Cyber",
      "Real-world breach studies and policy design",
    ],
    tag: "EDU",
  },
  {
    when: "Aug 2023 — 2025",
    role: "Network Technician",
    org: "Plotel Solutions · Chennai, India",
    points: [
      "Configured, maintained and troubleshot network systems with minimal downtime",
      "Diagnosed network issues and improved operational efficiency",
      "Deployed updates, supported hardware upgrades, hardened systems",
      "Cross-team collaboration with detailed documentation",
    ],
    tag: "WORK",
  },
  {
    when: "Sept 2020 — 2023",
    role: "B.Com (Information System Management)",
    org: "SRM Institute of Science & Technology · Chennai, India",
    points: ["First Class with Distinction", "DBMS, Java, Python, MIS, E-Business"],
    tag: "EDU",
  },
];

const certs = [
  {
    t: "Cyber Security Professional Plus (CSPP)",
    by: "Datamites & Skilllogic — Aug 2025",
    focus:
      "Ethical hacking, network & system security, vulnerability assessment, malware & wireless threats, cryptography, AI security, IR, cyber laws & ethics.",
  },
  {
    t: "TryHackMe — Active Learner",
    by: "Hands-on labs",
    focus: "Practical pentesting paths, web exploitation, blue-team exercises.",
  },
  {
    t: "Hack The Box — Operator",
    by: "Active Boxes",
    focus: "Real-world style machines and CTF problem solving.",
  },
];

function Experience() {
  return (
    <PageShell>
      <SectionLabel index="04" title="ops timeline / clearance log" />

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-cyan/40 to-transparent" />
        <div className="space-y-10">
          {timeline.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative grid sm:grid-cols-2 gap-6 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                <div className="font-mono text-xs text-cyber-cyan">{e.when}</div>
                <div className="font-display text-xl mt-1">{e.role}</div>
                <div className="text-sm text-muted-foreground">{e.org}</div>
              </div>
              <div className={`pl-12 sm:pl-12 ${i % 2 ? "sm:pl-0 sm:pr-12 sm:text-right" : ""}`}>
                <div className="glass rounded-xl p-4">
                  <div className="font-mono text-[10px] text-cyber-purple mb-2">[{e.tag}]</div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-cyber-cyan">›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1 w-3 h-3 rounded-full bg-cyber-cyan animate-pulse"
                style={{ boxShadow: "0 0 14px var(--cyber-cyan)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionLabel index="05" title="certifications / clearances" />

        {/* Radar */}
        <div className="relative grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1 relative aspect-square rounded-2xl glass overflow-hidden flex items-center justify-center">
            <div className="absolute inset-6 rounded-full border border-cyber-cyan/30" />
            <div className="absolute inset-12 rounded-full border border-cyber-cyan/20" />
            <div className="absolute inset-20 rounded-full border border-cyber-cyan/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-1/2 h-1/2 origin-center"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, var(--cyber-cyan) 30deg, transparent 60deg)",
                  borderRadius: "50%",
                  animation: "spin 4s linear infinite",
                  filter: "blur(2px)",
                }}
              />
            </div>
            <div className="relative font-mono text-[11px] text-cyber-cyan text-center">
              <div>SCANNING</div>
              <div className="text-muted-foreground">no threats detected</div>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 flex gap-4 items-start hover:neon-border transition"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center font-display font-black text-background">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg">{c.t}</div>
                  <div className="font-mono text-[11px] text-cyber-cyan">{c.by}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.focus}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
