import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const stack = createStackNavigator();
//importing screens
import Signin from '../screens/Signin';
import Colors from '../constants/Colors';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';
//context
import {AuthContext} from '../context/AuthContext';
import {_isAuthenticated} from '../helper/apiHelper';

const commonStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
  },
  headerTintColor: Colors.secondry,
  headerTitleAlign: 'center',
};

export function AuthStackScreens(props) {
  const [state, authContext] = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  console.log('stack', state);
  const bootstrapAsync = async () => {
    let userToken;

    try {
      userToken = await _isAuthenticated();
      if (userToken) {
        authContext.signIn();
      } else {
        authContext.signOut();
      }
    } catch (e) {
      // Restoring token failed
    }
  };

  useEffect(() => {
    bootstrapAsync();
  }, []);
  useEffect(() => {
    if (state.loggedIn) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [state.loggedIn]);
  return (
    <stack.Navigator>
      {!state.loggedIn ? (
        <>
          <stack.Screen
            name="signin"
            component={Signin}
            options={{
              title: 'WELCOME',
              ...commonStyle,
            }}
          />
          <stack.Screen
            name="signup"
            component={Signup}
            options={{
              title: 'CREATE ACCOUNT',
              ...commonStyle,
            }}
          />
          <stack.Screen
            name="forgotPassword"
            component={ForgotPassword}
            options={{
              title: 'RECOVER ACCOUNT',
              ...commonStyle,
            }}
          />
        </>
      ) : (
        <stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'HOME',
            ...commonStyle,
          }}
        />
      )}
    </stack.Navigator>
  );
}
