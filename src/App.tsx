import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { QUESTIONS, WEEKS, type Question } from "./questions";

const ALL_WEEKS = WEEKS.map((w) => w.week);
const STORAGE_KEY = "mlda-weeks-v1";

function Md({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {children}
    </ReactMarkdown>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadWeeks(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as number[];
      const valid = parsed.filter((w) => ALL_WEEKS.includes(w));
      if (valid.length) return valid;
    }
  } catch {
    /* ignore */
  }
  return ALL_WEEKS;
}

export default function App() {
  const [selected, setSelected] = useState<number[]>(loadWeeks);
  const [deckSeed, setDeckSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExplain, setShowExplain] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  }, [selected]);

  const allSelected = selected.length === ALL_WEEKS.length;

  const deck: Question[] = useMemo(
    () => shuffle(QUESTIONS.filter((q) => selected.includes(q.week))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected, deckSeed]
  );

  useEffect(() => {
    setIndex(0);
    setShowAnswer(false);
    setShowExplain(false);
  }, [deck]);

  const question = deck[index];

  const toggleWeek = (week: number) => {
    setSelected((prev) => {
      if (prev.length === ALL_WEEKS.length) return [week]; // from "all" -> just this week
      const next = prev.includes(week)
        ? prev.filter((w) => w !== week)
        : [...prev, week].sort((a, b) => a - b);
      return next.length ? next : ALL_WEEKS;
    });
  };

  const go = (delta: number) => {
    const next = index + delta;
    setShowAnswer(false);
    setShowExplain(false);
    if (next >= deck.length) {
      setDeckSeed((s) => s + 1); // reshuffle, start again
    } else if (next >= 0) {
      setIndex(next);
    }
    window.scrollTo({ top: 0 });
  };

  const counts = useMemo(() => {
    const c: Record<number, number> = {};
    QUESTIONS.forEach((q) => (c[q.week] = (c[q.week] ?? 0) + 1));
    return c;
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>MLDA Revision</h1>
        <div className="weeks" role="group" aria-label="Weeks to include">
          <button
            className={"chip chip-all" + (allSelected ? " on" : "")}
            onClick={() => setSelected(ALL_WEEKS)}
          >
            All
          </button>
          {WEEKS.map((w) => (
            <button
              key={w.week}
              className={
                "chip" + (!allSelected && selected.includes(w.week) ? " on" : "")
              }
              onClick={() => toggleWeek(w.week)}
              title={`${w.title} (${counts[w.week] ?? 0} questions)`}
              aria-pressed={selected.includes(w.week)}
            >
              {w.week}
            </button>
          ))}
        </div>
        <p className="hint">
          {allSelected
            ? "All weeks"
            : "Weeks " + selected.join(", ")}{" "}
          · {deck.length} question{deck.length === 1 ? "" : "s"}
        </p>
      </header>

      {question ? (
        <main className="card">
          <div className="meta">
            <span className="badge week">Week {question.week}</span>
            <span className="badge src">{question.source}</span>
            {question.marks ? (
              <span className="badge marks">{question.marks} marks</span>
            ) : null}
            <span className="progress">
              {index + 1}/{deck.length}
            </span>
          </div>

          <div className="question">
            <Md>{question.q}</Md>
          </div>

          {showAnswer && (
            <section className="panel answer">
              <h2>Answer</h2>
              <Md>{question.a}</Md>
            </section>
          )}

          {showExplain && (
            <section className="panel explain">
              <h2>Explanation</h2>
              <Md>{question.e}</Md>
              <div className="where">
                <span className="where-label">From the course</span>
                <strong>
                  Week {question.week}: {WEEKS[question.week - 1].title}
                </strong>
                <span>{question.where}</span>
              </div>
            </section>
          )}
        </main>
      ) : null}

      <nav className="actions">
        <button className="btn ghost" onClick={() => go(-1)} disabled={index === 0}>
          ←
        </button>
        <button
          className={"btn" + (showAnswer ? " active" : "")}
          onClick={() => setShowAnswer((v) => !v)}
        >
          {showAnswer ? "Hide answer" : "Show answer"}
        </button>
        <button
          className={"btn" + (showExplain ? " active" : "")}
          onClick={() => setShowExplain((v) => !v)}
        >
          {showExplain ? "Hide explanation" : "Explain"}
        </button>
        <button className="btn primary" onClick={() => go(1)}>
          Next →
        </button>
      </nav>
    </div>
  );
}
