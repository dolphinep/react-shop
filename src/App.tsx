import { ProductCard } from './ProductCard'

// Write the card once, use it three times.
export default function App() {
  return (
    <main className="shop">
      <h1>ร้านมื้อเช้า</h1>
      <div className="grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  )
}
