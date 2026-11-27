type Props = {
  count: number
}

export function Header({ count }: Props) {
  return (
    <header className="header">
      <h1>ร้านมื้อเช้า</h1>
      <span className="badge">ตะกร้า {count}</span>
    </header>
  )
}
