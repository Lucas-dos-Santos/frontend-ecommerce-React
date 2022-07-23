import { createSelector } from 'reselect';
import parameterize from '../../services/utils';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : []),
);

export const selectItem = (itemName) => createSelector(
  [selectShopCollections],
  (collections) => (collections ? collections.find((i) => parameterize(i.name) == itemName) : null),
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);
