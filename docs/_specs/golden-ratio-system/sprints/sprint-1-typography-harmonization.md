# Sprint 1 - Golden Ratio Typography Harmonization

## Header

- Goal: make the current homepage typography consistently use the
  golden-ratio type system for size, leading, tracking, and font-weight
  semantics.
- Spec sections:
  - Design Goals 2-6
  - Architecture: Token scope, Implementation scope, Design invariants
  - Scope
  - Testing Strategy
- Prerequisite: Sprint 0 project-wide golden-ratio pass complete

## Available Assets

| Asset                 | Verified details                                                     | How this sprint uses it                                   |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| current visual system | `app/globals.css` contains phi constants and an existing type scale  | extend typography tokens and replace ad hoc type values   |
| current homepage      | `app/page.tsx` contains the approved exhibit text and heading levels | preserve content and hierarchy while refining typography  |
| current QA baseline   | format, build, and browser review are required                       | verify the type pass does not break layout or readability |

## Tasks

### 1. Extend typography tokens

Required outcomes:

- weights use semantic typography tokens
- tracking values use named golden-ratio tokens
- line-height variants use named leading tokens
- fluid type viewport values use named tokens

Verify:

```bash
npm run format:check
```

### 2. Apply typography tokens across the homepage

Required outcomes:

- display headings, labels, artifact metadata, CTA text, status text, footer
  links, and body copy use the token layer
- no homepage text selector relies on unexplained ad hoc font-size,
  line-height, letter-spacing, or font-weight values
- desktop, tablet, and mobile readability remain intact

Verify:

```bash
npm run format:check
npm run build
```

### 3. Record QA

Required outcomes:

- implementation QA records browser checks and curator typography review
- docs describe the typography layer accurately if needed

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] typography tokens cover weights, tracking, leading, and fluid sizing
- [x] homepage typography uses those tokens consistently
- [x] copy remains readable on desktop, tablet, and mobile
- [x] route status behavior still works
- [x] `npm run format:check` passes
- [x] `npm run build` passes
- [x] browser and curator QA completed

## QA Deviations

None planned.
