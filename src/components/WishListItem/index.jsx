import React from 'react';
import './styles.scss';

function WishListItem({
  item: {
    imageUrl, price, name, quantity,
  },
}) {
  return (
    <div className="wish-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}
          {' '}
          x R$
          {price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default React.memo(WishListItem);
