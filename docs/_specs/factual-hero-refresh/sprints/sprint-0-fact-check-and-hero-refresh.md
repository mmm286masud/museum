# Sprint 0 - Fact Check And Hero Refresh

## Header

- Goal: verify the homepage chronology, correct visible factual mismatches, and
  make the hero more eye-catching with a local abstract player asset.
- Spec sections:
  - Goals
  - Source Baseline
  - Scope
  - Implementation Notes
  - Testing Strategy

## Available Assets

| Asset                    | Verified details                                      | How this sprint uses it                           |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------- |
| current homepage         | `app/page.tsx` contains the full chronology route     | update hero and correct visible image mismatch    |
| current visual system    | `app/globals.css` contains phi-derived design tokens  | compose hero with existing spacing/type rules     |
| existing device renders  | `public/assets/device-renders/nintendo-3ds.png`       | replace the current 2DS photo in the 3DS feature  |
| local uploaded photos    | `public/assets/img/` contains current artifact photos | preserve approved artifact imagery where accurate |
| official source baseline | spec records Nintendo, Sony, and PlayStation sources  | support implementation QA fact-check decisions    |

## Tasks

### 1. Record factual review

Required outcomes:

- source-backed claims are identified for each visible chronology milestone
- regional nuance is recorded for PSP 2004
- curatorial interpretation is separated from technical fact

Verify:

```bash
npm run format:check
```

### 2. Refresh hero composition

Required outcomes:

- hero headline and support copy become more immediate and visually inviting
- hero stage adds a local abstract image of a young player with a handheld
- original Game Boy artifact context remains visible in the hero
- layout uses the existing golden-ratio spacing, frame, and type tokens

Verify:

```bash
npm run format:check
npm run build
```

### 3. Correct visible artifact mismatch

Required outcomes:

- Nintendo 3DS feature uses a 3DS render instead of a 2DS photo
- alt text and local artifact note match the visible device

Verify:

```bash
npm run format:check
```

### 4. Complete QA

Required outcomes:

- post-implementation QA records source decisions, commands, and browser review
- curator review covers hero engagement, accuracy, and Swiss/golden-ratio fit

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] spec QA completed
- [x] sprint QA completed
- [x] chronology facts checked against source baseline
- [x] hero visual composition refreshed
- [x] abstract player image added as a local asset
- [x] 3DS image mismatch corrected
- [x] `npm run format:check` passes
- [x] `npm run build` passes
- [x] browser and curator QA completed

## QA Deviations

None planned.
