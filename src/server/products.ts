import { createServerFn } from '@tanstack/react-start'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { Product } from '../components/products'

async function readProducts(): Promise<Product[]> {
  const file = await readFile(path.join(process.cwd(), 'data/products.json'), 'utf8')
  return JSON.parse(file)
}

// Server function: the body only ever runs on the server.
// Called from the browser, it becomes a network request; the types stay the same.
export const getProducts = createServerFn({ method: 'GET' }).handler(() => readProducts())

export const getProduct = createServerFn({ method: 'GET' })
  .validator((id: number) => id)
  .handler(async ({ data: id }) => {
    const products = await readProducts()
    return products.find((p) => p.id === id) ?? null
  })

// Never trust a total sent by the browser: recompute it from the real prices.
export const placeOrder = createServerFn({ method: 'POST' })
  .validator((ids: number[]) => ids)
  .handler(async ({ data: ids }) => {
    const products = await readProducts()
    const items = ids.map((id) => products.find((p) => p.id === id)).filter((p) => p !== undefined)
    if (items.length === 0) throw new Error('empty cart')
    const total = items.reduce((sum, p) => sum + p.price, 0)
    return { orderId: crypto.randomUUID().slice(0, 8), total }
  })
