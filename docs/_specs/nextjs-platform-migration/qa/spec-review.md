# Spec QA: Next.js Platform Migration

## Result

Approved for Sprint 0.

## Checks

- The spec treats the migration as a platform change, not as a redesign.
- The current chronology hall remains the acceptance surface.
- Static export compatibility is explicit so the project does not accidentally
  lose its current static-hosting shape.
- The scope excludes new exhibit features, databases, auth, CMS work, and
  deployment automation.
- Verification includes both repository commands and museum-specific curator
  review.

## Risks To Watch

- stale documentation may continue describing the live stack as plain
  HTML/CSS/JavaScript
- moving assets into `public/` may leave broken relative paths
- too much component extraction during Sprint 0 could turn a platform migration
  into an architecture rewrite
- client behavior must remain narrow so the page does not ship unnecessary
  interactivity
