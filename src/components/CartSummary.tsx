import type { Product } from './products'

type Props = {
  items: Product[]
  total: number
  onRemove: (index: number) => void
  onCheckout: () => void
}

export function CartSummary({ items, total, onRemove, onCheckout }: Props) {
  return (
    <section>
      <ul className="cart-list">
        {items.map((item, index) => (
          // The cart can hold the same product twice, so the position is part of the key here.
          <li key={`${item.id}-${index}`}>
            {item.name} · {item.price} บาท
            <button onClick={() => onRemove(index)}>ลบ</button>
          </li>
        ))}
      </ul>
      <div className="summary">
        <strong>รวม {total} บาท</strong>
        <button disabled={items.length === 0} onClick={onCheckout}>ชำระเงิน</button>
      </div>
    </section>
  )
}
