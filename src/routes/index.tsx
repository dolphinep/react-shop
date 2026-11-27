import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { CartSummary } from '../components/CartSummary'
import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'
import type { Product } from '../components/products'
import { getProducts, placeOrder } from '../server/products'

const CART_KEY = 'cart'

function loadCart(): Product[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? '[]')
  } catch {
    return []
  }
}

function App() {
  // Loader data: fetched on the server for the first request, so it is in the HTML.
  const products = Route.useLoaderData()

  // Start empty so the server HTML and the first browser render match.
  const [items, setItems] = useState<Product[]>([])
  const [loaded, setLoaded] = useState(false)

  // localStorage only exists in the browser: read it after the first render.
  useEffect(() => {
    setItems(loadCart())
    setLoaded(true)
  }, [])

  // [items] = run again every time the cart changes.
  useEffect(() => {
    if (loaded) localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items, loaded])

  const total = items.reduce((sum, p) => sum + p.price, 0)
  const add = (product: Product) => setItems([...items, product])
  const checkout = async () => {
    // Called like a normal function; Start turns it into a request to the server.
    const order = await placeOrder({ data: items.map((p) => p.id) })
    alert(`สั่งซื้อแล้ว #${order.orderId} · ${order.total} บาท`)
    setItems([])
  }
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
      <CartSummary items={items} total={total} onRemove={remove} onCheckout={checkout} />
    </main>
  )
}

export const Route = createFileRoute('/')({
  loader: () => getProducts(),
  component: App,
})
