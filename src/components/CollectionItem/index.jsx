import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './style';

function CollectionItem({ item, addItemToCart }) {
  const { name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={item.image_url} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
