"use client";

import { useCallback, useMemo, useState } from "react";
import Reveal from "./Reveal";
import GrannySquare from "./GrannySquare";
import { burstPetals } from "./PetalField";
import { puzzleSolution, puzzleStart } from "@/data/content";

/** Indexes that clash with another filled cell in the same row, column, or box. */
function findConflicts(values: (number | null)[]) {
  const conflicts = new Set<number>();

  const scan = (group: number[]) => {
    const seen = new Map<number, number>();
    group.forEach((index) => {
      const value = values[index];
      if (value === null) return;
      const previous = seen.get(value);
      if (previous !== undefined) {
        conflicts.add(previous);
        conflicts.add(index);
      } else {
        seen.set(value, index);
      }
    });
  };

  for (let unit = 0; unit < 9; unit += 1) {
    scan(Array.from({ length: 9 }, (_, i) => unit * 9 + i));
    scan(Array.from({ length: 9 }, (_, i) => i * 9 + unit));

    const boxRow = Math.floor(unit / 3) * 3;
    const boxCol = (unit % 3) * 3;
    scan(
      Array.from({ length: 9 }, (_, i) => {
        const row = boxRow + Math.floor(i / 3);
        const col = boxCol + (i % 3);
        return row * 9 + col;
      })
    );
  }

  return conflicts;
}

function Sudoku() {
  const [values, setValues] = useState<(number | null)[]>(puzzleStart);
  const [message, setMessage] = useState("");
  const [solved, setSolved] = useState(false);
  const [focused, setFocused] = useState<number | null>(null);

  const conflicts = useMemo(() => findConflicts(values), [values]);

  const celebrate = useCallback(() => {
    setSolved(true);
    setMessage("You solved it — have some petals ✿");
    burstPetals(40);
  }, []);

  function updateCell(index: number, raw: string) {
    if (puzzleStart[index] !== null || solved) return;

    const digit = raw.replace(/[^1-9]/g, "").slice(-1);
    const next = [...values];
    next[index] = digit === "" ? null : Number(digit);

    setValues(next);
    setMessage("");

    if (next.every((value, i) => value === puzzleSolution[i])) celebrate();
  }

  function check() {
    if (values.some((value) => value === null)) {
      setMessage("Not done yet — keep going.");
      return;
    }
    if (values.every((value, index) => value === puzzleSolution[index])) {
      celebrate();
      return;
    }
    setMessage("Something is off — try again.");
  }

  function hint() {
    if (solved) return;

    const open = values
      .map((value, index) => ({ value, index }))
      .filter(
        ({ value, index }) =>
          puzzleStart[index] === null && value !== puzzleSolution[index]
      );

    if (open.length === 0) {
      setMessage("Nothing left to reveal.");
      return;
    }

    const pick = open[Math.floor(Math.random() * open.length)];
    const next = [...values];
    next[pick.index] = puzzleSolution[pick.index];
    setValues(next);

    if (next.every((value, i) => value === puzzleSolution[i])) {
      celebrate();
      return;
    }
    setMessage("One petal of help ✿");
  }

  function reset() {
    setValues(puzzleStart);
    setMessage("");
    setSolved(false);
  }

  const focusedRow = focused === null ? -1 : Math.floor(focused / 9);
  const focusedCol = focused === null ? -1 : focused % 9;

  return (
    <article className={`sudoku-card ${solved ? "is-solved" : ""}`}>
      <div className="sudoku-top">
        <div>
          <p className="card-kicker">logic corner</p>
          <h3>Sudoku</h3>
        </div>

        <div className="sudoku-actions">
          <button type="button" onClick={check}>
            check
          </button>
          <button type="button" onClick={hint}>
            hint
          </button>
          <button type="button" onClick={reset}>
            reset
          </button>
        </div>
      </div>

      <div className="sudoku-grid">
        {values.map((value, index) => {
          const given = puzzleStart[index] !== null;
          const row = Math.floor(index / 9);
          const col = index % 9;
          const related = row === focusedRow || col === focusedCol;

          return (
            <input
              key={index}
              value={value ?? ""}
              readOnly={given || solved}
              inputMode="numeric"
              aria-label={`Row ${row + 1}, column ${col + 1}`}
              className={[
                given ? "is-given" : "",
                conflicts.has(index) ? "is-conflict" : "",
                related && !given ? "is-related" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onFocus={() => setFocused(index)}
              onBlur={() => setFocused(null)}
              onChange={(event) => updateCell(index, event.target.value)}
            />
          );
        })}
      </div>

      <p className={`sudoku-message ${message ? "is-shown" : ""}`} role="status">
        {message || " "}
      </p>
    </article>
  );
}

export default function Playground() {
  return (
    <div className="playground-layout">
      <Reveal>
        <Sudoku />
      </Reveal>
      <Reveal delay={0.1}>
        <GrannySquare />
      </Reveal>
    </div>
  );
}
