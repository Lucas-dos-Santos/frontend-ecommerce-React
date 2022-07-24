import {
  takeLatest, put, all, call,
} from 'redux-saga/effects';

import { clearWishlist } from './wishlist.actions';

import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut() {
  yield put(clearWishlist());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.LOGOUT_REQUEST, clearCartOnSignOut);
}

export function* wishListSagas() {
  yield all([call(onSignOutSuccess)]);
}
