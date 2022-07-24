import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon';
import WishListIcon from '../WishListIcon';
import CartDropdown from '../CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectWishHidden } from '../../redux/wishlist/wishlist.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import * as S from './styles';
import { signOut } from '../../redux/user/user.actions';
import { clearCart } from '../../redux/cart/cart.actions';
import WishDropdown from '../WishListDropdown';

function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const hiddenCart = useSelector(selectCartHidden);
  const hiddenWishlist = useSelector(selectWishHidden);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearCart());
    dispatch(signOut());
    toast.success('Você fez logout com successo!');
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer to="/">
        <Logo />
      </S.LogoContainer>
      <S.OptionsContainer>
        <S.OptionLink to="/shop">SHOP</S.OptionLink>
        <S.OptionLink to="/contact">CONTACT</S.OptionLink>
        {currentUser ? (
          <S.OptionLink
            as="div"
            aria-hidden="true"
            onClick={handleSignOut}
          >
            SIGN OUT
          </S.OptionLink>
        ) : (
          <S.OptionLink to="/signin">SIGN IN</S.OptionLink>
        )}
        <WishListIcon />
        <CartIcon />
      </S.OptionsContainer>
      {hiddenCart ? null : <CartDropdown />}
      {hiddenWishlist ? null : <WishDropdown />}
    </S.HeaderContainer>
  );
}

export default Header;
