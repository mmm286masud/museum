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

- the entrance hall structure
- the chronology-hall route
- the spotlight sections for the major handheld devices
- the semantic reading order for the exhibit

### CSS

`styles.css` is the visual system.

It contains:

- the Swiss-style grid
- typography choices
- spacing and color tokens
- responsive behavior
- restrained motion

### JavaScript

`script.js` adds the guided-route behavior.

It currently handles:

- route-step activation
- scroll-to-section interactions
- status updates based on section visibility

### SVG assets

Local image assets live in `assets/`.

A local SVG illustration of the Game Boy DMG-01 is already stored there for
future exhibit use. Keeping assets local keeps the current build simple and
predictable.

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
- SVG assets
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
