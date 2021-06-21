import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const stack = createStackNavigator();
//importing screens
import Signin from '../screens/Signin';
import Colors from '../constants/Colors';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';

import { useSelector } from 'react-redux';

const commonStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
  },
  headerTintColor: Colors.secondry,
  headerTitleAlign: 'center',
};

export function AuthStackScreens(props) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <stack.Navigator>
      {!isLoggedIn ? (
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
