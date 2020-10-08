import * as Constants from '@constants/index';
import { Colors, Globals, Mixins } from '@styles/index';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';

interface Props {
  colors?: string[];
  top?: number;
  borderRadius?: number;
  cover?: boolean;
  height?: number | string;
  animated?: boolean;
  animatedStyles?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  gradientLocations?: number[];
}

const BackDrop: React.FC<Props> = (props) => {
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

  const style = {
    ...styles.backDrop,
    width: props.height || Mixins.backdropHeight(),
    height: props.height || Mixins.backdropHeight(),
    borderRadius:
      props.borderRadius === 0
        ? props.borderRadius
        : props.borderRadius || Mixins.backdropHeight() / 2,
    transform: [
      { translateY: props.top !== undefined ? props.top : -Globals.HEADER_TRANSLATE_Y },
      { rotate: '-90deg' },
    ],
  };

  return !props.animated ? (
    <>
      <LinearGradient
        style={style}
        colors={props.colors ? props.colors : [Colors.ORANGE, Colors.PINK]}
        locations={props.gradientLocations}
      />
      {props.cover !== undefined && props.top !== undefined ? <View style={styles.cover} /> : null}
    </>
  ) : (
    <AnimatedLinearGradient
      style={[style, props.animatedStyles]}
      colors={props.colors ? props.colors : [Colors.ORANGE, Colors.PINK]}
    />
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
