import Header from '@components/layouts/Header/Header';
import React from 'react';
import { Animated } from 'react-native';

interface Props {
  animatedValue: Animated.Value;
  title: { text: string; location: 'above' | 'below'; color?: string };
  description?: string;
}

const AnimatedHeader: React.FC<Props> = (props) => {
  return (
    <Animated.View
      style={{
        opacity: props.animatedValue.interpolate({
          inputRange: [-150, 0, 150],
          outputRange: [1, 1, -1],
          extrapolate: 'clamp',
        }),
      }}
    >
      <Header
        title={props.title}
        description={props.description}
        styles={{ justifyContent: 'center' }}
      />
    </Animated.View>
  );
};

export default React.memo(AnimatedHeader);
