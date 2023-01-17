import Contador from "./contador"

const ItemDetail = ({ producto }) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades.`);
      };

    return (
        <div className="container-detail">
            <img 
                src={producto.img}
                alt="detail" 
            />

            <article>
                <h2>{producto.nombre}</h2>
                <section>
                    <h3>${producto.precio}.</h3>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de <strong> ${producto.precio}/12.</strong>
                </h3>
                <button className="metodos-pago">
                    Conocé todos los métodos de pago
                </button>
                <hr />
                <Contador initial={0} stock={producto.stock} onAdd={onAdd} />
            </article>
        </div>
    )
}

export default ItemDetail