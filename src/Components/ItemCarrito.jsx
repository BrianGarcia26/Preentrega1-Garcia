import { useState } from "react";
import Contador2 from "./contador2"

const ItemCarrito = ({ producto }) => {

    const [precio, setPrecio] = useState(producto.precio);

    
    //setPrecio(producto.precio)

    return (
        <div className="itemCarrito">
            <img src={producto.img} width="200px" alt={producto.nombre}/>
            <div className="infoItemCarrito">
                <h2>{producto.nombre}</h2>
                <h3>Categoría: {producto.categoria.toUpperCase()}</h3>
                <button>Eliminar</button>
            </div>
            <div>
                <Contador2 initial={0} stock={producto.stock} />
               <h3>{producto.stock} unidades.</h3>
            </div>
            <div>
                <h2>`$ {precio}`</h2>
            </div>
        </div>
    );
  };
  
  export default ItemCarrito;