# Premium Refinement Pass Specification

> **Status:** Complete

## Problem Statement

The current Retro Handheld Museum homepage has the right identity: minimal
museum aesthetic, large editorial typography, soft neutral surfaces, Apple-like
artifact presentation, and a chronology route. The next pass should make the
site feel more expensive, intentional, and museum-quality without replacing
that identity.

The user requested a premium refinement pass that keeps the existing visual
language while improving spacing rhythm, hero alignment, navigation polish,
artifact staging, subtle motion, label readability, and golden-ratio spacing.

## Goals

1. Preserve the current identity, including the `PLAY, PRESERVED.` hero,
   rounded top navigation, neutral background, huge year number, red accent
   line, centered Game Boy artifact, and museum/product showcase tone.
2. Add the requested golden-ratio pixel spacing tokens:
   `--space-1` through `--space-7`, `--page-x`, and `--hero-gap`.
3. Tighten the hero so the headline, intro paragraph, and artifact stage feel
   mathematically aligned rather than loosely placed.
4. Give the Game Boy hero card a more premium object-on-display treatment.
5. Add subtle depth and movement that feels calm, not decorative or gimmicky.
6. Improve small-label contrast and navigation polish without changing the
   route or adding new content.
7. Keep the implementation in the existing Next.js App Router and global CSS
   layer.

## Design Constraints

Keep:

- minimal museum aesthetic
- large editorial typography
- soft neutral background
- retro handheld gaming theme
- Apple-style artifact presentation
- thin borders and subtle rounded corners
- clean layout and disciplined Swiss grid

Avoid:

- a new visual language
- loud retro decoration
- new pages or routes
- unrelated content rewrites
- heavy JavaScript animation
- decorative image additions

## Golden Ratio Tokens

The refinement should add and use the user-requested tokens:

```css
:root {
  --space-1: 8px;
  --space-2: 13px;
  --space-3: 21px;
  --space-4: 34px;
  --space-5: 55px;
  --space-6: 89px;
  --space-7: 144px;

  --radius-sm: 13px;
  --radius-md: 21px;
  --radius-lg: 34px;

  --page-x: clamp(24px, 4vw, 72px);
  --hero-gap: clamp(55px, 8vw, 144px);
}
```

The repository already has a phi token layer. This pass may map existing
components onto the requested token names while preserving broader phi-derived
tokens that other sections use.

## Scope

In scope:

- `app/globals.css` visual-system refinement
- limited `app/page.tsx` class additions if needed for premium presentation
- spec, sprint, and QA documentation
- screenshots and browser fallback review

Out of scope:

- changing exhibit chronology
- changing factual content
- adding images
- adding new routes
- extracting components
- changing the current font stack

## Testing Strategy

Validation should include:

1. `npm run format:check`
2. `npm run build`
3. local homepage HTTP check
4. desktop and mobile screenshots
5. visual review for alignment, spacing, non-overlap, readable labels, and
   premium artifact staging
6. curator review for museum tone, preservation framing, and Swiss consistency

## Sprint Plan

| Sprint   | Goal                                                                        |
| -------- | --------------------------------------------------------------------------- |
| Sprint 0 | Apply a bounded premium visual refinement pass to the current homepage hero |
