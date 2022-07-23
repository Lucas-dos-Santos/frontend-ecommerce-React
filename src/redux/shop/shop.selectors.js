import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : []),
);

export const selectItem = (itemId) => createSelector(
  [selectShopCollections],
  (collections) => (collections ? collections.find((i) => i.id == itemId) : null),
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);
