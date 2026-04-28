import { breakingBadQuiz } from "./breakingBad";

export const QUIZZES = {
  "breaking-bad": breakingBadQuiz,
};

export function getQuiz(id) {
  return QUIZZES[id];
}
