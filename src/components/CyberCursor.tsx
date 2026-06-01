import { useEffect, useState } from "react";

export function CyberCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [down, setDown] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const d = () => setDown(true);
    const u = () => setDown(false);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t?.closest?.("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", d);
    window.addEventListener("mouseup", u);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", d);
      window.removeEventListener("mouseup", u);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%,-50%) scale(${down ? 0.7 : hover ? 1.6 : 1})`,
          transition: "transform 120ms ease, width 200ms, height 200ms",
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-cyber-cyan/70"
          style={{ boxShadow: "0 0 20px var(--cyber-cyan), inset 0 0 12px var(--cyber-cyan)" }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%,-50%)",
          transition: "left 60ms linear, top 60ms linear",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-cyber-cyan"
          style={{ boxShadow: "0 0 8px var(--cyber-cyan)" }}
        />
      </div>
      {/* Mouse-follow ambient glow */}
      <div
        className="pointer-events-none fixed z-0 hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          width: 600,
          height: 600,
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--cyber-cyan) 14%, transparent), transparent 60%)",
          transition: "left 200ms ease-out, top 200ms ease-out",
        }}
      />
    </>
  );
}
