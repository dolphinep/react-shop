// A component is just a function that returns JSX.
// Its name starts with a capital letter so React knows it is a component, not an HTML tag.
export function ProductCard() {
  return (
    <div className="card">
      <h3>Product name</h3>
      <p>0 บาท</p>
      <button>เพิ่มลงตะกร้า</button>
    </div>
  )
}
