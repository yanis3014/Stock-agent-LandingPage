# AGENTS.md

## Cursor Cloud specific instructions

This is **FlowStock**, a static Next.js 16 marketing/landing page (no backend, no database, no auth). See `README.md` for standard commands.

### Services

| Service | Command | Port |
|---|---|---|
| Next.js dev server | `npm run dev` | 3000 |

No other services are needed — the site is fully static.

### Notes

- `npm run lint` exits with code 1 due to pre-existing ESLint errors in the codebase (unescaped entities, unused vars, etc.). These are not regressions.
- `npm run build` works cleanly and produces static pages for all routes (`/`, `/product`, `/pricing`, `/how-it-works`).
- The site uses Tailwind CSS v4 with `@tailwindcss/postcss`; there is no separate `tailwind.config.js` — configuration is in `tailwind.config.ts`.
- The splash screen animation plays on first load; allow a few seconds for it to complete before interacting.
