# Student Reading Guide

## What This Repository Is

This repository is a retro handheld gaming museum site and a model for
disciplined AI-assisted project delivery.

The page design matters, but the deeper lesson is how the project is planned,
reviewed, implemented, and checked over time.

## Reading Path

### 1. Learn the process

Start with:

- [Orchestration Method](orchestration-method.md)
- [Lightweight Change Path](lightweight-change-path.md)

These two docs explain when to use the full workflow and when a small change
can use a lighter note.

### 2. Learn the current stack

Read:

- [Technology Orientation](technology-orientation.md)
- [Verification & Deployment](verification-and-deployment.md)

These explain the current static-site stack and the project's present quality
baseline.

### 3. Learn why the museum should feel coherent

Read:

- [Site Design Philosophy](site-design-philosophy.md)
- [Site Implementation Codex](site-implementation-codex.md)
- [Site Spec Patterns](site-spec-patterns.md)

These documents explain how the museum metaphor becomes real structure instead
of loose visual taste.

### 4. Learn the active workstreams

Read:

- [Specifications Index](../_specs/README.md)

Then inspect one complete chain from spec to QA.

### 5. Learn the content model

Read:

- [Content Model](../content/architecture/content-model.md)
- [Room Map](../content/architecture/room-map.md)
- [Editorial and Learning Rules](../content/architecture/editorial-and-learning-rules.md)

These files explain what an exhibit page must contain and how the museum should
teach.

## Recommended First Study Chain

Read this sequence first:

1. `docs/_specs/homepage-exhibition/spec.md`
2. `docs/_specs/homepage-exhibition/qa/spec-review.md`
3. `docs/_specs/homepage-exhibition/sprints/sprint-0-entrance-hall.md`
4. `docs/_specs/homepage-exhibition/qa/post-implementation.md`
5. `docs/_specs/homepage-exhibition/qa/spec-review-chronology-hall.md`
6. `docs/_specs/homepage-exhibition/sprints/sprint-1-chronology-hall.md`
7. `docs/_specs/homepage-exhibition/qa/sprint-1-post-implementation.md`
8. `docs/content/exhibits/major-handheld-chronology.md`
9. `app/page.tsx`, `app/globals.css`, `app/route-tracker.tsx`

That chain shows how one small slice became a fuller chronology hall.

## What To Do Next

When you add a new feature:

1. define the problem in a spec
2. QA the spec
3. write one sprint
4. QA the sprint
5. implement only that sprint
6. QA the implementation as both a builder and a curator
