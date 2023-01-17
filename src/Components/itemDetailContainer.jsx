import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailList from "./itemDetailList";
import { Products } from "./products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])

    const {productoId} = useParams();


    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const prodEncontrado = Products.find(
                    (prod) => prod.id === productoId
                );

                const prodListadoId = productoId 
                ? prodEncontrado 
                : Products;

                setTimeout(() => {
                    res(prodListadoId);
                  }, 500);
            });
        }
        getProduct()
        .then((res) => {
            setItem(res);
        })
    }, [productoId])

    return <ItemDetailList item={item} />
}

export default ItemDetailContainer;