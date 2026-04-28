"use client";

function pickVerdict(score, tiers) {
  const sorted = [...tiers].sort((a, b) => b.min - a.min);
  for (const tier of sorted) {
    if (score >= tier.min) return tier;
  }
  return sorted[sorted.length - 1];
}

export default function EndScreen({ score, total, verdictTiers, onRestart, ctaLabel = "Play Again" }) {
  const tier = pickVerdict(score, verdictTiers);

  return (
    <div className="end-screen">
      <h2 className="verdict">{tier.title}</h2>
      <div style={{ color: "var(--muted)", letterSpacing: "2px" }}>
        YOUR FINAL SCORE
      </div>
      <div className="final-score">
        {score} / {total}
      </div>
      <p className="quote">{tier.quote}</p>
      <button className="restart-btn" onClick={onRestart}>
        {ctaLabel}
      </button>
    </div>
  );
}
