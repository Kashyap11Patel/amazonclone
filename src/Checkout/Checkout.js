import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [state, dispatch] = useStateValue();
  const ListItems = () => {
    state.basket?.map((item) => (
      <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
      />
    ));
  };

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div className='checkout__title'>
          <h3>Hello, {state.user?.email}</h3>
          <h2>Your shopping Basket</h2>
        </div>
        {ListItems}
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
