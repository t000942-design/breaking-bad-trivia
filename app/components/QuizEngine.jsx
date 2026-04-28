"use client";

import { useState, useEffect } from "react";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import EndScreen from "./EndScreen";
import LoadingScreen from "./LoadingScreen";
import { playCorrect, playWrong, unlockAudio } from "../lib/audio";
import { QUIZ_LIST } from "../lib/quizzes";

const QUIZ_BODY_CLASSES = {
  "breaking-bad": "quiz-breaking-bad-active",
  "general-movies": "quiz-movies-active",
};

const STAGE = {
  SELECT: "select",
  LOADING: "loading",
  QUESTION: "question",
  END: "end",
};

export default function QuizEngine() {
  const quizzes = QUIZ_LIST;

  // Toggle a body class for the active quiz so CSS can theme cursor and
  // background floaters per-genre. Cleaned up on unmount or selection reset.
  useEffect(() => {
    return () => {
      Object.values(QUIZ_BODY_CLASSES).forEach((c) =>
        document.body.classList.remove(c)
      );
    };
  }, []);
  const [stage, setStage] = useState(STAGE.SELECT);
  const [selectedId, setSelectedId] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);

  const quiz = quizzes.find((q) => q.id === selectedId);
  const activeQuestions = questions || (quiz ? quiz.questions : []);
  const total = activeQuestions.length;
  const accent = quiz?.intro?.accent;

  const beginQuiz = (qs) => {
    setQuestions(qs);
    setCurrent(0);
    setScore(0);
    setPicked(null);
    setStage(STAGE.QUESTION);
  };

  const loadAndStart = async (id) => {
    const targetQuiz = quizzes.find((q) => q.id === id);
    if (!targetQuiz) return;
    setLoadError(null);
    if (typeof targetQuiz.loadQuestions === "function") {
      setStage(STAGE.LOADING);
      try {
        const fetched = await targetQuiz.loadQuestions();
        if (!fetched || fetched.length === 0) {
          throw new Error("No questions returned");
        }
        beginQuiz(fetched);
      } catch (err) {
        setLoadError(err.message || "Unknown error fetching questions");
      }
    } else {
      beginQuiz(targetQuiz.questions);
    }
  };

  const selectQuiz = (id) => {
    unlockAudio();
    setSelectedId(id);
    // Apply the genre-specific body class (cursor + background theme).
    Object.values(QUIZ_BODY_CLASSES).forEach((c) =>
      document.body.classList.remove(c)
    );
    if (QUIZ_BODY_CLASSES[id]) {
      document.body.classList.add(QUIZ_BODY_CLASSES[id]);
    }
    loadAndStart(id);
  };

  const retryLoad = () => {
    if (selectedId) loadAndStart(selectedId);
  };

  const restartCurrent = () => {
    if (!selectedId) return;
    loadAndStart(selectedId);
  };

  const backToMenu = () => {
    setSelectedId(null);
    setQuestions(null);
    setLoadError(null);
    setCurrent(0);
    setScore(0);
    setPicked(null);
    setStage(STAGE.SELECT);
    Object.values(QUIZ_BODY_CLASSES).forEach((c) =>
      document.body.classList.remove(c)
    );
  };

  const pick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === activeQuestions[current].answer) {
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

  if (stage === STAGE.SELECT) {
    return <StartScreen quizzes={quizzes} onSelect={selectQuiz} />;
  }

  if (stage === STAGE.LOADING) {
    return (
      <LoadingScreen
        accent={accent}
        error={loadError}
        onRetry={loadError ? retryLoad : null}
        onCancel={loadError ? backToMenu : null}
      />
    );
  }

  if (stage === STAGE.END) {
    return (
      <EndScreen
        score={score}
        total={total}
        verdictTiers={quiz.verdictTiers}
        onRestart={restartCurrent}
        onMenu={backToMenu}
        ctaLabel={quiz.intro.replayLabel}
      />
    );
  }

  return (
    <QuestionCard
      key={`${selectedId}-${current}`}
      question={activeQuestions[current]}
      index={current}
      total={total}
      score={score}
      picked={picked}
      onPick={pick}
      onNext={next}
    />
  );
}
