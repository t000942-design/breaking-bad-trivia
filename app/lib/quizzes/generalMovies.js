import { SVG } from "../svgs";
import { fetchMoviesQuestions } from "../openTriviaApi";

export const generalMoviesQuiz = {
  id: "general-movies",
  title: "Movie Trivia",
  intro: {
    backgroundImage: null,
    heroImage: SVG.movies,
    heading: "ROLL CAMERA",
    body:
      "10 questions ramped easy → hard, fetched live from the Open Trivia DB. Actors, directors, awards, scores, and the lines that became cinema history.",
    ctaLabel: "START THE REEL",
    replayLabel: "ANOTHER TAKE",
    accent: "#f7d046",
    badge: "M",
    badgeLabel: "Movies",
  },
  // Static fallback (used if loadQuestions fails / not called yet).
  questions: [],
  // Loaded fresh per session from OpenTDB.
  loadQuestions: () => fetchMoviesQuestions({ defaultImage: SVG.movies }),
  verdictTiers: [
    {
      min: 10,
      title: "OSCAR WINNER",
      quote: '"And the Academy Award goes to... you." — Flawless performance.',
    },
    {
      min: 7,
      title: "FILM BUFF",
      quote: '"You had me at hello." — Strong cinematic memory.',
    },
    {
      min: 4,
      title: "MATINEE FAN",
      quote: '"Frankly, my dear, you got a few." — Decent showing.',
    },
    {
      min: 0,
      title: "FIRST-TIMER",
      quote: '"I\'ll be back." — Maybe try a movie marathon first.',
    },
  ],
};
