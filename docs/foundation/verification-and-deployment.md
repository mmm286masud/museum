# Verification & Deployment

## Current Quality Model

This repository currently has a light but explicit quality system.

### Layer 1: Process artifacts

Specs, sprint docs, and QA notes control:

- scope
- intent
- sequencing
- auditability

### Layer 2: Deterministic local tooling

Current commands:

```bash
npm run format:check
npm run build
```

These give the project objective local gates for formatting consistency and for
the Next.js static production build.

### Layer 3: Manual curator QA

Because this is a museum-style site, some quality questions are not captured by
formatting tools alone.

Manual review must still check:

- narrative flow
- readability
- mobile layout
- accessibility basics such as alt text and heading order
- whether scarcity language still sounds curatorial instead of promotional

## Current State Versus Future State

### Implemented now

- process artifacts in `docs/_specs/`
- durable foundation docs in `docs/foundation/`
- local formatting check with Prettier
- Next.js static build check

### Not implemented yet

- CI/CD
- browser automation
- Lighthouse or automated accessibility scoring
- deployment automation

Do not claim those systems exist until they are actually added.

## Practical Verification Cycle

For most current workstreams:

1. read the governing spec and sprint
2. implement the bounded change
3. run `npm run format:check`
4. run `npm run build`
5. perform a manual code and content review
6. perform curator QA against the project criteria

## Future Direction

As the museum grows, useful next layers would be:

- browser-based responsive checks
- automated accessibility review
- static deployment automation

Those should be introduced only when a spec explicitly calls for them.
