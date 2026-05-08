# Sprint 0 - Premium Hero Refinement

## Header

- Goal: refine the current homepage, especially the hero and navigation, into a
  more premium museum/product showcase while preserving the existing identity.
- Spec sections:
  - Goals
  - Design Constraints
  - Golden Ratio Tokens
  - Scope
  - Testing Strategy

## Available Assets

| Asset                 | Verified details                                               | How this sprint uses it                                       |
| --------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| current homepage      | `app/page.tsx` contains the approved chronology route          | preserve content and add only small presentation hooks        |
| current visual system | `app/globals.css` contains phi tokens and hero/artifact styles | add requested token names and refine existing selectors       |
| local Game Boy photo  | `public/assets/img/Classic Nintendo Game Boy close-up.png`     | keep as the hero artifact and improve display treatment       |
| route tracker         | `app/route-tracker.tsx` handles active nav state               | preserve behavior while improving nav styling and transitions |

## Tasks

### 1. Add requested golden-ratio tokens

Required outcomes:

- `--space-1` through `--space-7`, `--page-x`, and `--hero-gap` exist in
  `:root`
- radius tokens align with the requested values while preserving the broader
  design system
- existing shell spacing uses the new page-x token where appropriate

Verify:

```bash
npm run format:check
```

### 2. Refine hero and navigation rhythm

Required outcomes:

- hero text and support copy align more deliberately
- hero-to-stage spacing uses the requested golden-ratio gap
- navigation gets clearer active and hover states
- small labels become easier to read without becoming loud

Verify:

```bash
npm run format:check
npm run build
```

### 3. Improve artifact staging

Required outcomes:

- Game Boy hero card feels more like an object on display
- blue right panel has subtle depth and intentional structure
- the huge year, red accent line, centered artifact, and soft card shadow remain
- artifact hover/motion remains restrained and respects reduced motion

Verify:

```bash
npm run format:check
npm run build
```

### 4. Record QA

Required outcomes:

- post-implementation QA records technical checks, screenshot review, and
  curator review
- spec index marks the sprint complete

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] requested golden-ratio tokens added
- [x] hero alignment and spacing refined
- [x] navigation polish improved
- [x] hero artifact display treatment improved
- [x] label contrast/readability improved
- [x] subtle motion added with reduced-motion guard
- [x] `npm run format:check` passes
- [x] `npm run build` passes
- [x] browser and curator QA completed

## QA Deviations

None planned.
