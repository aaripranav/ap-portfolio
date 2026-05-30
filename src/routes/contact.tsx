import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const socials = [
  { t: "Email", v: "aaripranav@gmail.com", href: "mailto:aaripranav@gmail.com" },
  { t: "LinkedIn", v: "in/aaripranav", href: "https://linkedin.com" },
  { t: "GitHub", v: "@aaripranav", href: "https://github.com" },
  { t: "X / Twitter", v: "@aaripranav", href: "https://x.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <PageShell>
      <SectionLabel index="06" title="open encrypted channel" />

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-black">
            Let's <span className="gradient-text">talk</span> security.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Internships, research collabs, SOC openings or just nerding out about
            packets — drop a line. All transmissions handled with care.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => { setSending(false); setSent(true); }, 1500);
            }}
            className="mt-8 glass rounded-2xl p-6 space-y-4"
          >
            <div className="font-mono text-[11px] text-cyber-cyan flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
              CHANNEL · TLS 1.3 · END-TO-END
            </div>

            {[
              { l: "operator_name", t: "text", p: "Your name" },
              { l: "return_address", t: "email", p: "you@domain.com" },
            ].map((f) => (
              <div key={f.l} className="group">
                <label className="font-mono text-[10px] text-muted-foreground tracking-wider">
                  {f.l}
                </label>
                <input
                  required
                  type={f.t}
                  placeholder={f.p}
                  className="mt-1 w-full bg-transparent border-b border-cyber-cyan/30 focus:border-cyber-cyan outline-none py-2 font-mono text-sm transition focus:[box-shadow:0_4px_24px_-8px_var(--cyber-cyan)]"
                />
              </div>
            ))}

            <div>
              <label className="font-mono text-[10px] text-muted-foreground tracking-wider">payload</label>
              <textarea
                required
                rows={5}
                placeholder="// type your message here…"
                className="mt-1 w-full bg-transparent border border-cyber-cyan/30 rounded-lg focus:border-cyber-cyan outline-none p-3 font-mono text-sm resize-none transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              disabled={sending || sent}
              className="relative w-full py-3 rounded-full font-mono text-sm font-semibold bg-cyber-cyan text-background neon-border overflow-hidden disabled:opacity-70"
            >
              {sent ? "✓ packet_delivered" : sending ? "transmitting…" : "▶ transmit_message()"}
            </motion.button>
          </form>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-cyber-purple/30 blur-3xl" />
            <div className="font-mono text-[11px] text-cyber-cyan mb-3">/network/nodes</div>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.t}>
                  <a
                    href={s.href}
                    target="_blank" rel="noreferrer"
                    className="flex items-center justify-between group p-3 rounded-xl glass-strong hover:neon-border transition"
                    data-cursor="hover"
                  >
                    <div>
                      <div className="font-mono text-[10px] text-muted-foreground">{s.t}</div>
                      <div className="font-display text-base">{s.v}</div>
                    </div>
                    <span className="text-cyber-cyan group-hover:translate-x-1 transition">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[11px] text-cyber-cyan mb-3">/location.geo</div>
            <div className="font-display text-xl">London, United Kingdom</div>
            <div className="font-mono text-xs text-muted-foreground mt-1">+44 7721 011169</div>

            {/* mini animated map / nodes */}
            <div className="mt-4 relative aspect-[4/2] rounded-lg overflow-hidden bg-cyber-cyan/5 border border-cyber-cyan/20">
              <div className="absolute inset-0 cyber-grid-bg opacity-60" />
              {[
                { x: "20%", y: "35%" }, { x: "55%", y: "60%" }, { x: "75%", y: "30%" },
                { x: "40%", y: "70%" }, { x: "85%", y: "55%" },
              ].map((n, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyber-cyan animate-pulse-glow"
                  style={{ left: n.x, top: n.y, boxShadow: "0 0 10px var(--cyber-cyan)" }}
                />
              ))}
              <div className="absolute left-[55%] top-[60%] w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyber-cyan/40 animate-ping" />
            </div>
          </div>
        </motion.aside>
      </div>
    </PageShell>
  );
}
