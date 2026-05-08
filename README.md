# Retro Handheld Gaming Museum

**Live View:** [https://mmm286masud.github.io/museum/](https://mmm286masud.github.io/museum/)

This repository contains a production-oriented museum website about retro
handheld gaming.

It presents major handheld systems as cultural artifacts, using a structured
orchestration process to keep design, content, and implementation aligned over
time.

## What This Project Is

- a static-export-ready Next.js museum built with the App Router, React,
  TypeScript, local assets, and local museum imagery
- a Swiss-style digital exhibit focused on handheld systems as historical
  artifacts
- a premium editorial homepage organized as a chronological museum route
- a repository that treats AI as an implementation assistant, not as the
  system of record

## Current State

The current public slice is a chronology-hall homepage with:

- a glass navigation bar with active room tracking
- a guided museum-style foyer and opening sequence
- six chronological exhibit rooms from Origins through Modern Era
- seven major handheld milestones from Game Boy to Switch
- premium spotlight copy written in museum language
- scarcity framing written as preservation context
- tonal surfaces, asymmetrical pacing, project-wide golden-ratio rhythm, and
  local artifact imagery

The current workstreams and their status live in
[`docs/_specs/README.md`](docs/_specs/README.md).

For the complete project map, read
[`PROJECT_OVERVIEW.md`](PROJECT_OVERVIEW.md).

## Design Direction

The site is designed around a Swiss visual system:

- strong hierarchy
- disciplined grid structure
- restrained spacing
- clean typography
- high-contrast focal moments

The presentation style borrows from premium product storytelling, but the tone
stays museum-like. The devices are treated as artifacts to be interpreted, not
products to be sold.

## Brand Direction

The project uses the Explorer archetype.

That means the experience should feel like a guided discovery through handheld
history. The visitor is invited to move forward through time, compare design
shifts, and uncover why certain devices changed portable play.

## Persuasion Strategy

The primary persuasion method is scarcity.

Scarcity is used here as curatorial context rather than sales pressure. The
copy emphasizes:

- aging hardware
- disappearing media
- fragile packaging and accessories
- the difficulty of finding complete surviving examples

This supports the museum goal by making preservation feel meaningful.

## Orchestration Process

Major work in this repository follows a spec-driven orchestration process:

`spec -> QA -> sprint -> QA -> implement -> QA`

Each stage has a specific role:

1. `spec`
   Define a bounded goal, constraints, required outputs, and testing shape.
2. `QA`
   Review the spec for drift, ambiguity, and conflicts with the museum vision.
3. `sprint`
   Translate the approved spec into a focused implementation plan.
4. `QA`
   Review the sprint plan before code changes begin.
5. `implement`
   Apply the change in code and content.
6. `QA`
   Run a final implementation review with both technical and curator criteria.

This process exists to keep the site coherent as it grows. It prevents large,
unguided rewrites and keeps durable project reasoning inside the repository.

## Start Here

Read these in order:

1. [`AGENTS.md`](AGENTS.md)
2. [`docs/foundation/student-reading-guide.md`](docs/foundation/student-reading-guide.md)
3. [`docs/foundation/orchestration-method.md`](docs/foundation/orchestration-method.md)
4. [`docs/_specs/README.md`](docs/_specs/README.md)

For narrow fixes, use the lighter process in
[`docs/foundation/lightweight-change-path.md`](docs/foundation/lightweight-change-path.md).

## Quality Baseline

This repository currently has a lightweight verification baseline:

```bash
npm install
npm run format:check
npm run build
```

Manual QA is still required for:

- desktop and mobile layout review
- copy consistency
- curator review against narrative and exhibit quality

The current verification model is documented in
[`docs/foundation/verification-and-deployment.md`](docs/foundation/verification-and-deployment.md).

## Repository Structure

- `app/` - Next.js App Router homepage, root layout, route behavior component,
  and global visual system
- `public/assets/` - local exhibit imagery, uploaded artifact photos, PNG
  artifact renders, SVG source renders, and font assets served by Next.js
- `scripts/` - local asset-generation helpers such as
  `generate-device-renders.mjs`
- `docs/foundation/` - durable process and design reference docs
- `docs/_specs/` - workstream specs, sprint docs, and QA artifacts
- `docs/content/` - content architecture and exhibit packages
- `PROJECT_OVERVIEW.md` - full repository overview and current-state map
- `next.config.ts` - static export configuration
- `tsconfig.json` - TypeScript configuration for the live Next.js app
- `package.json` - local quality scripts
- `AGENTS.md` - repository operating rules for future AI sessions

## Main References

- [`docs/foundation/site-design-philosophy.md`](docs/foundation/site-design-philosophy.md)
- [`docs/foundation/site-implementation-codex.md`](docs/foundation/site-implementation-codex.md)
- [`docs/foundation/site-spec-patterns.md`](docs/foundation/site-spec-patterns.md)
- [`docs/content/architecture/content-model.md`](docs/content/architecture/content-model.md)

## Scope Rule

This project should not be generated in one large burst. Every meaningful
expansion should be introduced through a bounded spec and sprint package.
