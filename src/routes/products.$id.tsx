import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { getProduct } from '../server/products'

// $id in the file name = a variable in the URL: /products/3 -> params.id = "3"
export const Route = createFileRoute('/products/$id')({
  loader: async ({ params }) => {
    const product = await getProduct({ data: Number(params.id) })
    if (!product) throw notFound()
    return product
  },
  component: ProductPage,
  notFoundComponent: () => <main className="shop">ไม่มีสินค้านี้</main>,
})

function ProductPage() {
  const product = Route.useLoaderData()
  return (
    <main className="shop">
      <Link to="/">← กลับหน้าร้าน</Link>
      <div className="card detail">
        <h1>{product.name}</h1>
        <p>{product.price} บาท</p>
      </div>
    </main>
  )
}
