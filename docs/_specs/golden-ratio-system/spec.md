# Golden Ratio System Specification

> **Status:** In Progress

## Problem Statement

The homepage already uses a golden-ratio type and spacing scale, but the live
visual system still contains several one-off dimensions for measures, stage
heights, image frames, breakpoints, and timing. Those values make the design
feel mostly ratio-based rather than fully governed by the approved visual
system.

The project needs a tighter golden-ratio design layer that applies across the
current Next.js implementation without changing the exhibit route, content, or
museum tone.

## Design Goals

1. Extend the golden-ratio system beyond typography and spacing into layout
   measures, frame sizes, stage heights, breakpoints, blur, and transitions.
2. Preserve the existing chronology hall content, route order, and exhibit
   hierarchy.
3. Keep Swiss design consistency: disciplined grids, clear hierarchy,
   restrained surfaces, and strong whitespace.
4. Keep body copy readable on desktop and mobile.
5. Avoid turning the ratio system into a gimmick; use it to stabilize recurring
   patterns.
6. Keep the implementation in the existing CSS layer unless a later sprint
   explicitly extracts components or data.

## Architecture

### Token scope

The live visual system should define project-wide tokens for:

- phi constants
- spacing scale
- type scale
- text measures
- image frame widths and aspect ratios
- stage heights
- grid ratios
- breakpoints
- motion durations
- shell width

### Implementation scope

This sprint should primarily touch:

- `app/globals.css`
- golden-ratio workstream docs
- selected durable docs if they need clearer current-state language

### Design invariants

The refinement must preserve:

- foyer to closing CTA narrative order
- all seven major handheld milestones
- artifact copy and scarcity framing
- local artifact imagery
- fixed route and live room-status behavior
- the Next.js App Router foundation

## Scope

In scope:

- centralizing recurring size values into phi-derived tokens
- replacing one-off width, height, breakpoint, blur, and timing values where
  practical
- preserving the current visual language while making the system more coherent
- documenting the refinement and QA result

Out of scope:

- new exhibit content
- new pages
- component extraction
- asset generation
- deployment changes
- changing the current brand or color direction

## Testing Strategy

Validation should include:

1. `npm run format:check`
2. `npm run build`
3. browser review of the homepage on desktop and mobile
4. route-link and room-status behavior review
5. visual review for readable copy, stable artifact framing, and non-overlap
6. curator review against narrative flow, artifact context, preservation tone,
   and Swiss design consistency

## Sprint Plan

| Sprint   | Goal                                                                   |
| -------- | ---------------------------------------------------------------------- |
| Sprint 0 | Apply project-wide golden-ratio tokens to the current Next.js homepage |
| Sprint 1 | Harmonize all homepage typography with the golden-ratio type system    |

## Future Considerations

Later component extraction should reuse these tokens instead of creating new
one-off dimensions inside components.
