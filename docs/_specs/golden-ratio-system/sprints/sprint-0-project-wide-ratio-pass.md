# Sprint 0 - Project-Wide Golden Ratio Pass

## Header

- Goal: make the current Next.js homepage's recurring measures, frames, stages,
  breakpoints, blur, and timing derive from the golden-ratio token system.
- Spec sections:
  - Problem Statement
  - Design Goals 1-6
  - Architecture: Token scope, Implementation scope, Design invariants
  - Scope
  - Testing Strategy
- Prerequisite: Next.js platform migration complete

## Available Assets

| Asset                 | Verified details                                                             | How this sprint uses it                               |
| --------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| current Next app      | `app/page.tsx`, `app/layout.tsx`, and `app/route-tracker.tsx` serve `/`      | preserve structure and behavior                       |
| current visual system | `app/globals.css` already contains phi spacing and typography tokens         | extend the token layer and replace one-off dimensions |
| current docs          | foundation docs describe the golden-ratio design system and Next.js file map | update only where current-state language needs detail |

## Tasks

### 1. Extend the token layer

Required outcomes:

- text measures, shell width, frame widths, stage heights, breakpoints, grid
  ratios, blur, and motion durations have named ratio-system tokens
- tokens remain readable and practical for future contributors

Verify:

```bash
npm run format:check
```

### 2. Apply tokens to the homepage CSS

Required outcomes:

- major widths and max-widths use measure or frame tokens
- major min-heights use stage tokens
- grid layouts use golden-ratio column relationships where practical
- breakpoints use named responsive tokens
- current narrative order, content, imagery, and route behavior remain intact

Verify:

```bash
npm run format:check
npm run build
```

### 3. Record QA

Required outcomes:

- implementation QA records the technical checks and curator review
- durable docs mention the broadened ratio token layer if needed

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] token layer covers layout measures, frames, stages, breakpoints, blur,
      and timing
- [x] recurring homepage layout values use those tokens
- [x] desktop and mobile remain readable
- [x] route status behavior still works
- [x] `npm run format:check` passes
- [x] `npm run build` passes
- [x] browser and curator QA completed

## QA Deviations

None planned.
