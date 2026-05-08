import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.resolve(
  __dirname,
  '../public/assets/device-renders/source'
);

mkdirSync(sourceDir, { recursive: true });

const stagePresets = {
  portrait: {
    width: 1200,
    height: 1500,
    pedestal: { x: 210, y: 1132, width: 780, height: 138, radius: 30 },
  },
  wide: {
    width: 1600,
    height: 1000,
    pedestal: { x: 260, y: 760, width: 1080, height: 120, radius: 28 },
  },
};

function scene({ preset, file, device, extraDefs = '' }) {
  const { width, height, pedestal } = stagePresets[preset];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/>
      <stop offset="1" stop-color="#f2f2f0"/>
    </linearGradient>
    <radialGradient id="spotlight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${width * 0.28} ${height * 0.18}) rotate(40) scale(${width * 0.8} ${height * 0.68})">
      <stop stop-color="#ffffff" stop-opacity="0.98"/>
      <stop offset="1" stop-color="#f1f1ef" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="plinthSide" x1="${pedestal.x}" y1="${pedestal.y}" x2="${pedestal.x + pedestal.width}" y2="${pedestal.y + pedestal.height}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f7f7f5"/>
      <stop offset="1" stop-color="#dfdfdb"/>
    </linearGradient>
    <linearGradient id="plinthTop" x1="${pedestal.x}" y1="${pedestal.y}" x2="${pedestal.x}" y2="${pedestal.y + pedestal.height}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/>
      <stop offset="1" stop-color="#efefec"/>
    </linearGradient>
    <filter id="shadowSoft" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000000" flood-opacity="0.08"/>
    </filter>
    <filter id="shadowDevice" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="22" stdDeviation="20" flood-color="#000000" flood-opacity="0.18"/>
    </filter>
    <filter id="shadowHighlight" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.1"/>
    </filter>
    ${extraDefs}
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#spotlight)"/>
  <ellipse cx="${width / 2}" cy="${pedestal.y + pedestal.height + 30}" rx="${pedestal.width * 0.42}" ry="${pedestal.height * 0.52}" fill="#000000" fill-opacity="0.08" filter="url(#shadowSoft)"/>
  <g filter="url(#shadowSoft)">
    <rect x="${pedestal.x}" y="${pedestal.y}" width="${pedestal.width}" height="${pedestal.height}" rx="${pedestal.radius}" fill="url(#plinthSide)"/>
    <rect x="${pedestal.x + 10}" y="${pedestal.y + 8}" width="${pedestal.width - 20}" height="${pedestal.height - 20}" rx="${Math.max(12, pedestal.radius - 8)}" fill="url(#plinthTop)"/>
  </g>
  <g filter="url(#shadowDevice)">
    ${device}
  </g>
</svg>`;

  writeFileSync(path.join(sourceDir, file), svg);
}

function circle(cx, cy, r, fill, extra = '') {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
}

function rect(x, y, width, height, radius, fill, extra = '') {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" ${extra}/>`;
}

function dpad(cx, cy, size, fill) {
  const arm = size * 0.38;
  const radius = size * 0.12;
  return `
    <rect x="${cx - arm / 2}" y="${cy - size / 2}" width="${arm}" height="${size}" rx="${radius}" fill="${fill}"/>
    <rect x="${cx - size / 2}" y="${cy - arm / 2}" width="${size}" height="${arm}" rx="${radius}" fill="${fill}"/>
  `;
}

function pill(x, y, width, height, fill, opacity = 1) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${height / 2}" fill="${fill}" fill-opacity="${opacity}"/>`;
}

