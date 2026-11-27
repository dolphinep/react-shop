import { getProducts } from '@/lib/products'

// POST /api/order — the function name is the HTTP method.
export async function POST(request: Request) {
  const { ids } = (await request.json()) as { ids: number[] }
  const products = await getProducts()

  // Never trust a total sent by the browser: recompute it from the real prices.
  const items = ids.map((id) => products.find((p) => p.id === id)).filter((p) => p !== undefined)
  if (items.length === 0) return Response.json({ error: 'empty cart' }, { status: 400 })

  const total = items.reduce((sum, p) => sum + p.price, 0)
  return Response.json({ orderId: crypto.randomUUID().slice(0, 8), total })
}
