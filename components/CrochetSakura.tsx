"use client";

import { useState } from "react";
import { burstPetals } from "./PetalField";

/** Five petals, evenly spaced around the centre. */
const PETALS = [0, 1, 2, 3, 4];

/** French knots clustered in the middle, worked last. */
const KNOTS = [
  { x: 0, y: -8.5, r: 4.6 },
  { x: 8.1, y: -2.6, r: 4.6 },
  { x: 5, y: 7, r: 4.6 },
  { x: -5, y: 7, r: 4.6 },
  { x: -8.1, y: -2.6, r: 4.6 },
  { x: 0, y: 0.6, r: 5.4 },
];

/**
 * A sakura flower worked in crochet: each petal is outlined in chain stitch
 * and blooms in sequence on load. Nudging it sheds petals down the page.
 */
export default function CrochetSakura() {
  const [nudges, setNudges] = useState(0);

  function shake() {
    setNudges((count) => count + 1);
    burstPetals(24);
  }

  return (
    <button
      type="button"
      className="crochet-sakura"
      onClick={shake}
      aria-label="Shake the blossom and let petals fall"
    >
      <svg viewBox="-100 -100 200 200" role="presentation" focusable="false">
        <defs>
          {/* One petal, reused five times around the centre. */}
          <path
            id="sakura-petal"
            d="M0 -14
               C 16 -34, 30 -58, 16 -78
               C 9 -88, -9 -88, -16 -78
               C -30 -58, -16 -34, 0 -14 Z"
          />
          <radialGradient id="petal-fill" cx="50%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#ffe9f1" />
            <stop offset="60%" stopColor="#ffc4da" />
            <stop offset="100%" stopColor="#f9a3c4" />
          </radialGradient>
        </defs>

        <g className="sakura-bloom">
          {/* Each petal is placed with the SVG transform attribute, which
              rotates about user-space (0,0) — the centre of the flower.
              CSS transform-origin does not resolve dependably on SVG groups. */}
          {PETALS.map((index) => (
            <g key={index} transform={`rotate(${index * 72})`}>
            <g
              className="sakura-petal"
              style={{ animationDelay: `${0.25 + index * 0.16}s` }}
            >
              <use href="#sakura-petal" fill="url(#petal-fill)" />
              {/* The chain-stitch outline. */}
              <use
                href="#sakura-petal"
                fill="none"
                stroke="#e8629a"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeDasharray="1 9"
                opacity="0.85"
              />
              {/* A second, offset pass reads as the loops of the chain. */}
              <use
                href="#sakura-petal"
                fill="none"
                stroke="#f9a3c4"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeDasharray="0.5 9"
                strokeDashoffset="4.5"
                opacity="0.55"
              />
              {/* The little notch a real sakura petal has. */}
              <path
                d="M0 -76 L0 -66"
                stroke="#e8629a"
                strokeWidth="2.4"
                strokeLinecap="round"
                opacity="0.5"
              />
            </g>
            </g>
          ))}

          <g className="sakura-centre">
            {KNOTS.map((knot, index) => (
              <circle
                key={index}
                cx={knot.x}
                cy={knot.y}
                r={knot.r}
                fill={index === KNOTS.length - 1 ? "#f7c948" : "#fbd97d"}
                stroke="#e0a92e"
                strokeWidth="1"
              />
            ))}
          </g>
        </g>
      </svg>

      <span className="sakura-hint" aria-hidden="true">
        {nudges === 0 ? "give it a shake" : "again!"}
      </span>
    </button>
  );
}
