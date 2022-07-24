import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import axios from '../../services/axios';

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions';
import ShopActionsType from './shop.types';

function* fetchCollectionsAsync() {
  try {
    yield put(fetchCollectionsSuccess([]));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
