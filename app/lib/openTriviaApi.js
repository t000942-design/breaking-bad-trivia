/**
 * OpenTDB API client (https://opentdb.com)
 *
 * Fetches multiple-choice trivia questions and converts them to the internal
 * question shape used by QuizEngine: { q, options, answer, category, image, imageType }.
 *
 * The API returns HTML-encoded text and provides correct/incorrect answers
 * separately, so we decode entities and shuffle the options client-side.
 *
 * IMPORTANT: OpenTDB enforces a strict 5s-between-requests rate limit per IP
 * and returns HTTP 429 if you exceed it. We make a SINGLE request for 10
 * mixed-difficulty questions and sort them client-side (easy → medium → hard)
 * to preserve the difficulty ramp without ever risking 429.
 */

const API_BASE = "https://opentdb.com/api.php";
const CATEGORY_FILM = 11;
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
  return {
    q: decodeHtml(apiQ.question),
    options,
    answer,
    category: difficulty,
    image: defaultImage,
    imageType: defaultImage && defaultImage.startsWith("/") ? "url" : "svg",
  };
}

const RESPONSE_CODE_MESSAGES = {
  1: "No questions returned for this category",
  2: "Invalid request parameters",
  3: "Session token not found",
  4: "Session token has returned all available questions",
  5: "Rate limited by OpenTDB — wait 5 seconds and try again",
};

/**
 * Fetch 10 movie-trivia questions and order them easy → medium → hard.
 *
 * Single API call (no rate-limit risk). The server returns a mix of
 * difficulties; we sort client-side to preserve the progression effect.
 *
 * @param {Object} [opts]
 * @param {string} [opts.defaultImage] - image attached to each question
 */
export async function fetchMoviesQuestions(opts = {}) {
  const { defaultImage } = opts;
  const params = new URLSearchParams({
    amount: "10",
    category: String(CATEGORY_FILM),
    type: "multiple",
    encode: "default",
  });
  const url = `${API_BASE}?${params.toString()}`;

  const res = await fetch(url, { cache: "no-store" });

  if (res.status === 429) {
    throw new Error(
      "OpenTDB rate limited us (HTTP 429). Wait ~5 seconds, then click Try Again."
    );
  }
  if (!res.ok) {
    throw new Error(`OpenTDB HTTP ${res.status}`);
  }

  const data = await res.json();
  if (data.response_code !== 0) {
    throw new Error(
      RESPONSE_CODE_MESSAGES[data.response_code] ||
        `OpenTDB error code ${data.response_code}`
    );
  }

  const sorted = [...data.results].sort(
    (a, b) =>
      (DIFFICULTY_ORDER[a.difficulty] ?? 99) -
      (DIFFICULTY_ORDER[b.difficulty] ?? 99)
  );

  return sorted.map((q) => mapApiQuestion(q, defaultImage));
}
