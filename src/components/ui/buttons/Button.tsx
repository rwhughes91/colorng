import HeaderText from '@components/ui/text/HeaderText';
import { Colors, Globals, Typography } from '@styles/index';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

interface Props {
  children: string;
  textColor?: string;
  textSize?: number;
  buttonColor?: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
  loading?: boolean;
}

const CardButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={Globals.ACTIVE_OPACITY}
      style={[
        { ...styles.container, backgroundColor: props.buttonColor || Colors.PINK },
        props.styles,
      ]}
      onPress={props.onPress}
    >
      {!props.loading ? (
        <HeaderText size={props.textSize || Typography.FONT_SIZE_16} color={props.textColor}>
          {props.children}
        </HeaderText>
      ) : (
        <ActivityIndicator animating size="small" color="white" />
      )}
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
