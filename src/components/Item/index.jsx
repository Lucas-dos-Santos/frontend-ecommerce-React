import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { ReactComponent as CartPlus } from '../../assets/cart-plus.svg';
import { ReactComponent as WishPlus } from '../../assets/heart-plus.svg';
import Breadcrumb from '../Breadcrumb';
import * as S from './styles';
import FormShipping from '../FormShipping';

function Item({ item, addItem }) {
  const {
    name, category, price, imageUrl,
  } = item;
  return (
    <>
      <Breadcrumb category={category} />
      <S.ItemContainer>
        <S.Images>
          {
            imageUrl.map((img, index) => {
              // eslint-disable-next-line react/no-array-index-key
              if (index < 4) return <S.MiniImage key={index} imageUrl={img} />;
              return null;
            })
          }
        </S.Images>
        <S.ImageContainer>
          <S.BackgroundImage className="image" imageUrl={imageUrl[0]} />
        </S.ImageContainer>
        <S.SideRightContainer>
          <S.NameContainer>{name}</S.NameContainer>
          <S.AddButton onClick={() => addItem(item)} wishlist>
            Adicionar à lista de desejos
            <WishPlus />
          </S.AddButton>
          <S.AddButton onClick={() => addItem(item)}>
            Adicionar ao carrinho
            <CartPlus />
          </S.AddButton>
          <FormShipping />
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
