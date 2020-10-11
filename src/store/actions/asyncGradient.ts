import Firebase from '@services/firebase/client';
import { Gradients, Colors, Color, Gradient } from '@typeDefs/index';
import { getObject, storeObject, clearItem, appendObject } from '@utils/asyncStorage';
import { capitalize, itemsInArray } from '@utils/helpers';

import * as actions from './index';

type Dispatch = (action: any) => void;

interface Thunk {
  (x?: any): Dispatch;
}

interface Users {
  savedGradients?: Gradients;
  savedColors?: Colors;
  createdGradients?: Gradients;
  id: string;
}

interface ReduxUserGradients {
  userGradients: Gradients;
  userColors: Colors;
  createdGradients: Gradients;
}

const pullTodaysGradientsFromFirebase = async (dispatch: any, today: Date) => {
  try {
    const newGradients = await Firebase.getDataArray<Gradient>('todaysGradients');
    if (newGradients.length > 0) {
      const gradients = newGradients.map((gradient) => {
        const strippedColors = [];
        for (const color of gradient.colors) {
          const strippedColor: Color = { name: capitalize(color.name), hex: color.hex };
          strippedColors.push(strippedColor);
        }
        return {
          ...gradient,
          name: capitalize(gradient.name),
          colors: strippedColors,
        };
      });
      dispatch(actions.setList('todaysGradients', gradients));
      await storeObject('todaysGradients', {
        gradients,
        expires: Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + 1, 10),
      });
    }
  } catch (error) {}
};

export const fetchTodaysGradients: Thunk = () => {
  return async (dispatch) => {
    const today = new Date();
    const storedGradients = await getObject<{ gradients: Gradients; expires: number }>(
      'todaysGradients'
    );
    if (storedGradients) {
      if (storedGradients.gradients.length > 0) {
        dispatch(actions.setList('todaysGradients', storedGradients.gradients));
      }
      if (storedGradients.expires <= new Date(today.toUTCString()).getTime()) {
        await pullTodaysGradientsFromFirebase(dispatch, today);
      }
    } else {
      await pullTodaysGradientsFromFirebase(dispatch, today);
    }
  };
};

