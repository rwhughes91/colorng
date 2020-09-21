import { Typography } from '@styles/index';
import React from 'react';
import { Text as TextNative, StyleSheet } from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

const Text: React.FC<Props> = (props) => {
  const fontSize = props.size || Typography.FONT_SIZE_16;
  const color = props.color || 'white';
  return <TextNative style={{ ...styles.text, fontSize, color }}>{props.children}</TextNative>;
};

export default React.memo(Text);

const styles = StyleSheet.create({
  text: {
    ...Typography.FONT_REGULAR,
  },
});
