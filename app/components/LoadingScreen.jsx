"use client";

export default function LoadingScreen({ accent = "#5ce14e", error, onRetry, onCancel }) {
  return (
    <div className="loading-screen">
      {error ? (
        <>
          <div className="loading-icon" style={{ borderColor: "#c0392b" }}>!</div>
          <h2 className="loading-title" style={{ color: "#c0392b" }}>
            Couldn't Load Questions
          </h2>
          <p className="loading-msg">{error}</p>
          <div className="loading-actions">
            {onRetry && (
              <button className="start-btn" onClick={onRetry}>
                TRY AGAIN
              </button>
            )}
            {onCancel && (
              <button className="next-btn" onClick={onCancel} style={{ width: "auto", padding: "12px 24px" }}>
                ← Back
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="loading-spinner" style={{ borderTopColor: accent }} />
          <h2 className="loading-title" style={{ color: accent }}>
            FETCHING QUESTIONS
          </h2>
          <p className="loading-msg">Pulling fresh trivia from the database…</p>
        </>
      )}
    </div>
  );
}
