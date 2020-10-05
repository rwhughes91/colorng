import { Gradients, Colors, Gradient, Color } from '@typeDefs/index';

export enum GradientActionTypes {
  SET_LIST = 'SET_LIST',
  SET_LISTS = 'SET_LISTS',
  APPEND_LIST = 'APPEND_LIST',
  FILTER_LIST = 'FILTER_LIST',
  CLEAR_LISTS = 'CLEAR_LISTS',
}

export type Keys = 'userGradients' | 'userColors' | 'todaysGradients';

interface Action<T, U> {
  type: T;
  payload: U;
}

export type SetListAction = Action<
  GradientActionTypes.SET_LIST,
  { key: Keys; value: Gradients | Colors }
>;

export type SetListsActionCreator = { [key in Keys]?: Gradients | Colors };
export type SetListsAction = Action<GradientActionTypes.SET_LISTS, SetListsActionCreator>;

export type AppendListAction = Action<
  GradientActionTypes.APPEND_LIST,
  { key: Keys; value: Gradient | Color }
>;

export type FilterListAction = Action<GradientActionTypes.FILTER_LIST, { key: Keys; id: string }>;

export type ClearListsAction = { type: GradientActionTypes.CLEAR_LISTS };

export type SystemActionTypes =
  | SetListAction
  | SetListsAction
  | AppendListAction
  | FilterListAction
  | ClearListsAction;
