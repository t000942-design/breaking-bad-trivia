/**
 * Client for our Next.js /api/movies-questions route, which proxies OpenTDB.
 *
 * Why a server route?
 *  - Avoids browser CORS quirks
 *  - Lets us return clean error envelopes ({ error, response_code })
 *  - Keeps the upstream URL out of the client bundle
 *
 * The route returns the raw OpenTDB shape on success:
 *   { response_code: 0, results: [{ question, correct_answer, ... }] }
 *
 * We decode HTML entities, shuffle answers, and sort easy → medium → hard.
 * Each question is also given a topic-based illustration (director chair,
 * Oscar trophy, music note, etc.) that hints at the question type without
 * revealing the answer.
 */

import { getMovieTopicSvg } from "./movieTopicIcons";

const ENDPOINT = "/api/movies-questions";
const DIFFICULTY_ORDER = { easy: 0, medium: 1, hard: 2 };

const HTML_ENTITIES = {
  "&quot;": '"',
  "&#039;": "'",
  "&apos;": "'",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&eacute;": "é",
  "&Eacute;": "É",
  "&aacute;": "á",
  "&Aacute;": "Á",
  "&iacute;": "í",
  "&oacute;": "ó",
  "&uacute;": "ú",
  "&ntilde;": "ñ",
  "&Ntilde;": "Ñ",
  "&shy;": "",
  "&hellip;": "…",
  "&mdash;": "—",
  "&ndash;": "–",
  "&rsquo;": "'",
  "&lsquo;": "'",
  "&ldquo;": "“",
  "&rdquo;": "”",
};

function decodeHtml(html) {
  if (typeof html !== "string") return html;
  if (typeof window !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  let out = html;
  for (const [entity, char] of Object.entries(HTML_ENTITIES)) {
    out = out.split(entity).join(char);
  }
  out = out.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
  return out;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mapApiQuestion(apiQ, defaultImage) {
  const correct = decodeHtml(apiQ.correct_answer);
  const incorrect = apiQ.incorrect_answers.map(decodeHtml);
  const options = shuffle([correct, ...incorrect]);
  const answer = options.indexOf(correct);
  const difficulty =
    apiQ.difficulty.charAt(0).toUpperCase() + apiQ.difficulty.slice(1);
  const decodedQ = decodeHtml(apiQ.question);
  // Pick a topic-based illustration that hints at the category without
  // revealing the answer. Falls back to defaultImage if none provided.
  const topicSvg = getMovieTopicSvg(decodedQ) || defaultImage;
  return {
    q: decodedQ,
    options,
    answer,
    category: difficulty,
    image: topicSvg,
    imageType: typeof topicSvg === "string" && topicSvg.startsWith("/") ? "url" : "svg",
  };
}

/**
 * Fetch 10 movie-trivia questions via our Next.js server route.
 * Single upstream call (no rate-limit risk). Sorted easy → medium → hard.
 *
 * @param {Object} [opts]
 * @param {string} [opts.defaultImage] - image attached to each question
 */
export async function fetchMoviesQuestions(opts = {}) {
  const { defaultImage } = opts;
  const res = await fetch(`${ENDPOINT}?amount=10`, { cache: "no-store" });

  if (!res.ok) {
    let body = null;
    try {
      body = await res.json();
    } catch {
      // ignore
    }
    throw new Error(
      (body && body.error) || `Server route returned HTTP ${res.status}`
    );
  }

  const data = await res.json();
  if (!data.results || !Array.isArray(data.results)) {
    throw new Error("Server route returned unexpected payload");
  }

  const sorted = [...data.results].sort(
    (a, b) =>
      (DIFFICULTY_ORDER[a.difficulty] ?? 99) -
      (DIFFICULTY_ORDER[b.difficulty] ?? 99)
  );

  return sorted.map((q) => mapApiQuestion(q, defaultImage));
}
