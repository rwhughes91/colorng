import { Typography, Colors, Globals } from '@styles/index';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  textColor?: string;
  textSize?: number;
  buttonColor?: string;
}

const CardButton: React.FC<Props> = (props) => {
  const fontSize = props.textSize || Typography.FONT_SIZE_16;
  const color = props.textColor || 'white';
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: props.buttonColor || Colors.PINK }}
    >
      <Text style={{ ...styles.text, fontSize, color }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Globals.BORDER_RADIUS,
    height: Globals.COMPONENT_HEIGHT,
    width: Globals.COMPONENT_WIDTH,
  },
  text: {
    ...Typography.FONT_REGULAR,
  },
});

export default React.memo(CardButton);
