import ItemCarrito from "./ItemCarrito";

const ItemCarritoList = ({ items }) => {
    return (
      <div className="itemList">
        {items.map((producto) => {
            return <ItemCarrito producto={producto} key={producto.id} />;
        })}
      </div>
    );
  };
  
  export default ItemCarritoList;