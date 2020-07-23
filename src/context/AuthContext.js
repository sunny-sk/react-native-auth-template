import React, {useReducer, createContext, useMemo} from 'react';
import {authenticate, signOutUser} from '../helper/apiHelper';
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            loggedIn: true,
            isLoading: false,
          };
        case 'SIGN_IN':
          authenticate(action.token, () => {});
          return {
            ...prevState,
            loggedIn: true,
            userToken: action.token,
            isLoading: false,
          };

        case 'SIGN_OUT':
          signOutUser((res) => {});
          return {
            ...prevState,
            loggedIn: false,
            userToken: null,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      loggedIn: false,
      userToken: null,
    },
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  return (
    <>
      <AuthContext.Provider value={[state, authContext]}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};
