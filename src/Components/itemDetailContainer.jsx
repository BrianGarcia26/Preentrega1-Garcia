import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail"
import { Products } from "./products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})

    const {id} = useParams();


    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const prodEncontrado = Products.find(
                    (prod) => prod.id === id
                );

                const prodListadoId = id 
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
    }, [id])

    return <ItemDetail item={item}/>
}

export default ItemDetailContainer;