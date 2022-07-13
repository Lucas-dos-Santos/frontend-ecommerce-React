import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const loginRequest = (payload) => ({
  type: UserActionTypes.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload,
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});

export const registerRequest = (payload) => ({
  type: UserActionTypes.REGISTER_REQUEST,
  payload,
});

export const registerFailure = (payload) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload,
});

export const registerUpdatedSuccess = (payload) => ({
  type: UserActionTypes.REGISTER_UPDATED_SUCCESS,
  payload,
});

export const registerCreatedSuccess = (payload) => ({
  type: UserActionTypes.REGISTER_CREATED_SUCCESS,
  payload,
});
