import { Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  color: string;
  colorStyles?: StyleProp<ViewStyle>;
  fill?: boolean;
  scaleVertical?: boolean;
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
      ]}
    />
  );
};

const styles = StyleSheet.create({
  color: {
    aspectRatio: 1,
    height: Globals.COLOR_SIZE,
  },
});

export default React.memo(Color);
