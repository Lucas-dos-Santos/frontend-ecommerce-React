import React from 'react';
import './style.scss';
import CollectionItem from '../CollectionItem';

function CollectionPreview({ collections }) {
  return (
    <div className="collection-preview">
      <div className="preview">
        {collections
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
