import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import userSagas from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { wishListSagas } from './wishlist/wishlist.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), userSagas, call(cartSagas), call(wishListSagas)]);
}
