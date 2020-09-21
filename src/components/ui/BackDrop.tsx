import * as Constants from '@constants/index';
import { Colors, Globals } from '@styles/index';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  colors?: string[];
  top?: number;
}

const backDropSize = Constants.DEVICE_WIDTH;

const BackDrop: React.FC<Props> = (props) => {
  return (
    <LinearGradient
      style={{
        ...styles.backDrop,
        transform: [
          { scaleX: 1.5 },
          { translateY: props.top || Globals.HEADER_TRANSLATE_Y * -1 },
          { rotate: '-90deg' },
        ],
      }}
      colors={props.colors ? props.colors : [Colors.ORANGE, Colors.PINK]}
    />
  );
};

const styles = StyleSheet.create({
  backDrop: {
    width: backDropSize,
    height: backDropSize,
    borderRadius: backDropSize / 2,
    position: 'absolute',
    zIndex: 0,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default React.memo(BackDrop);
