import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto


const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(1000)
    const [cantidad, setCantidad] = useState(0)

    const agregarProductos = (producto, cantidad) => {

        

        //const copia = producto
        producto.cantidad = cantidad

        setCarrito([producto])
        setTotal(producto.precio * cantidad)
        setCantidad(cantidad)
    }

    const modificarCantidad = () => {}

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {}

    const estaEnCarrito = () => {
        //retorna true o false si el producto esta en carrito
    }
 
    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        agregarProductos,
    }

    return (
        <Provider value={valorDelContexto} >
            {children}
        </Provider>
    )

}

export default CarritoProvider