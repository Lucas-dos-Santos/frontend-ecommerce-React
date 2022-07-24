import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import Breadcrumb from '../Breadcrumb';
import * as S from './styles';

function Item({ item, addItem }) {
  const {
    name, category, price, imageUrl,
  } = item;
  return (
    <>
      <Breadcrumb category={category} />
      <S.ItemContainer>
        <S.Images>
          <S.MiniImage imageUrl={imageUrl} />
        </S.Images>
        <S.ImageContainer>
          <S.BackgroundImage className="image" imageUrl={imageUrl} />
        </S.ImageContainer>
        <S.SideRightContainer>
          <S.NameContainer>{name}</S.NameContainer>
          <span>Adicionar à lista de desejos</span>
          <S.AddButton onClick={() => addItem(item)}>
            Adicionar ao carrinho
          </S.AddButton>
          <S.PriceContainer>{`R$ ${price.toFixed(2)}`}</S.PriceContainer>
          <span>{`3x de R$ ${(price / 3).toFixed(2)} (sem juros)`}</span>
        </S.SideRightContainer>
      </S.ItemContainer>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(Item);
