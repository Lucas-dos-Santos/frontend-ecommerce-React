import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { hiddenCart } from '../../redux/cart/cart.actions';
import { showWishList } from '../../redux/wishlist/wishlist.actions';
import './styles.scss';

function WishListIcon() {
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(hiddenCart());
    dispatch(showWishList());
  };
  return (
    <div className="wishlist-icon" onMouseEnter={handleMouseEnter}>
      <HeartIcon className="heart-icon" />
    </div>
  );
}

export default WishListIcon;
