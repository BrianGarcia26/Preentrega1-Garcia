import ItemCarritoListContainer from "./itemCarritoListContainer"

const Cart = () => {
    return (
        <div className="miCarrito">
            <h1>Wenas</h1>
            <ItemCarritoListContainer saludo={"Este es un saludo"}/>
        </div>
    )
}

export default Cart