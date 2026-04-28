// Periodic-table tiles (Br/Ba) — always visible, themed for Breaking Bad
const PERIODIC = [
  { id: "p1",  kind: "br", top: "8%",  left: "5%",  size: 52, dur: 11,   delay: 0 },
  { id: "p2",  kind: "ba", top: "14%", left: "82%", size: 44, dur: 13,   delay: 1.2 },
  { id: "p3",  kind: "br", top: "38%", left: "92%", size: 56, dur: 10,   delay: 2.4 },
  { id: "p4",  kind: "ba", top: "72%", left: "3%",  size: 48, dur: 14,   delay: 0.6 },
  { id: "p5",  kind: "br", top: "86%", left: "18%", size: 38, dur: 9,    delay: 3.1 },
  { id: "p6",  kind: "ba", top: "26%", left: "32%", size: 36, dur: 12,   delay: 1.8 },
  { id: "p7",  kind: "br", top: "56%", left: "48%", size: 44, dur: 15,   delay: 4.2 },
  { id: "p8",  kind: "ba", top: "80%", left: "72%", size: 46, dur: 10.5, delay: 2.6 },
  { id: "p9",  kind: "br", top: "4%",  left: "52%", size: 40, dur: 13,   delay: 0.9 },
  { id: "p10", kind: "ba", top: "92%", left: "44%", size: 42, dur: 11.5, delay: 3.7 },
  { id: "p11", kind: "br", top: "34%", left: "16%", size: 48, dur: 12,   delay: 1.4 },
  { id: "p12", kind: "ba", top: "62%", left: "84%", size: 38, dur: 14.5, delay: 2.9 },
  { id: "p13", kind: "br", top: "20%", left: "62%", size: 34, dur: 12.5, delay: 0.3 },
  { id: "p14", kind: "ba", top: "48%", left: "8%",  size: 42, dur: 11,   delay: 2.0 },
];

// Movie-themed icons — only shown when body has .quiz-movies-active
const MOVIE = [
  { id: "m1", kind: "reel",    top: "12%", left: "44%", size: 56, dur: 13,   delay: 1.5 },
  { id: "m2", kind: "clapper", top: "30%", left: "8%",  size: 60, dur: 11,   delay: 0.7 },
  { id: "m3", kind: "star",    top: "44%", left: "72%", size: 44, dur: 14,   delay: 2.0 },
  { id: "m4", kind: "reel",    top: "68%", left: "56%", size: 50, dur: 12,   delay: 3.0 },
  { id: "m5", kind: "clapper", top: "88%", left: "60%", size: 54, dur: 13.5, delay: 1.0 },
  { id: "m6", kind: "star",    top: "22%", left: "22%", size: 38, dur: 12,   delay: 2.5 },
  { id: "m7", kind: "ticket",  top: "76%", left: "30%", size: 50, dur: 11,   delay: 0.4 },
  { id: "m8", kind: "reel",    top: "6%",  left: "76%", size: 42, dur: 14,   delay: 3.5 },
  { id: "m9", kind: "star",    top: "60%", left: "20%", size: 40, dur: 13,   delay: 1.8 },
];

const ICONS = {
  reel: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#1a1a1a" stroke="#f7d046" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="10" fill="none" stroke="#5a4a10" strokeWidth="0.6" />
      <circle cx="16" cy="16" r="3" fill="#f7d046" />
      <circle cx="16" cy="6" r="2" fill="#444" />
      <circle cx="16" cy="26" r="2" fill="#444" />
      <circle cx="6" cy="16" r="2" fill="#444" />
      <circle cx="26" cy="16" r="2" fill="#444" />
    </svg>
  ),
  clapper: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <polygon points="2,8 30,8 30,13 2,13" fill="#1a1a1a" stroke="#f7d046" strokeWidth="1" />
      <polygon points="4,8 9,8 11,13 6,13" fill="#fff" />
      <polygon points="13,8 18,8 20,13 15,13" fill="#fff" />
      <polygon points="22,8 27,8 29,13 24,13" fill="#fff" />
      <rect x="2" y="13" width="28" height="17" fill="#1a1a1a" stroke="#f7d046" strokeWidth="1" />
      <line x1="6" y1="20" x2="26" y2="20" stroke="#5a4a10" strokeWidth="0.5" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="16,2 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12"
        fill="#f7d046"
        stroke="#c0392b"
        strokeWidth="1.5"
      />
      <polygon
        points="16,7 18,13 24,13 19,17 21,23 16,19 11,23 13,17 8,13 14,13"
        fill="#ffea7a"
      />
    </svg>
  ),
  ticket: (
    <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 6 Q2 4 4 4 L44 4 Q46 4 46 6 L46 12 Q42 12 42 16 Q42 20 46 20 L46 26 Q46 28 44 28 L4 28 Q2 28 2 26 L2 20 Q6 20 6 16 Q6 12 2 12 Z"
        fill="#c0392b"
        stroke="#f7d046"
        strokeWidth="1.5"
      />
      <line x1="22" y1="8" x2="22" y2="24" stroke="#f7d046" strokeWidth="0.6" strokeDasharray="2,2" />
      <text x="13" y="20" fill="#f7d046" fontSize="9" fontFamily="Impact, sans-serif" textAnchor="middle">CINE</text>
      <text x="34" y="20" fill="#f7d046" fontSize="9" fontFamily="Impact, sans-serif" textAnchor="middle">★</text>
    </svg>
  ),
};

function Floater({ item }) {
  const isPeriodic = item.kind === "br" || item.kind === "ba";
  const baseStyle = {
    top: item.top,
    left: item.left,
    width: `${item.size}px`,
    height: `${item.size}px`,
    animationDuration: `${item.dur}s`,
    animationDelay: `${item.delay}s`,
  };

  if (isPeriodic) {
    return (
      <span
        className={`float-el float-${item.kind}`}
        style={{ ...baseStyle, fontSize: `${item.size * 0.46}px` }}
      >
        {item.kind === "br" ? "Br" : "Ba"}
      </span>
    );
  }

  return (
    <span
      className={`float-el float-movie float-${item.kind}`}
      style={baseStyle}
    >
      {ICONS[item.kind]}
    </span>
  );
}

export default function FloatingBackground() {
  return (
    <div className="floating-bg" aria-hidden="true">
      {PERIODIC.map((item) => (
        <Floater key={item.id} item={item} />
      ))}
      {MOVIE.map((item) => (
        <Floater key={item.id} item={item} />
      ))}
    </div>
  );
}
