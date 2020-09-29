import { Props as InputProps } from '@components/ui/inputs/FormInput';
import { useReducer, Dispatch } from 'react';

interface Action {
  type: string;
  key: string;
  value: string;
}

interface Base {
  [key: string]: Pick<InputProps, 'value' | 'placeholder'>;
}

export default function useForm<T>(initialState: T & Base): [T & Base, Dispatch<Action>] {
  const reducer = (state: T & Base, action: Action) => {
    switch (action.type) {
      case 'change': {
        return {
          ...state,
          [action.key]: { ...state[action.key], value: action.value },
        };
      }
      default:
        return state;
    }
  };

  return useReducer(reducer, initialState);
}
