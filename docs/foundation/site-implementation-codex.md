# Site Implementation Codex

## Why This Document Exists

This codex explains where the museum's current design logic lives in the code
and files.

It is for future contributors and AI agents that need a reliable map before
making changes.

## Current File Map

- `index.html` — current chronology hall page
- `styles.css` — tokens, local typography, tonal surfaces, photo framing,
  responsiveness
- `script.js` — guided-route interaction and live room-status updates
- `assets/` — local exhibit imagery and font assets
- `PROJECT_OVERVIEW.md` — current-state summary for the whole repository
- `docs/foundation/` — durable process and design docs
- `docs/_specs/` — workstream planning and QA artifacts
- `docs/content/` — content architecture and exhibit packages

## Page Structure

The current page is one chronology hall with nine major surfaces:

1. fixed topbar with route links and current-room status
2. foyer hero
3. Origins
4. Color Evolution
5. Performance Expansion
6. Multimedia Era
7. Innovation Era
8. Modern Era
9. closing CTA room and footer

That sequence is the current page grammar and should remain stable unless a
spec changes it.

## Shell Composition

### Topbar

The topbar establishes the exhibit index and live room status.

It uses a glass surface and stays fixed so the visitor can keep the chronology
in view while moving through the page.

### Foyer hero

The hero acts as the entrance foyer.

It contains:

- the permanent exhibition label
- the framing statement
- the primary route entry
- the curatorial note
- the large stage panel with a credited Game Boy photograph

### Chronology rooms

Each room contains one or more spotlight surfaces with:

- a room heading and thesis
- one-device-at-a-time focus
- large display headline
- minimal supporting copy
- a scarcity line
- a visual stage rather than a dense card grid

## CSS Architecture

The current design system in `styles.css` has five layers:

### 1. Token layer

The `:root` block holds shared values for:

- colors
- spacing
- shadow
- maximum width

### 2. Typography layer

The page now ships its own local Inter variable fonts through `@font-face`
rules at the top of the file.

### 3. Layout layer

The core layout classes are:

- `.shell`
- `.topbar`
- `.hero`
- `.room`
- `.split-room`
- `.performance-layout`
- `.modern-grid`

### 4. Component layer

Shared component-like patterns include:

- `.route-link`
- `.stage-panel`
- `.artifact-stage`
- `.mini-stage`
- `.statement-card`
- `.inset-card`
- `.photo-frame`
- `.photo-credit`
- `.spotlight-highlight`
- `.spotlight-scarcity`
- `.stage-tags`

### 5. Responsive and motion layer

The media queries collapse multi-column grids into single-column flows on
smaller screens while preserving reading order, and `prefers-reduced-motion`
removes forced smooth scrolling for visitors who opt out of motion.

## Artifact Rendering

The current page uses credited Unsplash photography for the artifact stages.

Each major image surface now combines:

- a framed photo treatment
- museum copy
- visible photographer and source attribution

That is the current artifact-rendering system for the live homepage.

## Interaction Model

`script.js` manages a small but important behavior layer:

- route links scroll visitors to the intended section
- active route state updates as sections enter view
- the status text makes progression legible through the fixed topbar
- the current section is derived from `IntersectionObserver` on `[data-stage]`
  sections

This is the current guided-route model. Keep it simple unless a later sprint
justifies more complex interaction.

## Content Architecture

The durable content model is now documented separately under `docs/content/`.

That separation matters. The exhibit narrative should not live only inside the
page markup.

## Verification Shape

Current repo-level verification is intentionally light:

```bash
npm run format:check
```

Manual browser review and curator review still matter because the museum is a
visual and narrative product.

## What To Preserve In Later Work

- a stable reading sequence
- restrained visual language
- content that reads like placards and spotlight notes
- the current surface grammar of glass topbar, tonal panels, and large
  editorial headlines
- explicit process artifacts for future expansions

## What Can Change Later

- additional exhibit rooms
- richer content packages
- stronger deployment tooling
- more automated verification

Those changes should arrive through specs and sprints, not through ad hoc
expansion.
