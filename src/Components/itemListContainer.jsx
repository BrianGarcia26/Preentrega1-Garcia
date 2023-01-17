import { useEffect, useState } from "react";
import { Products } from "./products";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";

const ItemListContainer = ({saludo}) => {
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
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;