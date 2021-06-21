import {
  LOGIN,
  REGISTER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/Auth';

const authReducer = (
  state = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: true,
        user: action.payLoad,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: 'login failed',
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
        error: null,
      };

    default:
      return { ...state };
  }
};
export default authReducer;
