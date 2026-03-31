# Sprint 2 — Digital Curator Application

## Header

- Goal: apply the user-supplied Digital Curator design archive to the live
  chronology hall while preserving the museum's approved content and narrative.
- Spec sections:
  - Problem Statement
  - Design Goals 1-7
  - Architecture: Current page structure, Chronological room sequence,
    Required devices, Approved design source
  - Testing Strategy
- Prerequisite: chronology hall implementation complete

## Available Assets

| Asset                        | Verified details                                                                 | How this sprint uses it                                        |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| current chronology hall      | all required devices already exist in `index.html`                               | content stays intact while presentation changes                |
| supplied design archive      | `stitch.zip` contains two stitched HTML design slices and `DESIGN.md`            | source for typography, layout rhythm, surfaces, and navigation |
| Digital Curator design notes | define no-line rule, tonal surface hierarchy, glass nav, and editorial asymmetry | translated into local CSS and HTML structure                   |
| existing project docs        | README, foundation docs, and workstream docs already describe the current state  | updated to match the refined design                            |

## Tasks

### 1. Apply the design system locally

Adapt the stitched design into local HTML/CSS without external page-builder
dependencies.

Required outcomes:

- Inter-driven editorial typography
- tonal surface hierarchy instead of heavy borders
- glass navigation
- asymmetrical section pacing

Verify:

```bash
npm run format:check
```

### 2. Preserve the chronology hall content model

The design update must not remove or weaken the approved device sequence and
spotlight fields.

Required outcomes:

- all required devices remain present
- each device still contains spotlight copy and scarcity framing
- room order remains chronological

Verify:

```bash
npm run format:check
```

### 3. Update durable docs

Revise project docs so the repository's current-state claims match the refined
design.

Required outcomes:

- README reflects the applied design system
- a full project overview Markdown file exists
- foundation docs remain accurate where the implementation changed materially

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] chronology hall uses the Digital Curator visual language
- [x] all required devices remain intact
- [x] README updated
- [x] full project overview file added
- [x] `npm run format:check` passes

## QA Deviations

None.
