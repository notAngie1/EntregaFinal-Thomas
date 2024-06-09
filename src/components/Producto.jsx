import { useParams } from "react-router-dom";

const Producto = () => {
const {id,nombre} = useParams()
console.log(id, nombre)
    return (
        <>
        
        </>
    )
}

export default Producto;