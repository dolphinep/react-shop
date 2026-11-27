import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProduct, getProducts } from '@/lib/products'

// Build every product page ahead of time (they are known from the data file).
export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ id: String(p.id) }))
}

// [id] in the folder name = a variable in the URL: /products/3 -> params.id = "3"
export default async function ProductPage({ params }: PageProps<'/products/[id]'>) {
  const { id } = await params
  const product = await getProduct(Number(id))
  if (!product) notFound()

  return (
    <main className="shop">
      <Link href="/">← กลับหน้าร้าน</Link>
      <div className="card detail">
        <h1>{product.name}</h1>
        <p>{product.price} บาท</p>
      </div>
    </main>
  )
}
