import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCarritoList from "./itemCarritoList";
import { Products } from "./products";
import { useContext } from "react";
import { contexto } from "./customProvider";

const ItemCarritoListContainer = ({saludo}) => {
  const [items, setItems] = useState([]);

  const { copia } = useContext(contexto)

  //const resultado = useContext(contexto)
  //console.log(resultado)

  useEffect(() => {
    const getProducts = () => {
      return new Promise ((res, rej) => {
        if (copia) {
          console.log("Existe")
        };

        
        setTimeout(() => {
          res(copia);
        }, 10000);
      });
    };
    getProducts()
    .then((res) => {
      setItems(res);
    })
  }, );

  const {carrito,vaciarCarrito} = useContext(contexto)

  const handleClick = () => {
    vaciarCarrito()
    console.log("carrito vaciado")
  }

  return (
    <div className="container">
      <h2>{saludo}</h2>
      <button onClick={handleClick}>BOTON</button>
      {JSON.stringify(carrito)}
      {items}
      <ItemCarritoList items={items} />
    </div>
  );
};

export default ItemCarritoListContainer;