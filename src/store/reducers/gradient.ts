import { Gradients, Colors } from '@typeDefs/index';

import { GradientActionTypes, SystemActionTypes } from '../actions/actionTypes';

export interface InitialState {
  userGradients: Gradients;
  userColors: Colors;
  todaysGradients: Gradients;
}

const initialState: InitialState = {
  userGradients: [],
  userColors: [],
  todaysGradients: [],
};

export default (state = initialState, action: SystemActionTypes) => {
  switch (action.type) {
    case GradientActionTypes.SET_LIST:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case GradientActionTypes.SET_LISTS:
      return {
        ...state,
        ...action.payload,
      };
    case GradientActionTypes.APPEND_LIST:
      return {
        ...state,
        [action.payload.key]: [...state[action.payload.key], action.payload.value],
      };
    case GradientActionTypes.FILTER_LIST:
      return {
        ...state,
        [action.payload.key]: (state[action.payload.key] as any[]).filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case GradientActionTypes.CLEAR_LISTS:
      return {
        ...state,
        userGradients: [],
        userColors: [],
      };
    default:
      return state;
  }
};
