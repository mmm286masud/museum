# Next.js Platform Migration Specification

> **Status:** In Progress

## Problem Statement

The museum currently runs as a static HTML, CSS, and vanilla JavaScript site.
That has been useful for the first teaching slice, but the project now needs to
move onto a framework foundation that can support future exhibit pages,
component reuse, richer routing, and a more realistic modern web workflow.

The migration must switch the whole public project to Next.js without changing
the museum's exhibit meaning. The current chronology hall is the proof surface:
if the route, copy, artifact images, visual rhythm, and guided navigation still
work in Next.js, the platform migration is successful.

## Design Goals

1. Convert the public site to the Next.js App Router.
2. Preserve the current one-page chronology hall narrative and reading order.
3. Preserve Swiss design discipline, golden-ratio scale, tonal surfaces, and
   local artifact imagery.
4. Keep guided route behavior simple and equivalent to the current
   IntersectionObserver model.
5. Keep static export compatibility so the museum can still be hosted as a
   static site.
6. Update durable docs so the repository no longer describes the live stack as
   plain HTML, CSS, and JavaScript.
7. Avoid adding new exhibit features, pages, or design direction changes during
   the migration.

## Architecture

### Target stack

The migrated project should use:

- Next.js App Router
- React
- TypeScript
- CSS modules or global CSS where appropriate for the existing visual system
- local assets served from `public/`
- existing npm formatting checks plus a build check

### Public route

The initial route remains `/`.

The homepage should still contain:

1. fixed glass navigation with live room status
2. foyer hero
3. Origins
4. Color Evolution
5. Performance Expansion
6. Multimedia Era
7. Innovation Era
8. Modern Era
9. closing CTA room and footer

### Component boundaries

The migration may introduce components only where they reduce migration risk or
make existing structure clearer.

Expected boundaries:

- a root layout for metadata, fonts, and global shell concerns
- a homepage route for the exhibit markup
- a small client component for route-link activation and status updates

### Asset strategy

Local public assets must remain self-contained.

The existing local assets should move or be copied into `public/assets/` so
Next.js can serve them from stable root-relative paths.

### Static export

The project should include a Next.js static export configuration unless a later
deployment spec chooses a server-rendered target.

## Scope

In scope:

- framework migration
- package scripts and dependencies
- homepage port
- global style port
- guided-route behavior port
- local asset serving adjustments
- durable documentation updates
- migration workstream docs and QA notes

Out of scope:

- new exhibit pages
- new content packages
- redesigning the visual language
- search, filters, CMS, database, or authentication
- deployment automation beyond static-export-ready configuration

## Testing Strategy

Validation for this workstream should include:

1. `npm run format:check`
2. `npm run build`
3. manual review of the homepage route in a browser
4. route-link and room-status behavior review
5. local asset review for missing images and fonts
6. curator review against narrative flow, artifact context, historical framing,
   preservation language, and Swiss design consistency

## Sprint Plan

| Sprint   | Goal                                                                  |
| -------- | --------------------------------------------------------------------- |
| Sprint 0 | Migrate the existing one-page museum to Next.js without scope growth  |
| Sprint 1 | Extract reusable exhibit data/components after the platform is stable |
| Sprint 2 | Decide static hosting and deployment documentation                    |

## Future Considerations

Future sprints may split room pages, introduce typed content data, or add
browser automation, but those should happen only after the baseline Next.js
port has been verified.