scene({
  preset: 'portrait',
  file: 'game-boy-dmg.svg',
  extraDefs: `
    <linearGradient id="gbShell" x1="376" y1="264" x2="828" y2="1014" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d9d7ce"/>
      <stop offset="1" stop-color="#c5c2b7"/>
    </linearGradient>
    <linearGradient id="gbScreen" x1="444" y1="358" x2="756" y2="628" gradientUnits="userSpaceOnUse">
      <stop stop-color="#afc693"/>
      <stop offset="1" stop-color="#73856a"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 -10)">
      <rect x="382" y="252" width="436" height="792" rx="54" fill="url(#gbShell)"/>
      <rect x="382" y="252" width="436" height="792" rx="54" fill="#ffffff" fill-opacity="0.2"/>
      <rect x="448" y="336" width="304" height="340" rx="28" fill="#51535a"/>
      <rect x="492" y="392" width="216" height="180" rx="12" fill="url(#gbScreen)"/>
      <rect x="476" y="724" width="248" height="8" rx="4" fill="#8f8d86" fill-opacity="0.6"/>
      ${dpad(506, 802, 112, '#4f5056')}
      ${circle(658, 790, 34, '#92385b')}
      ${circle(724, 834, 34, '#92385b')}
      ${pill(514, 894, 70, 18, '#8b8a83', 0.85)}
      ${pill(610, 894, 70, 18, '#8b8a83', 0.85)}
      ${pill(668, 920, 90, 10, '#8e8b84', 0.65)}
      ${Array.from({ length: 6 }, (_, index) =>
        rect(
          698 + index * 18,
          934 + index * 3,
          10,
          62,
          5,
          '#8e8b84',
          'fill-opacity="0.75"'
        )
      ).join('')}
      ${pill(462, 286, 146, 12, '#ffffff', 0.26)}
    </g>
  `,
});

scene({
  preset: 'portrait',
  file: 'game-boy-color.svg',
  extraDefs: `
    <linearGradient id="gbcShell" x1="374" y1="272" x2="818" y2="1034" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fd9d2"/>
      <stop offset="1" stop-color="#3eb4af"/>
    </linearGradient>
    <linearGradient id="gbcScreen" x1="450" y1="370" x2="748" y2="624" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d7ecff"/>
      <stop offset="1" stop-color="#8ea4b8"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 -8)">
      <rect x="388" y="262" width="424" height="768" rx="74" fill="url(#gbcShell)"/>
      <rect x="388" y="262" width="424" height="768" rx="74" fill="#ffffff" fill-opacity="0.16"/>
      <rect x="446" y="344" width="308" height="274" rx="24" fill="#dff8f5" fill-opacity="0.22"/>
      <rect x="478" y="380" width="244" height="176" rx="14" fill="url(#gbcScreen)"/>
      ${dpad(494, 780, 104, '#2f6d70')}
      ${circle(664, 772, 32, '#8b3c8c')}
      ${circle(728, 816, 32, '#8b3c8c')}
      ${pill(536, 878, 64, 16, '#2f6d70', 0.7)}
      ${pill(624, 878, 64, 16, '#2f6d70', 0.7)}
      ${pill(460, 302, 118, 10, '#ffffff', 0.28)}
      ${pill(586, 320, 154, 10, '#ffffff', 0.16)}
      ${Array.from({ length: 6 }, (_, index) =>
        circle(470 + index * 44, 650, 4, '#2f6d70')
      ).join('')}
      ${Array.from({ length: 7 }, (_, index) =>
        rect(
          700 + index * 14,
          918 + index * 3,
          8,
          56,
          4,
          '#2f6d70',
          'fill-opacity="0.52"'
        )
      ).join('')}
    </g>
  `,
});

scene({
  preset: 'wide',
  file: 'game-boy-advance.svg',
  extraDefs: `
    <linearGradient id="gbaShell" x1="382" y1="338" x2="1214" y2="752" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7378bc"/>
      <stop offset="1" stop-color="#4f5597"/>
    </linearGradient>
    <linearGradient id="gbaScreen" x1="610" y1="402" x2="986" y2="608" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d5e9f7"/>
      <stop offset="1" stop-color="#88a3b8"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 -8)">
      <rect x="352" y="328" width="896" height="406" rx="192" fill="url(#gbaShell)"/>
      <rect x="352" y="328" width="896" height="406" rx="192" fill="#ffffff" fill-opacity="0.1"/>
      <rect x="556" y="388" width="488" height="244" rx="34" fill="#c8d5e1" fill-opacity="0.3"/>
      <rect x="604" y="424" width="392" height="168" rx="22" fill="url(#gbaScreen)"/>
      ${dpad(536, 540, 108, '#32375c')}
      ${circle(1100, 516, 30, '#c95ea1')}
      ${circle(1152, 564, 30, '#c95ea1')}
      ${circle(1014, 572, 18, '#32375c')}
      ${pill(720, 640, 74, 16, '#32375c', 0.7)}
      ${pill(812, 640, 74, 16, '#32375c', 0.7)}
      ${pill(430, 344, 164, 16, '#ffffff', 0.22)}
      ${pill(954, 350, 170, 16, '#ffffff', 0.16)}
    </g>
  `,
});

