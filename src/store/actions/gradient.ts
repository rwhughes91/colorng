import { Gradients, Colors, Gradient, Color } from '@typeDefs/index';

import {
  GradientActionTypes,
  Keys,
  SetListAction,
  SetListsActionCreator,
  SetListsAction,
  AppendListAction,
  FilterListAction,
  ClearListsAction,
} from './actionTypes';

export const setList = (key: Keys, value: Gradients | Colors): SetListAction => {
  return {
    type: GradientActionTypes.SET_LIST,
    payload: { key, value },
  };
};

export const setLists = (payload: SetListsActionCreator): SetListsAction => {
  return {
    type: GradientActionTypes.SET_LISTS,
    payload,
  };
};

export const appendList = (key: Keys, value: Gradient | Color): AppendListAction => {
  return {
    type: GradientActionTypes.APPEND_LIST,
    payload: { key, value },
  };
};

export const filterList = (key: Keys, id: string): FilterListAction => {
  return {
    type: GradientActionTypes.FILTER_LIST,
    payload: { key, id },
  };
};

export const clearLists = (): ClearListsAction => {
  return {
    type: GradientActionTypes.CLEAR_LISTS,
  };
};
