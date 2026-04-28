import QuizEngine from "./components/QuizEngine";
import FloatingBackground from "./components/FloatingBackground";
import { getQuiz } from "./lib/quizzes";

export default function Page() {
  const quiz = getQuiz("breaking-bad");

  return (
    <div className="container">
      <FloatingBackground />

      <header>
        <h1 className="title">
          <span className="periodic br">
            <span className="atomic-num">35</span>
            <span className="symbol">Br</span>
          </span>
          <span className="rest">eaking</span>
          <span className="periodic ba">
            <span className="atomic-num">56</span>
            <span className="symbol">Ba</span>
          </span>
          <span className="rest">d</span>
        </h1>
        <div className="subtitle">— Trivia Lab —</div>
      </header>

      <main className="panel">
        <QuizEngine quiz={quiz} />
      </main>

      <footer>I AM THE ONE WHO KNOCKS</footer>
    </div>
  );
}
