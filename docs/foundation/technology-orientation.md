# Technology Orientation

## Why This Document Exists

This project now uses Next.js, but it remains intentionally small. The point of
this document is to explain the current tools accurately without implying that
the museum has a larger application platform than it actually does.

## Current Stack

### Next.js App Router

`app/page.tsx` is the current museum route.

It defines:

- the fixed topbar and room-status surface
- the entrance foyer structure
- the chronology-hall route
- the spotlight sections for the major handheld devices
- the closing CTA and footer sequence
- the semantic reading order for the exhibit

`app/layout.tsx` defines the root document shell, page metadata, and global CSS
import.

### CSS

`app/globals.css` is the visual system.

It contains:

- the Swiss-style grid
- local Inter variable font loading
- golden-ratio typography, semantic type weights, tracking, leading, fluid type,
  spacing, measure, frame, stage, grid, breakpoint, and motion tokens
- tonal surface hierarchy and glass navigation
- artifact framing and exhibit-stage presentation
- responsive behavior
- restrained motion

### React client behavior

`app/route-tracker.tsx` adds the guided-route behavior.

It currently handles:

- route-link activation
- scroll-to-section interactions
- status updates based on section visibility

### Local assets

Public local assets live in `public/assets/`.

They currently include:

- local Inter font files under `public/assets/fonts/`
- local uploaded device photos under `public/assets/img/`
- local PNG device renders under `public/assets/device-renders/`
- local SVG source renders under `public/assets/device-renders/source/`

### Local generation helper

`scripts/generate-device-renders.mjs` generates the SVG source files under
`public/assets/device-renders/source/` used for the local render portion of the
artifact-image pipeline.

### npm and Prettier

This repository includes a small Node-based tooling layer for formatting and a
Next.js production build check.

Current commands:

```bash
npm run format:check
npm run build
```

This is not a full test stack yet. It is the current minimum quality gate.

## Current Stack Versus Planned Stack

### Installed and active now

- Next.js App Router
- React
- TypeScript
- CSS3
- local font, uploaded image, and render assets
- a local render-source generation helper
- npm
- Prettier

### Not yet part of the repo

- automated browser tests
- CI/CD
- deployment automation

Do not document those as live parts of the stack until they actually exist.

## How To Read This Stack

For this repository, the stack layers are:

1. Next.js App Router for the public route and static export
2. React and TypeScript for page structure and narrow client behavior
3. CSS for visual system and responsiveness
4. `public/assets/` for served fonts and artifact imagery
5. npm, Prettier, and `next build` for baseline verification
6. process artifacts for scope control and durable project memory

The process layer matters as much as the code layer because the site is being
built iteratively.
