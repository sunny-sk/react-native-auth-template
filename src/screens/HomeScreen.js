import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/AuthActions';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
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
