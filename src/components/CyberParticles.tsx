import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function CyberParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="cyber-particles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.6 } },
          },
        },
        particles: {
          color: { value: ["#00F5FF", "#7B2EFF", "#0066FF"] },
          links: {
            enable: true,
            color: "#00F5FF",
            distance: 130,
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "out" },
          },
          number: { value: 60, density: { enable: true } },
          opacity: { value: { min: 0.2, max: 0.7 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
      }}
    />
  );
}
