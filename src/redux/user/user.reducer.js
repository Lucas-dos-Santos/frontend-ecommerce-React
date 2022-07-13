import UserActionTypes from './user.types';

const initialState = {
  currentUser: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.data,
        error: null,
      };
    }
    case UserActionTypes.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case UserActionTypes.LOGIN_REQUEST: {
      return state;
    }
    case UserActionTypes.SIGN_OUT: {
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    }
    case UserActionTypes.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case UserActionTypes.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.nome = action.payload.nome;
      newState.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }
    case UserActionTypes.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case UserActionTypes.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
}
