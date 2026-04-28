"use client";

export default function OptionButton({ letter, text, state, onClick, disabled }) {
  const cls = ["option", state].filter(Boolean).join(" ");
  return (
    <button className={cls} disabled={disabled} onClick={onClick}>
      <span className="letter">{letter}</span>
      <span>{text}</span>
    </button>
  );
}
