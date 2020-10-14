import * as Constants from '@constants/index';
import { Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  color: string;
  colorStyles?: StyleProp<ViewStyle>;
  fill?: boolean;
  scaleVertical?: boolean;
  round?: boolean;
}

const Color: React.FC<Props> = (props) => {
  return (
    <View
      style={[
        styles.color,
        props.colorStyles,
        {
          backgroundColor: props.color,
          height: props.fill
            ? '100%'
            : props.scaleVertical
            ? Globals.COLOR_SIZE_VERTICAL
            : Globals.COLOR_SIZE,
        },
        {
          borderRadius:
            !props.fill && props.round
              ? Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT
                ? Globals.MAX_COLOR_SIZE / 2
                : Globals.COLOR_SIZE / 2
              : 0,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  color: {
    aspectRatio: 1,
    height: Globals.COLOR_SIZE,
    maxHeight: Globals.MAX_COLOR_SIZE,
    maxWidth: Globals.MAX_COLOR_SIZE,
  },
});

export default React.memo(Color);
