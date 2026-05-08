# Change Note: Pexels Hero Photo Swap

> Superseded by
> `docs/_specs/factual-hero-refresh/change-notes/2026-05-08-public-domain-abstract-hero.md`.

## Problem

The hero refresh originally used a local abstract SVG. The user then requested
that the boy image come from a professional free website instead.

## Scope

Replace the abstract hero player asset with a downloaded Pexels photo by
Vladimir Srajber and keep the image local under `public/assets/hero/`.

## Invariants

- keep the hero copy and exhibit route unchanged
- keep the original Game Boy artifact visible in the hero
- do not hotlink the external image at runtime
- preserve the golden-ratio hero layout and Swiss museum tone

## Files Expected To Change

- `app/page.tsx`
- `app/globals.css`
- `public/assets/hero/pexels-boy-handheld-console.jpg`
- `public/assets/hero/abstract-gameboy-player.svg`
- `docs/_specs/factual-hero-refresh/qa/sprint-0-post-implementation.md`

## Verification

- `npm run format:check`
- `npm run build`
- confirm the downloaded hero image returns `200` from the local dev server

## Outcome

The hero now uses a professional free Pexels photo from the page
`https://www.pexels.com/photo/boy-playing-on-switch-15923754/`.

Pexels license page checked:
`https://www.pexels.com/license/`.
