import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
const HomeScreen = () => {
  const [state, authContext] = useContext(AuthContext);
  const onLogout = async () => {
    try {
      authContext.signOut();
      console.log('Home', state);
    } catch (error) {}
  };

  return (
    <>
      <View style={styles.body}>
        <Text>Home screen</Text>
        <Button title="Sign out" onPress={onLogout} />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
