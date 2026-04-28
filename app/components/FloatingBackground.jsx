const ELEMENTS = [
  { symbol: "Br", top: "8%",  left: "5%",  size: 52, dur: 11, delay: 0 },
  { symbol: "Ba", top: "14%", left: "82%", size: 44, dur: 13, delay: 1.2 },
  { symbol: "Br", top: "38%", left: "92%", size: 56, dur: 10, delay: 2.4 },
  { symbol: "Ba", top: "72%", left: "3%",  size: 48, dur: 14, delay: 0.6 },
  { symbol: "Br", top: "86%", left: "18%", size: 38, dur: 9,  delay: 3.1 },
  { symbol: "Ba", top: "26%", left: "32%", size: 36, dur: 12, delay: 1.8 },
  { symbol: "Br", top: "56%", left: "48%", size: 44, dur: 15, delay: 4.2 },
  { symbol: "Ba", top: "80%", left: "72%", size: 46, dur: 10.5, delay: 2.6 },
  { symbol: "Br", top: "4%",  left: "52%", size: 40, dur: 13, delay: 0.9 },
  { symbol: "Ba", top: "92%", left: "44%", size: 42, dur: 11.5, delay: 3.7 },
  { symbol: "Br", top: "34%", left: "16%", size: 48, dur: 12, delay: 1.4 },
  { symbol: "Ba", top: "62%", left: "84%", size: 38, dur: 14.5, delay: 2.9 },
  { symbol: "Br", top: "20%", left: "62%", size: 34, dur: 12.5, delay: 0.3 },
  { symbol: "Ba", top: "48%", left: "8%",  size: 42, dur: 11, delay: 2.0 },
];

export default function FloatingBackground() {
  return (
    <div className="floating-bg" aria-hidden="true">
      {ELEMENTS.map((el, i) => (
        <span
          key={i}
          className={`float-el float-${el.symbol.toLowerCase()}`}
          style={{
            top: el.top,
            left: el.left,
            width: `${el.size}px`,
            height: `${el.size}px`,
            fontSize: `${el.size * 0.46}px`,
            animationDuration: `${el.dur}s`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {el.symbol}
        </span>
      ))}
    </div>
  );
}
