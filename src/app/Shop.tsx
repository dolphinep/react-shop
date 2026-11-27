'use client'

import { useEffect, useState } from 'react'
import { CartSummary } from './CartSummary'
import { Header } from './Header'
import { ProductCard } from './ProductCard'
import type { Product } from './products'

const CART_KEY = 'cart'

function loadCart(): Product[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function Shop({ products }: { products: Product[] }) {
  // Start empty so the server HTML and the first browser render match.
  const [items, setItems] = useState<Product[]>([])
  const [loaded, setLoaded] = useState(false)

  // localStorage only exists in the browser: read it after the first render.
  useEffect(() => {
    setItems(loadCart())
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items, loaded])

  const total = items.reduce((sum, p) => sum + p.price, 0)
  const add = (product: Product) => setItems([...items, product])
  const remove = (index: number) => setItems(items.filter((_, i) => i !== index))

  return (
    <main className="shop">
      <Header count={items.length} />
      <div className="grid">
        {/* map turns an array of data into an array of components. key = a stable id, not the index. */}
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={() => add(p)} />
        ))}
      </div>
      <CartSummary items={items} total={total} onRemove={remove} />
    </main>
  )
}
