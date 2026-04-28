let audioCtx = null;

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return null;
    }
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

export function unlockAudio() {
  getAudio();
}

function playTone(freqs, duration, type = "sine", gainVal = 0.18) {
  const ctx = getAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  freqs.forEach((f) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f.freq, now + (f.t || 0));
    if (f.slide) {
      osc.frequency.linearRampToValueAtTime(
        f.slide,
        now + (f.t || 0) + (f.slideTime || duration)
      );
    }
    gain.gain.setValueAtTime(0, now + (f.t || 0));
    gain.gain.linearRampToValueAtTime(gainVal, now + (f.t || 0) + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (f.t || 0) + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + (f.t || 0));
    osc.stop(now + (f.t || 0) + duration + 0.05);
  });
}

export function playCorrect() {
  playTone(
    [
      { freq: 523.25, t: 0 },
      { freq: 659.25, t: 0.12 },
      { freq: 783.99, t: 0.24 },
      { freq: 1046.5, t: 0.36 },
    ],
    0.4,
    "triangle",
    0.16
  );
}

export function playWrong() {
  playTone(
    [
      { freq: 220, t: 0, slide: 110, slideTime: 0.35 },
      { freq: 165, t: 0.05, slide: 82, slideTime: 0.35 },
    ],
    0.45,
    "sawtooth",
    0.12
  );
}

export function playTick() {
  playTone([{ freq: 880, t: 0 }], 0.08, "square", 0.09);
}
