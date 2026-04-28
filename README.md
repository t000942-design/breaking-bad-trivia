# Breaking Bad Trivia

A Next.js trivia app themed after the show — chemistry-flask cursor, custom SVG illustrations, synthesized correct/incorrect sound effects, and 10 questions on characters, events, and catchphrases.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build & start production

```bash
npm run build
npm start
```

## Structure

- `app/page.jsx` — page shell (server component)
- `app/components/Trivia.jsx` — game logic (client component)
- `app/lib/questions.js` — question bank
- `app/lib/svgs.js` — themed SVG illustrations
- `app/lib/audio.js` — Web Audio synthesized sound effects
- `app/globals.css` — show-themed styles + flask cursor
