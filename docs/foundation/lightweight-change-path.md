# Lightweight Change Path

## Purpose

Not every repository change needs a full spec and sprint package.

Small, low-risk changes can use a smaller control artifact so the project keeps
moving without losing accountability.

## The Lightweight Artifact

The lightweight artifact for this repository is a `Change Note`.

Use it for things like:

- typo fixes
- a narrow copy clarification
- a corrected file path in documentation
- a local style tweak that does not alter the design language

## Required Fields

A valid `Change Note` should include:

1. Problem
2. Scope
3. Invariants
4. Files expected to change
5. Verification
6. Outcome

## Decision Rule

Use the full workflow if the change affects:

- architecture
- site structure
- the design language
- the documentation system
- the content model

Use a `Change Note` only when the change is clearly narrow and easy to verify.

When in doubt, use the heavier path.

## Example

See the reusable template in
[`../templates/change-note.md`](../templates/change-note.md).
