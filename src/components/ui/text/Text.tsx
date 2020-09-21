import { Typography } from '@styles/index';
import React from 'react';
import { Text as TextNative, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface Props {
  children: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
}

const Text: React.FC<Props> = (props) => {
  const fontSize = props.size || Typography.FONT_SIZE_16;
  const color = props.color || 'white';
  return (
    <TextNative style={[{ ...styles.text, fontSize, color }, props.styles]}>
      {props.children}
    </TextNative>
  );
};

export default React.memo(Text);

const styles = StyleSheet.create({
  text: {
    ...Typography.FONT_REGULAR,
  },
});
