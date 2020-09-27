import * as Constants from '@constants/index';
import { Colors, Globals, Mixins } from '@styles/index';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  colors?: string[];
  top?: number;
  borderRadius?: number;
  height?: number | string;
}

const BackDrop: React.FC<Props> = (props) => {
  return (
    <>
      <LinearGradient
        style={{
          ...styles.backDrop,
          width: props.height || Mixins.backdropHeight(),
          height: props.height || Mixins.backdropHeight(),
          borderRadius:
            props.borderRadius === 0
              ? props.borderRadius
              : props.borderRadius || Mixins.backdropHeight() / 2,
          transform: [
            { translateY: props.top || -Globals.HEADER_TRANSLATE_Y },
            { rotate: '-90deg' },
          ],
        }}
        colors={props.colors ? props.colors : [Colors.ORANGE, Colors.PINK]}
      />
      {props.top && <View style={styles.cover} />}
    </>
  );
};

const styles = StyleSheet.create({
  backDrop: {
    position: 'absolute',
    zIndex: 0,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cover: {
    backgroundColor: 'white',
    width: Constants.DEVICE_WIDTH,
    height: Constants.DEVICE_HEIGHT,
    position: 'absolute',
    zIndex: -1,
    top: '50%',
  },
});

export default React.memo(BackDrop);
