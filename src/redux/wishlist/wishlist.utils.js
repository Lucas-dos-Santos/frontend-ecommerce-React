export const addItemToWishlist = (wishItems, wishItemToAdd) => {
  const existingWishItems = wishItems.find(
    (wishItem) => wishItem.id == wishItemToAdd.id,
  );
  if (existingWishItems) {
    return [...wishItems];
  }

  return [...wishItems, { ...wishItemToAdd }];
};

export const removeItemFromWishlist = (wishItems, wishItemToRemove) => {
  if (wishItemToRemove.quantity == 1) {
    return wishItems.filter((wishItem) => wishItem.id !== wishItemToRemove.id);
  }

  return wishItems.map((wishItem) => (wishItem.id === wishItemToRemove.id
    ? { ...wishItem, quantity: wishItem.quantity - 1 }
    : wishItem));
};
