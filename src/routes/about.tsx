import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  component: About,
});

const domains = [
  { t: "Web Security", d: "OWASP Top 10, app pentesting, secure SDLC." },
  { t: "Network Security", d: "Packet analysis, firewalling, segmentation." },
  { t: "Penetration Testing", d: "Recon → exploitation → reporting." },
  { t: "Linux", d: "Hardened workstations, scripting, daemons." },
  { t: "Cloud Security", d: "IAM, posture, shared responsibility." },
  { t: "Reverse Engineering", d: "Binary triage and behaviour mapping." },
  { t: "Malware Analysis", d: "Static + dynamic, sandbox workflows." },
  { t: "OSINT", d: "Open-source intel for recon and IR." },
];

const skills = [
  { t: "Threat Analysis", v: 88 },
  { t: "Incident Response", v: 82 },
  { t: "Risk Management", v: 86 },
  { t: "Python / Tooling", v: 80 },
  { t: "Network Forensics", v: 78 },
  { t: "Vulnerability Assessment", v: 84 },
];

function About() {
  return (
    <PageShell>
      <SectionLabel index="01" title="who is operating this terminal" />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Identity card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 glass rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyber-cyan/20 blur-3xl" />
          <div className="font-mono text-[11px] text-muted-foreground">/identity.json</div>
          <div className="mt-4 flex items-start gap-4">
            <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center font-display text-3xl font-black text-background">
              AP
              <span className="absolute -inset-1 rounded-xl border border-cyber-cyan/40 animate-pulse-glow" />
            </div>
            <div>
              <h2 className="font-display text-2xl">Aari Pranav<br/>Arunachalam Prabakaran</h2>
              <p className="font-mono text-xs text-cyber-cyan mt-1">CYBER_SECURITY_OPERATOR</p>
              <p className="font-mono text-xs text-muted-foreground">London, UK · +44 7721 011169</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 font-mono text-xs">
            {[
              ["role", "MSc Cyber Security Mgmt"],
              ["org", "Ravensbourne University London"],
              ["focus", "Threat analysis · IR · Risk"],
              ["tools", "Wireshark · Burp · Metasploit · Nessus · Kali"],
              ["langs", "Python · Java · C++"],
              ["status", "open to opportunities"],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-2">
                <span className="text-cyber-cyan w-16">{k}:</span>
                <span className="text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="lg:col-span-7 space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl mb-2 text-cyber-cyan">/intro</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cybersecurity postgraduate with hands-on experience in network operations,
              system troubleshooting and security tooling. Strong foundation in threat
              analysis, incident response and risk management — combined with practical
              experience supporting secure IT environments, SOC workflows and cloud controls.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl mb-2 text-cyber-cyan">/objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              Build a career across SOC operations, vulnerability research and AI-assisted
              defense — turning curiosity into methodical, repeatable security workflows.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl mb-2 text-cyber-cyan">/mindset</h3>
            <p className="text-muted-foreground leading-relaxed">
              Methodical problem solving, attention to detail and constant learning. Every
              alert is a story waiting to be reconstructed.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills meters */}
      <div className="mt-16">
        <SectionLabel index="02" title="capability matrix" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }} viewport={{ once: true }}
              className="glass rounded-xl p-5"
            >
              <div className="flex justify-between font-mono text-xs mb-2">
                <span>{s.t}</span>
                <span className="text-cyber-cyan">{s.v}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-cyber-cyan/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                  style={{ boxShadow: "0 0 10px var(--cyber-cyan)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Domains */}
      <div className="mt-16">
        <SectionLabel index="03" title="security domains" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((d, i) => (
            <motion.div
              key={d.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }} viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 hover:neon-border transition"
            >
              <div className="font-mono text-[10px] text-cyber-cyan">0{i + 1}</div>
              <div className="font-display text-lg mt-1">{d.t}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{d.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
