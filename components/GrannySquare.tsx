"use client";

import { useState } from "react";

/**
 * A crochet granny square you can click to re-work in new colours.
 * Rings are drawn outside-in, the way the real thing is made.
 */
const PALETTES = [
  ["#ffd7e4", "#f9a3c4", "#f4739b", "#fff8f3"],
  ["#ffe6ef", "#d9b8ff", "#a78bd6", "#fff8f3"],
  ["#fde7c9", "#f6b8a0", "#e8829a", "#fffaf3"],
  ["#dcefe0", "#a9d3b4", "#7bae7f", "#fffaf3"],
  ["#e6ecff", "#b8c9f5", "#8a9ee0", "#fff8fb"],
];

const RINGS = [0, 1, 2, 3];

export default function GrannySquare() {
  const [index, setIndex] = useState(0);
  const [worked, setWorked] = useState(0);
  const palette = PALETTES[index];

  function rework() {
    setIndex((current) => (current + 1) % PALETTES.length);
    setWorked((count) => count + 1);
  }

  return (
    <article className="granny-card">
      <div className="granny-head">
        <div>
          <p className="card-kicker">crochet corner</p>
          <h3>Granny square</h3>
        </div>
        <button type="button" className="granny-button" onClick={rework}>
          <span aria-hidden="true">🧶</span> re-work it
        </button>
      </div>

      <button
        type="button"
        className="granny-swatch"
        onClick={rework}
        aria-label="Change the granny square colours"
      >
        {RINGS.map((ring) => (
          <span
            key={ring}
            className="granny-ring"
            style={{
              inset: `${ring * 12}%`,
              background: palette[ring],
              transitionDelay: `${ring * 0.06}s`,
            }}
          />
        ))}
        <span className="granny-centre" style={{ background: palette[3] }}>
          ✿
        </span>
      </button>

      <p className="granny-note">
        {worked === 0
          ? "Tap it to try another colourway."
          : `${worked} colourway${worked === 1 ? "" : "s"} in — same square, new yarn.`}
      </p>
    </article>
  );
}
