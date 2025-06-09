// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (accumilator, currentItem) =>
          accumilator + currentItem.price * currentItem.quantity,
        0,
      )
      return (
        <div className="checkout-cont">
          <h1>Order Total:{total.toFixed(2)}</h1>
          <p> {cartList.length} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary