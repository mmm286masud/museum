# Sprint 0 - Next.js Platform Migration

## Header

- Goal: migrate the existing one-page chronology hall from static
  HTML/CSS/JavaScript to Next.js App Router while preserving the current exhibit
  experience.
- Spec sections:
  - Problem Statement
  - Design Goals 1-7
  - Architecture: Target stack, Public route, Component boundaries,
    Asset strategy, Static export
  - Scope
  - Testing Strategy
- Prerequisite: homepage-exhibition Sprint 4 complete

## Available Assets

| Asset                   | Verified details                                                                 | How this sprint uses it                                |
| ----------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------ |
| current homepage        | `index.html` contains the full route, exhibit copy, images, nav, CTA, and footer | port structure into the Next.js `/` route              |
| current visual system   | `styles.css` contains the golden-ratio tokens and responsive Swiss design system | preserve as global CSS unless scoped extraction helps  |
| current behavior layer  | `script.js` uses route links, room status, and `IntersectionObserver`            | port into a small client component                     |
| current local assets    | `assets/` contains fonts, uploaded photos, PNG renders, and SVG render sources   | serve public-facing assets from `public/assets/`       |
| current package tooling | `package.json` has Prettier and `format:check`                                   | add Next.js scripts and dependencies                   |
| durable documentation   | README, project overview, foundation docs, and specs describe the static site    | update current-state claims to describe the Next stack |

## Tasks

### 1. Add the Next.js application shell

Required outcomes:

- Next.js, React, React DOM, and TypeScript support are installed.
- `next.config` supports static export.
- the App Router root layout defines page metadata and imports global CSS.
- package scripts include development, build, start, and format checks.

Verify:

```bash
npm run format:check
npm run build
```

### 2. Port the homepage

Required outcomes:

- `/` renders the same chronology hall route as the previous `index.html`.
- the heading hierarchy, exhibit copy, device coverage, and room order remain
  intact.
- image references resolve through Next.js public assets.
- the footer and CTA remain in the same narrative position.

Verify:

```bash
npm run format:check
npm run build
```

### 3. Port route interaction

Required outcomes:

- route links still scroll to the intended rooms.
- the active route state updates while scrolling.
- the topbar status still reflects the current room.
- browser-only APIs live in a client component.

Verify:

```bash
npm run format:check
npm run build
```

### 4. Update durable docs

Required outcomes:

- README and `PROJECT_OVERVIEW.md` describe the Next.js stack accurately.
- foundation docs identify the new file map and verification baseline.
- `docs/_specs/README.md` lists the migration workstream.
- implementation QA records technical and curator review.

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] Next.js App Router serves the homepage at `/`
- [x] current exhibit route and content remain intact
- [x] guided navigation behavior works in React
- [x] local assets load from `public/assets/`
- [x] durable docs describe the new stack accurately
- [x] `npm run format:check` passes
- [x] `npm run build` passes
- [x] manual browser and curator QA completed

## QA Deviations

None planned.
