# Site Implementation Codex

## Why This Document Exists

This codex explains where the museum's current design logic lives in the code
and files.

It is for future contributors and AI agents that need a reliable map before
making changes.

## Current File Map

- `index.html` — current chronology-hall page and spotlight sequence
- `styles.css` — tokens, grid, typography, panels, responsiveness
- `script.js` — guided-route interaction
- `assets/` — local exhibit imagery
- `docs/foundation/` — durable process and design docs
- `docs/_specs/` — workstream planning and QA artifacts
- `docs/content/` — content architecture and exhibit packages

## Page Structure

The current page is one chronology hall with eight major surfaces:

1. entrance hero
2. guided route
3. Origins
4. Color Evolution
5. Performance Expansion
6. Multimedia Era
7. Innovation Era
8. Modern Era

That sequence is the current page grammar and should remain stable unless a
spec changes it.

## Shell Composition

### Header

The header establishes the exhibit index and museum metadata.

It frames the page as a curated space before the hero copy begins.

### Hero

The hero acts as the entrance hall.

It contains:

- the museum title
- the framing statement
- the primary route entry
- the curatorial note panel

### Route block

The route block makes the guided experience explicit.

It is not just decoration. It tells the visitor what phase of the museum they
are currently in.

### Exhibit rooms

Each room contains one or more spotlight articles with:

- a room heading and thesis
- one-device-at-a-time focus
- large display headline
- minimal supporting copy
- a scarcity line
- a visual plaque rather than a dense card grid

## CSS Architecture

The current design system in `styles.css` has four layers:

### 1. Token layer

The `:root` block holds shared values for:

- colors
- spacing
- shadow
- maximum width

### 2. Layout layer

The core layout classes are:

- `.page-shell`
- `.museum-grid`
- `.panel`
- `.hero`
- `.exhibit-room`
- `.spotlight`
- `.spotlight-visual`

### 3. Component layer

Shared component-like patterns include:

- `.section-heading`
- `.route-step`
- `.room-intro`
- `.spotlight-headline`
- `.spotlight-highlight`
- `.spotlight-scarcity`
- `.visual-plaque`

### 4. Responsive layer

The media queries collapse multi-column grids into single-column flows on
smaller screens while preserving reading order.

## Interaction Model

`script.js` manages a small but important behavior layer:

- route buttons scroll visitors to the intended section
- active route state updates as sections enter view
- the status text makes progression legible

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
- explicit process artifacts for future expansions

## What Can Change Later

- additional exhibit rooms
- richer content packages
- stronger deployment tooling
- more automated verification

Those changes should arrive through specs and sprints, not through ad hoc
expansion.
