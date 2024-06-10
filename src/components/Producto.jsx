import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productos from "../productosjson.json";

const Producto = () => {
    const { id} = useParams()
    const [producto, setProducto] = useState(null)
    const intId = parseInt(id);

    useEffect(() => {
        const productoFind = productos.find((producto) => producto.id === intId);
        setProducto(productoFind);
      }, [intId]);
   
    return (
            <div className="productoContainer">
                {
                    producto !== null ?
                        <div className="item">
                            <div id="item"><img src={producto.imagen} alt={producto.nombre} /></div>
                            <div className="info-producto">
                                <p>{producto.nombre}</p>
                                <p>Precio: ${producto.precio}</p>
                                <button className="botonComprar">Comprar</button>
                                </div>
                        </div>
                        :
                        <div>
                            No hay datos
                        </div>
                }
            </div>
    )
}

export default Producto;