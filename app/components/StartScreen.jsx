"use client";

import { useEffect } from "react";

export default function StartScreen({ quizzes, onSelect }) {
  // While the selector is up, hide the dark gradient background so each tile owns its half
  useEffect(() => {
    document.body.classList.add("selector-active");
    return () => document.body.classList.remove("selector-active");
  }, []);

  return (
    <div className="quiz-selector">
      {quizzes.map((quiz) => (
        <QuizTile key={quiz.id} quiz={quiz} onSelect={() => onSelect(quiz.id)} />
      ))}
    </div>
  );
}

function QuizTile({ quiz, onSelect }) {
  const { intro } = quiz;
  const accent = intro.accent || "#5ce14e";
  const tileStyle = intro.backgroundImage
    ? { backgroundImage: `url("${intro.backgroundImage}")` }
    : {};

  return (
    <button
      type="button"
      className={`quiz-tile quiz-tile-${quiz.id}`}
      style={{ "--tile-accent": accent, ...tileStyle }}
      onClick={onSelect}
    >
      <div className="quiz-tile-overlay" />
      <div className="quiz-tile-content">
        {intro.heroImage && !intro.backgroundImage && (
          <div
            className="quiz-tile-hero"
            dangerouslySetInnerHTML={{ __html: intro.heroImage }}
          />
        )}
        <div className="quiz-tile-badge">
          <span className="quiz-tile-badge-symbol">{intro.badge || "?"}</span>
          <span className="quiz-tile-badge-label">{intro.badgeLabel || quiz.title}</span>
        </div>
        <h2 className="quiz-tile-heading">{intro.heading}</h2>
        <p className="quiz-tile-body">{intro.body}</p>
        <span className="quiz-tile-cta">{intro.ctaLabel} →</span>
      </div>
    </button>
  );
}