scene({
  preset: 'wide',
  file: 'playstation-portable.svg',
  extraDefs: `
    <linearGradient id="pspShell" x1="348" y1="342" x2="1250" y2="718" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2e3138"/>
      <stop offset="1" stop-color="#111316"/>
    </linearGradient>
    <linearGradient id="pspGloss" x1="404" y1="348" x2="1196" y2="650" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="0.6" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 -12)">
      <rect x="340" y="338" width="920" height="360" rx="176" fill="url(#pspShell)"/>
      <rect x="340" y="338" width="920" height="360" rx="176" fill="url(#pspGloss)"/>
      <rect x="516" y="398" width="568" height="228" rx="26" fill="#0d1013"/>
      <rect x="548" y="430" width="504" height="164" rx="12" fill="#1f252b"/>
      ${dpad(486, 528, 98, '#c8cacf')}
      ${circle(438, 598, 24, '#8f949b')}
      ${circle(1132, 488, 16, '#c8cacf')}
      ${circle(1182, 538, 16, '#c8cacf')}
      ${circle(1082, 538, 16, '#c8cacf')}
      ${circle(1132, 588, 16, '#c8cacf')}
      ${circle(1162, 612, 10, '#8f949b')}
      ${pill(720, 648, 74, 14, '#d1d5da', 0.55)}
      ${pill(810, 648, 74, 14, '#d1d5da', 0.55)}
      ${pill(412, 370, 198, 14, '#ffffff', 0.16)}
    </g>
  `,
});

scene({
  preset: 'portrait',
  file: 'nintendo-ds.svg',
  extraDefs: `
    <linearGradient id="dsShell" x1="334" y1="236" x2="866" y2="1034" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fbfbfb"/>
      <stop offset="1" stop-color="#dadada"/>
    </linearGradient>
    <linearGradient id="dsScreen" x1="430" y1="312" x2="770" y2="530" gradientUnits="userSpaceOnUse">
      <stop stop-color="#e3eef7"/>
      <stop offset="1" stop-color="#8fa4b6"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 8)">
      <rect x="344" y="256" width="512" height="326" rx="44" fill="url(#dsShell)"/>
      <rect x="344" y="256" width="512" height="326" rx="44" fill="#ffffff" fill-opacity="0.22"/>
      <rect x="408" y="314" width="384" height="198" rx="20" fill="#bcc7d2"/>
      <rect x="434" y="338" width="332" height="150" rx="12" fill="url(#dsScreen)"/>
      <rect x="322" y="584" width="556" height="366" rx="54" fill="url(#dsShell)"/>
      <rect x="322" y="584" width="556" height="366" rx="54" fill="#ffffff" fill-opacity="0.18"/>
      <rect x="394" y="646" width="412" height="222" rx="24" fill="#e8eef4"/>
      <rect x="426" y="678" width="348" height="158" rx="14" fill="url(#dsScreen)"/>
      ${dpad(458, 824, 96, '#71757a')}
      ${circle(738, 792, 26, '#9aa1a9')}
      ${circle(782, 836, 26, '#9aa1a9')}
      ${circle(660, 846, 18, '#7e848b')}
      ${pill(520, 900, 62, 14, '#8a8f96', 0.7)}
      ${pill(600, 900, 62, 14, '#8a8f96', 0.7)}
      ${pill(420, 286, 158, 12, '#ffffff', 0.28)}
      ${pill(394, 616, 182, 12, '#ffffff', 0.26)}
      ${rect(560, 566, 80, 34, 17, '#f0f0f0')}
    </g>
  `,
});

