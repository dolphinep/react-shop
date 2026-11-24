import { useState } from 'react'
import { CartSummary } from './CartSummary'
import { Header } from './Header'
import { ProductCard } from './ProductCard'
import { PRODUCTS, type Product } from './products'

export default function App() {
  // State lives in the closest common parent: App.
  const [items, setItems] = useState<Product[]>([])

  // Derived value: computed on every render, never stored as state.
  const total = items.reduce((sum, p) => sum + p.price, 0)

  // Never mutate state (items.push(p) would not re-render). Always create a new array.
  const add = (product: Product) => setItems([...items, product])
  const remove = (index: number) => setItems(items.filter((_, i) => i !== index))

  // UI = f(state): the badge, the list and the total all read the same `items`,
  // so they can never disagree.
  return (
    <main className="shop">
      <Header count={items.length} />
      <div className="grid">
        <ProductCard product={PRODUCTS[0]} onAdd={() => add(PRODUCTS[0])} />
        <ProductCard product={PRODUCTS[1]} onAdd={() => add(PRODUCTS[1])} />
        <ProductCard product={PRODUCTS[2]} onAdd={() => add(PRODUCTS[2])} />
      </div>
      <CartSummary items={items} total={total} onRemove={remove} />
    </main>
  )
}
