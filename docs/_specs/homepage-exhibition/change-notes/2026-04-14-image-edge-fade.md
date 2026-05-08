# Change Note

## Problem

The artifact images were reading as hard-edged plates instead of blending
softly into their frame backgrounds.

## Scope

Add a narrow frame-level fade treatment around artifact imagery so the image
edges dissolve more naturally into the surrounding surface.

## Invariants

- keep the current golden-ratio layout system unchanged
- keep the current artifact sources and section copy unchanged
- preserve image readability and hardware detail

## Files Expected To Change

- `styles.css`

## Verification

```bash
npm run format:check
```

Manual checks:

- review at least one light-surface image and one dark-room image in a local
  browser
- confirm the fade softens edges without obscuring the devices

## Outcome

- added a shared feathered fade treatment to `.photo-frame`
- applied a stronger radial mask to `.artifact-photo` so image edges visibly
  dissolve into their panel backgrounds
