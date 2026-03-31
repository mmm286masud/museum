# Retro Handheld Gaming Museum

This repository is a museum-style website about retro handheld gaming and a
teaching example of spec-driven AI orchestration.

The product is the site. The deeper lesson is the process used to build it:
small specs, bounded sprints, explicit QA passes, and durable project memory
stored in files instead of chat history.

## What This Project Is

- a static web museum built with HTML, CSS, JavaScript, and local SVG assets
- a Swiss-style digital exhibit focused on handheld systems as historical artifacts
- a repository that treats AI as an implementation assistant, not as the system of record

## Current State

The current public slice is a chronology-hall homepage with:

- a guided museum-style opening sequence
- six chronological exhibit rooms from Origins through Modern Era
- seven major handheld milestones from Game Boy to Switch
- Apple-style spotlight copy written in museum language
- scarcity framing written as preservation context

The current workstreams and their status live in
[`docs/_specs/README.md`](docs/_specs/README.md).

## Start Here

Read these in order:

1. [`AGENTS.md`](AGENTS.md)
2. [`docs/foundation/student-reading-guide.md`](docs/foundation/student-reading-guide.md)
3. [`docs/foundation/orchestration-method.md`](docs/foundation/orchestration-method.md)
4. [`docs/_specs/README.md`](docs/_specs/README.md)

## Workflow

For foundational work, this project uses:

`spec -> QA -> sprint -> QA -> implement -> QA`

This is mandatory for changes that shape the site, the documentation system, or
the long-term design language.

For narrow fixes, use the lighter process in
[`docs/foundation/lightweight-change-path.md`](docs/foundation/lightweight-change-path.md).

## Quality Baseline

This repository currently has a lightweight verification baseline:

```bash
npm install
npm run format:check
```

Manual QA is still required for:

- desktop and mobile layout review
- copy consistency
- curator review against narrative and exhibit quality

The current verification model is documented in
[`docs/foundation/verification-and-deployment.md`](docs/foundation/verification-and-deployment.md).

## Repository Structure

```text
.
├── assets/                 # local exhibit imagery
├── docs/
│   ├── foundation/         # durable process and design reference docs
│   ├── _specs/             # workstream specs, sprint docs, and QA artifacts
│   ├── content/            # content architecture and exhibit packages
│   └── templates/          # reusable planning templates
├── index.html              # current chronology-hall homepage
├── styles.css              # Swiss-style visual system and layout
├── script.js               # guided route interaction
├── package.json            # local quality scripts
└── AGENTS.md               # repository operating rules for future AI sessions
```

## Main References

- [`docs/foundation/site-design-philosophy.md`](docs/foundation/site-design-philosophy.md)
- [`docs/foundation/site-implementation-codex.md`](docs/foundation/site-implementation-codex.md)
- [`docs/foundation/site-spec-patterns.md`](docs/foundation/site-spec-patterns.md)
- [`docs/content/architecture/content-model.md`](docs/content/architecture/content-model.md)

## Scope Rule

This project should not be generated in one large burst. Every meaningful
expansion should be introduced through a bounded spec and sprint package.
