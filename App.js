import React from 'react';
import ForgotPassword from './src/screens/ForgotPassword';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackScreens} from './src/navigation/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {StatusBar} from 'react-native';
import Colors from './src/constants/Colors';
enableScreens();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
            <AuthStackScreens />
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
