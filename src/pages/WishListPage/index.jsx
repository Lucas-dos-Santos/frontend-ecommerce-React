import React from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import { clearWishlist } from '../../redux/wishlist/wishlist.actions';

function WishListPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>WishList</h2>
      <CustomButton isGoogleSignIn onClick={() => dispatch(clearWishlist())}>
        Reset Wishlist
      </CustomButton>
    </div>
  );
}

export default WishListPage;
