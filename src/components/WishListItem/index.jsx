import React from 'react';
import './styles.scss';

function WishListItem({
  item: {
    images, name,
  },
}) {
  return (
    <div className="wish-item">
      <img src={images[0]} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
      </div>
    </div>
  );
}

export default React.memo(WishListItem);
