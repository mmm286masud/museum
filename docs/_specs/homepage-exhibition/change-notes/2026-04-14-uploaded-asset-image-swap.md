# Change Note

## Problem

The homepage was still using generated local render plates for devices that now
have user-uploaded images in `assets/img/`.

## Scope

Swap matching homepage artifact images to the user-provided files in
`assets/img/` and correct current-state docs so they describe the mixed local
image strategy accurately.

## Invariants

- keep the current room order and exhibit copy unchanged
- keep local assets only; do not reintroduce remote image dependencies
- keep the two unmatched devices on the existing render pipeline
- preserve the current golden-ratio layout system

## Files Expected To Change

- `index.html`
- `README.md`
- `PROJECT_OVERVIEW.md`
- `docs/foundation/site-implementation-codex.md`
- `docs/foundation/technology-orientation.md`
- `docs/_specs/README.md`

## Verification

```bash
npm run format:check
```

Manual checks:

- review the hero and affected rooms in a local browser
- confirm the uploaded images display correctly from `assets/img/`

## Outcome

- the homepage now uses uploaded local images for Game Boy, Game Boy Color,
  PSP, Nintendo Switch, and the 3DS-family secondary feature
- Game Boy Advance and Nintendo DS remain on the local render path because no
  matching uploaded replacements were present
- current-state docs now describe the artifact imagery as a mix of uploaded
  local photos and generated local renders
