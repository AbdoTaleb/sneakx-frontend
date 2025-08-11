import { useCart } from '../../context/CartContext';
import "./CartSidebar.scss";

function CartSidebar() {
  const { cartItems, removeFromCart, isCartOpen, toggleCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}

      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <button onClick={toggleCart}>×</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.imageURL} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>{item.price} $</p>
                  <p>Quantity: <strong>{item.quantity}</strong></p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="total-price">
            Total: {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} $
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
