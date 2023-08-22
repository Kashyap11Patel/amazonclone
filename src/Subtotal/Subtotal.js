import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function Subtotal() {
  const [state, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <p>
        Subtotal {state.basket?.length} items:
        <small>₹</small>
        <strong>{getBasketTotal(state.basket)}</strong>
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox' />
        This order contains a gift
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
