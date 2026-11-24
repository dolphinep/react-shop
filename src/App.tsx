import { ProductCard } from './ProductCard'
import { PRODUCTS } from './products'

// Same component, different data -> different cards.
export default function App() {
  return (
    <main className="shop">
      <h1>ร้านมื้อเช้า</h1>
      <div className="grid">
        <ProductCard product={PRODUCTS[0]} />
        <ProductCard product={PRODUCTS[1]} />
        <ProductCard product={PRODUCTS[2]} />
      </div>
    </main>
  )
}
