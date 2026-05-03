/**
 * Topic-based SVG illustrations for movie trivia questions.
 *
 * For each question we detect the topic from keywords in the question text
 * and attach an icon that hints at the category (director / awards / music /
 * actor / animation / quote / era / default) without revealing the answer.
 */

export const MOVIE_TOPIC_SVGS = {
  director: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <defs>
      <radialGradient id='dlight' cx='50%' cy='40%'>
        <stop offset='0%' stop-color='#f7d046' stop-opacity='0.3'/>
        <stop offset='100%' stop-color='#f7d046' stop-opacity='0'/>
      </radialGradient>
    </defs>
    <ellipse cx='120' cy='90' rx='180' ry='100' fill='url(#dlight)'/>
    <g transform='translate(75,55)'>
      <rect x='-10' y='0' width='100' height='14' fill='#1a0a05' stroke='#8a4a2a' stroke-width='1.5'/>
      <rect x='-10' y='14' width='100' height='30' fill='#c0392b' stroke='#7a1a10' stroke-width='1.5'/>
      <line x1='-5' y1='44' x2='5' y2='90' stroke='#3a2a1a' stroke-width='3'/>
      <line x1='85' y1='44' x2='75' y2='90' stroke='#3a2a1a' stroke-width='3'/>
      <line x1='30' y1='44' x2='30' y2='80' stroke='#3a2a1a' stroke-width='3'/>
      <line x1='50' y1='44' x2='50' y2='80' stroke='#3a2a1a' stroke-width='3'/>
      <line x1='5' y1='90' x2='75' y2='90' stroke='#3a2a1a' stroke-width='3'/>
    </g>
    <g transform='translate(160,30)'>
      <ellipse cx='8' cy='10' rx='10' ry='6' fill='#1a1a1a'/>
      <rect x='2' y='6' width='12' height='8' fill='#1a1a1a'/>
      <ellipse cx='8' cy='6' rx='8' ry='2' fill='#444'/>
      <line x1='8' y1='14' x2='35' y2='30' stroke='#1a1a1a' stroke-width='2'/>
    </g>
    <text x='120' y='160' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>BEHIND THE CAMERA</text>
    <text x='120' y='174' text-anchor='middle' font-family='monospace' font-size='8' fill='#aaa' letter-spacing='3'>WHO CALLED ACTION?</text>
  </svg>`,

  awards: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <defs>
      <linearGradient id='gold' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#fff4b0'/>
        <stop offset='50%' stop-color='#d4a02a'/>
        <stop offset='100%' stop-color='#7a5a10'/>
      </linearGradient>
    </defs>
    <radialGradient id='spot' cx='50%' cy='50%'>
      <stop offset='0%' stop-color='#f7d046' stop-opacity='0.4'/>
      <stop offset='100%' stop-color='#f7d046' stop-opacity='0'/>
    </radialGradient>
    <ellipse cx='120' cy='90' rx='160' ry='90' fill='url(#spot)'/>
    <g transform='translate(120,90)'>
      <ellipse cx='0' cy='52' rx='35' ry='6' fill='#1a1a1a'/>
      <rect x='-25' y='30' width='50' height='22' fill='url(#gold)' stroke='#5a3a10' stroke-width='2'/>
      <rect x='-30' y='28' width='60' height='6' fill='url(#gold)' stroke='#5a3a10' stroke-width='2'/>
      <ellipse cx='0' cy='-30' rx='12' ry='28' fill='url(#gold)' stroke='#5a3a10' stroke-width='2'/>
      <path d='M-12 -2 L0 4 L12 -2 L12 18 L-12 18 Z' fill='url(#gold)' stroke='#5a3a10' stroke-width='2'/>
      <path d='M0 -55 Q-3 -53 -3 -50 L-3 -32 Q-3 -28 0 -26 Q3 -28 3 -32 L3 -50 Q3 -53 0 -55 Z' fill='url(#gold)' stroke='#5a3a10' stroke-width='1'/>
      <text x='0' y='44' text-anchor='middle' font-family='Impact,sans-serif' font-size='6' fill='#1a1a1a' letter-spacing='1'>BEST</text>
    </g>
    <text x='120' y='168' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>AND THE WINNER IS...</text>
  </svg>`,

  music: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <line x1='20' y1='60' x2='220' y2='60' stroke='#888' stroke-width='1'/>
    <line x1='20' y1='75' x2='220' y2='75' stroke='#888' stroke-width='1'/>
    <line x1='20' y1='90' x2='220' y2='90' stroke='#888' stroke-width='1'/>
    <line x1='20' y1='105' x2='220' y2='105' stroke='#888' stroke-width='1'/>
    <line x1='20' y1='120' x2='220' y2='120' stroke='#888' stroke-width='1'/>
    <path d='M30 50 Q30 35 45 35 Q60 35 60 50 L60 100 L80 100 L80 50 Q80 35 95 35 Q110 35 110 50 L110 80 Q110 105 80 105 Q65 105 60 100 Q60 110 50 110 Q30 110 30 95 Z' fill='none' stroke='#f7d046'/>
    <g transform='translate(80,90)'>
      <ellipse cx='0' cy='15' rx='14' ry='10' fill='#f7d046' stroke='#5a4a10' stroke-width='1.5' transform='rotate(-15)'/>
      <line x1='13' y1='12' x2='13' y2='-30' stroke='#5a4a10' stroke-width='2'/>
      <path d='M13 -30 Q30 -25 30 -8' fill='none' stroke='#5a4a10' stroke-width='2'/>
    </g>
    <g transform='translate(150,75)'>
      <ellipse cx='0' cy='30' rx='14' ry='10' fill='#f7d046' stroke='#5a4a10' stroke-width='1.5' transform='rotate(-15)'/>
      <line x1='13' y1='27' x2='13' y2='-15' stroke='#5a4a10' stroke-width='2'/>
      <ellipse cx='28' cy='30' rx='14' ry='10' fill='#f7d046' stroke='#5a4a10' stroke-width='1.5' transform='rotate(-15)'/>
      <line x1='41' y1='27' x2='41' y2='-15' stroke='#5a4a10' stroke-width='2'/>
      <line x1='13' y1='-15' x2='41' y2='-15' stroke='#5a4a10' stroke-width='3'/>
    </g>
    <text x='120' y='160' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>HIT THAT NOTE</text>
    <text x='120' y='174' text-anchor='middle' font-family='monospace' font-size='8' fill='#aaa' letter-spacing='3'>SCORE / SOUNDTRACK</text>
  </svg>`,

  actor: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <defs>
      <radialGradient id='alight' cx='50%' cy='30%'>
        <stop offset='0%' stop-color='#f7d046' stop-opacity='0.35'/>
        <stop offset='100%' stop-color='#f7d046' stop-opacity='0'/>
      </radialGradient>
    </defs>
    <ellipse cx='120' cy='60' rx='150' ry='80' fill='url(#alight)'/>
    <g transform='translate(120,40)'>
      <ellipse cx='0' cy='30' rx='30' ry='34' fill='#1a1a1a' stroke='#f7d046' stroke-width='1.5'/>
      <path d='M-32 80 Q-32 60 0 60 Q32 60 32 80 L32 130 L-32 130 Z' fill='#1a1a1a' stroke='#f7d046' stroke-width='1.5'/>
      <text x='0' y='38' text-anchor='middle' font-family='Impact,sans-serif' font-size='28' fill='#f7d046'>?</text>
    </g>
    <text x='120' y='168' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>WHO PLAYED THE PART?</text>
  </svg>`,

  animation: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <g transform='translate(120,90)'>
      <circle cx='-40' cy='-20' r='28' fill='#5fb8e6'/>
      <circle cx='-50' cy='-30' r='14' fill='#5fb8e6'/>
      <circle cx='-30' cy='-30' r='14' fill='#5fb8e6'/>
      <circle cx='-46' cy='-30' r='6' fill='#fff'/>
      <circle cx='-34' cy='-30' r='6' fill='#fff'/>
      <circle cx='-46' cy='-30' r='3' fill='#000'/>
      <circle cx='-34' cy='-30' r='3' fill='#000'/>
      <ellipse cx='-40' cy='-12' rx='8' ry='4' fill='#000'/>
      <circle cx='30' cy='-10' r='32' fill='#f7d046'/>
      <ellipse cx='15' cy='-15' rx='5' ry='8' fill='#000'/>
      <ellipse cx='45' cy='-15' rx='5' ry='8' fill='#000'/>
      <path d='M15 5 Q30 18 45 5' fill='none' stroke='#000' stroke-width='2'/>
      <circle cx='15' cy='10' r='4' fill='#f7a23a' opacity='0.6'/>
      <circle cx='45' cy='10' r='4' fill='#f7a23a' opacity='0.6'/>
    </g>
    <text x='120' y='168' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>ANIMATED FEATURE</text>
  </svg>`,

  quote: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <g transform='translate(40,30)'>
      <path d='M0 30 Q0 10 20 10 L140 10 Q160 10 160 30 L160 90 Q160 110 140 110 L60 110 L40 130 L40 110 L20 110 Q0 110 0 90 Z' fill='#1a1a1a' stroke='#f7d046' stroke-width='2'/>
      <text x='80' y='55' text-anchor='middle' font-family='Georgia,serif' font-size='36' fill='#f7d046'>"</text>
      <text x='80' y='95' text-anchor='middle' font-family='Impact,sans-serif' font-size='18' fill='#fff' letter-spacing='3'>?  ?  ?</text>
    </g>
    <text x='120' y='168' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>FAMOUS LINE</text>
  </svg>`,

  era: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <g transform='translate(120,90)'>
      <rect x='-50' y='-30' width='100' height='60' fill='#1a1a1a' stroke='#f7d046' stroke-width='2'/>
      <circle cx='-25' cy='-50' r='22' fill='#1a1a1a' stroke='#f7d046' stroke-width='2'/>
      <circle cx='25' cy='-50' r='22' fill='#1a1a1a' stroke='#f7d046' stroke-width='2'/>
      <circle cx='-25' cy='-50' r='15' fill='none' stroke='#666' stroke-width='1'/>
      <circle cx='25' cy='-50' r='15' fill='none' stroke='#666' stroke-width='1'/>
      <circle cx='-25' cy='-50' r='4' fill='#f7d046'/>
      <circle cx='25' cy='-50' r='4' fill='#f7d046'/>
      <rect x='-15' y='-35' width='30' height='15' fill='#5a4a10' stroke='#f7d046'/>
      <rect x='5' y='-15' width='35' height='15' fill='#1a1a1a' stroke='#f7d046'/>
      <rect x='42' y='-10' width='8' height='5' fill='#f7d046'/>
      <text x='0' y='15' text-anchor='middle' font-family='monospace' font-size='10' fill='#f7d046' letter-spacing='2'>YEAR ____</text>
    </g>
    <text x='120' y='168' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>VINTAGE CINEMA</text>
  </svg>`,

  defaultIcon: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a0a14'/>
    <defs>
      <radialGradient id='clight' cx='50%' cy='50%'>
        <stop offset='0%' stop-color='#f7d046' stop-opacity='0.3'/>
        <stop offset='100%' stop-color='#f7d046' stop-opacity='0'/>
      </radialGradient>
    </defs>
    <ellipse cx='120' cy='90' rx='180' ry='90' fill='url(#clight)'/>
    <g transform='translate(60,55)'>
      <polygon points='0,0 120,0 130,18 -10,18' fill='#1a1a1a' stroke='#f7d046' stroke-width='1.5'/>
      <polygon points='4,2 18,2 26,16 12,16' fill='#fff'/>
      <polygon points='30,2 44,2 52,16 38,16' fill='#fff'/>
      <polygon points='56,2 70,2 78,16 64,16' fill='#fff'/>
      <polygon points='82,2 96,2 104,16 90,16' fill='#fff'/>
      <rect x='-10' y='18' width='140' height='70' fill='#1a1a1a' stroke='#f7d046' stroke-width='1.5'/>
      <text x='60' y='48' text-anchor='middle' font-family='Impact,sans-serif' font-size='16' fill='#f7d046' letter-spacing='2'>SCENE</text>
      <text x='60' y='70' text-anchor='middle' font-family='Impact,sans-serif' font-size='10' fill='#fff' letter-spacing='2'>TAKE 1</text>
    </g>
    <text x='120' y='160' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#f7d046' letter-spacing='4'>QUIET ON SET</text>
    <text x='120' y='174' text-anchor='middle' font-family='monospace' font-size='8' fill='#aaa' letter-spacing='3'>ROLLING...</text>
  </svg>`,
};

