# Sprint 0 — Foundation Docs And Tooling

## Header

- Goal: apply the most useful reusable patterns from the reference repo to this
  museum project by creating durable docs, a canonical workstream layout, and a
  minimal formatting gate.
- Spec sections:
  - Problem Statement
  - Design Goals 1-6
  - Architecture: Required repository artifacts, Documentation layers,
    Verification baseline
  - Testing Strategy
- Prerequisite: none

## Available Assets

| Asset                | Verified details                                                                          | How this sprint uses it                                  |
| -------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| current museum page  | `index.html`, `styles.css`, `script.js`, and `assets/game-boy-dmg.svg` already exist      | grounds the implementation codex and homepage workstream |
| existing slice docs  | initial spec, sprint, and QA notes already describe the entrance-hall slice               | migrated into canonical `_specs` structure               |
| reference repository | contains strong patterns for README, agent docs, foundation docs, and workstream indexing | adapted into museum-specific equivalents                 |
| local Node/npm       | available in this environment                                                             | supports the new format-check baseline                   |

## Tasks

### 1. Create root orientation docs

Add:

- `README.md`
- `AGENTS.md`

These must explain the project accurately and define how future AI work should
operate.

Verify:

```bash
npm run format:check
```

### 2. Create durable foundation docs

Add museum-specific docs under `docs/foundation/` covering:

- reading order
- orchestration method
- current technology stack
- design philosophy
- implementation codex
- spec patterns
- lightweight change path
- verification baseline

Verify:

```bash
npm run format:check
```

### 3. Create canonical workstream and content architecture layers

Add:

- `docs/_specs/README.md`
- `docs/content/architecture/*`
- one starter exhibit package

Also migrate the existing homepage slice into the new `_specs` structure.

Verify:

```bash
npm run format:check
```

### 4. Add minimal tooling

Add:

- `package.json`
- Prettier config

The goal is not a full automation stack yet. The goal is one honest local
quality gate.

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] README and AGENTS exist and are repository-accurate
- [ ] foundation docs exist under `docs/foundation/`
- [ ] `docs/_specs/README.md` exists
- [ ] homepage-exhibition workstream is represented in `_specs`
- [ ] content architecture starter docs exist
- [ ] Prettier config exists
- [ ] `npm run format:check` passes

## QA Deviations

None.
