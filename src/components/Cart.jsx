import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../App.css"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeItemFromCart, clearCart} = useContext(CartContext);
  
    const handleRemoveItem = (itemId) => {
      removeItemFromCart(itemId);
    };
  
    const handleClearCart = () => {
      clearCart();
    };
  
    return (
      <div className="cartContainer">
        <div className="cart">
        <h2>Mi Carrito</h2>
        {cartItems.length === 0? (
          <div>
            <p>No hay ítems en el carrito.</p>
            <Link className="linkA" to="/shop">Volver a la tienda</Link>
          </div>
        ) : (
          <div className="cart">
          <ul className="cartItems">
            {cartItems.map((item) => (
              <li key={item.id} className="cartItem">
                <img src={item.imagen} alt={item.nombre} width="auto" height="150" />
                <p>{item.nombre} - ${item.precio}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        <p>Total: ${cartItems.reduce((acc, item) => acc + item.precio, 0)}</p>
        <button onClick={handleClearCart}>Vaciar carrito</button> </div>
        )}
      </div>
    </div>
  );
};
  
  export default Cart;