export const fetchUsersGradientsAndColors: Thunk = (userId?: string) => {
  return async (dispatch) => {
    const savedGradients = await getObject<Gradients>('userGradients');
    const savedColors = await getObject<Colors>('userColors');

    const savedGradientsToAppend: Gradients = [];
    const savedColorsToAppend: Colors = [];

    if (userId) {
      try {
        const payload: ReduxUserGradients = {
          userGradients: [],
          userColors: [],
          createdGradients: [],
        };
        const userData = await Firebase.getDataItem<Users>('users', userId);
        if (userData) {
          if (
            itemsInArray({
              savedGradients: userData.savedGradients || [],
              savedColors: userData.savedColors || [],
            })
          ) {
            if (userData.savedGradients && userData.savedGradients.length > 0) {
              payload.userGradients = payload.userGradients.concat(userData.savedGradients);
            }
            if (userData.savedColors && userData.savedColors.length > 0) {
              payload.userColors = payload.userColors.concat(userData.savedColors);
            }
          }
          if (userData.createdGradients && userData.createdGradients.length > 0) {
            payload.createdGradients = payload.createdGradients.concat(userData.createdGradients);
          }
        }
        if (itemsInArray({ a: savedGradients || [], b: savedColors || [] })) {
          const promises = [];
          if (savedGradients && savedGradients.length > 0) {
            if (userData && userData.savedGradients && userData.savedGradients.length > 0) {
              for (const savedGradient of savedGradients) {
                if (
                  userData.savedGradients.findIndex((item) => item.id === savedGradient.id) === -1
                ) {
                  savedGradientsToAppend.push(savedGradient);
                }
              }
              if (savedGradientsToAppend.length > 0) {
                payload.userGradients = payload.userGradients.concat(savedGradientsToAppend);
                promises.push(
                  Firebase.appendUserData(userId, 'savedGradients', savedGradientsToAppend)
                );
              }
            } else {
              payload.userGradients = payload.userGradients.concat(savedGradients);
              promises.push(Firebase.appendUserData(userId, 'savedGradients', savedGradients));
            }
          }
          if (savedColors && savedColors.length > 0) {
            if (userData && userData.savedColors && userData.savedColors.length > 0) {
              for (const savedColor of savedColors) {
                if (userData.savedColors.findIndex((item) => item.id === savedColor.id) === -1) {
                  savedColorsToAppend.push(savedColor);
                }
              }
              if (savedColorsToAppend.length > 0) {
                payload.userColors = payload.userColors.concat(savedColorsToAppend);
                promises.push(Firebase.appendUserData(userId, 'savedColors', savedColorsToAppend));
              }
            } else {
              payload.userColors = payload.userColors.concat(savedColors);
              promises.push(Firebase.appendUserData(userId, 'savedColors', savedColors));
            }
          }
          Promise.all(promises)
            .then(() => {
              clearItem('userGradients');
              clearItem('userColors');
            })
            .catch((error) => console.log(error));
        }
        if (itemsInArray({ ...payload })) {
          dispatch(actions.setLists(payload));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const payload: ReduxUserGradients = {
        userGradients: [],
        userColors: [],
        createdGradients: [],
      };
      if (savedGradients) {
        payload.userGradients = savedGradients;
      }
      if (savedColors) {
        payload.userColors = savedColors;
      }
      if (itemsInArray({ a: savedGradients || [], b: savedColors || [] })) {
        dispatch(actions.setLists(payload));
      }
    }
  };
};

export const addGradientOrColor = (
  key: 'userGradients' | 'userColors',
  value: Gradient | Color,
  userId?: string
): Dispatch => {
  return async (dispatch) => {
    dispatch(actions.appendList(key, value));
    if (userId) {
      let firebaseKey: 'savedGradients' | 'savedColors' = 'savedColors';
      if (key === 'userGradients') {
        firebaseKey = 'savedGradients';
      }
      try {
        await Firebase.appendUserData<Gradient | Color>(userId, firebaseKey, [value]);
      } catch (error) {
        await appendObject(key, value);
      }
    } else {
      await appendObject(key, value);
    }
  };
};

export const removeGradientOrColor = (
  key: 'userGradients' | 'userColors',
  id: string,
  userId?: string
): Dispatch => {
  return async (dispatch) => {
    dispatch(actions.filterList(key, id));
    if (userId) {
      const newKey = key === 'userGradients' ? 'savedGradients' : 'savedColors';
      await Firebase.removeItemFromUsersArray(userId, newKey, id);
    } else {
      const savedItems = await getObject<Gradients | Colors>(key);
      if (savedItems) {
        try {
          await storeObject(
            key,
            (savedItems as any[]).filter((item) => item.id !== id)
          );
        } catch (error) {}
      }
    }
  };
};

export const createGradient = (userId: string, value: Gradient): Dispatch => {
  return async (dispatch) => {
    if (!userId) {
      throw new Error('Must be a user to create a gradient');
    }
    const gradientToAdd = {
      ...value,
      colors: value.colors.map((color) => {
        return { name: color.name, hex: color.hex };
      }),
    };
    try {
      const id = await Firebase.addGradient(value);
      dispatch(actions.appendList('createdGradients', { ...gradientToAdd, id }));
      await Firebase.appendUserData<Gradient>(userId, 'createdGradients', [
        { ...gradientToAdd, id },
      ]);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteGradient = (userId: string, id: string): Dispatch => {
  return async (dispatch) => {
    if (!userId) {
      throw new Error('Must be a user to delete a gradient');
    }
    try {
      dispatch(actions.filterList('createdGradients', id));
      const res = await Firebase.removeGradient(userId);
      if (res) {
        await Firebase.removeItemFromUsersArray(userId, 'createdGradients', id);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
