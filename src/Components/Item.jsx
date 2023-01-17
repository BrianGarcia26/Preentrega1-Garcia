import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
      <div className="item">
        <img src={producto.img} width="200px" alt={producto.nombre}/>
        <article className="info">
            <h2>{producto.nombre}</h2>
            <div className="infoPrecio">
                <h3>${producto.precio}.</h3>
            </div>
            <Link className="verDetalle" to={`/item/${producto.id}`}>Ver Detalle</Link>
        </article>
      </div>
    );
  };
  
  export default Item;