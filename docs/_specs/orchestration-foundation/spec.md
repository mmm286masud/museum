# Orchestration Foundation Specification

> **Status:** Complete

## Problem Statement

The museum project began with one implemented page slice, but it did not yet
have the durable repository scaffolding that makes future AI-assisted work
reliable.

Without that foundation, the project had three practical weaknesses:

1. there was no canonical landing document explaining what the repository is
2. there was no durable foundation-doc layer separating method, design, and
   content architecture from sprint artifacts
3. there was no lightweight local verification baseline beyond manual reading

The reference repository provided strong patterns for those problems. This
workstream adapts the useful parts of that system to the museum project without
copying the reference product’s framework, subject, or documentation claims.

## Design Goals

1. Explain the repository clearly to new students and future agents
2. Preserve the museum project’s required workflow as durable documentation
3. Keep the stack description accurate to the current static-site build
4. Introduce a canonical `docs/_specs/` workstream structure
5. Add a minimal objective quality gate appropriate to the current project size
6. Seed a content architecture layer so later rooms do not live only in page markup

## Architecture

### Required repository artifacts

This workstream must produce:

- `README.md`
- `AGENTS.md`
- a durable foundation-doc set under `docs/foundation/`
- a canonical workstream index under `docs/_specs/README.md`
- starter content architecture docs under `docs/content/`
- a lightweight formatting baseline through `package.json` and Prettier config

### Documentation layers

The repository must keep these layers distinct:

- landing document
- durable process/design reference docs
- workstream planning and QA artifacts
- content architecture and exhibit packages

### Verification baseline

The project does not yet justify a heavy toolchain. The useful imported lesson
is to establish one honest deterministic check now and leave room for later
growth.

Current required command:

```bash
npm run format:check
```

## Testing Strategy

Validation for this workstream must include:

1. command accuracy against the live repository
2. file-path accuracy across the new docs
3. consistency between README, AGENTS, foundation docs, and workstream index
4. a passing formatting check

## Sprint Plan

| Sprint   | Goal                                                                                               |
| -------- | -------------------------------------------------------------------------------------------------- |
| Sprint 0 | Add the foundation docs, workstream structure, starter content architecture, and Prettier baseline |

## Future Considerations

The following are explicitly out of scope for this workstream:

- converting the site to Next.js
- adding CI/CD
- adding browser tests
- building multiple new exhibit pages

This workstream succeeds when the museum repo becomes easier to understand,
harder for AI to drift inside, and easier to extend through durable artifacts.
