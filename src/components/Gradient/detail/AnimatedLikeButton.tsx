import LikeButton from '@components/ui/buttons/LikeButton';
import { useHeaderHeight } from '@react-navigation/stack';
import { Globals } from '@styles/index';
import React from 'react';
import { Animated, Platform } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  animatedValue: Animated.Value;
  focused: boolean;
  onPress: () => void;
  disabled?: boolean;
  icon?: 'star' | 'heart' | 'plus';
}

const AnimatedLikeButton: React.FC<Props> = (props) => {
  const headerHeight = useHeaderHeight();

  const output =
    (Globals.BUTTON_TOP -
      headerHeight +
      moderateVerticalScale(35, 0.2) +
      (Platform.OS === 'android' ? 8 : 0)) *
    -1;
  return (
    <Animated.View
      style={[
        Globals.LIKE_BUTTON_STYLES,
        {
          transform: [
            {
              translateY: props.animatedValue.interpolate({
                inputRange: [-1, 0, 1, 150, 151],
                outputRange: [1, 0, -1, output, output],
              }),
            },
          ],
        },
      ]}
    >
      <LikeButton
        focused={props.focused}
        onPress={props.onPress}
        disabled={props.disabled}
        icon={props.icon}
      />
    </Animated.View>
  );
};

export default React.memo(AnimatedLikeButton);
