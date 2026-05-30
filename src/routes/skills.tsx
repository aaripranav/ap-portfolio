import { createFileRoute } from "@tanstack/react-router";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { PageShell, SectionLabel } from "@/components/PageShell";
import { Shield, Scale, Briefcase, Search } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Aari Pranav" },
      { name: "description", content: "Strategic Governance & Risk and Operational & Project Execution pillars." },
    ],
  }),
  component: Skills,
});

const pillars = [
  {
    num: "01",
    title: "Strategic Governance & Risk",
    color: "cyan",
    icon: Shield,
    modules: [
      {
        name: "Cyber Security Principles",
        desc: "Mastering core defense concepts and information security architectures.",
        tags: ["Defense-in-Depth", "CIA Triad", "Zero Trust", "Security Architecture"],
      },
      {
        name: "Cyber Security Risk Management",
        desc: "Assessing enterprise vulnerabilities and aligning threat mitigation with compliance frameworks.",
        tags: ["Threat Modeling", "NIST / ISO 27001", "Risk Assessment", "Compliance"],
      },
      {
        name: "Strategic Cyber Security Management",
        desc: "Building corporate security strategies, incident response plans, and business continuity workflows.",
        tags: ["CISO Strategy", "Incident Response", "BCP / DRP", "GRC"],
      },
    ],
  },
  {
    num: "02",
    title: "Operational & Project Execution",
    color: "purple",
    icon: Briefcase,
    modules: [
      {
        name: "Principles of Project Management",
        desc: "Leading agile or structured technical projects using framework methodologies.",
        tags: ["Agile / Scrum", "Waterfall", "Stakeholder Mgmt", "Delivery"],
      },
      {
        name: "Financial Management for Cybersecurity",
        desc: "Justifying security budgets, evaluating ROI, and managing resource allocations for risk defense.",
        tags: ["Security Budgeting", "ROI Analysis", "TCO", "Resource Planning"],
      },
      {
        name: "Research Methods and Critical Thinking",
        desc: "Solving complex security problems through structured, analytical research methodologies.",
        tags: ["Threat Intel", "Root-Cause Analysis", "Academic Research", "OSINT"],
      },
    ],
  },
];

function Spinner({ shape }: { shape: "ico" | "octa" | "knot" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.4;
      ref.current.rotation.y += dt * 0.6;
    }
  });
  const mat = (
    <meshStandardMaterial color="#00F5FF" emissive="#7B2EFF" emissiveIntensity={0.6} wireframe />
  );
  return (
    <Float floatIntensity={1} rotationIntensity={0.5}>
      {shape === "ico" && <Icosahedron ref={ref} args={[1, 0]}>{mat}</Icosahedron>}
      {shape === "octa" && <Octahedron ref={ref} args={[1, 0]}>{mat}</Octahedron>}
      {shape === "knot" && <TorusKnot ref={ref} args={[0.8, 0.22, 80, 16]}>{mat}</TorusKnot>}
    </Float>
  );
}

function MiniScene({ shape }: { shape: "ico" | "octa" | "knot" }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3.2] }} className="!absolute inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} color="#00F5FF" intensity={1.5} />
        <pointLight position={[-3, -3, -2]} color="#7B2EFF" intensity={1.2} />
        <Spinner shape={shape} />
      </Suspense>
    </Canvas>
  );
}

function SkillBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  const barColor = color === "cyan" ? "var(--cyber-cyan)" : "var(--cyber-purple)";
  return (
    <div className="mb-3">
      <div className="flex justify-between font-mono text-[11px] mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span style={{ color: barColor }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: barColor }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <PageShell>
      <SectionLabel index="02" title="dashboard / capability pillars" />

      {/* 3D feature row */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {(["ico", "octa", "knot"] as const).map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative glass rounded-2xl h-44 overflow-hidden"
          >
            <MiniScene shape={s} />
            <div className="absolute bottom-3 left-4 font-mono text-[11px] text-cyber-cyan">
              CORE_MODULE_0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pillars */}
      <div className="space-y-16">
        {pillars.map((pillar, pi) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pillar header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center"
                style={{
                  borderColor:
                    pillar.color === "cyan"
                      ? "color-mix(in oklab, var(--cyber-cyan) 30%, transparent)"
                      : "color-mix(in oklab, var(--cyber-purple) 30%, transparent)",
                }}
              >
                <pillar.icon
                  size={22}
                  style={{
                    color: pillar.color === "cyan" ? "var(--cyber-cyan)" : "var(--cyber-purple)",
                  }}
                />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground mb-0.5">
                  PILLAR {pillar.num}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl gradient-text">
                  {pillar.title}
                </h2>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/30 to-transparent ml-4" />
            </div>

            {/* Modules grid */}
            <div className="grid lg:grid-cols-3 gap-5">
              {pillar.modules.map((mod, mi) => (
                <motion.div
                  key={mod.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: mi * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="glass rounded-2xl p-6 group relative overflow-hidden"
                >
                  <div
                    className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition duration-700"
                    style={{
                      background:
                        pillar.color === "cyan"
                          ? "var(--cyber-cyan)"
                          : "var(--cyber-purple)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background:
                            pillar.color === "cyan"
                              ? "color-mix(in oklab, var(--cyber-cyan) 15%, transparent)"
                              : "color-mix(in oklab, var(--cyber-purple) 15%, transparent)",
                        }}
                      >
                        <span
                          className="font-mono text-xs font-bold"
                          style={{
                            color:
                              pillar.color === "cyan"
                                ? "var(--cyber-cyan)"
                                : "var(--cyber-purple)",
                          }}
                        >
                          {pillar.num}.{mi + 1}
                        </span>
                      </div>
                      <Scale size={14} className="text-muted-foreground opacity-40" />
                    </div>
                    <h3 className="font-display text-lg mb-2">{mod.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {mod.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mod.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full font-mono text-[10px] border"
                          style={{
                            borderColor:
                              pillar.color === "cyan"
                                ? "color-mix(in oklab, var(--cyber-cyan) 25%, transparent)"
                                : "color-mix(in oklab, var(--cyber-purple) 25%, transparent)",
                            color:
                              pillar.color === "cyan"
                                ? "var(--cyber-cyan)"
                                : "var(--cyber-purple)",
                            background:
                              pillar.color === "cyan"
                                ? "color-mix(in oklab, var(--cyber-cyan) 8%, transparent)"
                                : "color-mix(in oklab, var(--cyber-purple) 8%, transparent)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Competency bars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20 glass rounded-2xl p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Search size={16} className="text-cyber-cyan" />
          <h3 className="font-display text-lg">Competency Matrix</h3>
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/30 to-transparent" />
        </div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
          <SkillBar label="Governance & Risk" pct={92} color="cyan" />
          <SkillBar label="Project Management" pct={85} color="purple" />
          <SkillBar label="Strategic Planning" pct={88} color="cyan" />
          <SkillBar label="Financial Analysis" pct={78} color="purple" />
          <SkillBar label="Incident Response" pct={90} color="cyan" />
          <SkillBar label="Research & Analysis" pct={87} color="purple" />
        </div>
      </motion.div>
    </PageShell>
  );
}
