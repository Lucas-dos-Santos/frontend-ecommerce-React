import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
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

function CollectionItem({ item, addItemToCart }) {
  const {
    name, price, imageUrl,
  } = item;
  return (
    <ScrollRevealContainer>
      <CollectionItemContainer to={`shop/${parameterize(name)}`}>
        <BackgroundImage className="image" imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItemToCart(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    </ScrollRevealContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
