# Factual Hero Refresh Specification

> **Status:** Complete

## Problem Statement

The homepage presents a curated chronology of major handheld gaming systems,
but the project needs a fresh source check before the exhibit language is
treated as current. The opening hero also needs more visual energy while
remaining museum-like, Swiss, and aligned with the project-wide golden-ratio
system.

The user requested a fact check of the given information and a more
eye-catching hero, with permission to add an abstract image of a boy playing
with a Game Boy.

## Goals

1. Check the chronology hall's factual claims against credible public sources.
2. Preserve interpretive museum copy where it is clearly curatorial rather than
   a precise hardware claim.
3. Correct any misleading visible artifact pairing found during the review.
4. Make the hero more visually memorable without changing the exhibit route.
5. Use the existing golden-ratio tokens for typography, spacing, and stage
   composition.
6. Add the abstract player image as a local asset that does not depend on
   external media at runtime.

## Source Baseline

The fact check should prioritize official manufacturer or support sources:

- Nintendo About history:
  `https://www.nintendo.com/us/about/?cache_buster=20070522103532`
- Nintendo Game Boy history:
  `https://www.nintendo.com/en-za/Hardware/Nintendo-History/Game-Boy/Game-Boy-627031.html`
- Nintendo Game Boy Color support:
  `https://www.nintendo.com/en-gb/Support/Legacy-system/Game-Boy-Color-619589.html`
- Nintendo Game Boy Advance history:
  `https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Game-Boy-Advance/Game-Boy-Advance-627139.html`
- Sony Interactive Entertainment PSP specifications:
  `https://sonyinteractive.com/en/press-releases/2004/sony-computer-entertainment-inc-announces-product-specifications-of-handheld-video-game-system-playstationportable-psp/`
- Sony PSP worldwide sales release:
  `https://www.sony.com/SonyInfo/IR/news/sce2_G.pdf`
- Nintendo DS history:
  `https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-DS/Nintendo-DS-627143.html`
- Nintendo 3DS history:
  `https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-3DS/Nintendo-3DS-636017.html`
- Nintendo 3DS Japan launch release:
  `https://www.nintendo.co.jp/ir/pdf/2010/100929e.pdf`
- Nintendo Switch launch news:
  `https://www.nintendo.com/en-gb/News/2017/January/Nintendo-Switch-launches-on-3rd-March--1173122.html`
- Nintendo Switch Lite news, for flagship Switch mode summary:
  `https://www.nintendo.com/en-za/News/2019/July/Nintendo-introduces-Nintendo-Switch-Lite-a-device-dedicated-to-handheld-game-play-1596192.html`
- Nintendo Switch play mode support:
  `https://www.nintendo.com/au/support/articles/play-mode-overview/`

## Scope

In scope:

- homepage hero copy and visual composition
- local abstract hero asset
- visible artifact mismatch corrections found by the fact check
- fact-check notes in implementation QA
- spec index update

Out of scope:

- new exhibit rooms
- new routes or pages
- changing the approved device sequence
- adding interactive features
- replacing all local artifact photography
- changing the golden-ratio or Swiss design direction

## Implementation Notes

- The hero should combine an emotional abstract player image with an artifact
  anchor so the opening feels human without losing the museum frame.
- The abstract image should avoid logos and exact trademarked screen content.
- The 3DS secondary feature should use an actual Nintendo 3DS render rather
  than the current 2DS photo.
- If source specificity differs by region, docs should name the region or use
  a broad year only when that is already how the exhibit frames the claim.

## Testing Strategy

Validation should include:

1. `npm run format:check`
2. `npm run build`
3. browser review of the homepage on desktop and mobile
4. visual review for hero impact, readable text, and no overlap
5. artifact review for visible image/content accuracy
6. curator review for narrative flow, preservation tone, and Swiss design
   consistency

## Sprint Plan

| Sprint   | Goal                                                                       |
| -------- | -------------------------------------------------------------------------- |
| Sprint 0 | Fact-check the chronology and refresh the homepage hero with local artwork |
