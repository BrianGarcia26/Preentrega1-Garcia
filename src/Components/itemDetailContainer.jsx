import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailList from "./itemDetailList";
import { Products } from "./products";
import Spinner from "./spinner";

const ItemDetailContainer = ({aclarar}) => {
    const [item, setItem] = useState ({})

    const {productoId} = useParams();
    const proId = parseInt(productoId)


    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const prodEncontrado = Products.find(
                    (prod) => prod.id === proId
                );

                const prodListadoId = proId 
                ? prodEncontrado 
                : console.log("No existe");

                setTimeout(() => {
                    res(prodListadoId);
                  }, 1500);
            });
        }
        getProduct()
        .then((res) => {
            setItem(res);
        })
        .catch((err) => {
            console.log("Error");
        })
    }, [proId]);

    return <> {item.id ? <ItemDetailList item={item} /> : <Spinner /> } </>
}

export default ItemDetailContainer;

