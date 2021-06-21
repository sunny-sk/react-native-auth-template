import { LOGIN, LOGIN_SUCCESS, LOGOUT } from '../constants/Auth';

export const login = (payLoad) => async (dispatch) => {
  if (payLoad.email && payLoad.password) {
    // hit api her
    dispatch({
      type: LOGIN,
    });
    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payLoad: { name: 'sunny', toke: 'this is token' },
      });
    }, 5000);
  } else {
  }
};
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
export const register = (payLoad) => async (dispatch) => {};
export const forgotPassword = (payLoad) => async (dispatch) => {};
