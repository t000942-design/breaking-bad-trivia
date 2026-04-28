export const SVG = {
  movies: `<svg viewBox='0 0 600 280' xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <radialGradient id='spotlight' cx='50%' cy='50%'>
        <stop offset='0%' stop-color='#f7d046' stop-opacity='0.35'/>
        <stop offset='100%' stop-color='#f7d046' stop-opacity='0'/>
      </radialGradient>
    </defs>
    <rect width='600' height='280' fill='#0a0a14'/>
    <ellipse cx='300' cy='150' rx='280' ry='130' fill='url(#spotlight)'/>
    <g transform='translate(60,130)'>
      <circle r='48' fill='#1a1a1a' stroke='#888' stroke-width='2'/>
      <circle r='40' fill='none' stroke='#444' stroke-width='1'/>
      <circle r='6' fill='#888'/>
      <circle cx='-26' cy='0' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='26' cy='0' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='0' cy='-26' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='0' cy='26' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='-18' cy='-18' r='4' fill='none' stroke='#555' stroke-width='1'/>
      <circle cx='18' cy='-18' r='4' fill='none' stroke='#555' stroke-width='1'/>
      <circle cx='-18' cy='18' r='4' fill='none' stroke='#555' stroke-width='1'/>
      <circle cx='18' cy='18' r='4' fill='none' stroke='#555' stroke-width='1'/>
    </g>
    <g transform='translate(540,130)'>
      <circle r='48' fill='#1a1a1a' stroke='#888' stroke-width='2'/>
      <circle r='40' fill='none' stroke='#444' stroke-width='1'/>
      <circle r='6' fill='#888'/>
      <circle cx='-26' cy='0' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='26' cy='0' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='0' cy='-26' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
      <circle cx='0' cy='26' r='6' fill='none' stroke='#666' stroke-width='1.5'/>
    </g>
    <g transform='translate(170,70)'>
      <polygon points='0,0 260,0 280,32 -20,32' fill='#1a1a1a' stroke='#fff' stroke-width='2'/>
      <polygon points='8,2 32,2 52,30 28,30' fill='#fff'/>
      <polygon points='66,2 90,2 110,30 86,30' fill='#fff'/>
      <polygon points='124,2 148,2 168,30 144,30' fill='#fff'/>
      <polygon points='182,2 206,2 226,30 202,30' fill='#fff'/>
      <polygon points='240,2 264,2 280,30 260,30' fill='#fff'/>
      <rect x='0' y='32' width='260' height='130' fill='#1a1a1a' stroke='#fff' stroke-width='2'/>
      <text x='130' y='75' text-anchor='middle' font-family='Impact,sans-serif' font-size='28' fill='#f7d046' letter-spacing='3'>SCENE 01</text>
      <text x='130' y='110' text-anchor='middle' font-family='Impact,sans-serif' font-size='16' fill='#fff' letter-spacing='2'>TAKE 1</text>
      <line x1='30' y1='125' x2='230' y2='125' stroke='#666' stroke-width='1'/>
      <text x='130' y='148' text-anchor='middle' font-family='monospace' font-size='10' fill='#aaa'>DIRECTOR ___________</text>
    </g>
    <text x='300' y='250' text-anchor='middle' font-family='Impact,sans-serif' font-size='18' fill='#f7d046' letter-spacing='8'>HOLLYWOOD</text>
    <text x='300' y='268' text-anchor='middle' font-family='monospace' font-size='8' fill='#888' letter-spacing='4'>QUIET ON SET</text>
  </svg>`,

  hero: `<svg viewBox='0 0 600 220' xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#f7a23a'/>
        <stop offset='60%' stop-color='#c0392b'/>
        <stop offset='100%' stop-color='#3a1a0a'/>
      </linearGradient>
      <linearGradient id='sand' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#7a5a2a'/>
        <stop offset='100%' stop-color='#2a1a0a'/>
      </linearGradient>
    </defs>
    <rect width='600' height='140' fill='url(#sky)'/>
    <circle cx='480' cy='90' r='34' fill='#ffd54a' opacity='0.85'/>
    <rect y='140' width='600' height='80' fill='url(#sand)'/>
    <polygon points='0,140 90,110 160,135 230,105 310,140' fill='#3a2410' opacity='0.7'/>
    <polygon points='310,140 380,108 460,132 540,100 600,138 600,140' fill='#2a1808' opacity='0.8'/>
    <g transform='translate(240,100)'>
      <rect x='0' y='10' width='120' height='40' fill='#d8c896' stroke='#2a1808' stroke-width='1.5'/>
      <rect x='0' y='10' width='120' height='6' fill='#a08866'/>
      <circle cx='18' cy='52' r='8' fill='#222'/>
      <circle cx='102' cy='52' r='8' fill='#222'/>
      <rect x='95' y='14' width='22' height='14' fill='#5fb8e6' opacity='0.7'/>
      <rect x='5' y='14' width='80' height='14' fill='#5fb8e6' opacity='0.7'/>
    </g>
    <g transform='translate(120,80)'>
      <ellipse cx='30' cy='60' rx='22' ry='6' fill='#000' opacity='0.4'/>
      <rect x='20' y='10' width='20' height='50' fill='#222' stroke='#5ce14e' stroke-width='1.5'/>
      <rect x='14' y='4' width='32' height='10' fill='#1a1a1a' stroke='#5ce14e' stroke-width='1'/>
      <rect x='12' y='-2' width='36' height='8' fill='#000'/>
      <circle cx='25' cy='28' r='3' fill='#fff'/>
      <circle cx='35' cy='28' r='3' fill='#fff'/>
    </g>
    <text x='300' y='200' text-anchor='middle' font-family='Impact,sans-serif' font-size='14' fill='#5ce14e' letter-spacing='6'>NEW MEXICO</text>
  </svg>`,

  walter: `<svg viewBox='0 0 200 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='200' height='180' fill='#0a120a'/>
    <ellipse cx='100' cy='178' rx='70' ry='6' fill='#000' opacity='0.5'/>
    <path d='M70 60 Q70 30 100 30 Q130 30 130 60 L130 110 Q130 130 100 130 Q70 130 70 110 Z' fill='#e8c8a8'/>
    <path d='M70 60 Q70 32 100 32 Q130 32 130 60 L130 70 Q120 60 100 60 Q80 60 70 70 Z' fill='#888'/>
    <ellipse cx='84' cy='80' rx='10' ry='8' fill='none' stroke='#222' stroke-width='2'/>
    <ellipse cx='116' cy='80' rx='10' ry='8' fill='none' stroke='#222' stroke-width='2'/>
    <line x1='94' y1='80' x2='106' y2='80' stroke='#222' stroke-width='2'/>
    <circle cx='84' cy='80' r='2' fill='#222'/>
    <circle cx='116' cy='80' r='2' fill='#222'/>
    <path d='M85 105 Q100 115 115 105 L115 120 Q100 124 85 120 Z' fill='#666'/>
    <rect x='75' y='130' width='50' height='50' fill='#3a5a7a'/>
    <polygon points='75,130 100,150 125,130 125,140 100,158 75,140' fill='#2a4a6a'/>
  </svg>`,

  jesse: `<svg viewBox='0 0 200 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='200' height='180' fill='#0a120a'/>
    <g transform='translate(50,30)'>
      <ellipse cx='50' cy='130' rx='40' ry='5' fill='#000' opacity='0.5'/>
      <path d='M60 20 L60 50 L20 110 Q20 122 35 122 L65 122 Q80 122 80 110 L40 50 L40 20 Z' fill='#5ce14e' opacity='0.85' stroke='#5ce14e' stroke-width='2'/>
      <rect x='35' y='14' width='30' height='8' fill='#333' stroke='#5ce14e'/>
      <circle cx='35' cy='95' r='4' fill='#fff' opacity='0.8'/>
      <circle cx='55' cy='105' r='3' fill='#fff' opacity='0.7'/>
      <circle cx='45' cy='80' r='2' fill='#fff' opacity='0.9'/>
      <circle cx='30' cy='70' r='2' fill='#fff' opacity='0.6'><animate attributeName='cy' values='70;40;70' dur='2s' repeatCount='indefinite'/></circle>
      <circle cx='50' cy='65' r='1.5' fill='#fff' opacity='0.6'><animate attributeName='cy' values='65;30;65' dur='2.4s' repeatCount='indefinite'/></circle>
    </g>
  </svg>`,

  purityReport: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <rect x='65' y='25' width='110' height='140' fill='#e8d8a8' stroke='#5a4a30' stroke-width='2'/>
    <rect x='95' y='18' width='50' height='14' fill='#888' stroke='#444'/>
    <rect x='112' y='14' width='16' height='8' fill='#aaa'/>
    <text x='120' y='48' text-anchor='middle' font-family='monospace' font-size='9' fill='#5a4a30' letter-spacing='1'>LAB ANALYSIS</text>
    <line x1='75' y1='55' x2='165' y2='55' stroke='#5a4a30' stroke-width='1'/>
    <line x1='75' y1='70' x2='165' y2='70' stroke='#888' stroke-width='0.5' stroke-dasharray='2,2'/>
    <text x='80' y='80' font-family='monospace' font-size='8' fill='#5a4a30'>SAMPLE: A-BQ-23</text>
    <line x1='75' y1='90' x2='165' y2='90' stroke='#888' stroke-width='0.5' stroke-dasharray='2,2'/>
    <text x='80' y='100' font-family='monospace' font-size='8' fill='#5a4a30'>COLOR: BLUE</text>
    <line x1='75' y1='110' x2='165' y2='110' stroke='#888' stroke-width='0.5' stroke-dasharray='2,2'/>
    <text x='80' y='120' font-family='monospace' font-size='8' fill='#5a4a30'>PURITY: __._%</text>
    <text x='150' y='122' font-family='Impact,sans-serif' font-size='18' fill='#c0392b'>?</text>
    <line x1='75' y1='130' x2='165' y2='130' stroke='#888' stroke-width='0.5' stroke-dasharray='2,2'/>
    <text x='80' y='140' font-family='monospace' font-size='7' fill='#5a4a30'>VERIFIED · DEA LAB</text>
    <text x='80' y='152' font-family='monospace' font-size='7' fill='#5a4a30'>SCHRADER, H.</text>
    <g transform='translate(195,140)' opacity='0.6'>
      <path d='M0 0 L8 -20 L16 0 L20 0 L20 12 Q20 18 10 18 Q0 18 0 12 Z' fill='none' stroke='#5fb8e6' stroke-width='1'/>
    </g>
  </svg>`,

  uncertainty: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#1a3a2a'/>
    <rect x='8' y='8' width='224' height='164' fill='#2a4a3a' stroke='#5a4a30' stroke-width='5'/>
    <text x='30' y='50' font-family='serif' font-size='22' fill='#fff' font-style='italic'>Δx · Δp ≥ ℏ/2</text>
    <text x='30' y='85' font-family='serif' font-size='13' fill='#5fb8e6'>ψ(x, t) = ?</text>
    <text x='30' y='110' font-family='serif' font-size='13' fill='#f7d046'>E = mc²</text>
    <text x='30' y='135' font-family='serif' font-size='13' fill='#5fb8e6'>iℏ ∂ψ/∂t</text>
    <g transform='translate(180,95)'>
      <ellipse cx='0' cy='0' rx='28' ry='9' fill='none' stroke='#f7d046' stroke-width='1.5'/>
      <ellipse cx='0' cy='0' rx='28' ry='9' fill='none' stroke='#f7d046' stroke-width='1.5' transform='rotate(60)'/>
      <ellipse cx='0' cy='0' rx='28' ry='9' fill='none' stroke='#f7d046' stroke-width='1.5' transform='rotate(120)'/>
      <circle cx='0' cy='0' r='4' fill='#f7d046'/>
      <circle cx='28' cy='0' r='2' fill='#5ce14e'/>
      <circle cx='-14' cy='24' r='2' fill='#5fb8e6'/>
      <circle cx='-14' cy='-24' r='2' fill='#c0392b'/>
    </g>
    <text x='180' y='150' text-anchor='middle' font-family='Impact,sans-serif' font-size='10' fill='#5ce14e' letter-spacing='2'>QUANTUM PHYSICS</text>
  </svg>`,

  minerals: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <rect x='25' y='45' width='190' height='115' fill='#3a2a1a' stroke='#7a5a2a' stroke-width='3'/>
    <line x1='120' y1='45' x2='120' y2='160' stroke='#7a5a2a' stroke-width='1'/>
    <line x1='25' y1='100' x2='215' y2='100' stroke='#7a5a2a' stroke-width='1'/>
    <polygon points='55,85 70,65 90,85 80,95 60,95' fill='#888' stroke='#222' stroke-width='1'/>
    <text x='72' y='110' text-anchor='middle' font-family='monospace' font-size='6' fill='#d8b890'>QUARTZ</text>
    <polygon points='150,80 170,60 188,80 180,95 158,95' fill='#a06a3a' stroke='#222'/>
    <text x='168' y='110' text-anchor='middle' font-family='monospace' font-size='6' fill='#d8b890'>JASPER</text>
    <polygon points='55,135 75,118 95,135 85,150 60,150' fill='#5fb8e6' stroke='#222'/>
    <text x='75' y='160' text-anchor='middle' font-family='monospace' font-size='6' fill='#d8b890'>AZURITE</text>
    <polygon points='150,135 170,115 192,135 180,150 158,150' fill='#9a4a8a' stroke='#222'/>
    <text x='170' y='160' text-anchor='middle' font-family='monospace' font-size='6' fill='#d8b890'>AMETHYST</text>
    <text x='120' y='30' text-anchor='middle' font-family='Impact,sans-serif' font-size='13' fill='#f7d046' letter-spacing='3'>SCHRADER COLLECTION</text>
    <text x='120' y='178' text-anchor='middle' font-family='Impact,sans-serif' font-size='10' fill='#c0392b' letter-spacing='2'>NOT ROCKS!!</text>
  </svg>`,

  laundromat: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <ellipse cx='80' cy='35' rx='14' ry='7' fill='#fff' opacity='0.4'>
      <animate attributeName='cy' values='35;15;35' dur='3s' repeatCount='indefinite'/>
    </ellipse>
    <ellipse cx='110' cy='30' rx='10' ry='5' fill='#fff' opacity='0.5'>
      <animate attributeName='cy' values='30;10;30' dur='2.5s' repeatCount='indefinite'/>
    </ellipse>
    <ellipse cx='160' cy='35' rx='12' ry='6' fill='#fff' opacity='0.4'>
      <animate attributeName='cy' values='35;12;35' dur='3.4s' repeatCount='indefinite'/>
    </ellipse>
    <rect x='30' y='65' width='180' height='100' fill='#7a6a4a' stroke='#3a2a1a' stroke-width='2'/>
    <rect x='30' y='65' width='180' height='14' fill='#5a4a2a'/>
    <text x='120' y='76' text-anchor='middle' font-family='Impact,sans-serif' font-size='10' fill='#f7d046' letter-spacing='2'>LAVANDERÍA · ¿?</text>
    <rect x='105' y='115' width='30' height='50' fill='#3a2a1a'/>
    <circle cx='130' cy='140' r='1' fill='#f7d046'/>
    <rect x='45' y='95' width='35' height='30' fill='#5fb8e6' opacity='0.6' stroke='#3a2a1a'/>
    <circle cx='62' cy='110' r='9' fill='#fff' stroke='#444'/>
    <circle cx='62' cy='110' r='5' fill='none' stroke='#444' stroke-dasharray='2,2'>
      <animateTransform attributeName='transform' type='rotate' from='0 62 110' to='360 62 110' dur='3s' repeatCount='indefinite'/>
    </circle>
    <rect x='160' y='95' width='35' height='30' fill='#5fb8e6' opacity='0.6' stroke='#3a2a1a'/>
    <circle cx='177' cy='110' r='9' fill='#fff' stroke='#444'/>
    <circle cx='177' cy='110' r='5' fill='none' stroke='#444' stroke-dasharray='2,2'>
      <animateTransform attributeName='transform' type='rotate' from='0 177 110' to='360 177 110' dur='4s' repeatCount='indefinite'/>
    </circle>
    <rect x='45' y='130' width='35' height='30' fill='#1a1a1a' stroke='#3a2a1a'/>
    <rect x='160' y='130' width='35' height='30' fill='#1a1a1a' stroke='#3a2a1a'/>
    <text x='120' y='176' text-anchor='middle' font-family='monospace' font-size='8' fill='#5ce14e' letter-spacing='2'>INDUSTRIAL · ALBUQUERQUE</text>
  </svg>`,

  tombstone: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <circle cx='40' cy='30' r='1' fill='#fff'/>
    <circle cx='200' cy='40' r='1' fill='#fff'/>
    <circle cx='220' cy='80' r='1' fill='#fff' opacity='0.7'/>
    <circle cx='30' cy='100' r='1' fill='#fff' opacity='0.6'/>
    <circle cx='180' cy='25' r='1' fill='#fff' opacity='0.8'/>
    <path d='M75 60 Q75 35 120 35 Q165 35 165 60 L165 165 L75 165 Z' fill='#7a7a7a' stroke='#3a3a3a' stroke-width='2'/>
    <path d='M85 65 Q85 45 120 45 Q155 45 155 65 L155 155 L85 155 Z' fill='none' stroke='#5a5a5a' stroke-width='1'/>
    <text x='120' y='80' text-anchor='middle' font-family='Impact,sans-serif' font-size='11' fill='#3a3a3a' letter-spacing='2'>R.I.P.</text>
    <text x='120' y='105' text-anchor='middle' font-family='Impact,sans-serif' font-size='14' fill='#3a3a3a'>GUSTAVO</text>
    <text x='120' y='122' text-anchor='middle' font-family='Impact,sans-serif' font-size='14' fill='#3a3a3a'>FRING</text>
    <text x='120' y='148' text-anchor='middle' font-family='Impact,sans-serif' font-size='22' fill='#c0392b'>?</text>
    <rect y='162' width='240' height='18' fill='#1a2a10'/>
    <path d='M0 165 L20 162 L40 167 L65 163 L85 168 L120 162 L155 167 L180 163 L210 167 L240 163 L240 180 L0 180 Z' fill='#2a3a1a'/>
  </svg>`,

  knock: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <rect x='95' y='25' width='95' height='150' fill='#5a3a1a' stroke='#3a1a0a' stroke-width='2'/>
    <rect x='105' y='40' width='32' height='40' fill='#3a1a0a'/>
    <rect x='148' y='40' width='32' height='40' fill='#3a1a0a'/>
    <rect x='105' y='95' width='32' height='40' fill='#3a1a0a'/>
    <rect x='148' y='95' width='32' height='40' fill='#3a1a0a'/>
    <circle cx='178' cy='115' r='2.5' fill='#f7d046'/>
    <circle cx='178' cy='115' r='1' fill='#000'/>
    <g transform='translate(45,75)'>
      <path d='M5 18 Q5 10 12 10 L36 10 Q42 10 42 16 L42 32 Q42 38 36 38 L12 38 Q5 38 5 30 Z' fill='#1a1a1a' stroke='#5ce14e' stroke-width='2'/>
      <path d='M42 18 L52 18 Q56 18 56 22 L56 28 Q56 32 52 32 L42 32 Z' fill='#1a1a1a' stroke='#5ce14e' stroke-width='2'/>
      <line x1='12' y1='18' x2='36' y2='18' stroke='#5ce14e' stroke-width='1' opacity='0.5'/>
      <line x1='12' y1='25' x2='36' y2='25' stroke='#5ce14e' stroke-width='1' opacity='0.5'/>
      <line x1='12' y1='32' x2='36' y2='32' stroke='#5ce14e' stroke-width='1' opacity='0.5'/>
    </g>
    <g stroke='#f7d046' stroke-width='3' stroke-linecap='round'>
      <line x1='100' y1='90' x2='95' y2='85'>
        <animate attributeName='opacity' values='1;0.2;1' dur='1s' repeatCount='indefinite'/>
      </line>
      <line x1='100' y1='100' x2='90' y2='100'>
        <animate attributeName='opacity' values='1;0.2;1' dur='1s' repeatCount='indefinite'/>
      </line>
      <line x1='100' y1='110' x2='95' y2='115'>
        <animate attributeName='opacity' values='1;0.2;1' dur='1s' repeatCount='indefinite'/>
      </line>
    </g>
    <text x='120' y='18' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#c0392b' letter-spacing='4'>WHO IS IT?</text>
  </svg>`,

  businessCard: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <g transform='rotate(-6 120 90)'>
      <rect x='40' y='45' width='160' height='95' fill='#f7d046' stroke='#5a4a10' stroke-width='2'/>
      <rect x='44' y='49' width='152' height='87' fill='none' stroke='#0a3a6a' stroke-width='1'/>
      <text x='120' y='72' text-anchor='middle' font-family='Impact,sans-serif' font-size='14' fill='#0a3a6a' letter-spacing='2'>ATTORNEY AT LAW</text>
      <text x='120' y='100' text-anchor='middle' font-family='Impact,sans-serif' font-size='30' fill='#c0392b' letter-spacing='3'>?  ?  ?</text>
      <text x='120' y='118' text-anchor='middle' font-family='monospace' font-size='9' fill='#0a3a6a'>1-505-503-4455</text>
      <text x='120' y='130' text-anchor='middle' font-family='monospace' font-size='7' fill='#0a3a6a'>JUSTICE FOR ALL · ABQ</text>
    </g>
    <text x='120' y='168' text-anchor='middle' font-family='Impact,sans-serif' font-size='10' fill='#5ce14e' letter-spacing='3'>WHAT'S HIS REAL NAME?</text>
  </svg>`,

  hospital: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg'>
    <rect width='240' height='180' fill='#0a120a'/>
    <line x1='30' y1='60' x2='210' y2='60' stroke='#5ce14e' stroke-width='1' opacity='0.4'/>
    <path d='M30 60 L60 60 L65 50 L72 70 L78 55 L120 55 L126 40 L132 75 L138 55 L210 55' fill='none' stroke='#5ce14e' stroke-width='1.5'/>
    <rect x='40' y='100' width='160' height='35' fill='#888' stroke='#444' stroke-width='1'/>
    <rect x='45' y='80' width='150' height='25' fill='#fff' opacity='0.85'/>
    <ellipse cx='65' cy='90' rx='14' ry='7' fill='#e8c8a8'/>
    <ellipse cx='65' cy='86' rx='10' ry='5' fill='#3a2a1a'/>
    <rect x='80' y='86' width='100' height='18' fill='#5fb8e6' opacity='0.65'/>
    <rect x='40' y='128' width='160' height='8' fill='#444'/>
    <line x1='200' y1='40' x2='200' y2='115' stroke='#888' stroke-width='2'/>
    <rect x='194' y='45' width='12' height='30' fill='#fff' opacity='0.85' stroke='#444'/>
    <rect x='196' y='48' width='8' height='20' fill='#5ce14e' opacity='0.7'>
      <animate attributeName='height' values='20;14;20' dur='2s' repeatCount='indefinite'/>
    </rect>
    <line x1='200' y1='75' x2='180' y2='90' stroke='#aaa' stroke-width='1'/>
    <text x='120' y='25' text-anchor='middle' font-family='Impact,sans-serif' font-size='12' fill='#c0392b' letter-spacing='3'>POISONED CHILD · PEDIATRIC ICU</text>
    <text x='120' y='168' text-anchor='middle' font-family='monospace' font-size='9' fill='#888' letter-spacing='2'>SUSPECT TOXIN: ??</text>
  </svg>`,
};
