# Orchestration Method

## Why This Exists

AI can generate plausible work quickly. That speed is useful, but it also
creates drift, lost context, and premature claims of completion.

This repository solves those problems with durable artifacts and explicit
sequencing.

## The Core Problems

### Drift

Drift is movement outside the requested scope.

In practice, drift looks like:

- adding pages that were not approved
- changing the design language during an unrelated fix
- rewriting broad content instead of solving the local problem

### Context loss

Chat history is not reliable long-term memory.

Important decisions need to live in files that can be reopened in later
sessions.

### Ambiguous completion

AI output often looks finished before it has been checked against the actual
requirements.

This project treats completion as something that must be verified, not guessed.

## Artifact Memory

The repository keeps important reasoning in files:

- specs define what the work is
- sprint docs define the bounded execution unit
- QA docs record what was checked and what still risks failure
- foundation docs preserve the operating method

That artifact memory is the project's durable context.

## Operating Primitives

### Role

The agent should know whether it is acting as:

- spec writer
- QA reviewer
- implementation assistant
- curator reviewer

Each role optimizes for different behavior.

### Scope

Every meaningful task must state what is in bounds and what is out of bounds.

### Invariants

Invariants are the rules that must not be broken, such as:

- keep Swiss design discipline
- preserve museum tone
- use scarcity as preservation context, not sales pressure
- avoid full-site generation in one step

### Acceptance criteria

A task is not done because it reads well. It is done when the written criteria
are met and checked.

### Verification

Verification is the objective evidence that a claimed result holds.

Current local verification:

```bash
npm run format:check
npm run build
```

Manual curator review is also required.

## Why This Repository Uses Specs And Sprints

Specs define the feature-level contract:

- the problem
- the design goals
- the architecture
- the risks
- the testing strategy
- the sprint plan

Sprint docs define one bounded execution unit:

- exact files or artifacts
- verified starting assets
- ordered tasks
- verify steps
- completion checklist

The spec keeps the project coherent. The sprint keeps the implementation
bounded.

## Lifecycle

For foundational work, use this sequence:

1. write the spec
2. QA the spec
3. write the sprint doc
4. QA the sprint doc
5. implement the sprint
6. QA the implementation

This repository is intentionally strict because the project is meant to survive
multiple AI sessions without losing intent.

## Prompting Style

Requests should be direct and bounded.

Good requests:

- write a spec for Room 02
- QA this sprint against the existing homepage-exhibition spec
- implement Sprint 1 and do not change the entrance hall

Weak requests:

- make the site better
- clean this up
- redesign the project

The more vague the request, the more likely the assistant is to drift.

## Process Weight

Use the heavyweight flow when the change is:

- foundational
- ambiguous
- likely to influence later work
- likely to be revisited in later sessions

Use the lightweight path only for small, low-risk changes.

## Main Lesson

Do not treat AI output as the plan.

Write the plan into artifacts first, implement one bounded unit at a time, and
check the result against those artifacts after the code exists.
