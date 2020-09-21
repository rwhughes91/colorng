import { Typography, Colors } from '@styles/index';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  color?: string;
  size?: number;
}

const CardButton: React.FC<Props> = (props) => {
  const fontSize = props.size || Typography.FONT_SIZE_14;
  const color = props.color || Colors.BLUE;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ ...styles.text, fontSize, color }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Typography.FONT_REGULAR,
  },
});

export default React.memo(CardButton);
