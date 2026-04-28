"use client";

import { useState } from "react";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import EndScreen from "./EndScreen";
import { playCorrect, playWrong, unlockAudio } from "../lib/audio";

const STAGE = { START: "start", QUESTION: "question", END: "end" };

export default function QuizEngine({ quiz }) {
  const [stage, setStage] = useState(STAGE.START);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);

  const total = quiz.questions.length;

  const start = () => {
    unlockAudio();
    setCurrent(0);
    setScore(0);
    setPicked(null);
    setStage(STAGE.QUESTION);
  };

  const pick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === quiz.questions[current].answer) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (current + 1 >= total) {
      setStage(STAGE.END);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  if (stage === STAGE.START) {
    return <StartScreen intro={quiz.intro} onStart={start} />;
  }
  if (stage === STAGE.END) {
    return (
      <EndScreen
        score={score}
        total={total}
        verdictTiers={quiz.verdictTiers}
        onRestart={start}
        ctaLabel={quiz.intro.replayLabel}
      />
    );
  }
  return (
    <QuestionCard
      key={current}
      question={quiz.questions[current]}
      index={current}
      total={total}
      score={score}
      picked={picked}
      onPick={pick}
      onNext={next}
    />
  );
}
