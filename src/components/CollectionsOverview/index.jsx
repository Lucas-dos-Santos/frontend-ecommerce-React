import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionItem from '../CollectionItem';

function CollectionsOverview() {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      {collections
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
}

export default CollectionsOverview;
