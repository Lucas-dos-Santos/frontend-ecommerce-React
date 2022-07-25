import React from 'react';
import './styles.scss';

function WishListItem({
  item: {
    imageUrl, name,
  },
}) {
  return (
    <div className="wish-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
      </div>
    </div>
  );
}

export default React.memo(WishListItem);
