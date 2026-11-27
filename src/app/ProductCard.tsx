import Link from 'next/link'
import type { Product } from './products'

type Props = {
  product: Product
  // Data goes down as props; events go up through a function prop.
  onAdd: () => void
}

export function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="card">
      <h3>
        <Link href={`/products/${product.id}`}>{product.name}</Link>
      </h3>
      <p>{product.price} บาท</p>
      <button onClick={onAdd}>เพิ่มลงตะกร้า</button>
    </div>
  )
}
