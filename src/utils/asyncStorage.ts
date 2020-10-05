import AsyncStorage from '@react-native-community/async-storage';

export const getObject = async function <T>(storageKey: string): Promise<T | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

export const getString = async function (storageKey: string): Promise<string | null> {
  try {
    return AsyncStorage.getItem(storageKey);
  } catch (e) {
    return null;
  }
};

export const storeString = async function (storageKey: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(storageKey, value);
    return true;
  } catch (e) {
    throw new Error('Could not store string');
  }
};

export const storeObject = async function <T>(storageKey: string, value: T): Promise<boolean> {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
    return true;
  } catch (e) {
    throw new Error('Could not store object');
  }
};

export const appendObject = async function <T>(storageKey: string, value: T): Promise<boolean> {
  try {
    const currentValue = await AsyncStorage.getItem(storageKey);
    if (currentValue) {
      const currentValueArray = JSON.parse(currentValue);
      if (Array.isArray(currentValueArray)) {
        currentValueArray.push(value);
        await AsyncStorage.setItem(storageKey, JSON.stringify(currentValueArray));
        return true;
      }
      throw new Error('Storage Key needs to be an array');
    }
    await AsyncStorage.setItem(storageKey, JSON.stringify([value]));
    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const clearItem = async function (storageKey: string) {
  try {
    AsyncStorage.removeItem(storageKey);
  } catch (e) {
    throw new Error('Could not clear state');
  }
};
