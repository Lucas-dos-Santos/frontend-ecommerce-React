import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { showCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { hiddenWishlist } from '../../redux/wishlist/wishlist.actions';
import './styles.scss';

function CartIcon() {
  const itemsCount = useSelector(selectCartItemsCount);

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(hiddenWishlist());
    dispatch(showCart());
  };

  return (
    <div className="cart-icon" onMouseEnter={handleMouseEnter}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
}

export default CartIcon;
