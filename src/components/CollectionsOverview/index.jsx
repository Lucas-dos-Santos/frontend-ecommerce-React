import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import CollectionPreview from '../CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

function CollectionsOverview() {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      <CollectionPreview collections={collections} />
    </div>
  );
}

export default CollectionsOverview;
