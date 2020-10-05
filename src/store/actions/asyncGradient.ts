import Firebase from '@services/firebase/client';
import { Gradients, Colors, Color, Gradient } from '@typeDefs/index';
import { getObject, storeObject, clearItem, appendObject } from '@utils/asyncStorage';
import { capitalize, itemsInArray } from '@utils/helpers';

import * as actions from './index';

type Dispatch = (action: any) => void;

interface Thunk {
  (x?: any): Dispatch;
}

const pullTodaysGradientsFromFirebase = async (dispatch: any, today: Date) => {
  try {
    const newGradients = await Firebase.getDataArray<Gradient>('todaysGradients');
    if (newGradients.length > 0) {
      const gradients = newGradients.map((gradient) => {
        const strippedColors = [];
        for (const color of gradient.colors) {
          const strippedColor: Color = { name: capitalize(color.name), hex: `#${color.hex}` };
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
        const payload: { userGradients: Gradients; userColors: Colors } = {
          userGradients: [],
          userColors: [],
        };
        const userData = await Firebase.getDataItem<{ gradients: Gradients; colors: Colors }>(
          'users',
          userId
        );
        if (userData) {
          if (itemsInArray({ ...userData, id: [] })) {
            if (userData.gradients && userData.gradients.length > 0) {
              payload.userGradients = payload.userGradients.concat(userData.gradients);
            }
            if (userData.colors && userData.colors.length > 0) {
              payload.userColors = payload.userColors.concat(userData.colors);
            }
          }
        }
        if (itemsInArray({ a: savedGradients || [], b: savedColors || [] })) {
          const promises = [];
          if (savedGradients && savedGradients.length > 0) {
            if (userData && userData.gradients.length > 0) {
              for (const savedGradient of savedGradients) {
                if (userData.gradients.findIndex((item) => item.id === savedGradient.id) === -1) {
                  savedGradientsToAppend.push(savedGradient);
                }
              }
              payload.userGradients = payload.userGradients.concat(savedGradientsToAppend);
              promises.push(Firebase.appendUserData(userId, 'gradients', savedGradientsToAppend));
            } else {
              payload.userGradients = payload.userGradients.concat(savedGradients);
              promises.push(Firebase.appendUserData(userId, 'gradients', savedGradients));
            }
          }
          if (savedColors && savedColors.length > 0) {
            if (userData && userData.colors.length > 0) {
              for (const savedColor of savedColors) {
                if (userData.colors.findIndex((item) => item.id === savedColor.id) === -1) {
                  savedColorsToAppend.push(savedColor);
                }
              }
              payload.userColors = payload.userColors.concat(savedColorsToAppend);
              promises.push(Firebase.appendUserData(userId, 'colors', savedColorsToAppend));
            } else {
              payload.userColors = payload.userColors.concat(savedColors);
              promises.push(Firebase.appendUserData(userId, 'colors', savedColors));
            }
          }
          Promise.all(promises)
            .then(() => {
              clearItem('userGradients');
              clearItem('userColors');
            })
            .catch((error) => console.log(error));
        }
        if (itemsInArray(payload)) {
          dispatch(actions.setLists(payload));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const payload: { userGradients: Gradients; userColors: Colors } = {
        userGradients: [],
        userColors: [],
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
      let firebaseKey: 'gradients' | 'colors' = 'colors';
      if (key === 'userGradients') {
        firebaseKey = 'gradients';
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
      const newKey = key === 'userGradients' ? 'gradients' : 'colors';
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
