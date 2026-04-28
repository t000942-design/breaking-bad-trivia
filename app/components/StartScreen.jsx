"use client";

import { useEffect } from "react";

export default function StartScreen({ intro, onStart }) {
  useEffect(() => {
    if (!intro.backgroundImage) return;
    document.body.classList.add("cover-active");
    return () => document.body.classList.remove("cover-active");
  }, [intro.backgroundImage]);

  return (
    <>
      {intro.backgroundImage && (
        <div
          className="cover-bg"
          style={{ backgroundImage: `url("${intro.backgroundImage}")` }}
        >
          <div className="cover-bg-overlay" />
        </div>
      )}
      <div className="start-screen">
        {intro.heroImage && (
          <div
            className="hero-image"
            dangerouslySetInnerHTML={{ __html: intro.heroImage }}
          />
        )}
        <h1 className="title start-title">
          <span className="periodic br">
            <span className="atomic-num">35</span>
            <span className="symbol">Br</span>
          </span>
          <span className="rest">eaking</span>
          <span className="periodic ba">
            <span className="atomic-num">56</span>
            <span className="symbol">Ba</span>
          </span>
          <span className="rest">d</span>
          <span className="rest start-title-trivia">Trivia</span>
        </h1>
        <h2 className="start-heading">{intro.heading}</h2>
        <p>{intro.body}</p>
        <button className="start-btn" onClick={onStart}>
          {intro.ctaLabel}
        </button>
      </div>
    </>
  );
}
