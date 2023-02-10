import Contador from "./contador"

const ItemDetailList = ({ item }) => {

    const onAdd = (count) => {
      if (count > 1) {
        console.log(`Compraste ${count} unidades.`);
      } else if (count === 1) {
        console.log(`Compraste ${count} unidad.`);
      } else {
        console.log(`No estas agregando ninguna unidad.`);
      }
    };

    const cuota = item.precio/12;
    const cuotaRedondeada = parseFloat(cuota.toFixed(2)) ;
    return (
        <div className="container-detail2">
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
                    Hasta <strong>12</strong> cuotas sin interes de <strong> ${cuotaRedondeada}.</strong>
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

export default ItemDetailList;