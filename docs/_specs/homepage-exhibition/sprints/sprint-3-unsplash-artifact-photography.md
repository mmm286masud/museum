# Sprint 3 — Unsplash Artifact Photography

## Header

- Goal: replace placeholder artifact silhouettes with real exhibit photography
  from Unsplash while keeping the chronology, copy structure, and museum tone
  intact.
- Spec sections:
  - Problem Statement
  - Design Goals 1-7
  - Architecture: Required devices, Required exhibit fields, Artifact imagery
  - Testing Strategy
- Prerequisite: homepage visual refinement complete

## Available Assets

| Asset                   | Verified details                                                                        | How this sprint uses it                                |
| ----------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| current chronology hall | all required devices and room sequence already exist in `index.html`                    | preserve structure while replacing placeholder visuals |
| current visual system   | tonal surfaces, fixed navigation, editorial spacing already implemented in `styles.css` | retain the layout and image staging                    |
| Unsplash photo set      | device and era photography identified for each room                                     | swap real photography into the stage surfaces          |
| current docs            | foundation and workstream docs describe the present homepage                            | update current-state claims where imagery changed      |

## Tasks

### 1. Replace placeholder visuals with real photography

Swap the current placeholder artifact surfaces for real stock photography from
Unsplash.

Required outcomes:

- hero and room visuals use real photographs
- the page still presents one primary device focus at a time
- image framing remains consistent with the Swiss editorial system

Verify:

```bash
npm run format:check
```

### 2. Add visible attribution

Every externally sourced image must carry visible attribution in the live page.

Required outcomes:

- attribution appears near each live image
- attribution links point to both photographer and source page
- the credits do not overpower the museum content

Verify:

```bash
npm run format:check
```

### 3. Keep docs aligned with the live implementation

Update the durable docs so they no longer describe the homepage as a silhouette
based artifact system.

Required outcomes:

- README reflects live photography use
- foundation docs describe the external media dependency accurately
- workstream docs record this sprint and QA result

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] real photography replaces placeholder visuals in the homepage
- [x] attribution is visible for each externally sourced image
- [x] chronology and copy structure remain intact
- [x] docs reflect the new artifact rendering strategy
- [x] `npm run format:check` passes

## QA Deviations

None.
