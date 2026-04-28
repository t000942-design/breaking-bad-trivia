import { NextResponse } from "next/server";

const OPENTDB_URL = "https://opentdb.com/api.php";
const CATEGORY_FILM = 11;

const RESPONSE_CODE_MESSAGES = {
  1: "No questions returned for this category",
  2: "Invalid request parameters",
  3: "Session token not found",
  4: "Session token has returned all available questions",
  5: "Rate limited by OpenTDB — wait 5 seconds and try again",
};

/**
 * Server-side proxy for OpenTDB. Avoids browser CORS quirks, lets us shape
 * the error responses, and keeps the upstream URL out of the client bundle.
 *
 * GET /api/movies-questions
 *   ?amount=10  (default)
 *   &difficulty=easy|medium|hard  (optional)
 */
export async function GET(request) {
  const url = new URL(request.url);
  const amount = url.searchParams.get("amount") || "10";
  const difficulty = url.searchParams.get("difficulty");

  const params = new URLSearchParams({
    amount,
    category: String(CATEGORY_FILM),
    type: "multiple",
  });
  if (difficulty) params.set("difficulty", difficulty);

  const upstream = `${OPENTDB_URL}?${params.toString()}`;

  let upstreamRes;
  try {
    upstreamRes = await fetch(upstream, {
      cache: "no-store",
      headers: { "User-Agent": "trivia-lab/1.0 (+next-server)" },
    });
  } catch (err) {
    return NextResponse.json(
      { error: `Upstream fetch failed: ${err.message || err}` },
      { status: 502 }
    );
  }

  if (upstreamRes.status === 429) {
    return NextResponse.json(
      { error: "Rate limited by OpenTDB. Wait ~5 seconds and try again." },
      { status: 429 }
    );
  }
  if (!upstreamRes.ok) {
    return NextResponse.json(
      { error: `OpenTDB returned HTTP ${upstreamRes.status}` },
      { status: 502 }
    );
  }

  const data = await upstreamRes.json();
  if (data.response_code !== 0) {
    return NextResponse.json(
      {
        error:
          RESPONSE_CODE_MESSAGES[data.response_code] ||
          `OpenTDB error code ${data.response_code}`,
        response_code: data.response_code,
      },
      { status: 502 }
    );
  }

  return NextResponse.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}
