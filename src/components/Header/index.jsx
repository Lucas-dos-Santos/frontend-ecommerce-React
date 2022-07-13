import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import * as S from './styles';
import { signOut } from '../../redux/user/user.actions';

function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    toast.success('Você fez logout com successo!');
    dispatch(signOut());
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
        <CartIcon />
      </S.OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </S.HeaderContainer>
  );
}

export default Header;
