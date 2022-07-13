import {
  put, call, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './user.actions';
import UserActionTypes from './user.types';
import axios from '../../services/axios';

export function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, 'auth/sign_in', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.access_token = response.headers['access-token'];
    axios.defaults.headers.client = response.headers.client;
    axios.defaults.headers.uid = response.headers.uid;
  } catch (e) {
    toast.error('Usuário ou senha inválido.');

    yield put(actions.loginFailure());
  }
}

export function* registerRequest({ payload }) {
  try {
    const response = yield call(axios.post, 'auth/sign_in', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.access_token = response.headers['access-token'];
    axios.defaults.headers.client = response.headers.client;
    axios.defaults.headers.uid = response.headers.uid;
  } catch (e) {
    toast.error('Usuário ou senha inválido.');

    yield put(actions.loginFailure());
  }
}

export default all([
  takeLatest(UserActionTypes.LOGIN_REQUEST, loginRequest),
  takeLatest(UserActionTypes.REGISTER_REQUEST, registerRequest),
]);
