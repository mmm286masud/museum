# Technology Orientation

## Why This Document Exists

This project is smaller than the reference Next.js repository it learned from,
so its stack is simpler. The point of this document is to explain the current
tools accurately instead of pretending the project already has a larger
framework than it does.

## Current Stack

### HTML

`index.html` is the current museum page shell.

It defines:

- the fixed topbar and room-status surface
- the entrance foyer structure
- the chronology-hall route
- the spotlight sections for the major handheld devices
- the closing CTA and footer sequence
- the semantic reading order for the exhibit

### CSS

`styles.css` is the visual system.

It contains:

- the Swiss-style grid
- local Inter variable font loading
- typography choices
- spacing and color tokens
- tonal surface hierarchy and glass navigation
- photo framing, credits, and exhibit-stage presentation
- responsive behavior
- restrained motion

### JavaScript

`script.js` adds the guided-route behavior.

It currently handles:

- route-link activation
- scroll-to-section interactions
- status updates based on section visibility

### Local assets

Local assets live in `assets/`.

They currently include:

- a local SVG illustration of the Game Boy DMG-01
- local Inter font files under `assets/fonts/`

### Remote media

The homepage also uses remote Unsplash image URLs for exhibit photography.

That choice keeps the page visually rich without introducing a build pipeline,
but it also means the production surface depends on external image delivery.
Each live image must keep visible attribution in the page markup.

### npm and Prettier

This repository now includes a small Node-based tooling layer for formatting
checks.

Current command:

```bash
npm run format:check
```

This is not a full test stack yet. It is the current minimum quality gate.

## Current Stack Versus Planned Stack

### Installed and active now

- HTML5
- CSS3
- vanilla JavaScript
- local SVG and font assets
- remote Unsplash photography
- npm
- Prettier

### Not yet part of the repo

- a framework such as Next.js
- automated browser tests
- CI/CD
- static-host deployment automation

Do not document those as live parts of the stack until they actually exist.

## How To Read This Stack

For this repository, the stack layers are:

1. HTML for structure
2. CSS for visual system and responsiveness
3. JavaScript for guided interaction
4. npm and Prettier for baseline verification
5. process artifacts for scope control and durable project memory

The process layer matters as much as the code layer because the site is being
built iteratively.
