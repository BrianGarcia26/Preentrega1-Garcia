import { useState } from "react";

export const Contador2 = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const valor = 0;

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button disabled={count === initial} onClick={decrease}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Contador2;
