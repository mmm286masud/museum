# Sprint 4 - Golden Ratio Scale And Local Artifact Renders

## Header

- Goal: refine the chronology hall with a golden-ratio design scale and replace
  remote artifact photography with local white-background PNG device renders.
- Spec sections:
  - Problem Statement
  - Design Goals 1-9
  - Architecture: Required devices, Artifact imagery, Visual scale system
  - Testing Strategy
- Prerequisite: Sprint 3 photography implementation complete

## Available Assets

| Asset                   | Verified details                                                                 | How this sprint uses it                                       |
| ----------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| current chronology hall | all required devices and room sequence already exist in `index.html`             | preserve content structure while refining the visual system   |
| current visual system   | local Inter fonts and editorial surfaces already exist in `styles.css`           | convert the page to a golden-ratio token scale                |
| local asset folder      | `assets/` already holds font files and can store generated artifact renderings   | add local PNG device images and any source illustration files |
| existing docs           | README, project overview, foundation docs, and workstream docs describe the page | update current-state claims to match the new render strategy  |

## Tasks

### 1. Establish the golden-ratio token system

Refactor the live visual system so recurring spacing, typography, and framing
derive from a shared golden-ratio scale.

Required outcomes:

- typography uses a documented ratio-based scale
- recurring spacing values align to shared ratio tokens
- panel radii, paddings, and image framing feel more consistent
- desktop and mobile readability remain intact

Verify:

```bash
npm run format:check
```

### 2. Replace remote photography with local device renders

Swap the remote Unsplash artifact photos for local PNG renderings of the
required handheld devices on clean white backgrounds.

Required outcomes:

- the page no longer depends on remote artifact image URLs
- each required device has a locally stored white-background render
- hero and exhibit stages still present one primary artifact at a time
- rendered devices remain historically recognizable

Verify:

```bash
npm run format:check
```

### 3. Update durable docs

Revise repo docs so the current-state description matches the golden-ratio
system and the new local artifact-rendering approach.

Required outcomes:

- README and `PROJECT_OVERVIEW.md` reflect the new visual/asset strategy
- foundation docs stay accurate about typography and artifact rendering
- workstream docs record this sprint and QA result

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] shared golden-ratio tokens drive typography and spacing
- [x] remote artifact photos replaced with local white-background PNG renders
- [x] required device coverage remains intact
- [x] durable docs updated to match the implementation
- [x] `npm run format:check` passes

## QA Deviations

None.
