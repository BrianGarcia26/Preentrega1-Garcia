import { useState } from "react";

export const Contador2 = ({ initial, stock, a }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
    var a = count;
  };

  const increase = () => {
    setCount(count + 1);
    var a = count;
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
