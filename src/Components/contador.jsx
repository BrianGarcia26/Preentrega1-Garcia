import { useState } from "react";

export const Contador = ({ initial, stock, handleAdd }) => {
  const [cantidad, setCantidad] = useState(initial);


  const decrease = () => {
    setCantidad(cantidad - 1);
  };

  const increase = () => {
    setCantidad(cantidad + 1);
  };

  const handleConfirmar = () => {
    handleAdd(cantidad)
  }

  return (
    <div className="counter">
      <button disabled={cantidad === initial} onClick={decrease}>
        -
      </button>
      <span>{cantidad}</span>
      <button disabled={cantidad >= stock} onClick={increase}>
        +
      </button>
      <button disabled={stock === 0 || cantidad === 0} onClick={handleConfirmar}>
        Confirmar
      </button>
    </div>
  );
};

export default Contador;
