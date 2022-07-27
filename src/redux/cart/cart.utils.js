export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id == cartItemToAdd.id,
  );
  if (existingCartItems) {
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id
      ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
      : cartItem));
  }

  return [...cartItems, { ...cartItemToAdd, cartQuantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.cartQuantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id
    ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
    : cartItem));
};
