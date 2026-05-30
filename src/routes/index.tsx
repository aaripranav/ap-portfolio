import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroScene } from "@/components/HeroScene";
import { TypingText } from "@/components/TypingText";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aari Pranav — Cyber Defense Operator" },
      { name: "description", content: "MSc Cyber Security student in London. Ethical hacker, security researcher and full-stack developer." },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "03+", v: "years in IT/networks" },
  { k: "12+", v: "security projects" },
  { k: "MSc", v: "cyber security mgmt" },
  { k: "24/7", v: "threat awareness" },
];

function Home() {
  return (
    <PageShell>
      <section className="relative min-h-[88vh] grid lg:grid-cols-12 gap-8 items-center">
        {/* 3D scene */}
        <div className="absolute inset-0 lg:relative lg:col-span-5 lg:order-2 h-[60vh] lg:h-[70vh] -z-10 lg:z-0 opacity-70 lg:opacity-100">
          <div className="absolute inset-0 radial-mask">
            <HeroScene />
          </div>
          <div className="pointer-events-none absolute inset-6 rounded-full border border-cyber-cyan/15 animate-pulse-glow" />
        </div>

        <div className="lg:col-span-7 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6 font-mono text-[11px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-muted-foreground">node://aari.pranav · status:</span>
            <span className="text-cyber-cyan">operational</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
          >
            <span className="block text-foreground">AARI</span>
            <span className="block gradient-text text-glow-cyan">PRANAV</span>
            <span className="block text-foreground/70 text-3xl sm:text-4xl lg:text-5xl mt-2">
              defends the digital frontier.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 font-mono text-base sm:text-lg text-muted-foreground"
          >
            <span className="text-cyber-cyan">$&gt;</span>{" "}
            <TypingText
              phrases={[
                "Cyber Security Student",
                "Ethical Hacker",
                "Security Researcher",
                "Penetration Tester",
                "Full Stack Developer",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            MSc Cyber Security Management at Ravensbourne University London. Building
            threat-aware systems, dissecting real-world breaches and writing tooling that
            keeps networks honest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="group relative px-6 py-3 rounded-full bg-cyber-cyan text-background font-mono text-sm font-semibold neon-border overflow-hidden"
            >
              <span className="relative z-10">view_projects()</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full glass font-mono text-sm hover:neon-border transition"
            >
              ./contact_me
            </Link>
            <a
              href="mailto:aaripranav@gmail.com?subject=Resume%20request"
              className="px-6 py-3 rounded-full glass font-mono text-sm hover:neon-border transition"
            >
              download_resume.pdf
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {stats.map((s) => (
              <div key={s.v} className="glass rounded-xl p-4">
                <div className="font-display text-2xl text-cyber-cyan text-glow-cyan">{s.k}</div>
                <div className="font-mono text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee skill rail */}
      <section aria-hidden className="relative mt-20 overflow-hidden border-y border-cyber-cyan/10 py-4">
        <motion.div
          className="flex gap-12 whitespace-nowrap font-mono text-sm text-muted-foreground"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "WIRESHARK","BURP SUITE","METASPLOIT","NESSUS","KALI LINUX","PYTHON",
                "OWASP","NMAP","JOHN THE RIPPER","INCIDENT RESPONSE","RISK MGMT",
                "AI SECURITY","SOC OPS","NETWORK FORENSICS",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="text-cyber-cyan">◆</span>{t}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>
    </PageShell>
  );
}
