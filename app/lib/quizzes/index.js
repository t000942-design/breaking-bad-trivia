import { breakingBadQuiz } from "./breakingBad";
import { generalMoviesQuiz } from "./generalMovies";

export const QUIZZES = {
  "breaking-bad": breakingBadQuiz,
  "general-movies": generalMoviesQuiz,
};

export const QUIZ_LIST = [breakingBadQuiz, generalMoviesQuiz];

export function getQuiz(id) {
  return QUIZZES[id];
}
