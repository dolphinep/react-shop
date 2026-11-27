# react-shop · TanStack Start

The breakfast shop from the React + Vite version (`main` branch), moved to TanStack Start.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run preview
```

Each step is a tag:

| Tag | What changes |
|---|---|
| `start-0-scaffold` | `npx @tanstack/cli@latest create --blank` |
| `start-1-copy` | `App.tsx` copied in as `routes/index.tsx` unchanged: it runs, but products still load in `useEffect` (not in the HTML) and the cart causes a hydration mismatch |
| `start-2-loader` | products from a route `loader` + server function, cart read after hydration |
| `start-3-product-page` | `/products/$id` + `Link` |
| `start-4-server-fn` | checkout through a POST server function that recomputes the total on the server |

Other versions: `main` (React + Vite SPA) · `next`.
