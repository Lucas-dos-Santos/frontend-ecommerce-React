import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import * as S from './styles';

function Item({ item, addItemToCart }) {
  const { name, price, imageUrl } = item;
  return (
    <S.ItemContainer>
      <S.Images>
        <S.MiniImage imageUrl={imageUrl} />
      </S.Images>
      <S.ImageContainer>
        <S.BackgroundImage className="image" imageUrl={imageUrl} />
      </S.ImageContainer>
      <S.SideRightContainer>
        <S.NameContainer>{name}</S.NameContainer>
        <S.PriceContainer>{price}</S.PriceContainer>
        <S.AddButton onClick={() => addItemToCart(item)} inverted>
          Add to cart
        </S.AddButton>
      </S.SideRightContainer>
    </S.ItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Item);
