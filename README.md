# react-shop · Next.js

The breakfast shop from the React + Vite version (`main` branch), moved to Next.js 16 (App Router).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Each step is a tag:

| Tag | What changes |
|---|---|
| `next-0-scaffold` | `npx create-next-app@latest --yes` |
| `next-1-copy-broken` | `App.tsx` copied in as `page.tsx`, intentionally broken: `useState` in a Server Component |
| `next-2-hydration-broken` | `page.tsx` reads products on the server, `Shop.tsx` is `'use client'`, intentionally broken: hydration mismatch (cart read during render) |
| `next-3-fix-hydration` | saved cart read in `useEffect`, after hydration |
| `next-4-product-page` | `/products/[id]` + `Link` |
| `next-5-api` | `POST /api/order` (`route.ts`) recomputes the total on the server |

Other versions: `main` (React + Vite SPA) · `tanstack-start`.
