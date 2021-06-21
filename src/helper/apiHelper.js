import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};
export const _removeData = (value) => {
  return AsyncStorage.removeItem(value);
};

export const _getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return JSON.parse(value);
    }
    return false;
  } catch (error) {}
};
