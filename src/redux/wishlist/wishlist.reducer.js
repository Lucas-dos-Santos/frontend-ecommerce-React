import WishListActionTypes from './wishlist.types';
import { addItemToWishlist, removeItemFromWishlist } from './wishlist.utils';

const INITIAL_STATE = {
  hidden: true,
  wishlistItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishListActionTypes.HIDDEN_WISHLIST:
      return {
        ...state,
        hidden: true,
      };
    case WishListActionTypes.SHOW_WISHLIST:
      return {
        ...state,
        hidden: false,
      };
    case WishListActionTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: addItemToWishlist(state.wishlistItems, action.payload),
      };
    case WishListActionTypes.REMOVE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: removeItemFromWishlist(state.wishlistItems, action.payload),
      };
    case WishListActionTypes.CLEAR_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (wishItem) => wishItem.id !== action.payload.id,
        ),
      };
    case WishListActionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlistItems: [],
      };
    default:
      return state;
  }
};

export default wishlistReducer;
