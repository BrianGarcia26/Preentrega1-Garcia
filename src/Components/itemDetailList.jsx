import ItemDetail from "./itemDetail";

const ItemDetailList = ({ item }) => {
    return (
      <div className="itemDetalle">
        {item.map((producto) => {
            return <ItemDetail producto={producto} key={producto.id} />;
        })}
      </div>
    );
  };
  
  export default ItemDetailList;