import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCarritoList from "./itemCarritoList";
import { Products } from "./products";
import { useContext } from "react";
import { contexto } from "./customProvider";

const ItemCarritoListContainer = ({saludo}) => {
  const [items, setItems] = useState([]);

  //const resultado = useContext(contexto)
  //console.log(resultado)

  const {categoryId} = useParams();

  useEffect(() => {
    const getProducts = () => {
      return new Promise ((res, rej) => {
        const productosFiltrados = Products.filter(
          (prod) => prod.categoria === categoryId
          );

        const prodListado = categoryId 
        ? productosFiltrados 
        : Products;
        setTimeout(() => {
          res(prodListado);
        }, 1000);
      });
    };
    getProducts()
    .then((res) => {
      setItems(res);
    })
  }, [categoryId]);

  const {carrito,agregarProductos} = useContext(contexto)

  const handleClick = () => {
    agregarProductos()
    console.log(carrito)
  }

  return (
    <div className="container">
      <h2>{saludo}</h2>
      <button onClick={handleClick}>BOTON</button>
      {JSON.stringify(carrito)}
      <ItemCarritoList items={items} />
    </div>
  );
};

export default ItemCarritoListContainer;