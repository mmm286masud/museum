# Agent Guide

This file is the operating guide for any AI assistant working in this
repository.

## Purpose

This project is both:

- a museum-style site about retro handheld gaming
- a teaching example of spec-driven AI-assisted delivery

The repository process is part of the product. Do not treat it as optional
prose.

## Read Order

Before doing substantial work, read these in order:

1. `AGENTS.md`
2. `README.md`
3. `docs/foundation/student-reading-guide.md`
4. `docs/_specs/README.md`
5. the relevant workstream spec under `docs/_specs/{workstream}/spec.md`
6. the relevant sprint doc under `docs/_specs/{workstream}/sprints/`
7. the files the sprint actually changes

If the work touches content structure, also read the related files under
`docs/content/`.

## Non-Negotiable Process Rules

### 1. Use the full workflow for foundational work

For any high-impact or ambiguous change, use:

1. spec
2. QA of the spec
3. sprint doc
4. QA of the sprint doc
5. implementation
6. QA of the implementation

Do not collapse those phases for major work.

### 2. Use the lightweight path only for narrow changes

For low-risk fixes, use the `Change Note` model in
`docs/foundation/lightweight-change-path.md`.

When in doubt, use the heavier path.

### 3. Respect scope boundaries

- do not add unrelated features
- do not rewrite adjacent sections because it feels cleaner
- do not change design direction without a spec
- do not expand one sprint into the next sprint's work

### 4. Treat curator review as real QA

This project is not only a website. It is an exhibit.

QA must consider:

- guided narrative flow
- artifact context and meaning
- historical framing
- scarcity as preservation, not marketing
- Swiss design consistency

### 5. Keep durable docs in the right layer

- `README.md` is the landing document
- `docs/foundation/` holds durable reference docs
- `docs/_specs/` holds planning and QA artifacts
- `docs/content/` holds content architecture and exhibit packages

Do not collapse those roles into each other.

## Verification Rules

Current required repository command:

```bash
npm run format:check
```

Also perform manual review of changed pages and updated docs.

Do not claim verification you did not actually perform.

## Accuracy Rules

- verify file paths against the live repo
- do not describe planned work as already implemented
- do not imply the project has CI, tests, or deployment automation unless it really does
- keep references to the current static-site stack accurate

## Expected Agent Behavior

Any agent working here should:

- read before editing
- write bounded artifacts before broad implementation
- prefer durable files over chat-only reasoning
- preserve narrative and design consistency
- verify before claiming completion
