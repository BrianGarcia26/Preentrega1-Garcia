import {ShoppingCartOutlined} from '@ant-design/icons';
import { useContext } from 'react';
import { contexto } from './customProvider';

function Cart() {

  const { cantidad } = useContext(contexto)

  return (
    <div>
      <button className="botonCarrito">
      {cantidad} <ShoppingCartOutlined />
      </button>
    </div>
  )
};
export default Cart;