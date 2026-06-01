import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home", code: "00" },
  { to: "/about", label: "About", code: "01" },
  { to: "/skills", label: "Skills", code: "02" },
  { to: "/projects", label: "Projects", code: "03" },
  { to: "/experience", label: "Experience", code: "04" },
  { to: "/contact", label: "Contact", code: "05" },
] as const;

export function Nav() {
  const loc = useLocation();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-4"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between glass rounded-full px-4 sm:px-6 py-2.5">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center">
            <span className="font-display font-black text-sm text-background">A</span>
            <span className="absolute -inset-0.5 rounded-md border border-cyber-cyan/50 animate-pulse-glow" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xs tracking-[0.3em] text-cyber-cyan">
              AARI.PRANAV
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">/ secure_node_01</span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-1.5 rounded-full font-mono text-xs"
              >
                <span
                  className={`hidden md:inline mr-1 ${active ? "text-cyber-cyan" : "text-muted-foreground"}`}
                >
                  {l.code}/
                </span>
                <span
                  className={
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {l.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/40"
                    style={{ boxShadow: "0 0 18px var(--cyber-cyan)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYSTEM ONLINE</span>
        </div>
      </div>
    </motion.header>
  );
}
