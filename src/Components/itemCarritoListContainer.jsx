import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCarritoList from "./itemCarritoList";
import { Products } from "./products";

const ItemCarritoListContainer = ({saludo}) => {
  const [items, setItems] = useState([]);

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

  return (
    <div className="container">
      <h2>{saludo}</h2>
      <ItemCarritoList items={items} />
    </div>
  );
};

export default ItemCarritoListContainer;