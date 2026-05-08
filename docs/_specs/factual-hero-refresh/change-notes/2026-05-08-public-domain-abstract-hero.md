# Change Note: Public Domain Abstract Hero Image

> Superseded by
> `docs/_specs/factual-hero-refresh/change-notes/2026-05-08-remove-hero-player-image.md`.

## Problem

The hero briefly used a real Pexels photo after the user asked for a
professional free image. The user then clarified that the image should be
abstract and from a free website.

## Scope

Replace the real photo with a public-domain abstract/cartoon SVG from
PublicDomainVectors/OpenClipart and keep it local under `public/assets/hero/`.

## Invariants

- keep the hero copy and exhibit route unchanged
- keep the original Game Boy artifact visible in the hero
- do not hotlink the external image at runtime
- preserve the golden-ratio hero layout and Swiss museum tone
- keep source and licensing notes durable

## Files Expected To Change

- `app/page.tsx`
- `public/assets/hero/public-domain-handheld-gaming-consoles.svg`
- `public/assets/hero/pexels-boy-handheld-console.jpg`
- `docs/_specs/factual-hero-refresh/qa/sprint-0-post-implementation.md`

## Verification

- `npm run format:check`
- `npm run build`
- confirm the downloaded abstract hero image returns `200` from the local dev
  server

## Outcome

The hero now uses a public-domain abstract SVG from the page
`https://publicdomainvectors.org/en/free-clipart/Handheld-Gaming-Console/75776.html`.

The source page describes the image as cartoon graphics of a boy and girl
playing video games and lists the license as Public Domain.
