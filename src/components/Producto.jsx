import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productos from "../productosjson.json";
import "../Productos.css"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Producto = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const intId = parseInt(id);
    const { addItemToCart, isInCart } = useContext(CartContext);

    useEffect(() => {
        const productoFind = productos.find((producto) => producto.id === intId);
        setProducto(productoFind);
    }, [intId]);

    const handleAddToCart = () => {
        if (isInCart(producto.id)) {
          alert(`El producto ${producto.nombre} ya está en el carrito`);
        } else {
          addItemToCart(producto);
        }
      };

    return (
        <div className="productoContainer" >
            {
                producto !== null ?
                    <div id="item">
                        <div id="itemimg"><img src={producto.imagen} alt={producto.nombre} /></div>
                        <div className="info-producto">
                            <p>{producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>
                            <button className="botonComprar" onClick={handleAddToCart}>Agregar al carrito</button>
                        </div>
                    </div>
                    :
                    <div>
                        Estamos Trabajando para mostrarte los productos..
                    </div>
            }

        </div>
    )
}

export default Producto;