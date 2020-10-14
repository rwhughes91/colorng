import Text from '@components/ui/text/Text';
import { useHeaderHeight } from '@react-navigation/stack';
import ExpoConstants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';

interface Props {
  animatedValue: Animated.Value;
  gradientColors: string[];
  title: string;
}

const AnimatedSecondaryHeader: React.FC<Props> = (props) => {
  const headerHeight = useHeaderHeight();
  return (
    <Animated.View
      style={[
        styles.header,
        {
          opacity: props.animatedValue.interpolate({
            inputRange: [-150, 0, 50, 150],
            outputRange: [0, 0, 0, 1],
            extrapolate: 'clamp',
          }),
        },
      ]}
    >
      <LinearGradient
        style={[styles.header, { height: headerHeight - (Platform.OS === 'android' ? 8 : 0) }]}
        colors={props.gradientColors}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Text>{props.title}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ExpoConstants.statusBarHeight,
  },
});

export default React.memo(AnimatedSecondaryHeader);
