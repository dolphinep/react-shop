import { getProducts } from '@/lib/products'
import { Shop } from './Shop'

// Server Component (no 'use client'): runs on the server, then sends finished HTML.
export default async function Page() {
  const products = await getProducts()
  return <Shop products={products} />
}
