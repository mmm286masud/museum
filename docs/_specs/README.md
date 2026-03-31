# Specifications Index

This directory is the canonical record of major workstreams in this repository.

Each workstream should follow:

`spec -> QA -> sprint -> QA -> implement -> QA`

The durable explanation of that method lives in
[`../foundation/orchestration-method.md`](../foundation/orchestration-method.md).

## Workstreams

| Workstream                                            | Status       |    Sprints | What It Produces                                                                          |
| ----------------------------------------------------- | ------------ | ---------: | ----------------------------------------------------------------------------------------- |
| [orchestration-foundation](orchestration-foundation/) | **Complete** |          1 | README, agent guide, foundation docs, content architecture starter, format-check baseline |
| [homepage-exhibition](homepage-exhibition/)           | In Progress  | 2 complete | entrance hall homepage, chronology hall expansion, spotlight exhibit structure            |

## Recommended Study Order

1. **[orchestration-foundation](orchestration-foundation/)**  
   Study this first if you need to understand how the repository itself is
   organized and how the reference repo’s useful patterns were adapted here.

2. **[homepage-exhibition](homepage-exhibition/)**  
   Study this next to see how a museum slice becomes a real implemented page.

## How To Read A Workstream

For any workstream:

1. read `spec.md`
2. read the spec QA notes
3. read the sprint docs in order
4. inspect the implementation files
5. read the post-implementation QA
