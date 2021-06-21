import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreens } from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';
enableScreens();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthStackScreens />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
