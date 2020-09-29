import { Colors } from '@styles/index';
import React, { memo } from 'react';
import { View, StyleProp, TextInput, ViewStyle } from 'react-native';

import styles from './InputStyles';

export enum inputTypes {
  INPUT = 'input',
  FROZEN_INPUT = 'frozenInput',
}

export interface Props {
  type: inputTypes;
  placeholder: string;
  value: string;
  onChangeText: (x: string) => void;
  onBlur?: () => void;
  onSubmitEditingHandler?: () => void;
  styles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  color?: string;
  secureTextEntry: boolean;
}

const Input: React.FC<Props> = (props) => {
  let inputElement = null;

  const inputStyles = [{ ...styles.searchInput, color: props.color || Colors.BLUE }, props.styles];

  switch (props.type) {
    case inputTypes.FROZEN_INPUT:
      inputElement = (
        <TextInput
          style={inputStyles}
          editable={false}
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
        />
      );
      break;
    default:
      inputElement = (
        <TextInput
          style={inputStyles}
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
        />
      );
  }
  return (
    <View style={[{ ...styles.container, backgroundColor: 'white' }, props.styles]}>
      {inputElement}
    </View>
  );
};

export default memo(Input);
