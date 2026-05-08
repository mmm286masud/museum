# Retro Handheld Gaming Museum Project Overview

## Project Summary

The Retro Handheld Gaming Museum is a static-export-ready Next.js museum
website that presents major handheld gaming devices as historical artifacts
instead of consumer products.

The current live product is a single homepage that moves visitors through a
six-room chronology:

1. Origins
2. Color Evolution
3. Performance Expansion
4. Multimedia Era
5. Innovation Era
6. Modern Era

That chronology is framed by a foyer hero, a fixed glass navigation bar, and a
closing CTA room that points toward later collection expansion.

## Museum Intent

The project treats handheld devices as exhibit objects with cultural and design
meaning.

Its core audience is:

- visitors who grew up with these systems
- younger visitors discovering handheld history for the first time

Its design and editorial constraints are:

- Swiss design discipline
- scarcity framed as preservation context
- Explorer archetype tone
- Apple-style product presentation adapted into museum language

## Current Exhibit Scope

The homepage currently includes these required devices:

- Nintendo Game Boy (1989)
- Game Boy Color (1998)
- Game Boy Advance (2001)
- PlayStation Portable (2004)
- Nintendo DS (2004)
- Nintendo 3DS (2011)
- Nintendo Switch (2017)

Each spotlight section follows the same minimal exhibit structure:

- headline
- subheadline
- key highlight
- minimal description
- scarcity line

## Design Language

The applied design language is:

- glass top navigation
- tonal panel hierarchy instead of heavy borders
- asymmetrical editorial pacing
- project-wide golden-ratio tokens for typography, weights, tracking, leading,
  spacing, measures, frames, stages, grids, breakpoints, and motion
- large typographic hero moments
- strong whitespace and one-device-at-a-time staging

The live implementation uses local font files, local museum content, and local
white-background artifact imagery made from a mix of uploaded device photos and
generated PNG render plates.

## Technology Snapshot

The project intentionally stays lightweight while using a modern framework
shell.

Current stack:

- Next.js App Router for routing and static export
- React and TypeScript for the homepage surface and behavior component
- `app/page.tsx` for the chronology hall route
- `app/globals.css` for the full visual system
- `app/route-tracker.tsx` for guided navigation behavior
- local font, uploaded photo, and artifact-render assets under
  `public/assets/`
- `scripts/generate-device-renders.mjs` for reproducible SVG source generation
- `npm` and `Prettier` for formatting checks

Current verification baseline:

```bash
npm install
npm run format:check
npm run build
```

Manual browser review is still required because this is a visual and narrative
product.

## Repository Map

Top-level files:

- `AGENTS.md` - operating rules for future AI work in this repository
- `README.md` - quick orientation and startup path
- `PROJECT_OVERVIEW.md` - this full project summary
- `app/` - live Next.js App Router surface
- `next.config.ts` - static export configuration
- `tsconfig.json` - TypeScript configuration

Primary folders:

- `public/assets/` - local illustrations, uploaded photos, render exports,
  render sources, and font files served by the app
- `scripts/` - reproducible asset-generation helpers
- `docs/foundation/` - durable design, process, and implementation references
- `docs/_specs/` - workstreams, sprint plans, and QA artifacts
- `docs/content/` - content architecture and exhibit source packages
- `docs/templates/` - reusable planning templates

## Working Method

This repository uses a spec-driven workflow for meaningful changes:

`spec -> QA -> sprint -> QA -> implement -> QA`

That process is mandatory for:

- major design changes
- new exhibit surfaces
- changes to the repository's durable structure
- documentation that defines future implementation behavior

Smaller fixes can use the lighter change path in
[`docs/foundation/lightweight-change-path.md`](docs/foundation/lightweight-change-path.md).

## Current Documentation Path

For a clean orientation path, read these in order:

1. [`AGENTS.md`](AGENTS.md)
2. [`README.md`](README.md)
3. [`docs/foundation/student-reading-guide.md`](docs/foundation/student-reading-guide.md)
4. [`docs/foundation/orchestration-method.md`](docs/foundation/orchestration-method.md)
5. [`docs/_specs/README.md`](docs/_specs/README.md)
6. [`docs/foundation/site-implementation-codex.md`](docs/foundation/site-implementation-codex.md)

## Workstream Status

The repo currently has four major workstreams:

- `orchestration-foundation` - complete
- `homepage-exhibition` - in progress, with five completed sprints
- `nextjs-platform-migration` - in progress, with one completed sprint
- `golden-ratio-system` - in progress, with two completed sprints

Completed homepage-exhibition sprints:

- Sprint 0 - entrance hall foundation
- Sprint 1 - chronology hall expansion
- Sprint 2 - homepage visual refinement
- Sprint 3 - credited stock photography integration
- Sprint 4 - golden-ratio scale and local artifact renders

## What Exists Now

Implemented now:

- a single polished homepage
- a fixed route system with live room tracking
- six museum rooms with seven major handheld devices
- local white-background artifact imagery across the exhibit route
- scarcity-oriented museum copy
- a Next.js App Router static-export foundation
- a broadened golden-ratio design-token layer, including typography tokens for
  weights, tracking, leading, and fluid sizing
- durable planning and QA documentation

Not implemented yet:

- dedicated room subpages
- richer archival imagery for every device
- automated browser testing
- deployment automation
- deeper collection pages for variants and preservation themes

## Next Logical Expansion

The next strong sprint would be to split later rooms into dedicated exhibit
pages or to add richer archival notes and collection context without breaking
the current chronology grammar.
