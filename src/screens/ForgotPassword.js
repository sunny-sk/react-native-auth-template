import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ForgotPassword = (props) => {
  const [isLoadig] = useState(false);
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.body}>
        <View style={styles.inputC}>
          <View style={styles.inputCLeft}>
            <MaterialCommunityIcons name="email-outline" size={30} />
          </View>
          <View style={styles.inputCRight}>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'off'}
              style={styles.input}
              placeholder="Enter Email"
            />
          </View>
        </View>

        {!isLoadig ? (
          <View style={styles.signinBtnC}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#ffff', false)}
              onPress={() => {
                console.log('clicked');
              }}>
              <View style={styles.signinBtnCInner}>
                <Text style={styles.signinBtnCInnerText}>SEND LINK</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ) : (
          <View style={{ marginTop: 10 }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}
      </View>
    </>
  );
};
export default ForgotPassword;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputC: {
    width: '80%',
    flexDirection: 'row',
    marginVertical: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.main,
  },
  inputCLeft: {
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputCRight: {
    width: '80%',
  },
  input: {
    paddingLeft: 10,
  },

  signinBtnC: {
    width: '60%',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
  },
  signinBtnCInner: {
    borderRadius: 20,
    backgroundColor: Colors.primary,
    padding: 10,
  },
  signinBtnCInnerText: {
    textAlign: 'center',
    color: Colors.secondry,
  },
});
