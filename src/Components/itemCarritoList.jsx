import ItemCarrito from "./ItemCarrito";
import { useContext } from "react";
import { contexto } from "./customProvider";

const ItemCarritoList = ({ items }) => {

  const { copia } = useContext(contexto)

    return (
      <div className="itemList">
        {copia.map((producto) => {
            return <ItemCarrito producto={producto} key={producto.id} />;
        })}
      </div>
    );
  };
  
  export default ItemCarritoList;