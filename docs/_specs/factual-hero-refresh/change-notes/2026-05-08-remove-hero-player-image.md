# Change Note: Remove Hero Player Image

## Problem

The user decided to remove the additional player image from the hero and
discard that direction.

## Scope

Remove the extra public-domain player image from the hero, clean up the unused
hero image CSS, and delete the local asset.

## Invariants

- keep the hero copy unchanged
- keep the original Game Boy artifact visible in the hero
- keep the chronology route unchanged
- preserve the golden-ratio hero stage and museum tone

## Files Expected To Change

- `app/page.tsx`
- `app/globals.css`
- `public/assets/hero/public-domain-handheld-gaming-consoles.svg`
- `docs/_specs/factual-hero-refresh/change-notes/2026-05-08-public-domain-abstract-hero.md`

## Verification

- `npm run format:check`
- `npm run build`
- confirm the removed image path is no longer present in the rendered homepage

## Outcome

The hero no longer includes the added player image. It is again focused on the
opening Game Boy artifact.
