# Specifications Index

This directory is the canonical record of major workstreams in this repository.

Each workstream should follow:

`spec -> QA -> sprint -> QA -> implement -> QA`

The durable explanation of that method lives in
[`../foundation/orchestration-method.md`](../foundation/orchestration-method.md).

## Workstreams

| Workstream                                              | Status       |    Sprints | What It Produces                                                                                          |
| ------------------------------------------------------- | ------------ | ---------: | --------------------------------------------------------------------------------------------------------- |
| [orchestration-foundation](orchestration-foundation/)   | **Complete** |          1 | README, agent guide, foundation docs, content architecture starter, format-check baseline                 |
| [homepage-exhibition](homepage-exhibition/)             | In Progress  | 5 complete | entrance hall homepage, chronology hall expansion, visual refinement, and local artifact imagery          |
| [nextjs-platform-migration](nextjs-platform-migration/) | In Progress  | 1 complete | Next.js App Router migration, static export setup, and updated stack documentation                        |
| [golden-ratio-system](golden-ratio-system/)             | In Progress  | 2 complete | project-wide golden-ratio tokens for measures, frames, stages, grids, breakpoints, motion, and typography |
| [factual-hero-refresh](factual-hero-refresh/)           | **Complete** | 1 complete | source-backed chronology review, hero visual refresh, and visible artifact accuracy corrections           |
| [premium-refinement-pass](premium-refinement-pass/)     | **Complete** | 1 complete | premium museum/product refinement pass for spacing, navigation, hero rhythm, and artifact staging         |

## Recommended Study Order

1. **[orchestration-foundation](orchestration-foundation/)**  
   Study this first if you need to understand how the repository itself is
   organized and how the reference repo’s useful patterns were adapted here.

2. **[homepage-exhibition](homepage-exhibition/)**  
   Study this next to see how a museum slice becomes a real implemented page.

3. **[nextjs-platform-migration](nextjs-platform-migration/)**  
   Study this to see how the static-site implementation was moved into a
   Next.js App Router foundation without changing the exhibit scope.

4. **[golden-ratio-system](golden-ratio-system/)**  
   Study this to see how the visual system was tightened into a broader
   golden-ratio token layer after the Next.js migration.

5. **[factual-hero-refresh](factual-hero-refresh/)**  
   Study this to see how source review and a bounded hero refresh can improve
   the exhibit without changing the approved chronology route.

6. **[premium-refinement-pass](premium-refinement-pass/)**  
   Study this to see how a bounded visual refinement pass can make the
   homepage feel more premium without replacing the existing design language.

## How To Read A Workstream

For any workstream:

1. read `spec.md`
2. read the spec QA notes
3. read the sprint docs in order
4. inspect the implementation files
5. read the post-implementation QA
