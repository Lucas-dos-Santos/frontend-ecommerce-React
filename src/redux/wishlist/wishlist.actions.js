import WishListActionTypes from './wishlist.types';

export const showWishList = () => ({
  type: WishListActionTypes.SHOW_WISHLIST,
});

export const hiddenWishlist = () => ({
  type: WishListActionTypes.HIDDEN_WISHLIST,
});

export const addItemToWishlist = (item) => ({
  type: WishListActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: item,
});

export const removeItemFromWishlist = (item) => ({
  type: WishListActionTypes.REMOVE_ITEM_FROM_WISHLIST,
  payload: item,
});

export const clearItemFromWishlist = (item) => ({
  type: WishListActionTypes.CLEAR_ITEM_FROM_WISHLIST,
  payload: item,
});

export const clearWishlist = () => ({
  type: WishListActionTypes.CLEAR_WISHLIST,
});
