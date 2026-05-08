# Sprint QA: Next.js Platform Migration Plan

## Result

Approved.

## Checks

- The sprint is bounded to platform migration, behavior parity, public assets,
  and documentation updates.
- It preserves the current chronology hall as the reviewable product outcome.
- It does not add new rooms, routes, CMS features, database work, auth, search,
  or deployment automation.
- It requires both `npm run format:check` and `npm run build`.
- It keeps manual browser review and curator review in scope.

## Verified Change Surface

- `package.json`
- `package-lock.json`
- `next.config.*`
- `tsconfig.json`
- `next-env.d.ts`
- `app/` or `src/app/`
- `components/`
- `public/assets/`
- `README.md`
- `PROJECT_OVERVIEW.md`
- selected foundation docs
- `docs/_specs/README.md`
- `docs/_specs/nextjs-platform-migration/*`

## Risks To Watch During Implementation

- build configuration must stay compatible with static export
- converted JSX must keep semantic structure and accessible image alt text
- client behavior should stay isolated to the route state controller
- global CSS changes should be minimal so the existing design rhythm survives
- documentation should not overstate automated testing or deployment automation
