import HeartIcon from '@components/icons/HeartIcon';
import PlusIcon from '@components/icons/PlusIcon';
import StarIcon from '@components/icons/StarIcon';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  focused: boolean;
  styles?: StyleProp<ViewStyle>;
  icon?: 'heart' | 'plus' | 'star';
  onPress: () => void;
  disabled?: boolean;
}

const LikeButton: React.FC<Props> = (props) => {
  let icon = <HeartIcon focused={props.focused} size={Globals.BODY_ICON - 5} color={Colors.PINK} />;
  if (props.icon === 'plus') {
    icon = <PlusIcon size={Globals.BODY_ICON} color={Colors.PINK} />;
  }
  if (props.icon === 'star') {
    icon = <StarIcon size={Globals.BODY_ICON} color={Colors.PINK} />;
  }
  return (
    <TouchableOpacity
      style={[styles.button, props.styles]}
      activeOpacity={1}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: moderateScale(70, 0.2),
    height: moderateScale(70, 0.2),
    borderRadius: moderateScale(35, 0.2),
    backgroundColor: Colors.PEACH,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    ...Globals.BOX_SHADOW,
  },
});

export default React.memo(LikeButton);
