import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../CustomButton';
import { selectWishItems } from '../../redux/wishlist/wishlist.selectors';
import WishListItem from '../WishListItem';
import './styles.scss';
import { hiddenWishlist } from '../../redux/wishlist/wishlist.actions';

function WishDropdown() {
  const wishItems = useSelector(selectWishItems);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="wishlist-dropdown" onMouseLeave={() => dispatch(hiddenWishlist())}>
      <div className="wishlist-items">
        {wishItems.length ? (
          wishItems.map((item) => <WishListItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your wishlist is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/wishlist');
        }}
      >
        Go to Wishlist
      </CustomButton>
    </div>
  );
}

export default WishDropdown;
