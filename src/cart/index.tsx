import ProductsList from "./components/cart-products-list"

const CartPage = () => {
  return(
    <div style={{padding: '20px'}}>
      <h1>Cart</h1>
      <ProductsList />
    </div>
  )
}

export default CartPage