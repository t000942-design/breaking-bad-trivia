import "./globals.css";

export const metadata = {
  title: "Breaking Bad Trivia — The One Who Knocks",
  description: "10 questions on the characters, events, and catchphrases that built the empire.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
