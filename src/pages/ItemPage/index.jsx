import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectItem } from '../../redux/shop/shop.selectors';
import Item from '../../components/Item';

function ItemPage() {
  const { itemName } = useParams();
  const item = useSelector(selectItem(itemName));
  return (
    <Item item={item} />
  );
}

export default ItemPage;
