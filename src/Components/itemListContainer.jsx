import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import { Products } from "./products";
import Spinner from "./spinner";

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
        }, 100);
      });
    };
    getProducts()
    .then((res) => {
      setItems(res);
    })
  }, [categoryId]);

  return <> {Products ? <ItemList items={items} /> : <Spinner /> } </>
};

export default ItemListContainer;