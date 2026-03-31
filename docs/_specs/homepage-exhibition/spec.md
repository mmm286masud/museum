# Homepage Exhibition Specification

> **Status:** In Progress

## Problem Statement

The museum needs a public-facing entrance experience that feels like a guided
exhibit, not a generic homepage.

The first slice established the visual language and one complete artifact
pattern, but the museum still lacks the major chronological sequence visitors
would expect from a serious handheld-gaming exhibition.

The next expansion must add the most historically significant handheld devices
as a clear exhibit flow, while keeping the writing minimal, visually led, and
museum-focused rather than commercial.

The next refinement after the chronology hall must apply the user-supplied
Digital Curator design system so the homepage reads like a premium editorial
museum surface rather than a generic static site.

## Design Goals

1. Make the homepage feel like an entrance hall
2. Expand the homepage into a chronological route of major handheld milestones
3. Present each required device as an Apple-style spotlight section with museum tone
4. Express scarcity as preservation context
5. Preserve Swiss grid discipline and strong typography
6. Keep the route visually clear from Origins through the Modern Era
7. Apply the approved Digital Curator design language with tonal surfaces,
   glass navigation, and asymmetrical editorial pacing

## Architecture

### Current page structure

The homepage must contain:

1. entrance hero
2. guided route
3. chronological exhibit rooms
4. one or more full-width spotlight sections per room

### Chronological room sequence

The homepage route must now include:

1. Origins
2. Color Evolution
3. Performance Expansion
4. Multimedia Era
5. Innovation Era
6. Modern Era

### Required devices

The homepage chronology must include these devices:

- Nintendo Game Boy (1989)
- Game Boy Color (1998)
- Game Boy Advance (2001)
- PlayStation Portable (2004)
- Nintendo DS (2004)
- Nintendo 3DS (2011)
- Nintendo Switch (2017)

The PlayStation Vita may appear later, but it is not required for this sprint.

### Approved design source

The repository may use the user-supplied `stitch.zip` design archive as a
reference source for:

- typography rhythm
- surface hierarchy
- glass navigation
- asymmetrical editorial composition
- hero and footer pacing

The implementation must adapt that design to the museum's live content instead
of copying external placeholder brands, image URLs, or unrelated sections.

### Required exhibit fields

Every complete spotlight presentation must include:

- title
- headline
- subheadline
- key highlight
- minimal description
- scarcity line

These spotlight fields must still communicate historical context, cultural
meaning, and narrative value even when the writing remains minimal.

### Artifact imagery

The homepage may use credited stock photography when it improves artifact
presentation and preserves the museum tone.

Current guardrails:

- image sources must be reputable and stable
- attribution must remain visible in the live page
- imagery should support the device or era being discussed
- photography must not overpower the exhibit copy or chronology

### Artifact choice

The chronology begins with the Nintendo Game Boy because it gives the museum an
iconic and historically legible starting point.

## Testing Strategy

Validation for each sprint in this workstream should include:

1. spotlight-field completeness
2. visual and structural consistency review
3. curator review against narrative flow and educational value
4. repository format check
5. required-device coverage in the homepage markup and content docs
6. consistency against the approved design source
7. visible attribution for any external artifact photography

## Sprint Plan

| Sprint   | Goal                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------ |
| Sprint 0 | Build the entrance hall homepage and the first complete artifact section                         |
| Sprint 1 | Expand the homepage into a full chronology hall with the required major handheld devices         |
| Sprint 2 | Apply the Digital Curator design system from the supplied design archive to the chronology hall  |
| Sprint 3 | Replace placeholder artifact visuals with credited stock photography that fits the museum tone   |
| Sprint 4 | Extract shared exhibit patterns and decide whether later rooms should split into dedicated pages |
| Sprint 5 | Run a cross-page curator QA pass                                                                 |

## Future Considerations

Out of scope for Sprint 1:

- full collection database
- search and filtering
- optional device expansion beyond the approved list
- heavy interactive media
