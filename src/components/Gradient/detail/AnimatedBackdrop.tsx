import Backdrop from '@components/ui/BackDrop';
import { Globals } from '@styles/index';
import React from 'react';
import { Animated } from 'react-native';

interface Props {
  animatedValue: Animated.Value;
  gradientColors: string[];
}

const AnimatedBackdrop: React.FC<Props> = (props) => {
  return (
    <Backdrop
      colors={props.gradientColors}
      animated
      animatedStyles={{
        transform: [
          {
            translateY: props.animatedValue.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [
                -Globals.BACKDROP_TRANSLATE_SMALL + 1,
                -Globals.BACKDROP_TRANSLATE_SMALL,
                -Globals.BACKDROP_TRANSLATE_SMALL - 1,
              ],
            }),
          },
          { rotate: '-90deg' },
        ],
      }}
    />
  );
};

export default React.memo(AnimatedBackdrop);
