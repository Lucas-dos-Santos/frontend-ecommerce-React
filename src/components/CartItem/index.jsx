import React from 'react';
import './styles.scss';

function CartItem({
  item: {
    images, price, name, cartQuantity,
  },
}) {
  return (
    <div className="cart-item">
      <img src={images[0]} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {cartQuantity}
          {' '}
          x R$
          {price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default React.memo(CartItem);
