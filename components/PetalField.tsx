"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

export const PETAL_BURST_EVENT = "sakura:burst";

/** Fire a petal burst from anywhere in the app. */
export function burstPetals(amount = 22) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PETAL_BURST_EVENT, { detail: { amount } }));
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function motionAllowed() {
  return !window.matchMedia(REDUCED_MOTION).matches;
}

/** Petals never render on the server, so the first paint stays clean. */
function motionAllowedOnServer() {
  return false;
}

type Petal = {
  id: number;
  left: number;
  duration: number;
  drift: number;
  scale: number;
  sway: number;
  tone: number;
  delay: number;
};

const TONES = ["#ffd3e2", "#ffbcd4", "#f9a3c4", "#ffe6ef", "#f4b8cf"];
const MAX_PETALS = 46;

let petalId = 0;

function makePetal(delay: number): Petal {
  petalId += 1;
  return {
    id: petalId,
    left: Math.random() * 100,
    duration: 9 + Math.random() * 8,
    drift: (Math.random() - 0.5) * 42,
    scale: 0.55 + Math.random() * 0.75,
    sway: 2.2 + Math.random() * 2.4,
    tone: Math.floor(Math.random() * TONES.length),
    delay,
  };
}

export default function PetalField() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const timerRef = useRef<number | null>(null);

  const enabled = useSyncExternalStore(
    subscribeToMotionPreference,
    motionAllowed,
    motionAllowedOnServer
  );

  const add = useCallback((amount: number) => {
    setPetals((current) => {
      const room = MAX_PETALS - current.length;
      if (room <= 0) return current;

      const next = Array.from({ length: Math.min(amount, room) }, (_, index) =>
        makePetal(Math.random() * 0.5 + index * 0.04)
      );
      return [...current, ...next];
    });
  }, []);

  // Ambient drift: fills in quickly at first, then trickles. Pauses when the
  // tab is hidden so a backgrounded page isn't animating for nobody.
  useEffect(() => {
    if (!enabled) return;

    let ticks = 0;

    const tick = () => {
      const seeding = ticks < 8;
      if (!document.hidden) add(seeding ? 2 : 1);
      ticks += 1;
      timerRef.current = window.setTimeout(
        tick,
        seeding ? 260 : 1500 + Math.random() * 1500
      );
    };

    timerRef.current = window.setTimeout(tick, 200);

    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      setPetals([]);
    };
  }, [enabled, add]);

  // Bursts from the "shake the tree" button and the solved-sudoku celebration.
  useEffect(() => {
    if (!enabled) return;

    const onBurst = (event: Event) => {
      const amount = (event as CustomEvent<{ amount?: number }>).detail?.amount ?? 22;
      add(amount);
    };

    window.addEventListener(PETAL_BURST_EVENT, onBurst);
    return () => window.removeEventListener(PETAL_BURST_EVENT, onBurst);
  }, [enabled, add]);

  const retire = useCallback((id: number) => {
    setPetals((current) => current.filter((petal) => petal.id !== id));
  }, []);

  if (!enabled) return null;

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          onAnimationEnd={() => retire(petal.id)}
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            ["--petal-drift" as string]: `${petal.drift}vw`,
          }}
        >
          <span
            className="petal-inner"
            style={{
              ["--petal-scale" as string]: petal.scale,
              animationDuration: `${petal.sway}s`,
            }}
          >
            <svg viewBox="0 0 32 32" width="18" height="18" focusable="false">
              <path
                d="M16 1c5 5.4 8.6 10.2 8.6 15.6C24.6 24 20.9 29 16 31c-4.9-2-8.6-7-8.6-14.4C7.4 11.2 11 6.4 16 1Z"
                fill={TONES[petal.tone]}
              />
              <path
                d="M16 31c-1.7-6.4-1.7-13.1 0-30"
                stroke="rgba(214, 106, 148, 0.35)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
