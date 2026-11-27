import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { Product } from '@/app/products'

// Server-only: reads the file straight from disk. This code never ships to the browser.
export async function getProducts(): Promise<Product[]> {
  'use cache'
  const file = await readFile(path.join(process.cwd(), 'data/products.json'), 'utf8')
  return JSON.parse(file)
}

export async function getProduct(id: number) {
  const products = await getProducts()
  return products.find((p) => p.id === id)
}
