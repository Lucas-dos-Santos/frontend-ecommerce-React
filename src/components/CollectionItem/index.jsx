import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import ScrollRevealContainer from '../ScrollRevealContainer';
import parameterize from '../../services/utils';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './style';

function CollectionItem({ item, addItem }) {
  const {
    name, price, images,
  } = item;
  return (
    <ScrollRevealContainer>
      <CollectionItemContainer to={`shop/${parameterize(name)}`}>
        <BackgroundImage className="image" images={images[0]} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    </ScrollRevealContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
