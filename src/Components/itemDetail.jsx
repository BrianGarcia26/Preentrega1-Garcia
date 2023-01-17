import Contador from "./contador"

const ItemDetail = ({ item }) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades.`);
      };

    return (
        <div className="container-detail">
            <img 
                src={item.img}
                alt="detail" 
            />

            <article>
                <h2>{item.nombre}</h2>
                <section>
                    <h3>${item.precio}.</h3>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de <strong> ${item.precio}/12.</strong>
                </h3>
                <button className="metodos-pago">
                    Conocé todos los métodos de pago
                </button>
                <hr />
                <Contador initial={0} stock={item.stock} onAdd={onAdd} />
            </article>
        </div>
    )
}

export default ItemDetail