# React shop demo

A tiny breakfast shop with a cart, built step by step to explain the core ideas of React.
Companion code for the breakfastz video "React คืออะไร ทำไมเดฟทั่วโลกใช้ + สอนตั้งแต่ศูนย์" (breakfastz.dev).

Each step is a commit and a tag, so you can check out any point of the video:

| Tag | Idea |
|---|---|
| `step-0-scaffold` | `npm create vite@latest my-shop -- --template react-ts` |
| `step-1-component` | A component is a function that returns JSX. Write it once, use it three times. |
| `step-2-props` | Pass data down with props (read-only). |
| `step-3-state` | `useState` in the common parent, derived total, never mutate state, events go up via function props. |
| `step-4-list-effect` | `map` + `key` for lists, `useEffect` to fetch products and save the cart to `localStorage`. |

```bash
git clone <this repo>
cd react-shop
npm install
npm run dev          # http://localhost:5173
git checkout step-2-props   # jump to any step
```

Built with React 19 and Vite 8.

## License

MIT
