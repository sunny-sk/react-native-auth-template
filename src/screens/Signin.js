import React, { useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/AuthActions';
const Signin = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading, user } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const onLogin = () => {
    dispatch(login({ email: 'temp@gmail.com', password: 'password' }));
  };

  useEffect(() => {
    if (isLoggedIn) {
    }
  }, [isLoggedIn, user, navigation]);

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.body}>
        <View style={styles.fields}>
          <View style={styles.inputC}>
            <View style={styles.inputCLeft}>
              <MaterialCommunityIcons
                style={styles.inputCLeftIcon}
                name="email-outline"
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
        </View>
        <View style={styles.fields}>
          <View style={styles.inputC}>
            <View style={styles.inputCLeft}>
              <FontAwesome
                style={styles.inputCLeftIcon}
                name="lock"
                size={30}
              />
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
          <View style={styles.forgotPasswordC}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                'rgba(0,0,0,0.2)',
                false
              )}
              onPress={() => {
                props.navigation.navigate('forgotPassword');
              }}>
              <View style={styles.forgotPasswordCInner}>
                <Text style={styles.forgotPasswordCText}>
                  Forgot Password ?
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>

        {!isLoading ? (
          <View style={styles.signinBtnC}>
            <TouchableNativeFeedback
              borderless={true}
              background={TouchableNativeFeedback.Ripple('#ffff', false)}
              onPress={() => {
                onLogin();
              }}>
              <View style={styles.signinBtnCInner}>
                <Text style={styles.signinBtnCInnerText}>SIGNIN</Text>
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
              props.navigation.navigate('signup');
            }}>
            <View style={styles.dontHavAccountCInner}>
              <Text style={styles.dontHavAccountCText}>
                don't have an account! Signup
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
  fields: {
    marginVertical: 10,
  },
  inputC: {
    width: '80%',
    flexDirection: 'row',
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
  forgotPasswordCInner: {
    padding: 5,
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

export default Signin;
