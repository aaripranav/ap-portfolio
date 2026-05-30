import { useEffect, useState } from "react";

export function TypingText({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = phrases[i % phrases.length];
    const speed = del ? 35 : 70;
    const t = setTimeout(() => {
      if (!del) {
        const next = cur.slice(0, text.length + 1);
        setText(next);
        if (next === cur) setTimeout(() => setDel(true), 1400);
      } else {
        const next = cur.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, phrases]);

  return (
    <span className={className}>
      <span className="gradient-text">{text}</span>
      <span className="animate-caret text-cyber-cyan">▍</span>
    </span>
  );
}
