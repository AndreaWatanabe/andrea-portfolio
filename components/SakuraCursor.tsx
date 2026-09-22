"use client";

import { useEffect, useRef, useState } from "react";

const PETALS = [0, 72, 144, 216, 288];

/**
 * Replaces the pointer with a small crochet sakura on devices that have a
 * real mouse. Touch screens, and anyone who prefers reduced motion, keep
 * the normal cursor — and text fields always do, so typing still works.
 */
export default function SakuraCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [overLink, setOverLink] = useState(false);
  const flowerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(fine.matches && !calm.matches);
    sync();

    fine.addEventListener("change", sync);
    calm.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      calm.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-sakura-cursor");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let spin = 0;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const target = event.target as Element | null;
      setOverLink(Boolean(target?.closest?.("a, button, input, [role='button']")));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    // Trail slightly behind the pointer so it feels like it is drifting.
    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      spin += 0.35;

      if (flowerRef.current) {
        flowerRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${spin}deg)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.body.classList.remove("has-sakura-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={flowerRef}
      className={`sakura-cursor ${overLink ? "is-over" : ""} ${pressed ? "is-pressed" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="-50 -50 100 100" width="34" height="34" focusable="false">
        <defs>
          <radialGradient id="cursor-petal" cx="50%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#ffe9f1" />
            <stop offset="70%" stopColor="#ffc4da" />
            <stop offset="100%" stopColor="#f4739b" />
          </radialGradient>
        </defs>

        {PETALS.map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <path
              d="M0 -6 C 8 -16, 15 -28, 8 -37 C 4 -42, -4 -42, -8 -37 C -15 -28, -8 -16, 0 -6 Z"
              fill="url(#cursor-petal)"
              stroke="#e8629a"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeDasharray="0.5 6"
            />
          </g>
        ))}

        <circle r="6" fill="#fbd97d" stroke="#e0a92e" strokeWidth="1.4" />
      </svg>
    </div>
  );
}
