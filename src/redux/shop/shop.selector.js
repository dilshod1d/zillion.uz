import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCategoryLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
