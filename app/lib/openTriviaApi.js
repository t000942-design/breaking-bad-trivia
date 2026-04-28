/**
 * OpenTDB API client (https://opentdb.com)
 *
 * Fetches multiple-choice trivia questions and converts them to the internal
 * question shape used by QuizEngine: { q, options, answer, category, image, imageType }.
 *
 * The API returns HTML-encoded text and provides correct/incorrect answers
 * separately, so we decode entities and shuffle the options client-side.
 */

const API_BASE = "https://opentdb.com/api.php";
const CATEGORY_FILM = 11;

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
  // Numeric entities like &#39;
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

async function fetchByDifficulty(amount, difficulty) {
  const params = new URLSearchParams({
    amount: String(amount),
    category: String(CATEGORY_FILM),
    difficulty,
    type: "multiple",
    encode: "default",
  });
  const url = `${API_BASE}?${params.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`OpenTDB HTTP ${res.status}`);
  const data = await res.json();
  // response_code: 0 success, 1 no results, 2 invalid param, 3 token not found, 4 token empty, 5 rate limit
  if (data.response_code !== 0) {
    const msg =
      {
        1: "No questions returned for this difficulty",
        2: "Invalid request parameters",
        5: "Rate limited by OpenTDB — wait a few seconds and try again",
      }[data.response_code] || `OpenTDB error code ${data.response_code}`;
    throw new Error(msg);
  }
  return data.results;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetch 10 movie-trivia questions ramping easy → medium → hard.
 * Sequenced (with a 600ms gap) to play nice with OpenTDB's 1-req-per-5s limit
 * — three quick calls is well under the threshold but the gap helps if the
 * user retries quickly.
 *
 * @param {Object} [opts]
 * @param {string} [opts.defaultImage] - image to attach to each question
 */
export async function fetchMoviesQuestions(opts = {}) {
  const { defaultImage } = opts;
  const tiers = [
    { difficulty: "easy",   amount: 3 },
    { difficulty: "medium", amount: 4 },
    { difficulty: "hard",   amount: 3 },
  ];
  const all = [];
  for (let i = 0; i < tiers.length; i++) {
    const { difficulty, amount } = tiers[i];
    const batch = await fetchByDifficulty(amount, difficulty);
    all.push(...batch);
    if (i < tiers.length - 1) await sleep(600);
  }
  return all.map((q) => mapApiQuestion(q, defaultImage));
}
