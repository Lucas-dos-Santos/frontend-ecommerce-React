import { createSelector } from 'reselect';

const selectWishList = (state) => state.wishlist;

export const selectWishItems = createSelector(
  [selectWishList],
  (wishlist) => wishlist.wishlistItems,
);

export const selectWishHidden = createSelector(
  [selectWishList],
  (wishlist) => wishlist.hidden,
);