scene({
  preset: 'wide',
  file: 'nintendo-3ds.svg',
  extraDefs: `
    <linearGradient id="threeDSShell" x1="354" y1="262" x2="1224" y2="742" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4cc6d8"/>
      <stop offset="1" stop-color="#118ba6"/>
    </linearGradient>
    <linearGradient id="threeDSScreen" x1="454" y1="336" x2="1128" y2="620" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d9ecff"/>
      <stop offset="1" stop-color="#819bb0"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 -2)">
      <rect x="396" y="250" width="808" height="248" rx="46" fill="url(#threeDSShell)"/>
      <rect x="396" y="250" width="808" height="248" rx="46" fill="#ffffff" fill-opacity="0.14"/>
      <rect x="470" y="300" width="660" height="146" rx="18" fill="#0d2732"/>
      <rect x="512" y="326" width="576" height="96" rx="10" fill="url(#threeDSScreen)"/>
      <rect x="360" y="500" width="880" height="232" rx="52" fill="url(#threeDSShell)"/>
      <rect x="360" y="500" width="880" height="232" rx="52" fill="#ffffff" fill-opacity="0.12"/>
      <rect x="430" y="552" width="420" height="132" rx="18" fill="#eef5fb"/>
      <rect x="458" y="576" width="364" height="84" rx="10" fill="url(#threeDSScreen)"/>
      ${circle(980, 590, 26, '#ffffff')}
      ${circle(1026, 634, 26, '#ffffff')}
      ${circle(936, 634, 26, '#ffffff')}
      ${circle(980, 678, 26, '#ffffff')}
      ${dpad(470, 638, 92, '#0f5f70')}
      ${circle(590, 662, 28, '#0f5f70')}
      ${pill(720, 680, 82, 14, '#0f5f70', 0.65)}
      ${pill(816, 680, 82, 14, '#0f5f70', 0.65)}
      ${pill(450, 284, 204, 12, '#ffffff', 0.22)}
      ${rect(730, 478, 140, 36, 18, '#fefefe')}
    </g>
  `,
});

scene({
  preset: 'wide',
  file: 'nintendo-switch.svg',
  extraDefs: `
    <linearGradient id="switchScreen" x1="566" y1="282" x2="1072" y2="672" gradientUnits="userSpaceOnUse">
      <stop stop-color="#31363f"/>
      <stop offset="1" stop-color="#111418"/>
    </linearGradient>
    <linearGradient id="joyConBlue" x1="392" y1="286" x2="564" y2="676" gradientUnits="userSpaceOnUse">
      <stop stop-color="#42d6ff"/>
      <stop offset="1" stop-color="#0e9cd2"/>
    </linearGradient>
    <linearGradient id="joyConRed" x1="1060" y1="286" x2="1232" y2="676" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ff8072"/>
      <stop offset="1" stop-color="#e6453b"/>
    </linearGradient>
  `,
  device: `
    <g transform="translate(0 -6)">
      <rect x="390" y="286" width="176" height="404" rx="84" fill="url(#joyConBlue)"/>
      <rect x="566" y="298" width="498" height="380" rx="40" fill="#14181c"/>
      <rect x="598" y="332" width="434" height="312" rx="18" fill="url(#switchScreen)"/>
      <rect x="1064" y="286" width="176" height="404" rx="84" fill="url(#joyConRed)"/>
      ${circle(472, 396, 28, '#0c7ea7')}
      ${dpad(472, 566, 92, '#f4fbff')}
      ${circle(1178, 396, 28, '#a91d1c')}
      ${circle(1148, 534, 18, '#fef8f6')}
      ${circle(1208, 534, 18, '#fef8f6')}
      ${circle(1178, 504, 18, '#fef8f6')}
      ${circle(1178, 564, 18, '#fef8f6')}
      ${circle(478, 642, 16, '#f4fbff')}
      ${circle(1178, 642, 16, '#fef8f6')}
      ${pill(614, 312, 190, 12, '#ffffff', 0.14)}
      ${pill(710, 646, 210, 8, '#ffffff', 0.08)}
    </g>
  `,
});

console.log(`Generated SVG device renders in ${sourceDir}`);