/**
 * Choose a topic icon for a question by scanning the question text for
 * keyword cues. Order matters — first match wins, so more specific cues
 * (animated, awards) come before broader ones (actor, music).
 */
export function pickMovieTopic(questionText) {
  const q = questionText.toLowerCase();
  // Animation
  if (/\b(animat(ed|ion)|pixar|dreamworks)\b/.test(q)) return "animation";
  // Awards / Oscars
  if (/\b(oscar|academy award|best picture|won the|grammy)\b/.test(q))
    return "awards";
  // Music / score / soundtrack
  if (/\b(score|soundtrack|theme|composer|composed|music)\b/.test(q))
    return "music";
  // Quotes / lines
  if (/\b(quote|line|says|complete the|catchphrase|famous (line|phrase))\b/.test(q))
    return "quote";
  // Director
  if (/\b(direct(or|ed|ing|s))\b/.test(q)) return "director";
  // Era / year — only if a 4-digit year (1900–2099) is present
  if (/\b(19[0-9]{2}|20[0-2][0-9])\b/.test(q)) return "era";
  // Actor / cast
  if (/\b(play(s|ed)?|portray(s|ed)?|star(s|red|ring)?|actor|actress|cast|lead role)\b/.test(q))
    return "actor";
  return "defaultIcon";
}

export function getMovieTopicSvg(questionText) {
  return MOVIE_TOPIC_SVGS[pickMovieTopic(questionText)];
}
