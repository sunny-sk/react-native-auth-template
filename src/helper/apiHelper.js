import AsyncStorage from '@react-native-community/async-storage';

const KEY = 'userToken';

const _storeData = (value) => {
  return AsyncStorage.setItem(KEY, JSON.stringify(value));
};
const _removeData = (value) => {
  return AsyncStorage.removeItem(KEY);
};

const _getData = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    if (value !== null) {
      // We have data!!
      return JSON.parse(value);
    }
    return false;
  } catch (error) {}
};
export const signOutUser = (callback) => {
  _removeData().then(() => {
    callback('data removed successfully');
  });
};
export const _isAuthenticated = async () => {
  let value;
  try {
    value = await _getData();
  } catch (error) {}
  return value;
};

export const authenticate = (data, callback) => {
  _storeData(JSON.stringify(data)).then(() => {
    callback('data set in storage ');
  });
};

export const signInUser = async (body) => {
  try {
    let result = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await result.json();
  } catch (error) {
    throw new Error('server error');
  }
};

export const signUpUser = async (body) => {
  try {
    let result = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await result.json();
  } catch (error) {
    throw new Error('server error');
  }
};

export const resetPassword = async (body) => {
  try {
    let result = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await result.json();
  } catch (error) {
    throw new Error('server error');
  }
};
