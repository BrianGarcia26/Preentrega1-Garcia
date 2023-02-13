import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto


const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(1000)
    const [cantidad, setCantidad] = useState(0)
    const copia = [...carrito]
    const [carroCantidad, setCarroCantidad] = useState(0)


    const agregarProductos = (producto, cantidad) => {

        producto.cantidad = cantidad
        setCarroCantidad(carroCantidad + producto.cantidad)

        copia.push(producto)
        // Escribe el array con los productos
        console.log(copia)
        // Escribe la cantidad elegida del producto
        console.log(carroCantidad)
        setCarrito(copia)
        // Escribe el carrito de use state
        console.log(carrito)

        var precioTotal = total
        precioTotal = producto.precio * cantidad
        
        
        setCarrito([producto])
        setTotal(precioTotal)
        // Escribe el precio por la cantidad de cada producto
        console.log(precioTotal)
        setCantidad(cantidad)
    }

    const modificarCantidad = () => {}

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (producto, cantidad) => {
        if (carrito.find((prod) => prod.id === producto.id) && carrito.find((prod) => prod.cantidad === producto.cantidad)) {
            console.log("Este producto ya se agregó")
        } else if (carrito.find((prod) => prod.cantidad !== producto.cantidad)) {
            agregarProductos(producto, cantidad)
            console.log("Agregado al carrito")
        }
    }
        //o la cantidad en carrito === producto.cantidad
        //entonces 
        //agregarProductos(producto, cantidad)
        //retorna true o false si el producto esta en carrito
    
 
    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        agregarProductos,
        modificarCantidad,
        eliminarProducto,
        vaciarCarrito,
        estaEnCarrito,
    }

    return (
        <Provider value={valorDelContexto} >
            {children}
        </Provider>
    )

}

export default CarritoProvider