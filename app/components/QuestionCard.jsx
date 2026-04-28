"use client";

import { useEffect, useState } from "react";
import OptionButton from "./OptionButton";
import ProgressHeader from "./ProgressHeader";
import { playTick } from "../lib/audio";

const LETTERS = "ABCDEFGH";
const QUESTION_SECONDS = 10;
const WARNING_THRESHOLD = 5;
const AUTO_ADVANCE_MS = 3000;

export default function QuestionCard({
  question,
  index,
  total,
  score,
  picked,
  onPick,
  onNext,
}) {
  const [timeLeft, setTimeLeft] = useState(QUESTION_SECONDS);
  const answered = picked !== null;
  const isLast = index === total - 1;

  // Tick down every second while unanswered
  useEffect(() => {
    if (answered) return;
    if (timeLeft <= 0) return;
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, answered]);

  // Play tick sound when entering the warning window (≤5s and >0)
  useEffect(() => {
    if (answered) return;
    if (timeLeft <= WARNING_THRESHOLD && timeLeft > 0) playTick();
  }, [timeLeft, answered]);

  // When timer hits 0 with no answer, register a timeout (-1 = no answer picked)
  useEffect(() => {
    if (answered) return;
    if (timeLeft === 0) onPick(-1);
  }, [timeLeft, answered, onPick]);

  // Auto-advance 3s after an answer is registered (or timeout)
  useEffect(() => {
    if (!answered) return;
    const id = setTimeout(() => onNext(), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [answered, onNext]);

  const warning = timeLeft <= WARNING_THRESHOLD;
  const timerCls = ["timer", warning ? "timer-warning" : "", answered ? "timer-done" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <ProgressHeader
        current={index}
        total={total}
        category={question.category}
        score={score}
        timer={
          <span className={timerCls} aria-label={`${timeLeft} seconds left`}>
            {timeLeft}
          </span>
        }
      />
      {question.image && (
        <div className="q-image">
          {question.imageType === "url" ? (
            <img src={question.image} alt="" />
          ) : (
            <span
              className="q-image-svg"
              dangerouslySetInnerHTML={{ __html: question.image }}
            />
          )}
        </div>
      )}
      <h2 className="question">{question.q}</h2>
      <div className="options">
        {question.options.map((opt, i) => {
          let state = "";
          if (answered) {
            if (i === question.answer) state = "correct";
            else if (i === picked) state = "wrong";
          }
          return (
            <OptionButton
              key={i}
              letter={LETTERS[i]}
              text={opt}
              state={state}
              disabled={answered}
              onClick={() => onPick(i)}
            />
          );
        })}
      </div>
      {answered && (
        <button className="next-btn" onClick={onNext}>
          {isLast ? "See Results" : "Skip Wait"} →
        </button>
      )}
    </>
  );
}
