import HeaderText from '@components/ui/text/HeaderText';
import { Colors, Globals, Typography } from '@styles/index';
import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  children: string;
  textColor?: string;
  textSize?: number;
  buttonColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CardButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        { ...styles.container, backgroundColor: props.buttonColor || Colors.PINK },
        props.styles,
      ]}
    >
      <HeaderText size={props.textSize || Typography.FONT_SIZE_16} color={props.textColor}>
        {props.children}
      </HeaderText>
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
});

export default React.memo(CardButton);
