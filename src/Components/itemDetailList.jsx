import { useContext, useState } from "react";
import { contexto } from "./customProvider";
import Contador from "./contador"

const ItemDetailList = ({ item }) => {

    const { agregarProductos, estaEnCarrito } = useContext(contexto)
    const [cantidadLocal, setCantidadLocal] = useState(1)
    const [confirmado, setConfirmado] = useState(false)
    const [carritoLocal, setCarritoLocal] = useState(1)

    const handleAdd = (cantidad) => {
        setCantidadLocal(cantidad)
        setConfirmado(true)
        setCarritoLocal(item)
        
    }

    const handleClick = () => {
        estaEnCarrito(item, cantidadLocal)
        agregarProductos(item, cantidadLocal)
        console.log(item)
        console.log("00000000000000000000000000000000000000")
        console.log(carritoLocal)
    }

    const cuota = item.precio/12;
    const cuotaRedondeada = parseFloat(cuota.toFixed(2)) ;
    
    return (
        <div className="container-detail2">
            <img 
                src={item.img}
                alt="detail" 
            />

            <article>
                <h2>{item.nombre}</h2>
                <section>
                    <h3>${item.precio}.</h3>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de <strong> ${cuotaRedondeada}.</strong>
                </h3>
                <button className="metodos-pago">
                    Conocé todos los métodos de pago
                </button>
                <hr />
                <Contador initial={0} stock={item.stock} handleAdd={handleAdd} />
                {confirmado && <button onClick={handleClick}>Agregar al carrito</button>}
            </article>
        </div>
    )
}

export default ItemDetailList;