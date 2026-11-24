import type { Product } from './products'

type Props = {
  product: Product
}

// Props arrive as the function's parameter. They are read-only:
// a child never changes what its parent passed down.
export function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.price} บาท</p>
      <button>เพิ่มลงตะกร้า</button>
    </div>
  )
}
