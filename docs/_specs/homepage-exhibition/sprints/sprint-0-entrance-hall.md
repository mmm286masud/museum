# Sprint 0 — Entrance Hall

## Header

- Goal: build the first public slice of the museum as an entrance-hall homepage
  with one complete artifact reading room.
- Spec sections:
  - Problem Statement
  - Design Goals 1-5
  - Architecture: Current page structure, Required exhibit fields, Artifact choice
  - Testing Strategy
- Prerequisite: homepage-exhibition spec approved

## Available Assets

| Asset                          | Verified details                                           | How this sprint uses it                       |
| ------------------------------ | ---------------------------------------------------------- | --------------------------------------------- |
| empty initial repository state | there was no prior site scaffold when this sprint began    | justified a static HTML/CSS/JS implementation |
| museum project direction       | Swiss design, scarcity principle, Explorer archetype       | governs layout and copy tone                  |
| Game Boy artifact choice       | iconic, historically legible, cross-generational relevance | becomes the first full artifact section       |

## Tasks

### 1. Create the entrance-hall shell

Build a static homepage with:

- header metadata
- opening hero
- curatorial note

### 2. Create the guided route

Add a small interaction layer that makes the visitor path visible and usable.

### 3. Build the first complete artifact block

The Game Boy section must include all required exhibit fields.

### 4. Add scarcity framing and future-room previews

The page should imply expansion without pretending those rooms already exist.

## Verification

```bash
npm run format:check
```

Additional QA:

- inspect artifact-field completeness
- review museum tone and scarcity wording
- review responsive structure manually

## Completion Checklist

- [x] homepage shell exists
- [x] guided route exists
- [x] Game Boy artifact section is complete
- [x] scarcity panel exists
- [x] next-room preview exists

## QA Deviations

Manual browser testing was not fully automated in this sprint.
