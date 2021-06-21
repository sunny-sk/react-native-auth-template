import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Colors from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Signup = (props) => {
  const [isLoading] = useState(false);
  const onSignIn = async () => {};
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.body}>
        <View style={styles.inputC}>
          <View style={styles.inputCLeft}>
            <FontAwesome style={styles.inputCLeftIcon} name="user" size={30} />
          </View>
          <View style={styles.inputCRight}>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'off'}
              style={styles.input}
              placeholder="Enter User"
            />
          </View>
        </View>
        <View style={styles.inputC}>
          <View style={styles.inputCLeft}>
            <MaterialCommunityIcons
              style={styles.inputCLeftIcon}
              name="email"
              size={30}
            />
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
        <View style={styles.inputC}>
          <View style={styles.inputCLeft}>
            <FontAwesome style={styles.inputCLeftIcon} name="lock" size={30} />
          </View>
          <View style={styles.inputCRight}>
            <TextInput
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'off'}
              style={styles.input}
              placeholder="Enter password"
            />
          </View>
        </View>

        <View style={styles.inputC}>
          <View style={styles.inputCLeft}>
            <FontAwesome style={styles.inputCLeftIcon} name="lock" size={30} />
          </View>
          <View style={styles.inputCRight}>
            <TextInput
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'off'}
              style={styles.input}
              placeholder="Re-Enter password"
            />
          </View>
        </View>

        {!isLoading ? (
          <View style={styles.signinBtnC}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#ffff', false)}
              onPress={onSignIn}>
              <View style={styles.signinBtnCInner}>
                <Text style={styles.signinBtnCInnerText}>SIGNUP</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ) : (
          <View style={{ marginTop: 10 }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}

        <View style={styles.dontHavAccountC}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              'rgba(0,0,0,0.2)',
              false
            )}
            onPress={() => {
              props.navigation.navigate('signin');
            }}>
            <View style={styles.dontHavAccountCInner}>
              <Text style={styles.dontHavAccountCText}>
                already have an account! Signin
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputC: {
    width: '80%',
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.main,
  },
  inputCLeft: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputCLeftIcon: {},
  inputCRight: {
    width: '80%',
  },
  // input: {
  //   borderBottomWidth: 0.5,
  //   borderBottomColor: Colors.main,
  // },
  forgotPasswordC: {
    marginTop: 5,
  },
  forgotPasswordCText: {
    color: Colors.primary,
    fontSize: 12,
  },
  signinBtnC: {
    width: '60%',
    marginTop: '10%',
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
  dontHavAccountC: {
    marginTop: 10,
  },
  dontHavAccountCInner: {
    padding: 5,
  },
  dontHavAccountCText: {
    fontSize: 12,
  },
});

export default Signup;
