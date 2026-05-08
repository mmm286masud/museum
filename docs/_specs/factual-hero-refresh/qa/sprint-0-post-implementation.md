# Post-Implementation QA: Fact Check And Hero Refresh Sprint 0

## Result

Pass, with one browser tooling limitation noted below.

## Implementation QA

- `app/page.tsx` now opens with a stronger hero headline and support copy:
  `PLAY, PRESERVED.`
- `public/assets/hero/public-domain-handheld-gaming-consoles.svg` adds a local
  public-domain abstract/cartoon image of children holding handheld systems.
- `app/globals.css` now gives the hero stage a more energetic golden-ratio
  composition while continuing to use existing phi-derived spacing,
  typography, frame, and grid tokens.
- The hero still preserves the original Game Boy as the opening artifact.
- The local hero image is sourced from PublicDomainVectors/OpenClipart. The
  source page describes the license as Public Domain and says the work can be
  copied, modified, distributed, and performed without asking permission.
- The Nintendo 3DS secondary feature now uses
  `public/assets/device-renders/nintendo-3ds.png` instead of the previous 2DS
  photo, with matching alt text and artifact note.
- `docs/content/exhibits/major-handheld-chronology.md` now clarifies that the
  PSP's 2004 date refers to the Japan launch.

## Fact Check Summary

- Nintendo Game Boy: source-backed as a 1989 Nintendo milestone. Nintendo's
  Game Boy technical page supports the monochrome LCD framing and roughly
  15-hour battery-life detail.
- Game Boy Color: source-backed as a 1998 Nintendo milestone. Nintendo support
  confirms the color screen and compatibility with previous Game Boy games.
- Game Boy Advance: source-backed as a 2001 Nintendo milestone. Nintendo's GBA
  history and technical details support the 32-bit performance framing.
- PlayStation Portable: source-backed as a PSP-1000 Series 2004 product, with
  Sony clarifying its debut on December 12, 2004 in Japan and later 2005
  regional launches. Sony's PSP specifications support the widescreen display
  and UMD media claims.
- Nintendo DS: source-backed as a 2004 Nintendo milestone. Nintendo's DS page
  supports the dual-screen and touch-screen claims.
- Nintendo 3DS: source-backed as a 2011 Nintendo milestone. Nintendo sources
  support glasses-free 3D and 3D depth-slider framing.
- Nintendo Switch: source-backed as a 2017 Nintendo milestone. Nintendo sources
  support the docked TV, tabletop, and handheld play-mode framing.

Sources used:

- `https://www.nintendo.com/us/about/?cache_buster=20070522103532`
- `https://www.nintendo.com/en-za/Hardware/Nintendo-History/Game-Boy/Game-Boy-627031.html`
- `https://www.nintendo.com/en-gb/Support/Legacy-system/Game-Boy-Color-619589.html`
- `https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Game-Boy-Advance/Game-Boy-Advance-627139.html`
- `https://sonyinteractive.com/en/press-releases/2004/sony-computer-entertainment-inc-announces-product-specifications-of-handheld-video-game-system-playstationportable-psp/`
- `https://www.sony.com/SonyInfo/IR/news/sce2_G.pdf`
- `https://www.sony.com/en/SonyInfo/design/gallery/PSP/`
- `https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-DS/Nintendo-DS-627143.html`
- `https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-3DS/Nintendo-3DS-636017.html`
- `https://www.nintendo.co.jp/ir/pdf/2010/100929e.pdf`
- `https://www.nintendo.com/en-gb/News/2017/January/Nintendo-Switch-launches-on-3rd-March--1173122.html`
- `https://www.nintendo.com/en-za/News/2019/July/Nintendo-introduces-Nintendo-Switch-Lite-a-device-dedicated-to-handheld-game-play-1596192.html`
- `https://www.nintendo.com/au/support/articles/play-mode-overview/`
- `https://publicdomainvectors.org/en/free-clipart/Handheld-Gaming-Console/75776.html`
- `https://openclipart.org/detail/303372/handheld-gaming-consoles`

## Verification

```bash
npm run format:check
npm run build
```

Both commands pass.

Browser fallback verification was completed against the local dev server at
`http://localhost:3000`.

Checked viewports:

- desktop: 1440 x 1000
- mobile: 390 x 844

Browser QA results:

- Playwright screenshots were generated under
  `design_tmp/factual-hero-refresh/`.
- Homepage HTTP request returned `200`.
- Hero headline, public-domain abstract hero SVG path, and corrected Nintendo
  3DS render path were present in the rendered HTML.
- The public-domain abstract hero SVG, Game Boy image, and Nintendo 3DS render
  all returned `200`.
- Screenshot pixel sampling confirmed nonblank rendered pages with broad color
  variation at both checked viewports.
- `agent-browser` was not installed in the local shell, so the review used
  Playwright CLI screenshots and HTTP/DOM checks instead of an annotated
  interactive browser session.

## Curator Review

1. Does the hero feel more interesting?  
   Yes. The public-domain abstract player image adds a human memory layer while
   the opening Game Boy artifact keeps the museum context intact.

2. Does the fact check preserve accuracy?  
   Yes. The visible chronology claims are source-backed, and the PSP date is
   now regionally clarified in the content architecture.

3. Does the imagery match the named artifacts?  
   Yes. The known 3DS/2DS mismatch was corrected.

4. Does the hero still fit the golden-ratio and Swiss system?  
   Yes. The abstract image remains inside the existing phi grid, spacing,
   typography, frame, and stage tokens.

5. Does the tone remain museum-like?  
   Yes. The copy frames preservation and artifact meaning instead of sales or
   nostalgia hype.

## Residual Risks

- Browser review used screenshots and automated fallback checks because
  `agent-browser` was unavailable.
- The source check covers visible chronology claims and content architecture,
  not every future or unimplemented exhibit detail.
