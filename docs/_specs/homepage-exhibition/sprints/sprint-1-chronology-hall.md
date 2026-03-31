# Sprint 1 — Chronology Hall

## Header

- Goal: expand the homepage into a full chronology hall with six museum rooms
  and the required major handheld devices presented as Apple-style spotlight
  sections.
- Spec sections:
  - Problem Statement
  - Design Goals 1-6
  - Architecture: Current page structure, Chronological room sequence,
    Required devices, Required exhibit fields, Artifact choice
  - Testing Strategy
- Prerequisite: homepage-exhibition spec updated and QAed for chronology expansion

## Available Assets

| Asset                     | Verified details                                                                      | How this sprint uses it                |
| ------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------- |
| existing homepage shell   | entrance hero and guided route already exist                                          | preserved as the opening frame         |
| current design system     | Swiss grid, restrained palette, strong type, route interaction                        | extended instead of replaced           |
| content request           | required devices, room structure, Apple-style field model, scarcity and Explorer tone | governs the new exhibit copy           |
| content architecture docs | room map and content model already exist                                              | updated to reflect the chronology hall |

## Tasks

### 1. Update the content architecture

Add or revise durable docs so the chronology hall is preserved outside the page
markup.

Required outcomes:

- room map reflects the six museum rooms
- content model includes the spotlight copy fields
- a durable content artifact records the approved handheld chronology

Verify:

```bash
npm run format:check
```

### 2. Expand the homepage route and room structure

Convert the current single-artifact layout into a chronological museum flow.

Required outcomes:

- guided route includes the foyer plus the six rooms
- each room has a clear heading and thesis
- every required device appears in the correct room

Verify:

```bash
npm run format:check
```

### 3. Implement the Apple-style spotlight sections

For each required device, add:

- headline
- subheadline
- key highlight
- minimal description
- scarcity line

Required outcomes:

- one device at a time remains the visual focus
- copy stays minimal and museum-oriented
- Explorer language and scarcity language are present across the sequence

Verify:

```bash
npm run format:check
```

### 4. Preserve coherence and route clarity

The page should still read as one exhibit, not as disconnected marketing cards.

Required outcomes:

- visual hierarchy remains restrained
- room-to-room progression is obvious
- footer and metadata reflect the expanded chronology span

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] room map updated
- [ ] content model updated
- [ ] chronology content artifact added
- [ ] homepage route includes all six rooms
- [ ] required devices appear in the page
- [ ] spotlight copy is consistent across devices
- [ ] `npm run format:check` passes

## QA Deviations

None.
