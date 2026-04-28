"use client";

export default function ProgressHeader({ current, total, category, score, timer }) {
  const pct = (current / total) * 100;
  return (
    <>
      <div className="progress-row">
        <span>
          Question {current + 1} / {total}
          {category ? ` · ${category}` : ""}
        </span>
        {timer && <span className="timer-slot">{timer}</span>}
        <span className="score-tag">Score: {score}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </>
  );
}
