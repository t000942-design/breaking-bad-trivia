import { SVG } from "../svgs";
import { QUESTIONS } from "../questions";

export const breakingBadQuiz = {
  id: "breaking-bad",
  title: "Breaking Bad Trivia",
  intro: {
    backgroundImage: "/images/cover.jpg",
    heading: "TREAD LIGHTLY",
    body:
      "10 questions on characters, events, and the catchphrases that built the empire. Some are easy. Some will burn you. Cook carefully.",
    ctaLabel: "START COOKING",
    replayLabel: "COOK AGAIN",
  },
  questions: QUESTIONS,
  verdictTiers: [
    {
      min: 10,
      title: "HEISENBERG",
      quote: '"I am the one who knocks." — A perfect cook. Flawless.',
    },
    {
      min: 7,
      title: "MR. WHITE",
      quote: '"Yeah, science!" — Strong work. Mostly blue.',
    },
    {
      min: 4,
      title: "BADGER & SKINNY PETE",
      quote:
        '"Yeah, mister white!" — Decent run. Don\'t go into business with Tuco yet.',
    },
    {
      min: 0,
      title: "WALTER, JR.",
      quote: '"Breakfast?" — You may want to rewatch the series.',
    },
  ],
};
