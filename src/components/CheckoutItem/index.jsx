import React from 'react';
import { useDispatch } from 'react-redux';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';
import './styles.scss';

function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();

  const {
    images, name, cartQuantity, price,
  } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={images[0]} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItemFromCart(cartItem))}>
          &#10094;
        </div>
        <span className="value">{cartQuantity}</span>
        <div className="arrow" onClick={() => dispatch(addItemToCart(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price.toFixed(2)}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
