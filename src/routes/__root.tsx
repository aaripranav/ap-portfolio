import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

import { Nav } from "@/components/Nav";
import { CyberCursor } from "@/components/CyberCursor";
import { CyberParticles } from "@/components/CyberParticles";
import { BootSequence } from "@/components/BootSequence";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass rounded-2xl px-10 py-12 text-center max-w-md">
        <div className="font-mono text-cyber-cyan text-xs mb-2">ERR_404 // SIGNAL_LOST</div>
        <h1 className="text-7xl font-display font-black gradient-text">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This node is unreachable. Re-route to base.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-2 rounded-full glass-strong text-sm font-mono hover:neon-border transition"
        >
          ← return_home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass rounded-2xl px-10 py-12 max-w-md text-center">
        <div className="font-mono text-cyber-red text-xs mb-2">SYSTEM_FAULT</div>
        <h1 className="text-2xl font-display">Unexpected breach</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 px-5 py-2 rounded-full glass-strong text-sm font-mono hover:neon-border"
        >
          retry
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const loc = useLocation();
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("booted");
    if (seen) setBooted(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!booted && (
          <BootSequence
            onDone={() => {
              sessionStorage.setItem("booted", "1");
              setBooted(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Global ambient layers */}
      <div className="fixed inset-0 -z-20 bg-background" />
      <div className="fixed inset-0 -z-10 cyber-grid-bg opacity-40" />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyber-cyan/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-cyber-purple/15 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyber-blue/15 blur-[120px]" />
      </div>
      <CyberParticles />
      {/* Scan line */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan" />
      </div>

      <Nav />
      <CyberCursor />

      <AnimatePresence mode="wait">
        <motion.div key={loc.pathname}>
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <footer className="relative z-10 px-6 py-8 border-t border-cyber-cyan/10 mt-16">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
          <span>© {new Date().getFullYear()} AARI.PRANAV // all packets reserved</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
            uplink stable · london, uk
          </span>
        </div>
      </footer>
      <Analytics />
    </>
  );
}
