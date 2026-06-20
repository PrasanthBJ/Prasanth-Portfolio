import { useState, useEffect } from "react";

export function useTypewriter(lines, speed = 28) {
  const [displayed, setDisplayed] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const out = [""];
    setDisplayed([""]);

    function tick() {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }
      const currentLine = lines[lineIdx];
      if (charIdx < currentLine.length) {
        out[lineIdx] = currentLine.slice(0, charIdx + 1);
        setDisplayed([...out]);
        charIdx++;
        setTimeout(tick, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        out.push("");
        setTimeout(tick, 220);
      }
    }
    const t = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  return { displayed, done };
}
