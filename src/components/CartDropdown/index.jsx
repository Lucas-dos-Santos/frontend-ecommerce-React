import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../CustomButton';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { hiddenCart } from '../../redux/cart/cart.actions';
import CartItem from '../CartItem';
import './styles.scss';

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown" onMouseLeave={() => dispatch(hiddenCart())}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
